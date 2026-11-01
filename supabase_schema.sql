-- ==============================================================================
-- SKEMA DATABASE SUPABASE - DEWI WEDDING84 BRIDAL & DECOR MOJOKERTO
-- ==============================================================================
-- Cara Menjalankan:
-- 1. Buka dashboard Supabase Anda (https://supabase.com/dashboard)
-- 2. Pilih Project Anda -> Klik menu 'SQL Editor' di sidebar kiri
-- 3. Buat 'New query', paste seluruh isi file ini, lalu klik 'Run' (atau Ctrl+Enter)
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 2. TABEL: portfolio (Galeri Foto Rias MUA, Gaun, & Dekorasi Pelaminan)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.portfolio (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL, -- 'Sunda Siger', 'Solo Basahan', 'Muslimah / Barbie Glamour', 'Dekorasi Pelaminan', 'Gaun & Kostum', 'Prewedding'
    image_url TEXT NOT NULL,
    description TEXT,
    views_count INTEGER DEFAULT 0,
    is_published BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 3. TABEL: packages (Katalog Menu & Paket Layanan Pernikahan)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.packages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL, -- 'All-In Lengkap', 'Rias MUA Adat Only', 'Dekorasi Pelaminan Gedung', 'Paket Akad Khidmat Minimalis'
    price NUMERIC(14, 2) NOT NULL,
    dp_percentage NUMERIC(5, 2) DEFAULT 20.00 NOT NULL,
    dp_amount NUMERIC(14, 2) GENERATED ALWAYS AS (price * (dp_percentage / 100)) STORED,
    description TEXT,
    features JSONB DEFAULT '[]'::jsonb NOT NULL,
    is_favorite BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 4. TABEL: bookings (Jadwal Pengantin & Verifikasi Setoran DP 20%)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    bride_name VARCHAR(255) NOT NULL,
    phone_whatsapp VARCHAR(50) NOT NULL,
    wedding_date DATE NOT NULL,
    wedding_location VARCHAR(255) NOT NULL,
    selected_service VARCHAR(255) NOT NULL,
    notes TEXT,
    package_id UUID REFERENCES public.packages(id) ON DELETE SET NULL,
    total_price NUMERIC(14, 2) DEFAULT 0,
    dp_amount NUMERIC(14, 2) DEFAULT 0,
    dp_status VARCHAR(50) DEFAULT 'Menunggu Verifikasi' NOT NULL, -- 'Menunggu Verifikasi', 'DP 20% Terverifikasi', 'Lunas'
    booking_status VARCHAR(50) DEFAULT 'Baru' NOT NULL,          -- 'Baru', 'Terkonfirmasi', 'Selesai', 'Dibatalkan'
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 5. TABEL: testimonials (Ulasan Klien & Tangkapan Layar Chat WhatsApp)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_name VARCHAR(255) NOT NULL,
    event_type VARCHAR(150) DEFAULT 'Pengantin Bahagia',
    location VARCHAR(100) DEFAULT 'Mojokerto',
    highlight_text VARCHAR(255),
    review_text TEXT NOT NULL,
    rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
    chat_screenshot_url TEXT,
    is_verified BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 6. ROW LEVEL SECURITY (RLS) - KEAMANAN DATA
-- ==============================================================================
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- 6.1 Policy Portfolio: Publik bisa membaca foto yang terpublikasi, hanya admin yang bisa kelola
CREATE POLICY "Public can view published portfolio" 
ON public.portfolio FOR SELECT 
USING (is_published = true);

CREATE POLICY "Authenticated admin full access to portfolio" 
ON public.portfolio FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- 6.2 Policy Packages: Publik bisa melihat paket aktif, hanya admin yang bisa kelola
CREATE POLICY "Public can view active packages" 
ON public.packages FOR SELECT 
USING (is_active = true);

CREATE POLICY "Authenticated admin full access to packages" 
ON public.packages FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- 6.3 Policy Bookings: Publik bisa kirim reservasi (INSERT), hanya admin terautentikasi yang bisa melihat nomor WA & mengelola jadwal
CREATE POLICY "Public can submit booking requests" 
ON public.bookings FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated admin full access to bookings" 
ON public.bookings FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- 6.4 Policy Testimonials: Publik bisa melihat testimoni terverifikasi
CREATE POLICY "Public can view verified testimonials" 
ON public.testimonials FOR SELECT 
USING (is_verified = true);

CREATE POLICY "Authenticated admin full access to testimonials" 
ON public.testimonials FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- ==============================================================================
-- 7. STORAGE BUCKET: wedding-images (Untuk upload foto pengantin HD)
-- ==============================================================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('wedding-images', 'wedding-images', true)
ON CONFLICT (id) DO NOTHING;

-- Policy Storage: Publik bisa download gambar, admin bisa upload & delete
CREATE POLICY "Public can view wedding images"
ON storage.objects FOR SELECT
USING (bucket_id = 'wedding-images');

CREATE POLICY "Authenticated admin can upload wedding images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'wedding-images');

CREATE POLICY "Authenticated admin can update & delete wedding images"
ON storage.objects FOR ALL
TO authenticated
USING (bucket_id = 'wedding-images')
WITH CHECK (bucket_id = 'wedding-images');

-- ==============================================================================
-- 8. INITIAL SEED DATA (DATA AWAL DEWI WEDDING84)
-- ==============================================================================

-- 8.1 Seed Paket Pernikahan (3 Paket Utama Sesuai Landing Page)
INSERT INTO public.packages (name, category, price, dp_percentage, description, features, is_favorite, sort_order)
VALUES 
(
    'Paket Emas (Lengkap)',
    'All-In Lengkap',
    17500000.00,
    20.00,
    'Solusi lengkap pesta gedung tanpa repot, termasuk MUA adat berkelas & panggung dekorasi mewah.',
    '[
        "Rias Akad + Resepsi (4 Ganti Busana)",
        "Dekorasi Pelaminan Modern 10-12 Meter",
        "Rias & Busana 4 Orang Tua + 4 Buku Tamu",
        "Melati Segar + Aksesoris Mahkota Pilihan",
        "Tim Fotografer & Dokumentasi Video",
        "Master of Ceremony (MC Akad & Resepsi)",
        "Anoman / Cucuk Lampah Temu Manten"
    ]'::jsonb,
    false,
    1
),
(
    'Paket Silver (Terpopuler)',
    'All-In Lengkap',
    8000000.00,
    20.00,
    'Pilihan utama pernikahan rumahan maupun gedung medium dengan tampilan adat estetis.',
    '[
        "Rias Pengantin Akad + Temu (2 Busana)",
        "Pelaminan Minimalis Elegan 6-8 Meter",
        "Rias & Busana 2 Pasang Ibu & Bapak",
        "Bunga Segar & Rangkaian Janur Pintu",
        "Tim Dokumentasi Foto & Video Liputan",
        "Master of Ceremony (MC Resepsi)"
    ]'::jsonb,
    true,
    2
),
(
    'Paket Minimalis A',
    'Paket Akad Khidmat Minimalis',
    3500000.00,
    20.00,
    'Sangat cocok untuk prosesi akad nikah khidmat di KUA atau masjid dengan look flawless awet.',
    '[
        "Rias Akad Nikah (Lead Art Dewi Ratnasari)",
        "1 Pasang Busana Pengantin Premium",
        "Ronce Melati Asli & Henna Putih Halus",
        "Aksesoris Adat / Hijab Glamour"
    ]'::jsonb,
    false,
    3
)
ON CONFLICT DO NOTHING;

