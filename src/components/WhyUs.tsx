import React from 'react';

export const WhyUs: React.FC = () => {
  const features = [
    {
      icon: 'groups',
      iconBg: 'bg-[#ffdea4]/60 text-[#261900]',
      title: 'Tim Profesional & Berpengalaman',
      desc: 'MUA bersertifikasi nasional dan kru WO terlatih menangani ratusan event bertaraf intimate hingga ballroom megah.',
    },
    {
      icon: 'receipt_long',
      iconBg: 'bg-[#c98b8b]/20 text-[#845050]',
      title: 'Harga Transparan & Fleksibel',
      desc: 'Tanpa biaya tersembunyi, rincian transparan, dan paket yang dapat disesuaikan dengan preferensi serta anggaran Anda.',
    },
    {
      icon: 'palette',
      iconBg: 'bg-[#ffdea4]/60 text-[#261900]',
      title: 'Konsep Sesuai Impian',
      desc: 'Dari adat tradisional sakral (Jawa, Sunda, Minang, dll.) hingga modern international aesthetic yang elegan dan bersih.',
    },
    {
      icon: 'support_agent',
      iconBg: 'bg-[#c98b8b]/20 text-[#845050]',
      title: 'Pendampingan Penuh',
      desc: 'Komunikasi intensif, gladi resik menyeluruh, hingga pendampingan dari subuh akad sampai tuntas resepsi selesai.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f6f3f2]">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[12px] text-[#745a27] font-semibold uppercase tracking-[0.16em]">
            Keunggulan Kami
          </span>
          <h2
            className="text-[32px] sm:text-[38px] md:text-[42px] text-[#1b1c1c] font-semibold mt-1.5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Mengapa Dewi Wedding84?
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#514343] mt-2.5 leading-relaxed">
            Komitmen rasa tenang bagi kedua mempelai dan keluarga dari tahap rancangan awal hingga resepsi usai.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] p-6 rounded-2xl shadow-sm border border-[#e4c285]/30 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-xs`}
              >
                <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
              </div>
              <h3 className="text-[17px] font-semibold text-[#1b1c1c] leading-snug mt-1">
                {item.title}
              </h3>
              <p className="text-[13px] md:text-[14px] text-[#514343] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
