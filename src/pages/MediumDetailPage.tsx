import React, { useState, useRef } from 'react';
import { PageId } from '../types';
import { ContactBanner } from '../components/ContactBanner';
import {
  PortfolioItem,
  HANDMADE_CARDS,
  FRAMES,
  PEN_AND_INK,
  POCKET_PAINTINGS,
  CRAFTS,
  DIGITAL_ART,
  RANGOLI_ITEMS,
  MEHANDI_ITEMS,
} from '../data/instagramPortfolio';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  X,
  Sparkles,
  Layers,
} from 'lucide-react';

interface MediumConfig {
  id: PageId;
  heading: string;
  icon: string;
  subtitle: string;
  overview?: string;
  accentColor: string;
  badgeText: string;
}

const MEDIUM_CONFIGS: Record<string, MediumConfig> = {
  'fine-arts': {
    id: 'fine-arts',
    heading: 'Canvases and Fine Arts',
    icon: '🎨',
    subtitle: 'Handmade cards, frames, pen & ink, pocket paintings, and crafts',
    overview: '',
    accentColor: '#F9A66C',
    badgeText: 'Original Artworks & Collections',
  },
  'graphic-design': {
    id: 'graphic-design',
    heading: 'Digital Art',
    icon: '💻',
    subtitle: 'Vector illustrations, digital painting, character design',
    overview:
      'Digital vector artwork, expressive character tracing, and Photoshop paintings exploring luminous color gradients and playful contemporary styles.',
    accentColor: '#4A6163',
    badgeText: 'Digital Art & Illustrations',
  },
  'mehandi-makeup': {
    id: 'mehandi-makeup',
    heading: 'Rangoli & Mehandi',
    icon: '🌿',
    subtitle: 'Floor rangoli art, bridal & festive henna transformations',
    overview:
      'Celebratory traditional art forms uniting intricate powdered floor rangoli mandalas and organic bridal henna patterns crafted with meticulous detail.',
    accentColor: '#F17A7E',
    badgeText: 'Traditional & Festive Arts',
  },
};

interface ScrollableRowProps {
  title: string;
  count: number;
  items: PortfolioItem[];
  onSelect: (item: PortfolioItem) => void;
  subtitle?: string;
}

