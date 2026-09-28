import React from 'react';
import { CONTACT_INFO } from '../data/weddingData';

export const WhatsAppFloating: React.FC = () => {
  const waUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Halo%20Dewi%20Wedding84,%20saya%20ingin%20konsultasi%20paket%20pernikahan`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center bg-[#303030] text-[#f3f0f0] text-[12px] font-semibold px-3.5 py-1.5 rounded-full shadow-lg whitespace-nowrap pointer-events-none transition-all duration-200 border border-[#e4c285]/30">
        Chat Sekarang
      </div>

      {/* Button with Pulse Status Indicator */}
      <a
        aria-label="Chat WhatsApp Dewi Wedding84"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:scale-105 active:scale-95 transition-transform duration-200"
        href={waUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#128C7E] border-2 border-[#fcf9f8]"></span>
        </span>
        <span className="material-symbols-outlined text-[28px]">chat</span>
      </a>
    </div>
  );
};
