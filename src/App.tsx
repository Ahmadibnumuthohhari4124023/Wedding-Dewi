/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Packages } from './components/Packages';
import { Portfolio } from './components/Portfolio';
import { Workflow } from './components/Workflow';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('');

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPackages = () => {
    const el = document.getElementById('paket');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackageOrService = (key: string) => {
    setSelectedServicePreset(key);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] flex flex-col font-sans selection:bg-[#ffdea4] selection:text-[#261900]">
      {/* Top Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Content Area */}
      <main className="w-full flex-1">
        {/* Hero Section */}
        <Hero onSelectPackageScroll={scrollToPackages} />

        {/* Layanan Utama (MUA & WO) */}
        <Services onSelectService={handleSelectPackageOrService} />

        {/* Mengapa Memilih Kami */}
        <WhyUs />

        {/* Pilihan Paket Bundling */}
        <Packages onSelectPackage={handleSelectPackageOrService} />

        {/* Portofolio Cinta Kami */}
        <Portfolio />

        {/* Alur Kerja & Pemesanan */}
        <Workflow />

        {/* Testimoni Pengantin */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />

        {/* Form Booking & Konsultasi */}
        <BookingForm
          selectedServicePreset={selectedServicePreset}
          onClearPreset={() => setSelectedServicePreset('')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloating />

      {/* Quick Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onScrollToForm={scrollToBooking}
      />
    </div>
  );
}
