import React from 'react';
import { PageId } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ContactBannerProps {
  onNavigateToContact: () => void;
}

export const ContactBanner: React.FC<ContactBannerProps> = ({ onNavigateToContact }) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-r from-[#FFC94B]/20 via-[#F9A66C]/25 to-[#F17A7E]/20 border-t border-[#4A6163]/10">
      {/* Subtle organic decorative elements in pastels */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#FFC94B]/20 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#F17A7E]/20 blur-2xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-[#4A6163]/80">
          <Sparkles className="w-4 h-4 text-[#F9A66C]" />
          <span>Let's Collaborate</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif-display font-medium text-[#4A6163] tracking-tight max-w-5xl mx-auto leading-snug lg:whitespace-nowrap">
          Ready to bring your<br className="sm:hidden" /> creative ideas to life?
        </h2>

        <p className="mt-4 text-xs sm:text-sm md:text-base text-[#4A6163]/85 max-w-5xl mx-auto leading-relaxed lg:whitespace-nowrap">
          Whether you’re interested in custom canvas art, summer camp registration,<br className="sm:hidden" /> school project coaching, or wedding mehandi—I'd love to connect.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="https://wa.me/919599755840"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1EBE5D] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp: 9599755840</span>
          </a>

          <button
            onClick={() => {
              onNavigateToContact();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4A6163] text-white font-medium hover:bg-[#F9A66C] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer group"
          >
            <span>Email Studio</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
