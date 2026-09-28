import React from 'react';
import { TESTIMONIALS_DATA } from '../data/weddingData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f6f3f2]" id="testimoni">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[12px] text-[#745a27] font-semibold uppercase tracking-[0.16em]">
            Cerita Bahagia
          </span>
          <h2
            className="text-[32px] sm:text-[38px] md:text-[42px] text-[#1b1c1c] font-semibold mt-1.5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Kata Mereka yang Telah Menikah
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#514343] mt-2.5 leading-relaxed">
            Kepuasan dan kebahagiaan para pasangan adalah kehormatan tertinggi bagi tim Dewi Wedding84.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-[#ffffff] p-6 sm:p-8 rounded-2xl shadow-sm border border-[#e4c285]/30 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* 5 Filled Stars */}
                <div className="flex items-center gap-1 text-[#745a27] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[14px] md:text-[15px] text-[#1b1c1c] italic leading-relaxed">
                  {item.quote}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-5 mt-6 border-t border-[#e4c285]/30 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#f0eded] shrink-0 border border-[#e4c285]/40 shadow-xs">
                  <img
                    className="w-full h-full object-cover"
                    alt={item.couple}
                    src={item.avatar}
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-[16px] font-semibold text-[#1b1c1c] leading-tight">
                    {item.couple}
                  </h4>
                  <p className="text-[12px] md:text-[13px] text-[#514343] mt-0.5">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
