import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  BabyTRex, 
  LittleBrachio, 
  CuteStego, 
  BotanicalLeaf, 
  DinoFootprint,
  WashiTape 
} from './DinoGardenElements';
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';

export default function Memories() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const memories = [
    { src: 'mem1.jpg', caption: 'Pure Chaos & Big Smiles', stamp: 'Dino Squad', rot: '-2deg' },
    { src: 'mem2.jpg', caption: 'Matching Bands & Endless Giggles', stamp: 'Bestie Energy', rot: '2.5deg' },
    { src: 'mem3.jpg', caption: 'The Goofy Mirror Squad', stamp: 'Unmatched Vibe', rot: '-1.5deg' },
    { src: 'mem4.jpg', caption: 'Our Unforgettable Hangouts', stamp: 'Precious Moments', rot: '3deg' },
    { src: 'mem5.jpg', caption: 'Campus Sunshine Days', stamp: 'Golden Memories', rot: '-2.5deg' },
    { src: 'mem6.jpg', caption: 'Laughs That Echo Forever', stamp: 'Always Mugduuu', rot: '1.5deg' },
  ];

  useEffect(() => {
    // Only initialize horizontal pinned scroll on desktop/large screens (>= 1024px)
    const isDesktop = window.innerWidth >= 1024;
    
    if (isDesktop && wrapperRef.current && sectionRef.current) {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray('.memory-slide');
        if (cards.length > 0) {
          gsap.to(cards, {
            xPercent: -100 * (cards.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              scrub: 1,
              end: () => `+=${cards.length * 550}`,
              anticipatePin: 1,
            }
          });
        }
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const openLightbox = (index) => {
    setSelectedPhoto(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhoto((prev) => (prev + 1) % memories.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhoto((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <section 
      id="memories" 
      ref={sectionRef} 
      className="relative w-full py-20 lg:py-0 lg:min-h-screen flex flex-col justify-center bg-gradient-to-b from-[#F8E8EE] via-[#F9F5F6] to-[#F8E8EE] overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#FDCEDF]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#D8EEE5]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="z-10 text-center px-4 mb-8 lg:mb-12 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#FDCEDF] text-[#8A6D76] text-xs font-serif shadow-2xs mb-3">
          <span>📸</span>
          <span className="serif tracking-widest font-semibold uppercase text-[11px] text-[#5A434A]">
            Real Photographs & Stories
          </span>
          <span>🦖</span>
        </div>
        
        <h2 className="serif text-3xl sm:text-5xl lg:text-6xl text-[#5A434A] font-normal">
          Our Real <span className="handwriting text-5xl sm:text-6xl lg:text-7xl text-[#EA99B8]">Memories ♡</span>
        </h2>
        
        <p className="font-note text-xl sm:text-2xl text-[#8A6D76] mt-2">
          Tap any polaroid to zoom into the memory ✨
        </p>
      </div>
      
      {/* Desktop Horizontal Rail (Hidden on Mobile) */}
      <div className="hidden lg:flex w-[600vw]" ref={wrapperRef}>
        {memories.map((mem, i) => (
          <div 
            key={i} 
            className="memory-slide flex-shrink-0 w-screen flex justify-center items-center px-12"
          >
            <div 
              onClick={() => openLightbox(i)}
              className="scrapbook-photo cursor-pointer transform hover:scale-105 hover:rotate-0 transition-all duration-300 max-w-md w-full group relative"
              style={{ transform: `rotate(${mem.rot})` }}
            >
              <div className="tape"></div>
              
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#F9F5F6] flex items-center justify-center border border-[#F8E8EE]">
                <img 
                  src={`/assets/photos/${mem.src}`} 
                  alt={mem.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/photos/mugduuu-hero.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/90 text-[#5A434A] shadow-md">
                    <ZoomIn className="w-5 h-5 text-[#EA99B8]" />
                  </span>
                </div>
              </div>

              {/* Caption & Dinosaur Badge */}
              <div className="flex items-center justify-between mt-4 px-1">
                <p className="handwriting text-2xl lg:text-3xl text-[#5A434A]">
                  {mem.caption}
                </p>
                <span className="serif text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F8E8EE] text-[#8A6D76] border border-[#FDCEDF]/50">
                  {mem.stamp}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Vertical / Grid Memory Stream (Mobile-First Optimized) */}
      <div className="lg:hidden px-4 sm:px-8 max-w-lg mx-auto flex flex-col gap-8">
        {memories.map((mem, i) => (
          <div 
            key={i}
            onClick={() => openLightbox(i)}
            className="scrapbook-photo cursor-pointer transform active:scale-98 transition-all duration-200 w-full relative shadow-md"
            style={{ transform: `rotate(${i % 2 === 0 ? '-1.5deg' : '1.5deg'})` }}
          >
            <div className="tape"></div>
            
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#F9F5F6] flex items-center justify-center border border-[#F8E8EE]">
              <img 
                src={`/assets/photos/${mem.src}`} 
                alt={mem.caption} 
                className="w-full h-full object-cover" 
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = '/assets/photos/mugduuu-hero.jpg';
                }}
              />
              <div className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 text-[#5A434A] shadow-xs">
                <ZoomIn className="w-4 h-4 text-[#EA99B8]" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 px-1">
              <p className="handwriting text-2xl text-[#5A434A]">
                {mem.caption}
              </p>
              <span className="serif text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#F8E8EE] text-[#8A6D76] border border-[#FDCEDF]/50">
                {mem.stamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Tapped Photo */}
      {selectedPhoto !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#2A1B20]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all cursor-pointer"
            aria-label="Close photo"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev / Next Arrows */}
          <button
            onClick={prevPhoto}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all cursor-pointer hidden sm:block"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all cursor-pointer hidden sm:block"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Enlarged Polaroid Card */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="scrapbook-photo max-w-xl w-full bg-white p-4 sm:p-6 rounded-lg shadow-2xl relative animate-in zoom-in-95 duration-200"
          >
            <div className="tape"></div>
            
            <div className="relative max-h-[60vh] sm:max-h-[70vh] overflow-hidden rounded bg-[#F8E8EE] flex items-center justify-center">
              <img 
                src={`/assets/photos/${memories[selectedPhoto].src}`} 
                alt={memories[selectedPhoto].caption} 
                className="w-full h-full object-contain max-h-[60vh]"
                onError={(e) => {
                  e.currentTarget.src = '/assets/photos/mugduuu-hero.jpg';
                }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between px-2">
              <div>
                <p className="handwriting text-2xl sm:text-3xl text-[#5A434A]">
                  {memories[selectedPhoto].caption}
                </p>
                <p className="font-note text-lg text-[#8A6D76]">
                  Memory {selectedPhoto + 1} of {memories.length} 🦖🌸
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="serif text-xs font-semibold px-3 py-1 rounded-full bg-[#F8E8EE] text-[#EA99B8] border border-[#FDCEDF]">
                  {memories[selectedPhoto].stamp}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}