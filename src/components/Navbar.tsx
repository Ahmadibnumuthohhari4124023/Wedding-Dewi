import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../data/weddingData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'layanan', 'paket', 'portofolio', 'testimoni', 'booking'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#hero', id: 'hero' },
    { label: 'Layanan', href: '#layanan', id: 'layanan' },
    { label: 'Paket', href: '#paket', id: 'paket' },
    { label: 'Portofolio', href: '#portofolio', id: 'portofolio' },
    { label: 'Testimoni', href: '#testimoni', id: 'testimoni' },
    { label: 'Kontak', href: '#booking', id: 'booking' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#ffffff]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-b border-[#e4c285]/40 py-2.5'
          : 'bg-[#ffffff]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e4c285]/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between gap-4">
        {/* Brand & Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img
            alt="Dewi Wedding84 Logo"
            className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            src={LOGO_URL}
          />
          <div className="flex flex-col">
            <span
              className="text-[20px] md:text-[22px] font-semibold text-[#845050] tracking-tight leading-none"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Dewi Wedding84
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-[#745a27] font-semibold mt-0.5">
              Wedding Planner &amp; MUA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[15px] transition-colors duration-200 ${
                  isActive
                    ? 'text-[#845050] font-semibold border-b-2 border-[#845050] pb-1'
                    : 'text-[#514343] hover:text-[#845050] font-normal pb-1'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#ffdea4] text-[#261900] hover:bg-[#fedb9b] hover:text-[#795f2b] px-6 py-2.5 text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_2px_10px_rgba(116,90,39,0.12)] border border-[#745a27]/20 cursor-pointer active:scale-95"
          >
            Konsultasi Gratis
          </button>

          <a
            href="#booking"
            onClick={(e) => handleNavClick(e, '#booking')}
            title="Profil & Akun Pengantin"
            className="w-9 h-9 rounded-full bg-[#845050] text-[#ffffff] flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
          >
            <span className="material-symbols-outlined text-[19px]">person</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#514343] hover:text-[#845050] hover:bg-[#f6f3f2] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#ffffff] border-b border-[#e4c285]/40 px-6 py-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-2 px-3 rounded-lg text-[15px] transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#ffdea4]/30 text-[#845050] font-semibold'
                    : 'text-[#514343] hover:bg-[#f6f3f2]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="mt-2 w-full text-center py-2.5 rounded-full bg-[#ffdea4] text-[#261900] font-semibold text-[13px] uppercase tracking-wider shadow-sm"
            >
              Konsultasi Gratis
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
