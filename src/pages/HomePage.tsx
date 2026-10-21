import React from 'react';
import { PageId } from '../types';
import { MediumCardsGrid } from '../components/MediumCardsGrid';
import { TestimonialsMarquee } from '../components/TestimonialsMarquee';
import { ContactBanner } from '../components/ContactBanner';
import { HERO_CAMP_IMAGE } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 
        MAIN HERO VIEWPORT:
        1. First div: EXACT statement requested, zero fluff. Moved up with generous space below.
        2. Below that: "Work across mediums" cards with increased breathing room.
      */}
      <section className="w-full lg:min-h-[calc(100vh-5rem)] flex flex-col justify-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 sm:pt-8 lg:pt-10 pb-8">
        {/* First div in main section: zero fluff statement, positioned higher */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-14">
          <p className="text-lg sm:text-xl lg:text-2xl font-serif-display text-[#4A6163] leading-relaxed font-normal">
            "Art takes many forms—sometimes it’s oil on canvas, sometimes vector curves on a screen, and other times intricate henna design or creative hands-on craft. Here is a look at my work across various mediums."
          </p>
        </div>

        {/* Work across mediums: cards with increased spacing above */}
        <div className="w-full">
          <MediumCardsGrid
            onSelectMedium={onNavigate}
            compact={true}
          />
        </div>
      </section>

      {/* 
        Summer Camps & Educator Section:
        "Nurturing Little Artists"
      */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#FFF8F0]/60 via-[#F9FAF4] to-white border-t border-[#4A6163]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#F9A66C] mb-2">
                Summer Camps & Workshops
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-[#4A6163] tracking-tight leading-[1.2] mb-5">
                Nurturing Little Artists
              </h2>

              <p className="text-base sm:text-lg text-[#4A6163]/85 leading-relaxed max-w-2xl font-normal mb-8 text-pretty">
                "Our hands-on summer art and craft camps give young minds a space to explore colors, build creative confidence, and take home projects they’re proud of."
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-full bg-[#4A6163] text-white font-medium hover:bg-[#F9A66C] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer flex items-center gap-2 group"
                >
                  <span>Inquire About Camps</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => {
                    onNavigate('summer-camps');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-full bg-white text-[#4A6163] font-medium border border-[#4A6163]/20 hover:border-[#4A6163] transition-all duration-200 cursor-pointer shadow-2xs hover:bg-[#F9FAF4]"
                >
                  Workshop Glimpses
                </button>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-2 border-white bg-[#4A6163]/5">
                <img
                  src={HERO_CAMP_IMAGE}
                  alt="Summer Art Camp workshop"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md border border-white/80">
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#F9A66C] mb-0.5">
                    Creative Camp Experience
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-[#4A6163]">
                    Building artistic confidence through tactile exploration and colors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <TestimonialsMarquee />

      {/* Let's Collaborate Banner */}
      <ContactBanner onNavigateToContact={() => onNavigate('contact')} />
    </div>
  );
};
