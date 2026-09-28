import React from 'react';
import { PortfolioItem } from '../types';
import { CONTACT_INFO } from '../data/weddingData';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const waText = encodeURIComponent(
    `Halo Dewi Wedding84, saya tertarik dengan inspirasi wedding "${item.couple} - ${item.title}" (${item.location}). Bisakah saya konsultasikan konsep serupa?`
  );
  const waUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${waText}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#ffffff] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#e4c285]/50 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-[#303030]/70 text-white flex items-center justify-center hover:bg-[#303030] transition-colors focus:outline-none"
          aria-label="Tutup preview"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Image Display */}
        <div className="md:w-1/2 bg-[#1b1c1c] flex items-center justify-center relative min-h-[300px] md:min-h-[460px]">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="w-full h-full object-cover max-h-[500px]"
          />
        </div>

        {/* Details Column */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Category Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {item.category.map((cat) => (
                <span
                  key={cat}
                  className="px-2.5 py-0.5 rounded-full bg-[#ffdea4]/40 text-[#745a27] text-[11px] uppercase tracking-wider font-semibold"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h3
              className="text-[26px] text-[#1b1c1c] font-semibold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {item.couple}
            </h3>
            <p className="text-[14px] text-[#845050] font-medium mt-1">{item.title}</p>

            <div className="flex items-center gap-1.5 text-[13px] text-[#745a27] mt-3">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              <span>{item.location}</span>
            </div>

            <p className="text-[14px] text-[#514343] mt-4 leading-relaxed bg-[#f6f3f2] p-4 rounded-xl border border-[#e4c285]/20">
              {item.story || 'Dokumentasi momen sakral dan kebahagiaan pernikahan hasil karya kolaborasi Dewi Wedding84.'}
            </p>
          </div>

          <div className="pt-6 mt-4 border-t border-[#e4c285]/30 flex flex-col gap-2.5">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#745a27] text-[#ffffff] hover:bg-[#5a4312] transition-colors text-center text-[12px] uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Tanyakan Konsep Ini</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 rounded-full bg-[#f0eded] text-[#514343] hover:bg-[#eae7e7] text-center text-[12px] uppercase tracking-wider font-semibold"
            >
              Kembali ke Galeri
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
