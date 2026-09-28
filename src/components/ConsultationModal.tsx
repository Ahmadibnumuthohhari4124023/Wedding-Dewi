import React from 'react';
import { CONTACT_INFO } from '../data/weddingData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToForm: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onScrollToForm,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#ffffff] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-[#e4c285] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f0eded] text-[#514343] hover:text-[#1b1c1c] flex items-center justify-center transition-colors"
          aria-label="Tutup"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-[#ffdea4] text-[#745a27] flex items-center justify-center mx-auto mb-3 shadow-xs">
            <span className="material-symbols-outlined text-[28px]">favorite</span>
          </div>
          <h3
            className="text-[24px] text-[#1b1c1c] font-semibold"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Konsultasi Gratis
          </h3>
          <p className="text-[14px] text-[#514343] mt-1.5 leading-relaxed">
            Pilih cara paling nyaman bagi Anda untuk mendiskusikan konsep dan rencana pernikahan impian:
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {/* Option 1: WhatsApp */}
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Halo%20Dewi%20Wedding84,%20saya%20ingin%20konsultasi%20gratis%20pernikahan`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all flex items-center gap-3.5 group"
          >
            <div className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[24px]">chat</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[14px] font-bold text-[#1b1c1c] group-hover:text-[#25D366] transition-colors">
                Chat WhatsApp Langsung
              </span>
              <span className="text-[12px] text-[#514343]">
                Respon cepat &amp; sharing portofolio instan
              </span>
            </div>
          </a>

          {/* Option 2: Fill Form */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onScrollToForm();
            }}
            className="p-4 rounded-2xl border border-[#e4c285]/60 bg-[#ffdea4]/10 hover:bg-[#ffdea4]/20 transition-all flex items-center gap-3.5 text-left cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-full bg-[#745a27] text-white flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[24px]">edit_calendar</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-[#1b1c1c] group-hover:text-[#745a27] transition-colors">
                Isi Form Cek Ketersediaan
              </span>
              <span className="text-[12px] text-[#514343]">
                Cek jadwal tanggal &amp; perkiraan rincian paket
              </span>
            </div>
          </button>

          {/* Option 3: Phone */}
          <a
            href={`tel:${CONTACT_INFO.whatsappNumber}`}
            className="p-4 rounded-2xl border border-[#e4c285]/40 bg-[#f6f3f2] hover:bg-[#f0eded] transition-all flex items-center gap-3.5 group"
          >
            <div className="w-11 h-11 rounded-full bg-[#845050] text-white flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[24px]">call</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[14px] font-bold text-[#1b1c1c] group-hover:text-[#845050] transition-colors">
                Telepon Studio Dewi Wedding84
              </span>
              <span className="text-[12px] text-[#514343]">{CONTACT_INFO.phoneDisplay}</span>
            </div>
          </a>
        </div>

        <div className="mt-6 pt-4 border-t border-[#e4c285]/30 text-center">
          <p className="text-[12px] text-[#514343]">
            {CONTACT_INFO.operatingHours}
          </p>
        </div>
      </div>
    </div>
  );
};