-- 8.2 Seed Portofolio Foto Awal
INSERT INTO public.portfolio (title, category, image_url, description, views_count, sort_order)
VALUES
(
    'Sunda Siger Mahkota',
    'Sunda Siger',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDrwoToYzN_Nv8kJ2rqaBDnkYHNVvjfAsF0dSa5LvGNlK6LzoqwgR4AVzX7hi5p7NsCwTMTd5fxOR4a-zyFf4L1ancVe_-cpUgF3wFeYBbXkyDT_5lbTth_s9Yqb3QCsRt0b91qvZYxmR4EfCRm31E7I4jmRJQcPJwrNMrr6COHio1oC1A0CixbSNESk4Z0NzpFPTQTyiKTodTYiyeiq5yWIKQB2w76mR_oG9fE8qIoPD-Bm_RAY985',
    'Lookbook MUA Best Seller • Melati Asli',
    4800,
    1
),
(
    'Modifikasi Solo Basahan',
    'Solo Basahan',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAAI-FFQJT46vPVoSFPqfWLdhxZAFVzApO5XWnKa7RZxWSRTCFtk3Y8wQiuEXpeMjGNoUppaH1YfUzfNOfxUzmy82tSWpn-WsNQI-ETYSma6GcOR19kJ4w03DO6Tl2u-9_ZzlCrMybFMwI8GkbhS6XyLeeNciHuS2XfiKY_iEdIJ2kh5lsqEDP4Ba-SB8kRp8GWl6G8YM-00Fr6JvUDcvSn8ldW8Q2RYJRUJFJMpQLTQPMa55Fy5rsI',
    'Cunduk Mentul & Paes Halus Tradisional',
    3200,
    2
),
(
    'Pelaminan Luxury White 10m',
    'Dekorasi Pelaminan',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDAKWFybctlsRlB3pBdfZc660YV3W4wjBaSnyrPqQ6TifHl8HSUvWRHqRzxO5pLava0t_h6BcHf3nhyReAhAuvQCJWZ8RX7tGtCrdXtg5wkZsOmqEWCqmo602m8iIblT6wUjMtE5oedlqKE17YNOQJSIYe9R4CDI7te5xvYZ74WIDtlMQCPAazma0HZrDqCm7CeLEKVSiGPa8Pvtj4WWSkpMlP5IAZSXFN-A8BeNX0RsQn8IzJKRN06',
    'Bunga Segar, Gebyok Modern & Lighting',
    5100,
    3
),
(
    'Kebaya Beludru Royal Ungu',
    'Gaun & Kostum',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAE1aZXL_iLTdoVV_jmnpZKP7Wox9Z79ZYCD9VXt8gOQAJOb_ixqZAHx16nLWRUxoRnJ1gPnylTqh2YMH0SfQwK3q1_vwNj8hzDARA8ywC0CfrPhdVAvcv0i3t0VXv__VGbCAAySFu7opDj2CY-v5eWmpJmGhyDERcCwkoT7Q35RuFODJpHxJM_ygWOnJhgVig_5VDISNt4N4LSkUJsQ-wQfPH03F4zbKCRjyb307kW4VMz70tdmSbn',
    'Bordir Payet Emas & Beskap Senada',
    2900,
    4
)
ON CONFLICT DO NOTHING;

-- 8.3 Seed Jadwal Booking Contoh Awal
INSERT INTO public.bookings (bride_name, phone_whatsapp, wedding_date, wedding_location, selected_service, total_price, dp_amount, dp_status, booking_status)
VALUES
(
    'Rina & Dedi',
    '6281234567890',
    CURRENT_DATE + INTERVAL '14 day',
    'Gedung Astoria, Mojokerto',
    'Paket Emas (Lengkap) - Rp 17.500.000',
    17500000.00,
    3500000.00,
    'DP 20% Terverifikasi',
    'Terkonfirmasi'
),
(
    'Siti & Rizki',
    '6289876543210',
    CURRENT_DATE + INTERVAL '21 day',
    'Kediaman Mempelai, Trowulan',
    'Paket Silver (Terpopuler) - Rp 8.000.000',
    8000000.00,
    1600000.00,
    'Menunggu Verifikasi',
    'Baru'
)
ON CONFLICT DO NOTHING;

-- Selesai
