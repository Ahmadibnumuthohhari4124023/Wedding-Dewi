import React from 'react';
import { LOGO_URL, CONTACT_INFO } from '../data/weddingData';

export const Footer: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#303030] text-[#f3f0f0] pt-16 pb-12 border-t border-[#847373]/30">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#847373]/30">
          {/* Brand info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Dewi Wedding84 Logo"
                className="h-8 w-auto object-contain brightness-125"
                src={LOGO_URL}
              />
              <span
                className="text-[22px] text-[#fcf9f8] tracking-tight leading-none font-semibold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Dewi Wedding84
              </span>
            </div>

            <p className="text-[14px] text-[#f3f0f0]/80 max-w-sm leading-relaxed">
              Mewujudkan pesta pernikahan impian dengan dedikasi penuh dan keanggunan abadi. Solusi terpercaya wedding planner dan bridal styling mewah.
            </p>

            <div className="flex items-center gap-2 pt-2 text-[13px]">
              <span className="uppercase tracking-widest text-[#e4c285] font-semibold text-[11px]">
                Follow Us:
              </span>
              <a
                className="text-[#f3f0f0] hover:text-[#ffdea4] transition-colors font-medium"
                href={CONTACT_INFO.instagramUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                @dewiwedding84 (IG)
              </a>
              <span className="text-[#847373]">•</span>
              <a
                className="text-[#f3f0f0] hover:text-[#ffdea4] transition-colors font-medium"
                href={CONTACT_INFO.tiktokUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4
              className="text-[18px] text-[#ffdea4] font-semibold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Navigasi Cepat
            </h4>
            <ul className="flex flex-col gap-2.5 text-[14px] text-[#f3f0f0]/80">
              <li>
                <a
                  className="hover:text-[#ffdea4] transition-colors"
                  href="#hero"
                  onClick={(e) => handleScrollTo(e, 'hero')}
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#ffdea4] transition-colors"
                  href="#layanan"
                  onClick={(e) => handleScrollTo(e, 'layanan')}
                >
                  Layanan &amp; MUA
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#ffdea4] transition-colors"
                  href="#paket"
                  onClick={(e) => handleScrollTo(e, 'paket')}
                >
                  Pilihan Paket
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#ffdea4] transition-colors"
                  href="#portofolio"
                  onClick={(e) => handleScrollTo(e, 'portofolio')}
                >
                  Galeri Portofolio
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#ffdea4] transition-colors"
                  href="#testimoni"
                  onClick={(e) => handleScrollTo(e, 'testimoni')}
                >
                  Cerita Bahagia
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#ffdea4] transition-colors"
                  href="#booking"
                  onClick={(e) => handleScrollTo(e, 'booking')}
                >
                  Reservasi Jadwal
                </a>
              </li>
            </ul>
          </div>

          {/* Studio & Contact */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h4
              className="text-[18px] text-[#ffdea4] font-semibold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Studio &amp; Kontak
            </h4>
            <div className="flex flex-col gap-3 text-[14px] text-[#f3f0f0]/80">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#e4c285] text-[20px] mt-0.5 shrink-0">
                  location_on
                </span>
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#e4c285] text-[20px] shrink-0">
                  call
                </span>
                <a
                  className="hover:text-[#ffdea4] transition-colors font-medium"
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#e4c285] text-[20px] shrink-0">
                  mail
                </span>
                <a
                  className="hover:text-[#ffdea4] transition-colors"
                  href={`mailto:${CONTACT_INFO.email}`}
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#e4c285] text-[20px] shrink-0">
                  schedule
                </span>
                <span>{CONTACT_INFO.operatingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[13px] text-[#f3f0f0]/60">
          <p>© 2025 Dewi Wedding84. All rights reserved. Crafted for timeless elegance.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-[#ffdea4] transition-colors" href="#hero">
              Kebijakan Privasi
            </a>
            <a className="hover:text-[#ffdea4] transition-colors" href="#hero">
              Syarat &amp; Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
