import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'fine-arts', label: 'ARTWORK GALLERY' },
    { id: 'graphic-design', label: 'DIGITAL ART' },
    { id: 'mehandi-makeup', label: 'RANGOLI AND MEHANDI' },
    { id: 'summer-camps', label: 'SUMMER CAMPS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919599755840', '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F9FAF4]/90 backdrop-blur-md border-b border-[#4A6163]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 gap-4 sm:gap-8">
          {/* Zone 1: Brand title & logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left font-serif font-medium text-[#4A6163] hover:text-[#F17A7E] transition-colors whitespace-nowrap shrink-0 flex items-center gap-3 sm:gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9A66C] rounded-2xl p-1"
          >
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-2xl overflow-hidden shadow-xs border border-[#4A6163]/15 bg-white shrink-0 p-0.5 group-hover:scale-105 transition-transform duration-200">
              <img
                src="/src/assets/images/shruti.png"
                alt="Studio Shruti Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="tracking-tight font-serif font-semibold text-xl sm:text-2xl md:text-3xl leading-tight text-[#4A6163]">
                Shruti's Studio
              </span>
              <span className="tracking-kicker text-[10px] sm:text-xs font-semibold uppercase text-[#F9A66C] hidden sm:inline-block mt-0.5 leading-normal">
                Artist & Educator
              </span>
            </div>
          </button>

          {/* Zone 2: Nav links, 1-2 word labels, single-line text links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-xs xl:text-sm font-medium text-[#4A6163]/80">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors cursor-pointer whitespace-nowrap shrink-0 hover:text-[#4A6163] font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F9A66C] ${
                    isActive ? 'text-[#4A6163] font-semibold' : 'text-[#4A6163]/75'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F9A66C] rounded-full transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: WhatsApp Button in place of Get in Touch */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="https://wa.me/919599755840"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp: 9599755840"
              title="Chat on WhatsApp"
              className="inline-flex items-center justify-center p-2.5 sm:p-2.5 rounded-full cursor-pointer transition-all duration-200 shrink-0 shadow-sm bg-[#25D366] text-white hover:bg-[#1EBE5D] hover:shadow-md hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* Mobile menu trigger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#4A6163] hover:bg-[#4A6163]/5 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F9FAF4] border-b border-[#4A6163]/10 px-4 pt-2 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#FFC94B]/20 text-[#4A6163] font-semibold'
                      : 'text-[#4A6163]/80 hover:bg-[#4A6163]/5 hover:text-[#4A6163]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <a
              href="https://wa.me/919599755840"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-3 rounded-lg text-base font-semibold bg-[#25D366] text-white shadow-xs mt-2"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp: 9599755840</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};