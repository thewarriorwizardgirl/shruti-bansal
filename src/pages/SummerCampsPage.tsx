import React, { useState, useRef } from 'react';
import { PageId } from '../types';
import { ContactBanner } from '../components/ContactBanner';
import {
  WorkshopMediaItem,
  WORKSHOP_VIDEOS,
  WORKSHOP_PICTURES,
} from '../data/workshopsData';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Play,
  ZoomIn,
  X,
  ExternalLink,
  Sparkles,
  Calendar,
  Users,
  Award,
} from 'lucide-react';

interface SummerCampsPageProps {
  onNavigate: (page: PageId) => void;
}

interface WorkshopScrollableRowProps {
  heading: string;
  subtitle?: string;
  count: number;
  items: WorkshopMediaItem[];
  isVideoRow?: boolean;
  onSelect: (item: WorkshopMediaItem) => void;
}

const WorkshopScrollableRow: React.FC<WorkshopScrollableRowProps> = ({
  heading,
  subtitle,
  count,
  items,
  isVideoRow = false,
  onSelect,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mb-14">
      {/* Header for the row without "Row1" or "Row2" text */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h3 className="text-xl sm:text-2xl font-serif-display font-semibold text-[#4A6163]">
              {heading}
            </h3>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FFC94B]/20 text-[#4A6163]">
              {count} {isVideoRow ? 'Reels' : 'Photos'}
            </span>
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm text-[#4A6163]/70 mt-1">
              {subtitle}
            </p>
          )}
        </div>

        {/* Scroll Chevron Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white border border-[#4A6163]/15 text-[#4A6163] hover:bg-[#F9FAF4] hover:border-[#4A6163] transition-colors shadow-2xs cursor-pointer"
            aria-label={`Scroll ${heading} left`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white border border-[#4A6163]/15 text-[#4A6163] hover:bg-[#F9FAF4] hover:border-[#4A6163] transition-colors shadow-2xs cursor-pointer"
            aria-label={`Scroll ${heading} right`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 
        Horizontally scrollable single row:
        - 5 pictures per row on desktop (lg:basis-[calc(20%-0.8rem)])
        - 4 in a row for tablet (sm:basis-[calc(25%-0.75rem)])
        - 2 in a row for mobile (basis-[calc(50%-0.375rem)])
      */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 pt-1 scroll-smooth snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelect(item)}
            className="shrink-0 basis-[calc(50%-0.375rem)] sm:basis-[calc(25%-0.75rem)] lg:basis-[calc(20%-0.8rem)] snap-start group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#4A6163]/10 shadow-2xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
          >
            {/* Media thumbnail container */}
            <div className="relative aspect-square w-full overflow-hidden bg-[#4A6163]/5">
              <img
                src={item.localPath}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Video Play badge or ZoomIn badge */}
              {isVideoRow ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 text-[#4A6163] shadow-md flex items-center justify-center group-hover:bg-[#FFC94B] group-hover:scale-110 transition-all duration-200">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5 text-[#4A6163]" />
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-semibold text-white tracking-wider uppercase">
                    Video
                  </div>
                </div>
              ) : (
                <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#4A6163] opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                  <ZoomIn className="w-4 h-4" />
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between bg-white">
              <div>
                <h4 className="text-xs sm:text-sm font-serif-display font-semibold text-[#4A6163] group-hover:text-[#F17A7E] transition-colors leading-snug line-clamp-1 mb-1">
                  {item.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-[#4A6163]/70 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-[#4A6163]/10 flex items-center justify-between text-[10px] sm:text-xs text-[#F9A66C] font-medium">
                <span>{isVideoRow ? 'Watch Video' : 'View Photo'}</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SummerCampsPage: React.FC<SummerCampsPageProps> = ({ onNavigate }) => {
  const [selectedItem, setSelectedItem] = useState<WorkshopMediaItem | null>(null);

  const openWhatsApp = () => {
    window.open('https://wa.me/919599755840', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner / Breadcrumb */}
      <div className="bg-[#FFF8F0]/80 border-b border-[#4A6163]/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#4A6163] hover:text-[#F9A66C] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
          <div className="text-xs text-[#4A6163]/60">
            Workshops <span className="mx-1">/</span> Summer Camps
          </div>
        </div>
      </div>

      {/* Main Page Heading: EXACT title requested */}
      <section className="py-10 md:py-14 bg-white border-b border-[#4A6163]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F9A66C] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Summer Camp & Workshops</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-[#4A6163] tracking-tight mb-3">
              Glimpses of the previous summer camps
            </h1>

            <p className="text-sm sm:text-base text-[#4A6163]/85 leading-relaxed">
              Explore previous workshop moments—from glass painting, mango festival entrepreneurial stalls, and dance labs to leaf printing, scratch art, and celebratory student showcases.
            </p>
          </div>
        </div>
      </section>

      {/* 2 HORIZONTALLY SCROLLABLE ROWS: 1 FOR VIDEOS, 1 FOR PICTURES (5 per row on desktop) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Row 1: Videos (without the text "Row1") */}
        <WorkshopScrollableRow
          heading="Workshop Videos & Live Highlights"
          subtitle="Interactive activities, dance choreography, young entrepreneur stalls, and live music"
          count={WORKSHOP_VIDEOS.length}
          items={WORKSHOP_VIDEOS}
          isVideoRow={true}
          onSelect={setSelectedItem}
        />

        {/* Row 2: Pictures (without the text "Row2") */}
        <WorkshopScrollableRow
          heading="Hands-On Workshop Photography"
          subtitle="Tactile art experiments, thumb painting, scratch art, and joyful student celebrations"
          count={WORKSHOP_PICTURES.length}
          items={WORKSHOP_PICTURES}
          isVideoRow={false}
          onSelect={setSelectedItem}
        />
      </section>

      {/* Interactive Lightbox / Video Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[92vh] flex flex-col md:flex-row shadow-2xl relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-[#4A6163] shadow-md transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Display Pane */}
            <div className="md:w-3/5 bg-[#141414] flex flex-col items-center justify-center p-4 relative">
              <img
                src={selectedItem.localPath}
                alt={selectedItem.title}
                className="max-h-[55vh] md:max-h-[75vh] w-auto object-contain rounded-xl"
              />

              {/* Video Overlay on Modal */}
              {selectedItem.type === 'video' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 pointer-events-none">
                  <div className="p-4 rounded-full bg-black/50 backdrop-blur-xs text-white mb-2 pointer-events-auto">
                    <Play className="w-8 h-8 fill-current ml-1 text-white" />
                  </div>
                  <span className="text-white text-xs font-semibold bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                    Watch Workshop Reel
                  </span>
                </div>
              )}
            </div>

            {/* Media Details Pane */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold uppercase text-[#F9A66C] mb-2">
                  <span className="flex items-center gap-1.5">
                    {selectedItem.type === 'video' ? '🎬 Workshop Video' : '📸 Workshop Photo'}
                  </span>
                  {selectedItem.date && (
                    <span className="text-[#4A6163]/50 font-normal">{selectedItem.date}</span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-serif-display font-semibold text-[#4A6163] mb-2">
                  {selectedItem.title}
                </h3>

                {selectedItem.subtitle && (
                  <p className="text-xs font-medium text-[#4A6163]/70 mb-4">
                    {selectedItem.subtitle}
                  </p>
                )}

                <p className="text-sm text-[#4A6163]/85 leading-relaxed mb-6">
                  {selectedItem.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#4A6163]/10 space-y-2.5">
                <a
                  href={selectedItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#F9A66C] to-[#F17A7E] text-white text-xs font-semibold hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Original on Instagram</span>
                </a>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Inquire for Upcoming Camp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Banner above footer */}
      <ContactBanner onNavigateToContact={() => onNavigate('contact')} />
    </div>
  );
};
