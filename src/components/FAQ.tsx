import React, { useState } from 'react';
import { FAQ_DATA } from '../data/weddingData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-[#fcf9f8]">
      <div className="max-w-4xl mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[12px] text-[#745a27] font-semibold uppercase tracking-[0.16em]">
            Informasi Penting
          </span>
          <h2
            className="text-[32px] sm:text-[38px] md:text-[42px] text-[#1b1c1c] font-semibold mt-1.5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#514343] mt-2.5 leading-relaxed">
            Jawaban transparan untuk hal-hal yang sering ditanyakan oleh calon pengantin.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3.5">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#ffffff] rounded-2xl border border-[#e4c285]/40 overflow-hidden shadow-xs transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] sm:text-[16px] text-[#1b1c1c] font-semibold pr-2">
                    {item.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#745a27] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-[#514343] text-[14px] leading-relaxed border-t border-[#e4c285]/20 animate-in fade-in duration-200">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
