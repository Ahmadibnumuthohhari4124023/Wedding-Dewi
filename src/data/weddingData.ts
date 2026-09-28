import { ServiceItem, PackageItem, PortfolioItem, TestimonialItem, FAQItem } from '../types';

export const LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1XpRFPAGKdXFQEugswVJJ2jJBBmOI0Ogz7HcRralIOxILmVPm9NO6-_xfbm4epsJsTHNcz8jOi-2uuCFSQT5vMuKF2LbRj6qpBQRoYfQyYmjx9MOIyIPsMiIvvVg0k23rfccKwkQiTxpF1_3I1FRc-YBCaEsO35zn_wDa88BkTYJIYNo1sr4WdmNIov77ei5zYimdY6GP9oS1uixjqtLAM03gu4ecGo0CcsF02ec02AL2t_lJBDcAwFW0M';

export const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAwlAypxaUqhynIYNg1QLQjV-OHAGcvMkatpkJOFdQqFRIcmgGKxcIN0RVbaAjSqr6d1Pp_CPR7-9Sfnn9GRD812yUrlAAs9FpQhAbk_QmBv2m_48s9pEHR_Hbi9bDyGeiJYkPM1UspfPyhpLHq6Tf_Q0P_6IJt1KhIMpmgnhiVsDtTy5CNxatbqWlJ437EjhwT0f71C8_kLUz2CyrvdogQpb-eI1iJG16beF11VTI_-2PpLaU5Ev5i';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'mua',
    category: 'Artistry & Beauty',
    title: 'Make Up Pengantin (MUA)',
    subtitle: 'Riasan Flawless & Anggun',
    description:
      'Riasan flawless, tahan lama, dan menonjolkan kecantikan alami Anda di hari paling istimewa tanpa mengubah karakter wajah.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIOrUfweKYEx7kyJNPwC3QY61w3I_w5-9uQBm0Mq6GIalzLkeuXBDj5O8NoCZgFqXRKBTp6Vjy4RZdEK9c_aVIqKjDpOqvHAC-ugQGvHM98ZLVjQWoKGx4jWHgdfkpoHC67AelAD1Bza54cIURxDk0aNmOnqH4s7BbMJw8fa4LAU2I5NnH3mfXkqBu31oXnxgPJKS7khuZ16ZZyu0s1GNVqsSS3qfdgOfrlREzLZCLxGmvegxNom44',
    imageAlt:
      'Indonesian bridal makeup artistry kit with luxury cosmetic brushes, eyeshadow palette in rose gold tones, and an elegant bride being prepped with fine detailing.',
    features: [
      'Akad Nikah Flawless Glam',
      'Resepsi Luxury Elegance (Retouch Cepat)',
      'Pre-Wedding Photoshoot Look',
      'Rias Ibu & Keluarga Inti',
      'Special Hijab Do & Traditional Hair Styling',
    ],
    startingPrice: 'Rp 3.500.000',
    actionText: 'Konsultasi MUA',
    packageKey: 'mua-only',
    accentColor: 'primary',
  },
  {
    id: 'wo',
    category: 'Coordination & Peace of Mind',
    title: 'Wedding Organizer (WO)',
    subtitle: 'Manajemen Acara Paripurna',
    description:
      'Manajemen dan koordinasi pernikahan holistik agar Anda dan keluarga menikmati setiap momen tanpa cemas ataupun kepanikan.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDa33VyiAyLbc0cUfQjjuHF06U0Q9UXefK08yOgVUT-31vfFwNnYcj0-xU85wsljIx_s9KWjEmTiCtDYLr8FXUqo-m4fx8Q2ioNUUPy_6UjPvEMkNs5hQgEvIscxxPTSCSIk-93v-IPVr8cl3PgT5TzK0NBNN2MTUeVuP9YDosdHTv7N_rgrOvX8kFHscA0dUgaoovDMy9pMVQfrJsmzHyiwplXanu1zc4A6M86D4OL8luodvyE7CzB',
    imageAlt:
      'Wedding organizer team briefing at a grand luxury ballroom venue with clipboard, communication headsets, and floral banquet tables in warm ambient lighting.',
    features: [
      'Full Planning & Concepting Tematik',
      'Partial Planning Support & Problem Solving',
      'Day-Of Wedding Coordinator (Pawang Acara)',
      'Vendor Management & Kurasi Ketat',
      'Rundown Detil & Technical Meeting Vendor',
    ],
    startingPrice: 'Rp 7.500.000',
    actionText: 'Konsultasi WO',
    packageKey: 'wo-only',
    accentColor: 'secondary',
  },
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'silver',
    category: 'Intimate / Akad',
    badge: 'Hemat',
    name: 'Paket Silver',
    description: 'Ideal untuk pernikahan intim, akad nikah, atau syukuran keluarga terdekat.',
    price: 'Rp 12.500.000',
    note: 'Nett perkiraan all-in',
    features: [
      { text: 'MUA Akad Pengantin & Retouch 1 Kali' },
      { text: 'Make Up & Hijab/Hair Do untuk 2 Ibu' },
      { text: 'Tim WO Day-of Coordination (4 Personel Lengkap HT)' },
      { text: 'Penyusunan Rundown & Konsultasi 1 Bulan Sebelum' },
      { text: 'Standby Checklist & Briefing Keluarga' },
    ],
    ctaText: 'Pilih Paket Silver',
  },
  {
    id: 'gold',
    category: 'Best Value',
    popular: true,
    name: 'Paket Gold',
    description: 'Solusi komprehensif terlengkap untuk rangkaian Akad hingga Resepsi akbar.',
    price: 'Rp 24.900.000',
    note: 'Paket lengkap MUA & Full WO',
    features: [
      { text: 'MUA Akad & Resepsi Pengantin (2 Look Berbeda)', highlight: true },
      { text: 'Make Up 2 Ibu Pengantin & 2 Besan' },
      { text: 'Hair Do/Hijab Do Pengantin & Keluarga Inti' },
      { text: 'Full Wedding Organizer (6-8 Personel Tim Lapangan)', highlight: true },
      { text: 'Buku Panduan Acara & Technical Meeting Vendor' },
      { text: 'Free Wedding Concierge & Emergency Kit Pengantin', highlight: true },
    ],
    ctaText: 'Pilih Paket Gold',
  },
  {
    id: 'platinum',
    category: 'Luxury Royal',
    badge: 'VIP',
    name: 'Paket Platinum',
    description: 'Layanan privat eksklusif bagi pengantin yang menginginkan kemewahan tanpa kompromi.',
    price: 'Rp 42.000.000',
    note: 'Exclusive VIP Experience',
    features: [
      { text: 'Exclusive MUA by Founder Dewi Wedding84 Langsung', highlight: true },
      { text: 'Rias Prewedding Look + Make Up 4 Anggota Keluarga' },
      { text: 'Tim Full WO Holistik (10-12 Personel Lengkap HT)', highlight: true },
      { text: 'Vendor Matching, Kurasi & Full Budgeting Assistant' },
      { text: 'VIP Guest Coordinator & Live Protocol Monitoring' },
      { text: 'Free Souvenir Bridesmaid Kit Eksklusif (10 Box)', highlight: true },
    ],
    ctaText: 'Pilih Paket Platinum',
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: '1',
    couple: 'Anindya & Reza',
    title: 'Akad Tradisional Sunda Siger',
    location: 'Bandung, Jawa Barat',
    category: ['makeup', 'akad'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDmZA0WvkRMMEwto_gxUO_sqiKtjVdQmPSvMCagNrykflacIDGhNebhPHvMZh2AVapF0RGyjY9tHU-wnpK3yq5VNUrGMcMrrSUWrpjXqkQ7KnmE6O48PqoghNi77lNct_Lj5H20_QxeYMOcqE_5Ty1O_HcXwYubFRHU2CQVFJOodZI5U3S9Mrl-V7QUdC00YRkSVVsfqFUs6YDaanBIsAjSSw8Ee84p0I-uR1bUM-m-IX_yidupV5sN',
    imageAlt:
      'Traditional Sundanese bride wearing intricate silver and gold Siger crown, pristine white kebaya with jasmine garlands, radiant natural makeup smile.',
    story:
      'Akad pernikahan penuh khidmat dengan riasan Sunda Siger modern. Penataan ronce melati segar dipadukan dengan teknik complexion tahan kilap 14 jam.',
  },
  {
    id: '2',
    couple: 'Clara & Kevin',
    title: 'Modern Glasshouse Botanical Reception',
    location: 'Jakarta Selatan',
    category: ['dekorasi', 'resepsi'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDjp-pcrOaSZti0ZXppv3eagIt4GWQhGfWKqHjAhD3dh7fW3S1jjbuQoX0G10ngJxl2JlWaL-sNI89ZnhOZM9u21OJF-Yt6XFnTKnKGE599pk2cHJY44raUakNf9__S3EtUfJ8OtMtOCDgjSfytVYZ_Tt20FyLdfESlczPe3kdMDrtoTiiid_qTA8oKuOlg_nC5eVuwNSapDbPXc-kca7WeLwqH8qIBLOH_bG_apklIR4crELJAj7qS',
    imageAlt:
      'Modern botanical glasshouse wedding reception hall filled with hanging fairy lights, lush blush roses, eucalyptus greenery, and long candlelit wooden tables.',
    story:
      'Konsep botanical intimate di venue kaca transparan dengan penataan 350 tamu undangan terorganisir penuh keceriaan.',
  },
  {
    id: '3',
    couple: 'Siti & Dimas',
    title: 'Flawless Natural Glow Hijab Bride',
    location: 'Tangerang Selatan',
    category: ['makeup'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-o5e-SLdKgPs_tkSOrSyQATeAzxwpjYkYyuhDUALqUCBOT_Cv6Y1AeSrmAR9ApE66FHqFPieb3E88DKo0jkRXyyPXGuC6PPPDPB7dF6HPb5aEhWn8lVGDy6Kuk4oN1W_bxJSYMgTe1066MI-cPZpA13UMAlAL9GoTDxik2u-rTUObF_Ca31shG8CQKLQm7bYgOUIK0a0qdbvhb8dINSVVzoZXz2YyueyhwI5WmX0wJPORB-jTaDgy',
    imageAlt:
      'Close up portrait of an elegant Indonesian Muslim bride wearing crystal embellished satin veil with soft pink nude glossy lips and flawless skin complexion.',
    story:
      'Riasan pengantin muslimah elegan bernuansa peachy nude, menonjolkan kecantikan mata tanpa bulu mata yang terlalu berat.',
  },
  {
    id: '4',
    couple: 'Nadira & Farhan',
    title: 'Grand Ballroom Luxury Gold Heritage',
    location: 'Jakarta Pusat',
    category: ['resepsi', 'dekorasi'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbx6zC_vGj5p6cuG3pokFhuQOdSB3DgSeieRROoOZTzun-aLjhytoZe79ibOPCADkuansCCQ0N01d2bv3E4Qd76B_2BauFaTpz-lJKIX1yeYAEioyqi8awcP5kqLFnIEI1JQmlKYXbxRZr83GXxwuknU5KAF75zKCZbFslORscLmIfTGNvkNSps7hnswugyC676CiByPHVoZ0RslaQIl6PMsl6wU7PYP1P6OCcxV-0TEibXlpIIWGF',
    imageAlt:
      'Grand luxury ballroom wedding stage with royal Javanese Gebyok backdrop painted in champagne gold, surrounded by cascading pastel floral arrangements and crystal chandeliers.',
    story:
      'Perayaan mewah adat Jawa dengan gebyok ukir modern champagne gold, menampung 1.200 tamu dengan koordinasi protokoler ketat.',
  },
  {
    id: '5',
    couple: 'Putri & Arga',
    title: 'Intimate Garden Akad Nikah',
    location: 'Bogor, Jawa Barat',
    category: ['akad'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4O5nF1dDE_BBMbiWYAsv2lVXIoPG2hVg3xMYR_ph3Yz2eHC2_GcC_tJotd0w-aUm0iqMWpB5JWjNuKf-cUiwFYdwPjXSNgdzPW5utAmqI3h4clChKkPDG8fPDjMovPQBQujKIReJzlU7jnP1w4yPoXhvnaYSdkxUr93gl39oi-1-XaxGeyiwd-bFmA2nV92FAK9XxQCnB-jG5jFD_iy2MDDEBfh9aNnVh8KSyQhwfMOmM7Rnv-UYU',
    imageAlt:
      'Intimate outdoor garden akad ceremony setting with wooden pergola, draped ivory chiffon fabric, delicate white flower installations, and green lawn view.',
    story:
      'Suasana sejuk pegunungan dengan dekorasi pergola kayu alami, kain sifon gading lembut, dan prosesi ijab kabul yang begitu menyentuh.',
  },
  {
    id: '6',
    couple: 'Tiara & Jonathan',
    title: 'Romantic Sunset Pre-Wedding Portrait',
    location: 'Bali, Indonesia',
    category: ['makeup'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDp6Z1Epd7OhVL3bv2_08R7Is3Yy20EoTxKkeVH0HC3g_Xi9esK28UrG6dNinmJ5eWweLkkqIKrDNT1OdzOrXNKUWhlG4YlJ09EMaXzhMnJXWwx_1IbRqTZnxLSpXXnMUHMJQmRxzcTGLAMmEkCws2ywvzTgZR5EwwHnnm1fEOagHbjam6XzN7RUw_CHzPKkcje7P6E47lIPi50ez1uN9mRB8klZ4lONeAx9k4iTR2DT4EEQ6P963jL',
    imageAlt:
      'Romantic pre-wedding portrait during golden hour sunset on a tranquil coastal cliff, bride in flowing dusty rose gown with natural bronzed bridal makeup.',
    story:
      'Sesi pemotretan prewedding di tebing pantai pulau dewata. Konsep makeup golden hour glow yang tahan terpaan angin pantai.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'sarah-danang',
    couple: 'Sarah & Danang',
    location: 'Jakarta Selatan',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCpOGDRUQWTYpbGmWgeIR4X_q7AOaqwMlrtD7SZf3VZpCErsdGXc8cV8sr6KiqFXVtCqo8xt4CWd9gVoQOZDR7UBZlQCpAO4aNoN7lMbuQqSP4NUeNUVQGKvQS_cfNGJgQLzIMWXdM4-JowBnIhW3YNqYoGEFCDOJxf5oRQrWFF2bvSFk0y_vIYP8v8eIi8D9wzGqrvBShOFpdDxcJikYBYh-cZep73XU8uxoxrUzJhouS4OH1ntkj',
    rating: 5,
    quote:
      '“Kak Dewi dan tim WO-nya bener-bener penyelamat hari pernikahan kami! Make up-nya awet dari subuh sampai malam tanpa cakey sama sekali. Rundown acara berjalan sangat rapi tanpa bikin capek.”',
  },
  {
    id: 'dr-amanda-fikri',
    couple: 'dr. Amanda & Fikri',
    location: 'Tangerang',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ8x-39xd6jirsPuqvJuKD1MpyhLTpoonOrx9kWtU7XgSO5aBGiAGpT9lal6fwOQa6iBuzbHgWSpUvOWXX24iDGh2wxci2ar_-AKYfSZ6_Y2NhxaP0hDK3-T5c_BBo1zGDwcmj-wmsEDV0cqZ7N35xkgKqDydGys1I7tYIs6O5UJk6GDXPOITXlv7PfSnaCi_4FHn219ky67BpL-YNXXsbXPHRz47Eu0lXtjYJoOHxZHTP4gfZjxvo',
    rating: 5,
    quote:
      '“Sebagai orang yang gampang panik, punya tim WO Dewi Wedding84 adalah keputusan terbaik sepanjang persiapan nikah. Keluarga besar semua memuji betapa ramah dan sigapnya kru di lapangan.”',
  },
  {
    id: 'bella-rizky',
    couple: 'Bella & Rizky',
    location: 'Bekasi',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCR_Hhotemtbnj8DzE6V7Apj6xMjzU24ztV5vhRkjU0mUNKAVpkLbb-pV__YHRSlBOvNT5l6NKYgS1AquUk-JpjCnaemiKWVfPgWX349OgSZuupCL-AvR41dCdyGUc3-1iXtWitN75afhPHNNhoix74f_Z5-zR49F920nDSvPIExHkLoS1K6Pzg_OIyHs9D_d8YxNY7nKZ-A0hwYT1-xI_7hNQLA-dkxfiW1NVe1anEjiimi6ii2-yi',
    rating: 5,
    quote:
      '“Hasil riasannya manglingi tapi tetap anggun dan natural, gak medok berlebihan. Semua detail dekorasi dan komunikasi vendor dikoordinasikan tanpa ada miss satu pun. Terima kasih Dewi Wedding84!”',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Kapan waktu ideal untuk melakukan booking layanan MUA atau WO?',
    answer:
      'Kami menyarankan booking 3 hingga 6 bulan sebelum hari H untuk memastikan ketersediaan tanggal, terutama pada tanggal-tanggal cantik atau akhir pekan di musim pernikahan.',
  },
  {
    id: 'faq-2',
    question: 'Apakah saya bisa memesan layanan MUA saja atau WO saja secara terpisah?',
    answer:
      'Tentu saja! Anda dapat mengambil paket tunggal MUA Pengantin atau Wedding Organizer saja, maupun paket bundling terpadu yang dirancang lebih hemat dan praktis.',
  },
  {
    id: 'faq-3',
    question: 'Bagaimana jika acara pernikahan diadakan di luar wilayah Jabodetabek?',
    answer:
      'Kami melayani acara di seluruh kota di Indonesia bahkan luar negeri. Biaya akomodasi, tiket transportasi tim, dan logistik akan disesuaikan secara transparan tanpa markup berlebihan.',
  },
  {
    id: 'faq-4',
    question: 'Apakah ada sesi Trial Make Up sebelum hari pernikahan?',
    answer:
      'Ya, untuk Paket Gold dan Platinum, sesi Trial Make Up & Hijab/Hair styling sudah termasuk dalam fasilitas paket. Untuk Paket Silver, sesi trial dapat ditambahkan dengan biaya terjangkau.',
  },
  {
    id: 'faq-5',
    question: 'Bagaimana skema pembayaran dan terminnya?',
    answer:
      'Pembayaran dibagi menjadi 3 tahap yang memudahkan: Booking fee 30% untuk mengunci tanggal, termin kedua 40% setelah technical meeting vendor utama, dan pelunasan sisa 30% pada H-7 sebelum hari acara.',
  },
];

export const CONTACT_INFO = {
  phoneDisplay: '+62 812-8484-8484',
  whatsappNumber: '6281284848484',
  email: 'info@dewiwedding84.com',
  address: 'Studio Dewi Wedding84, Jakarta Selatan, Jabodetabek, Indonesia',
  operatingHours: 'Senin - Minggu: 09.00 - 18.00 WIB (Dengan Janji Temu)',
  instagram: '@dewiwedding84',
  instagramUrl: 'https://instagram.com/dewiwedding84',
  tiktokUrl: 'https://tiktok.com/@dewiwedding84',
};
