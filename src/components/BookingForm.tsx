import React, { useState, useEffect } from 'react';
import { BookingFormData } from '../types';
import { CONTACT_INFO } from '../data/weddingData';

interface BookingFormProps {
  selectedServicePreset?: string;
  onClearPreset?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedServicePreset,
  onClearPreset,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    whatsapp: '',
    date: '',
    venue: '',
    service: selectedServicePreset || '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<BookingFormData | null>(null);

  useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, service: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLastSubmission(formData);
    setSubmitted(true);
  };

  const getServiceLabel = (code: string) => {
    switch (code) {
      case 'bundling-gold':
        return 'Bundling Lengkap MUA + WO (Paket Gold - Paling Populer)';
      case 'bundling-platinum':
        return 'Bundling Luxury MUA + WO (Paket Platinum)';
      case 'bundling-silver':
        return 'Bundling Akad / Intimate (Paket Silver)';
      case 'mua-only':
        return 'Make Up Artist (MUA) Pengantin Saja';
      case 'wo-only':
        return 'Wedding Organizer (WO) Saja';
      case 'custom':
        return 'Custom Package Sesuai Budget';
      default:
        return code || 'Belum Ditentukan';
    }
  };

  const generateWhatsAppMessage = () => {
    if (!lastSubmission) return '';
    const cleanPhone = lastSubmission.whatsapp.replace(/[^0-9]/g, '');
    const waText = `Halo Tim Dewi Wedding84,\n\nSaya ingin konsultasi dan cek ketersediaan jadwal:\n- *Nama*: ${lastSubmission.name}\n- *No. WhatsApp*: +62${cleanPhone}\n- *Tanggal Acara*: ${lastSubmission.date}\n- *Lokasi / Venue*: ${lastSubmission.venue}\n- *Layanan*: ${getServiceLabel(lastSubmission.service)}\n- *Catatan / Konsep*: ${lastSubmission.notes || '-'}\n\nMohon info ketersediaan slot dan penawaran detailnya ya. Terima kasih!`;
    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(waText)}`;
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      whatsapp: '',
      date: '',
      venue: '',
      service: '',
      notes: '',
    });
    setSubmitted(false);
    if (onClearPreset) onClearPreset();
  };

  return (
    <section className="py-16 md:py-24 bg-[#f6f3f2] relative" id="booking">
      <div className="max-w-4xl mx-auto px-5 md:px-12">
        <div className="bg-[#ffffff] rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-[#e4c285]/50 relative overflow-hidden">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ffdea4]/50 text-[#745a27] text-[11px] md:text-[12px] font-semibold uppercase tracking-widest mb-2 border border-[#e4c285]/40">
              <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              <span>Reservasi &amp; Cek Jadwal</span>
            </div>

            <h2
              className="text-[30px] sm:text-[36px] md:text-[40px] text-[#1b1c1c] font-semibold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Mulai Rencanakan Hari Istimewa Anda
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#514343] mt-2.5 leading-relaxed">
              Isi formulir di bawah ini dan Wedding Specialist kami akan menghubungi Anda dalam waktu 1x24 jam untuk konsultasi komprehensif.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* Nama Calon Pengantin */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[12px] font-semibold uppercase tracking-wider text-[#1b1c1c]">
                Nama Lengkap Calon Pengantin *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Contoh: Anindya &amp; Reza"
                className="w-full px-4 py-3 rounded-xl bg-[#fcf9f8] border border-[#e4c285]/60 focus:border-[#745a27] focus:ring-2 focus:ring-[#745a27]/20 outline-none text-[#1b1c1c] text-[14px] transition-all"
              />
            </div>

            {/* No WhatsApp */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="whatsapp" className="text-[12px] font-semibold uppercase tracking-wider text-[#1b1c1c]">
                No. WhatsApp Aktif *
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3.5 text-[14px] font-medium text-[#514343] select-none">
                  +62
                </span>
                <input
                  id="whatsapp"
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="812-3456-7890"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#fcf9f8] border border-[#e4c285]/60 focus:border-[#745a27] focus:ring-2 focus:ring-[#745a27]/20 outline-none text-[#1b1c1c] text-[14px] transition-all"
                />
              </div>
            </div>

            {/* Tanggal Acara */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="date" className="text-[12px] font-semibold uppercase tracking-wider text-[#1b1c1c]">
                Tanggal Rencana Acara *
              </label>
              <input
                id="date"
                type="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#fcf9f8] border border-[#e4c285]/60 focus:border-[#745a27] focus:ring-2 focus:ring-[#745a27]/20 outline-none text-[#1b1c1c] text-[14px] transition-all"
              />
            </div>

            {/* Lokasi / Venue */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="venue" className="text-[12px] font-semibold uppercase tracking-wider text-[#1b1c1c]">
                Lokasi / Nama Venue *
              </label>
              <input
                id="venue"
                type="text"
                required
                value={formData.venue}
                onChange={handleChange}
                placeholder="Kota, Gedung, atau Hotel"
                className="w-full px-4 py-3 rounded-xl bg-[#fcf9f8] border border-[#e4c285]/60 focus:border-[#745a27] focus:ring-2 focus:ring-[#745a27]/20 outline-none text-[#1b1c1c] text-[14px] transition-all"
              />
            </div>

            {/* Pilihan Layanan */}
            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label htmlFor="service" className="text-[12px] font-semibold uppercase tracking-wider text-[#1b1c1c]">
                Pilihan Layanan yang Diminati *
              </label>
              <select
                id="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#fcf9f8] border border-[#e4c285]/60 focus:border-[#745a27] focus:ring-2 focus:ring-[#745a27]/20 outline-none text-[#1b1c1c] text-[14px] transition-all"
              >
                <option value="" disabled>
                  Pilih salah satu layanan...
                </option>
                <option value="bundling-gold">
                  Bundling Lengkap MUA + WO (Paket Gold - Paling Populer)
                </option>
                <option value="bundling-platinum">Bundling Luxury MUA + WO (Paket Platinum)</option>
                <option value="bundling-silver">Bundling Akad / Intimate (Paket Silver)</option>
                <option value="mua-only">Make Up Artist (MUA) Pengantin Saja</option>
                <option value="wo-only">Wedding Organizer (WO) Saja</option>
                <option value="custom">Custom Package Sesuai Budget</option>
              </select>
            </div>

            {/* Catatan / Konsep */}
            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label htmlFor="notes" className="text-[12px] font-semibold uppercase tracking-wider text-[#1b1c1c]">
                Catatan Tambahan atau Konsep Impian
              </label>
              <textarea
                id="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Ceritakan konsep adat/modern, perkiraan jumlah tamu, atau kebutuhan khusus Anda..."
                className="w-full px-4 py-3 rounded-xl bg-[#fcf9f8] border border-[#e4c285]/60 focus:border-[#745a27] focus:ring-2 focus:ring-[#745a27]/20 outline-none text-[#1b1c1c] text-[14px] resize-none transition-all"
              />
            </div>

            {/* Tombol Submit */}
            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#745a27] text-[#ffffff] hover:bg-[#5a4312] transition-all duration-300 text-[13px] font-semibold uppercase tracking-widest shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Kirim Permintaan &amp; Jadwalkan Konsultasi Gratis</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>

              <p className="text-[12px] text-[#514343] text-center mt-3 flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#745a27]">lock</span>
                <span>Privasi Anda terjamin. Tim kami tidak akan mengirim spam atau membagikan nomor Anda.</span>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {submitted && lastSubmission && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-[#ffffff] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#e4c285] text-center">
            <div className="w-16 h-16 rounded-full bg-[#ffdea4] text-[#261900] mx-auto flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>

            <h3
              className="text-[26px] text-[#1b1c1c] font-semibold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Permintaan Terkirim!
            </h3>

            <p className="text-[14px] text-[#514343] mt-2 leading-relaxed">
              Terima kasih, <strong className="text-[#1b1c1c]">{lastSubmission.name}</strong>. Data rencana pernikahan Anda telah kami catat. Wedding Specialist kami akan menghubungi nomor WhatsApp Anda dalam 1x24 jam.
            </p>

            <div className="my-5 p-4 rounded-2xl bg-[#f6f3f2] text-left text-[13px] text-[#514343] space-y-1 border border-[#e4c285]/30">
              <p>
                <strong>Layanan:</strong> {getServiceLabel(lastSubmission.service)}
              </p>
              <p>
                <strong>Tanggal Acara:</strong> {lastSubmission.date}
              </p>
              <p>
                <strong>Venue:</strong> {lastSubmission.venue}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-full bg-[#25D366] text-white font-semibold text-[13px] uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:opacity-95"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Buka di WhatsApp Langsung</span>
              </a>

              <button
                type="button"
                onClick={handleResetForm}
                className="py-3 px-5 rounded-full bg-[#f0eded] text-[#1b1c1c] font-semibold text-[13px] uppercase tracking-wider hover:bg-[#eae7e7]"
              >
                Selesai
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
