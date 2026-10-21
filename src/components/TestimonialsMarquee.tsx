import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export const TestimonialsMarquee: React.FC = () => {
  // Duplicate testimonials list to make the infinite seamless scroll perfectly continuous
  const displayItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-14 md:py-20 overflow-hidden bg-[#F2F6F6]/60 border-y border-[#4A6163]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-xs uppercase tracking-widest font-semibold text-[#F9A66C] mb-2">
          Community & Impressions
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-medium text-[#4A6163] tracking-tight">
          Words from Parents, Students & Patrons
        </h2>
        <p className="mt-2 text-sm text-[#4A6163]/75 max-w-xl mx-auto">
          Hover over any card to pause the scroll and read their story.
        </p>
      </div>

      {/* Marquee Track Container with subtle fade edges */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-[#F9FAF4] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-[#F9FAF4] to-transparent z-10 pointer-events-none" />

        {/* Moving one-line layout */}
        <div className="animate-marquee flex items-stretch gap-6 py-2 px-4 cursor-grab active:cursor-grabbing">
          {displayItems.map((item, index) => {
            return (
              <div
                key={`${item.id}-${index}`}
                className="w-[320px] sm:w-[380px] md:w-[420px] shrink-0 bg-white rounded-2xl p-6 border border-[#4A6163]/10 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-[#4A6163]/60">
                      {item.tag}
                    </span>
                    <Quote className="w-5 h-5 text-[#F9A66C]/40" />
                  </div>
                  <p className="text-sm md:text-[15px] leading-relaxed text-[#4A6163] font-normal italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info with small avatar and role */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#4A6163]/10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-xs shrink-0 shadow-xs"
                    style={{ backgroundColor: item.avatarBg }}
                  >
                    {item.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold text-[#4A6163] truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#4A6163]/70 truncate">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
