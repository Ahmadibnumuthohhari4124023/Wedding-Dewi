import React from 'react';

export const Workflow: React.FC = () => {
  const steps = [
    {
      num: 1,
      badgeBg: 'bg-[#ffdea4] text-[#261900]',
      title: 'Konsultasi Santai',
      desc: 'Diskusi ide, konsep pernikahan, pemilihan tanggal, dan estimasi anggaran via WhatsApp atau temu langsung di studio.',
    },
    {
      num: 2,
      badgeBg: 'bg-[#745a27] text-[#ffffff]',
      title: 'Pilih Paket & Konsep',
      desc: 'Penyesuaian layanan MUA & WO sesuai kebutuhan, penyusunan proposal penawaran, dan penguncian tanggal acara (Booking Fee).',
    },
    {
      num: 3,
      badgeBg: 'bg-[#c98b8b] text-[#512627]',
      title: 'Persiapan & Matriks Vendor',
      desc: 'Penyusunan rundown detail, koordinasi menyeluruh dengan seluruh vendor, serta trial make up pengantin yang nyaman.',
    },
    {
      num: 4,
      badgeBg: 'bg-[#845050] text-[#ffffff]',
      title: 'Hari Bahagia (Hari H)',
      desc: 'Tim MUA dan WO standby penuh memandu setiap rangkaian acara agar berjalan anggun, khidmat, dan tanpa hambatan.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#fcf9f8]">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[12px] text-[#745a27] font-semibold uppercase tracking-[0.16em]">
            Langkah Sederhana
          </span>
          <h2
            className="text-[32px] sm:text-[38px] md:text-[42px] text-[#1b1c1c] font-semibold mt-1.5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Alur Kerja &amp; Pemesanan
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#514343] mt-2.5 leading-relaxed">
            Empat tahapan tenang menuju hari bahagia yang terencana dengan sempurna.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[28%] left-16 right-16 h-0.5 bg-[#ffdea4] -z-0" />

          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-[#ffffff] p-6 sm:p-7 rounded-2xl shadow-sm border border-[#e4c285]/40 flex flex-col items-center text-center z-10 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Step Number Circle */}
              <div
                className={`w-12 h-12 rounded-full ${step.badgeBg} text-[20px] font-bold flex items-center justify-center mb-4 shadow-sm`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {step.num}
              </div>

              <h3 className="text-[17px] font-semibold text-[#1b1c1c] leading-snug">
                {step.title}
              </h3>
              <p className="text-[13px] md:text-[14px] text-[#514343] mt-2.5 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
