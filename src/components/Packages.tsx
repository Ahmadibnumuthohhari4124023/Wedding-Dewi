import React from 'react';
import { PACKAGES_DATA } from '../data/weddingData';

interface PackagesProps {
  onSelectPackage: (packageKey: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section className="py-16 md:py-24 bg-[#fcf9f8] relative" id="paket">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[12px] text-[#745a27] font-semibold uppercase tracking-[0.16em]">
            Investasi Hari Bahagia
          </span>
          <h2
            className="text-[32px] sm:text-[38px] md:text-[42px] text-[#1b1c1c] font-semibold mt-1.5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Pilihan Paket Bundling
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#514343] mt-2.5 leading-relaxed">
            Kombinasi sempurna MUA dan WO dalam satu naungan terintegrasi untuk efisiensi biaya dan kepraktisan persiapan.
          </p>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2">
          {PACKAGES_DATA.map((pkg) => {
            const isPopular = pkg.popular;
            const isSilver = pkg.id === 'silver';
            const isPlatinum = pkg.id === 'platinum';

            return (
              <div
                key={pkg.id}
                className={`relative bg-[#ffffff] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'shadow-xl border-2 border-[#745a27] lg:-translate-y-4 ring-4 ring-[#ffdea4]/20'
                    : 'shadow-sm border border-[#e4c285]/30 hover:shadow-md'
                }`}
              >
                {/* Popular Ribbon Tag */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#745a27] text-[#ffffff] px-4 py-1 rounded-full text-[11px] uppercase tracking-widest font-semibold shadow-sm whitespace-nowrap">
                    ✦ Paling Populer ✦
                  </div>
                )}

                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[12px] uppercase tracking-widest font-semibold ${
                        isPopular
                          ? 'text-[#745a27]'
                          : isPlatinum
                          ? 'text-[#845050]'
                          : 'text-[#514343]'
                      }`}
                    >
                      {pkg.category}
                    </span>

                    {isPopular && (
                      <span className="material-symbols-outlined text-[#745a27] text-[20px]">
                        stars
                      </span>
                    )}

                    {pkg.badge && !isPopular && (
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                          isPlatinum
                            ? 'bg-[#c98b8b]/20 text-[#845050]'
                            : 'bg-[#f0eded] text-[#514343]'
                        }`}
                      >
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[24px] sm:text-[26px] text-[#1b1c1c] font-semibold"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#514343] mt-1 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="my-6">
                    <span
                      className={`text-[28px] sm:text-[32px] font-bold ${
                        isPopular ? 'text-[#845050]' : 'text-[#1b1c1c]'
                      }`}
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {pkg.price}
                    </span>
                    <span className="text-[12px] md:text-[13px] text-[#514343] block mt-0.5">
                      {pkg.note}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="flex flex-col gap-2.5 pt-4 border-t border-[#e4c285]/30 text-[13px] md:text-[14px]">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[#1b1c1c]">
                        <span
                          className={`material-symbols-outlined text-[17px] mt-0.5 shrink-0 ${
                            isPopular ? 'text-[#745a27]' : 'text-[#745a27]'
                          }`}
                        >
                          {isPopular ? 'check_circle' : 'check'}
                        </span>
                        <span className={feat.highlight ? 'font-semibold text-[#1b1c1c]' : ''}>
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-8 mt-6">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(`bundling-${pkg.id}`)}
                    className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-full transition-all text-[12px] font-semibold uppercase tracking-wider cursor-pointer active:scale-95 ${
                      isPopular
                        ? 'bg-[#745a27] text-white hover:bg-[#5a4312] shadow-md hover:shadow-lg'
                        : isPlatinum
                        ? 'bg-[#845050] text-white hover:bg-[#69393a] shadow-sm'
                        : 'bg-[#f0eded] text-[#1b1c1c] hover:bg-[#eae7e7]'
                    }`}
                  >
                    {pkg.ctaText}
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
