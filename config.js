/**
 * Konfigurasi Supabase - Dewi Wedding84
 * 
 * Silakan ganti SUPABASE_URL dan SUPABASE_ANON_KEY dengan kredensial
 * dari dashboard Supabase Anda:
 * 1. Buka https://supabase.com -> Project Anda
 * 2. Masuk ke Project Settings -> API
 * 3. Salin 'Project URL' dan 'anon' public key
 */

const SUPABASE_CONFIG = {
  // Ganti URL proyek Supabase Anda di sini:
  url: 'https://yuwlqrconomnmvibyrfr.supabase.co',

  // Ganti Anon / Public API Key Supabase Anda di sini:
  anonKey: 'sb_publishable_9FA4YuuwOHZHcrnhLKT5LQ_Prpg7Mgg',

  // Kontak WhatsApp Admin Resmi (Mojokerto):
  whatsappNumber: '62887433352681',
  whatsappDisplay: '0887433352681',
};

// Inisialisasi Supabase Client jika library CDN Supabase tersedia
let supabase = null;

function isSupabaseConfigured() {
  return (
    SUPABASE_CONFIG.url &&
    !SUPABASE_CONFIG.url.includes('YOUR_PROJECT_ID') &&
    SUPABASE_CONFIG.anonKey &&
    !SUPABASE_CONFIG.anonKey.includes('YOUR_SUPABASE_ANON_KEY')
  );
}

function initSupabase() {
  if (typeof window !== 'undefined' && window.supabase && typeof window.supabase.createClient === 'function') {
    if (isSupabaseConfigured()) {
      supabase = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    }
  }
  return supabase;
}

// Coba inisialisasi awal
if (typeof window !== 'undefined') {
  window.SUPABASE_CONFIG = SUPABASE_CONFIG;
  window.isSupabaseConfigured = isSupabaseConfigured;
  window.initSupabase = initSupabase;

  // Event listener jika Supabase CDN dimuat setelah config.js
  window.addEventListener('DOMContentLoaded', () => {
    initSupabase();
  });
}

// Export untuk module environment (opsional/bundler)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUPABASE_CONFIG, isSupabaseConfigured, initSupabase };
}
