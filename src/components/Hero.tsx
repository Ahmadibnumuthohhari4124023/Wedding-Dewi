import React from 'react';
import { HERO_IMAGE_URL, CONTACT_INFO } from '../data/weddingData';

interface HeroProps {
  onSelectPackageScroll: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectPackageScroll }) => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Halo%20Dewi%20Wedding84,%20saya%20tertarik%20konsultasi%20pernikahan`;

  return (
    <section
      className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden bg-gradient-to-b from-[#f6f3f2] via-[#fcf9f8] to-[#fcf9f8]"
      id="hero"
    >
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#ffdea4]/40 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-[#c98b8b]/25 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 md:gap-5">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ffffff] shadow-sm text-[#745a27] text-[11px] md:text-[12px] font-semibold uppercase tracking-widest border border-[#e4c285]/50">
              <span className="material-symbols-outlined text-[15px] text-[#745a27]">
                arrow_back_ios_new
              </span>
              <span>Professional Wedding Organizer &amp; Make Up Artist</span>
            </div>

            {/* Headline */}
            <h1
              className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] text-[#1b1c1c] tracking-tight leading-[1.12]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Wujudkan Hari Bahagiamu,{' '}
              <span
                className="italic text-[#845050] font-normal"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Tanpa Stres
              </span>
            </h1>

            {/* Subtitle paragraph */}
            <p className="text-[16px] md:text-[17px] text-[#514343] max-w-xl leading-relaxed">
              Dari sentuhan riasan{' '}
              <span className="text-[#1b1c1c] font-medium">flawless</span> pengantin impian hingga
              orkestrasi pernikahan paripurna. Kami merancang setiap detik momen sakral Anda dengan
              keanggunan, ketenangan, dan kesempurnaan abadi.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onSelectPackageScroll}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#745a27] text-[#ffffff] hover:bg-[#5a4312] transition-all duration-300 shadow-md hover:shadow-lg text-[13px] font-semibold uppercase tracking-wider cursor-pointer active:scale-95"
              >
                <span>Lihat Paket &amp; Harga</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </button>

              <a
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#ffffff] text-[#1b1c1c] hover:text-[#845050] hover:bg-[#f6f3f2] transition-all duration-300 shadow-sm border border-[#e4c285] text-[13px] font-semibold uppercase tracking-wider"
                href={whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px] text-[#25D366]">chat</span>
                <span>Hubungi via WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="w-full grid grid-cols-3 gap-3 pt-6 mt-2 border-t border-[#e4c285]/40">
              <div className="flex flex-col">
                <span
                  className="text-[26px] md:text-[30px] text-[#845050] font-bold"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  500+
                </span>
                <span className="text-[12px] md:text-[13px] text-[#514343]">Pasangan Bahagia</span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-[26px] md:text-[30px] text-[#745a27] font-bold"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  8+ Thn
                </span>
                <span className="text-[12px] md:text-[13px] text-[#514343]">
                  Pengalaman MUA &amp; WO
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-[26px] md:text-[30px] text-[#845050] font-bold"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  4.9/5
                </span>
                <span className="text-[12px] md:text-[13px] text-[#514343]">Rating Kepuasan</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card Column */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Accent Card behind */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-[#ffdea4]/50 -rotate-2 scale-[1.02] -z-10"></div>

              {/* Main Photo Card */}
              <div className="relative bg-[#ffffff] p-2.5 rounded-2xl shadow-xl border border-[#e4c285]/60 overflow-hidden">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#f0eded]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    alt="Close up of an elegant Indonesian bride with radiant glowing natural makeup, warm golden champagne tones, delicate jasmine floral headdress and soft golden sunlight reflection."
                    src={HERO_IMAGE_URL}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#303030]/75 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 text-[#fcf9f8] p-3 rounded-lg backdrop-blur-md bg-[#303030]/40 border border-white/10">
                    <p className="text-[11px] uppercase tracking-widest text-[#ffdea4] font-semibold">
                      Signature Look
                    </p>
                    <p
                      className="text-[20px] md:text-[22px] text-[#ffffff] font-semibold leading-tight mt-0.5"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      Flawless Manglingi Natural
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Certification Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-[#ffffff] p-3.5 sm:p-4 rounded-xl shadow-lg border border-[#e4c285]/70 flex items-center gap-3 max-w-[280px] sm:max-w-xs backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-[#ffdea4] flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[#261900] text-[22px]">
                    verified
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] md:text-[13px] text-[#1b1c1c] font-bold">
                    Tersertifikasi Resmi
                  </span>
                  <span className="text-[11px] md:text-[12px] text-[#514343]">
                    Standar Nasional Pengantin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