const ScrollableRow: React.FC<ScrollableRowProps> = ({
  title,
  count,
  items,
  onSelect,
  subtitle,
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
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl sm:text-2xl font-serif-display font-semibold text-[#4A6163]">
              {title}
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#FFC94B]/20 text-[#4A6163]">
              {count}
            </span>
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm text-[#4A6163]/70 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Arrow Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white border border-[#4A6163]/15 text-[#4A6163] hover:bg-[#F9FAF4] hover:border-[#4A6163] transition-colors shadow-2xs cursor-pointer"
            aria-label={`Scroll ${title} left`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white border border-[#4A6163]/15 text-[#4A6163] hover:bg-[#F9FAF4] hover:border-[#4A6163] transition-colors shadow-2xs cursor-pointer"
            aria-label={`Scroll ${title} right`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 
        Horizontally scrollable single row:
        - 5 in a row for desktop (lg:basis-[calc(20%-0.8rem)])
        - 4 in a row for tab (sm:basis-[calc(25%-0.75rem)])
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
            {/* Image Container with square aspect ratio - card framed in center */}
            <div className="relative aspect-square w-full overflow-hidden bg-[#4A6163]/5 flex items-center justify-center">
              <img
                src={item.localPath}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#4A6163] opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between bg-white">
              <div>
                <h4 className="text-xs sm:text-sm font-serif-display font-semibold text-[#4A6163] group-hover:text-[#F17A7E] transition-colors leading-snug line-clamp-1 mb-1">
                  {item.title}
                </h4>
                {item.subtitle && (
                  <p className="text-[10px] sm:text-xs text-[#4A6163]/70 line-clamp-1">
                    {item.subtitle}
                  </p>
                )}
              </div>

              <div className="pt-2 mt-2 border-t border-[#4A6163]/10 flex items-center justify-between text-[10px] sm:text-xs text-[#F9A66C] font-medium">
                <span>View Details</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface MediumDetailPageProps {
  mediumId: PageId;
  onNavigate: (page: PageId) => void;
}

export const MediumDetailPage: React.FC<MediumDetailPageProps> = ({
  mediumId,
  onNavigate,
}) => {
  const config = MEDIUM_CONFIGS[mediumId] || MEDIUM_CONFIGS['fine-arts'];
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

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
            Disciplines <span className="mx-1">/</span> {config.heading}
          </div>
        </div>
      </div>

      {/* Main Page Heading Section */}
      <section className="py-10 md:py-14 bg-white border-b border-[#4A6163]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F9A66C] mb-2">
              <span className="text-xl" role="img" aria-label={config.heading}>
                {config.icon}
              </span>
              <span>{config.badgeText}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-[#4A6163] tracking-tight mb-3">
              {config.heading}
            </h1>

            <p className="text-base sm:text-lg text-[#4A6163]/80 font-serif italic mb-4">
              ({config.subtitle})
            </p>

            {config.overview && (
              <p className="text-sm sm:text-base text-[#4A6163]/85 leading-relaxed">
                {config.overview}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT PER PAGE */}

      {/* 1. CANVASES AND FINE ARTS: Horizontally scrollable rows */}
      {mediumId === 'fine-arts' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Row 1: Handmade Cards (no subtitle line) */}
          <ScrollableRow
            title="Handmade Cards"
            count={HANDMADE_CARDS.length}
            items={HANDMADE_CARDS}
            onSelect={setSelectedItem}
          />

          {/* Row 2: Frames */}
          <ScrollableRow
            title="Frames & Mounted Art"
            subtitle="Original watercolor artworks professionally mounted and framed"
            count={FRAMES.length}
            items={FRAMES}
            onSelect={setSelectedItem}
          />

          {/* Row 3: Pen and Ink */}
          <ScrollableRow
            title="Pen and Ink"
            subtitle="Fine-line architectural and cityscape cross-hatching sketches"
            count={PEN_AND_INK.length}
            items={PEN_AND_INK}
            onSelect={setSelectedItem}
          />

          {/* Row 4: Pocket Paintings */}
          <ScrollableRow
            title="Pocket Paintings"
            subtitle="Miniature plein-air canvases painted on location in the mountains"
            count={POCKET_PAINTINGS.length}
            items={POCKET_PAINTINGS}
            onSelect={setSelectedItem}
          />

          {/* Row 5: Crafts */}
          <ScrollableRow
            title="Crafts & Keepsakes"
            subtitle="Handmade torans, 3D origami swans, personalized wooden plaques"
            count={CRAFTS.length}
            items={CRAFTS}
            onSelect={setSelectedItem}
          />
        </section>
      )}

      {/* 2. DIGITAL ART PAGE: Cards consistent in size with Canvas and Fine Arts */}
      {mediumId === 'graphic-design' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#4A6163] mb-2">
              Featured Digital Artworks
            </h2>
            <p className="text-sm text-[#4A6163]/75">
              Vector tracing, digital character illustrations, and Photoshop portrait painting.
            </p>
          </div>

          {/* Exact same sizing as cards on Canvas and Fine Arts: 5 in a row desktop, 4 tablet, 2 mobile */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {DIGITAL_ART.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="basis-[calc(50%-0.375rem)] sm:basis-[calc(25%-0.75rem)] lg:basis-[calc(20%-0.8rem)] group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#4A6163]/10 shadow-2xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
              >
                {/* Image Container with square aspect ratio matching Fine Arts */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#4A6163]/5 flex items-center justify-center">
                  <img
                    src={item.localPath}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#4A6163] opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Content matching Fine Arts */}
                <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h4 className="text-xs sm:text-sm font-serif-display font-semibold text-[#4A6163] group-hover:text-[#F17A7E] transition-colors leading-snug line-clamp-1 mb-1">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <p className="text-[10px] sm:text-xs text-[#4A6163]/70 line-clamp-1">
                        {item.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 mt-2 border-t border-[#4A6163]/10 flex items-center justify-between text-[10px] sm:text-xs text-[#F9A66C] font-medium">
                    <span>View Details</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. RANGOLI & MEHANDI PAGE: 2 Distinct Columns */}
      {mediumId === 'mehandi-makeup' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Column 1: Rangoli Art */}
            <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#FFC94B]/30 shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#F9A66C]">
                <span>🎨 Traditional Floor Art</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-display font-semibold text-[#4A6163] mb-2">
                Rangoli Art Collection
              </h2>
              <p className="text-sm text-[#4A6163]/80 mb-6 leading-relaxed">
                Elaborate symmetrical floor rangoli designs created for festivals, welcoming entrances, and celebratory occasions with organic powdered pigments and flower petals.
              </p>

              <div className="space-y-6">
                {RANGOLI_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#4A6163]/10 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row"
                  >
                    <div className="relative aspect-square sm:w-48 shrink-0 overflow-hidden bg-[#4A6163]/5">
                      <img
                        src={item.localPath}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 flex items-center justify-center text-[#4A6163] opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FFC94B] block mb-1">
                          {item.subtitle}
                        </span>
                        <h4 className="text-base font-serif-display font-semibold text-[#4A6163] mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#4A6163]/80 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                      <div className="pt-2.5 mt-2.5 border-t border-[#4A6163]/10 text-xs font-medium text-[#F9A66C] flex items-center justify-between">
                        <span>Inspect Rangoli</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Mehandi Art */}
            <div className="bg-[#FFF9F9] rounded-3xl p-6 sm:p-8 border border-[#F17A7E]/30 shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#F17A7E]">
                <span>🌿 Henna Styling & Traditions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-display font-semibold text-[#4A6163] mb-2">
                Mehandi Art Collection
              </h2>
              <p className="text-sm text-[#4A6163]/80 mb-6 leading-relaxed">
                Handcrafted 100% natural organic henna pastes ensuring rich dark stains. Specializing in intricate bridal mehndi, Indo-Western patterns, and festive event bookings.
              </p>

              <div className="space-y-6">
                {MEHANDI_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#4A6163]/10 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row"
                  >
                    <div className="relative aspect-square sm:w-48 shrink-0 overflow-hidden bg-[#4A6163]/5">
                      <img
                        src={item.localPath}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 flex items-center justify-center text-[#4A6163] opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#F17A7E] block mb-1">
                          {item.subtitle}
                        </span>
                        <h4 className="text-base font-serif-display font-semibold text-[#4A6163] mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#4A6163]/80 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                      <div className="pt-2.5 mt-2.5 border-t border-[#4A6163]/10 text-xs font-medium text-[#F17A7E] flex items-center justify-between">
                        <span>Inspect Mehandi</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Inspection Modal */}
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

            {/* Artwork Image View */}
            <div className="md:w-3/5 bg-[#141414] flex items-center justify-center p-4">
              <img
                src={selectedItem.localPath}
                alt={selectedItem.title}
                className="max-h-[60vh] md:max-h-[80vh] w-auto object-contain rounded-xl"
              />
            </div>

            {/* Artwork Details Pane */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#F9A66C] mb-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{selectedItem.category}</span>
                </div>
                <h3 className="text-2xl font-serif-display font-semibold text-[#4A6163] mb-2">
                  {selectedItem.title}
                </h3>
                {selectedItem.subtitle && (
                  <p className="text-xs font-medium text-[#4A6163]/60 mb-4">
                    {selectedItem.subtitle}
                  </p>
                )}
                <p className="text-sm text-[#4A6163]/85 leading-relaxed mb-6">
                  {selectedItem.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#4A6163]/10 space-y-2.5">
                <a
                  href="https://wa.me/919599755840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Inquire via WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onNavigate('contact');
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#4A6163] text-white text-xs font-semibold hover:bg-[#F9A66C] transition-colors cursor-pointer"
                >
                  Contact Studio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Switch to Other Mediums */}
      <section className="py-12 bg-[#F9FAF4] border-t border-[#4A6163]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-serif-display font-semibold text-[#4A6163]">
              Explore Other Mediums
            </h3>
            <button
              onClick={() => onNavigate('home')}
              className="text-xs font-semibold text-[#F9A66C] hover:underline cursor-pointer"
            >
              View All Mediums →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {Object.values(MEDIUM_CONFIGS).map((item) => {
              const isCurrent = item.id === mediumId;
              return (
                <button
                  key={item.id}
                  disabled={isCurrent}
                  onClick={() => {
                    onNavigate(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`p-3 sm:p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-white border-[#4A6163] shadow-xs opacity-60 cursor-default'
                      : 'bg-white/80 border-[#4A6163]/10 hover:border-[#F9A66C] hover:shadow-sm'
                  }`}
                >
                  <span className="text-lg sm:text-xl mb-1 block">{item.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#4A6163] block truncate">
                    {item.heading}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#4A6163]/60 block truncate">
                    {item.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banner above footer */}
      <ContactBanner onNavigateToContact={() => onNavigate('contact')} />
    </div>
  );
};
