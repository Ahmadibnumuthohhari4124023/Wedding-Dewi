import React from 'react';
import { SERVICES_DATA } from '../data/weddingData';

interface ServicesProps {
  onSelectService: (serviceKey: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section className="py-16 md:py-24 bg-[#fcf9f8]" id="layanan">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[12px] text-[#745a27] font-semibold uppercase tracking-[0.16em]">
            Keahlian &amp; Dedikasi
          </span>
          <h2
            className="text-[32px] sm:text-[38px] md:text-[42px] text-[#1b1c1c] font-semibold mt-1.5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Layanan Utama Kami
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#514343] mt-2.5 leading-relaxed">
            Dua pilar esensial untuk pernikahan sempurna yang berjalan teratur sekaligus menawan di setiap jepretan kamera.
          </p>
        </div>

        {/* 2 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_DATA.map((service) => {
            const isMUA = service.id === 'mua';
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between bg-[#ffffff] rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 border border-[#e4c285]/40 relative overflow-hidden group"
              >
                {/* Decorative corner accent */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110 ${
                    isMUA ? 'bg-[#c98b8b]/15' : 'bg-[#fedb9b]/25'
                  }`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${
                      isMUA
                        ? 'bg-[#845050]/10 text-[#845050]'
                        : 'bg-[#745a27]/10 text-[#745a27]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[30px]">
                      {isMUA ? 'brush' : 'event_available'}
                    </span>
                  </div>

                  {/* Eyebrow & Title */}
                  <span
                    className={`text-[12px] uppercase tracking-widest font-semibold ${
                      isMUA ? 'text-[#845050]' : 'text-[#745a27]'
                    }`}
                  >
                    {service.category}
                  </span>
                  <h3
                    className="text-[24px] sm:text-[28px] text-[#1b1c1c] font-semibold mt-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#514343] mt-2.5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Image showcase */}
                  <div className="mt-6 aspect-[16/9] rounded-xl overflow-hidden bg-[#f0eded]">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={service.imageAlt}
                      src={service.image}
                      loading="lazy"
                    />
                  </div>

                  {/* Feature Checklist */}
                  <ul className="flex flex-col gap-2.5 mt-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-[14px] md:text-[15px] text-[#1b1c1c]"
                      >
                        <span className="material-symbols-outlined text-[#745a27] text-[18px] shrink-0">
                          check_circle
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Price & Button */}
                <div className="pt-6 mt-8 border-t border-[#e4c285]/30 flex items-center justify-between gap-4 relative z-10">
                  <div>
                    <span className="text-[12px] text-[#514343] block">Mulai dari</span>
                    <span
                      className={`text-[22px] sm:text-[24px] font-bold ${
                        isMUA ? 'text-[#845050]' : 'text-[#745a27]'
                      }`}
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {service.startingPrice}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectService(service.packageKey)}
                    className={`px-5 py-2.5 rounded-full text-white transition-all text-[12px] font-semibold uppercase tracking-wider text-center cursor-pointer shadow-sm hover:shadow active:scale-95 ${
                      isMUA
                        ? 'bg-[#845050] hover:bg-[#69393a]'
                        : 'bg-[#745a27] hover:bg-[#5a4312]'
                    }`}
                  >
                    {service.actionText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
