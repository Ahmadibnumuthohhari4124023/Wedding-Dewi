import React, { useState } from 'react';
import { PORTFOLIO_DATA, CONTACT_INFO } from '../data/weddingData';
import { PortfolioItem } from '../types';
import { LightboxModal } from './LightboxModal';

type FilterType = 'all' | 'makeup' | 'dekorasi' | 'akad' | 'resepsi';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filters: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'Semua' },
    { id: 'makeup', label: 'Make Up' },
    { id: 'dekorasi', label: 'Dekorasi' },
    { id: 'akad', label: 'Akad' },
    { id: 'resepsi', label: 'Resepsi' },
  ];

  const filteredItems = PORTFOLIO_DATA.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category.includes(activeFilter);
  });

  return (
    <section className="py-16 md:py-24 bg-[#f6f3f2]" id="portofolio">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[12px] text-[#745a27] font-semibold uppercase tracking-[0.16em]">
            Galeri &amp; Karya Nyata
          </span>
          <h2
            className="text-[32px] sm:text-[38px] md:text-[42px] text-[#1b1c1c] font-semibold mt-1.5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Portofolio Cinta Kami
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#514343] mt-2.5 leading-relaxed">
            Momen bahagia yang telah diabadikan bersama para pengantin terkasih Dewi Wedding84.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-[12px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#745a27] text-[#ffffff] shadow-sm'
                    : 'bg-[#ffffff] text-[#1b1c1c] hover:bg-[#f0eded] border border-[#e4c285]/40'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-[#ffffff] rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#e4c285]/30 flex flex-col cursor-pointer transition-all duration-300"
            >
              {/* Photo viewport */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f0eded]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={item.imageAlt}
                  src={item.image}
                  loading="lazy"
                />

                {/* Category Pills on top-left */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.category.map((cat) => (
                    <span
                      key={cat}
                      className="bg-[#ffffff]/90 backdrop-blur-sm text-[#1b1c1c] px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold shadow-xs"
                    >
                      {cat === 'makeup' ? 'Make Up' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                  ))}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#303030]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#ffffff]/90 text-[#1b1c1c] text-[11px] font-semibold uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    <span>Lihat Detail</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h4
                    className="text-[20px] text-[#1b1c1c] font-semibold"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.couple}
                  </h4>
                  <p className="text-[13px] text-[#514343] mt-1 line-clamp-1">{item.title}</p>
                </div>

                <div className="flex items-center gap-1.5 pt-3 mt-3 border-t border-[#e4c285]/30 text-[#745a27] text-[12px] font-medium">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View on Instagram Link */}
        <div className="text-center mt-12 md:mt-16">
          <a
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#ffffff] text-[#1b1c1c] hover:text-[#845050] hover:bg-[#fcf9f8] transition-all duration-300 shadow-sm border border-[#e4c285] text-[13px] font-semibold uppercase tracking-wider"
            href={CONTACT_INFO.instagramUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px] text-[#745a27]">
              photo_camera
            </span>
            <span>Lihat Galeri Lengkap di Instagram @dewiwedding84</span>
          </a>
        </div>
      </div>

      {/* Lightbox / Preview Modal */}
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};
