import React from 'react';
import { PageId } from '../types';
import { MEDIUM_CARDS } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface MediumCardsGridProps {
  onSelectMedium: (page: PageId) => void;
  titleKicker?: string;
  heading?: string;
  subheading?: string;
  compact?: boolean;
}

export const MediumCardsGrid: React.FC<MediumCardsGridProps> = ({
  onSelectMedium,
  titleKicker,
  heading,
  subheading,
  compact = false,
}) => {
  return (
    <div className={compact ? 'w-full' : 'py-10 md:py-14'}>
      {(titleKicker || heading || subheading) && (
        <div className="max-w-3xl mb-8 text-center mx-auto px-4">
          {titleKicker && (
            <p className="tracking-kicker text-xs uppercase font-semibold text-[#F9A66C] mb-2">
              {titleKicker}
            </p>
          )}
          {heading && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#4A6163] tracking-tight mb-3">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-[#4A6163]/80 text-base md:text-lg leading-relaxed">
              {subheading}
            </p>
          )}
        </div>
      )}

      {/* Grid Layout: 3 cards cleanly balanced */}
      <div className={`grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto ${compact ? 'gap-3 sm:gap-5 xl:gap-6' : 'gap-4 sm:gap-6'}`}>
        {MEDIUM_CARDS.map((card) => {
          return (
            <button
              key={card.id}
              onClick={() => {
                onSelectMedium(card.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group text-left flex flex-col h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#4A6163]/10 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 sm:hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9A66C] cursor-pointer"
            >
              {/* Image Container with compact height */}
              <div className={`relative w-full overflow-hidden bg-[#4A6163]/5 ${compact ? 'aspect-[16/9] sm:aspect-[16/11]' : 'aspect-[16/10] sm:aspect-[4/3]'}`}>
                <img
                  src={card.image}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle scrim gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating corner indicator icon */}
                <div
                  className="absolute top-1 sm:top-2.5 right-1 sm:right-2.5 w-4 h-4 sm:w-7 sm:h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#4A6163] shadow-xs group-hover:bg-[#FFC94B] group-hover:text-[#4A6163] transition-colors"
                  aria-hidden="true"
                >
                  <ArrowUpRight className="w-2 sm:w-3.5 h-2 sm:h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Card Body - smaller & tighter for mobile */}
              <div className={`flex flex-col flex-1 justify-between bg-white ${compact ? 'p-2 sm:p-4' : 'p-2.5 sm:p-5'}`}>
                <div>
                  <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1.5">
                    <span className="text-xs sm:text-lg" role="img" aria-label={card.title}>
                      {card.icon}
                    </span>
                    <h3 className="text-[11px] sm:text-base font-serif font-semibold text-[#4A6163] group-hover:text-[#F17A7E] transition-colors truncate">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-[9px] sm:text-xs text-[#4A6163]/75 leading-tight sm:leading-relaxed font-normal line-clamp-1 sm:line-clamp-2">
                    ({card.subtitle})
                  </p>
                </div>

                <div className="mt-1.5 sm:mt-3 pt-1 sm:pt-2.5 border-t border-[#4A6163]/10 flex items-center justify-between text-[9px] sm:text-xs font-medium text-[#F9A66C] group-hover:text-[#4A6163] transition-colors">
                  <span className="hidden sm:inline">Explore medium</span>
                  <span className="sm:hidden">Explore</span>
                  <span className="font-sans text-xs sm:text-sm transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};