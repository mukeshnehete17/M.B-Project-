import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import { BabyTRex, LittleBrachio, BotanicalLeaf, DinoFootprint, WashiTape, WaxSeal } from './DinoGardenElements';

export default function Hero() {
  const heroRef = useRef(null);
  const photoRef = useRef(null);
  const textRef = useRef(null);
  const decorationsRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    // Only apply heavier parallax scrub on desktop to keep mobile butter-smooth
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });

      if (photoRef.current) {
        tl.to(photoRef.current, { y: -50, scale: 0.97, rotation: -1 }, 0);
      }
      if (textRef.current) {
        tl.to(textRef.current, { y: -70, opacity: 0.6 }, 0);
      }
      if (decorationsRef.current) {
        tl.to(decorationsRef.current, { y: -30 }, 0);
      }
    }
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef} 
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#FFF9F2] via-[#F9F5F6] to-[#F8E8EE]"
    >
      {/* Background Soft Pastel Garden Glows & Leaves */}
      <div className="absolute top-16 left-8 w-64 sm:w-80 h-64 sm:h-80 bg-[#FDCEDF]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-8 w-72 sm:w-96 h-72 sm:h-96 bg-[#D8EEE5]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#FFF9F2]/80 rounded-full blur-2xl pointer-events-none" />

      {/* Floating Botanical Garden Leaves */}
      <div className="absolute top-24 left-4 sm:left-12 opacity-50 hidden sm:block">
        <BotanicalLeaf className="w-10 h-10 text-[#DCE8D5] animate-float" rotate={-15} />
      </div>
      <div className="absolute bottom-28 left-16 opacity-40 hidden md:block">
        <BotanicalLeaf className="w-8 h-8 text-[#D8EEE5] animate-float-reverse" rotate={45} />
      </div>
      <div className="absolute top-36 right-8 sm:right-20 opacity-40 hidden sm:block">
        <BotanicalLeaf className="w-9 h-9 text-[#DCE8D5] animate-float" rotate={30} />
      </div>

      {/* Hero Left Content */}
      <div ref={textRef} className="w-full lg:w-1/2 z-10 text-center lg:text-left mb-10 lg:mb-0 max-w-xl mx-auto lg:mx-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#FDCEDF] text-[#8A6D76] text-xs sm:text-sm shadow-2xs mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#EA99B8] animate-pulse" />
          <span className="serif tracking-widest font-semibold uppercase text-[11px] sm:text-xs text-[#5A434A]">
            A Beautiful Soul's Birthday
          </span>
          <span className="text-xs">🌸</span>
        </div>

        {/* Main Heading */}
        <div className="relative mb-5">
          <h1 className="serif text-4xl sm:text-6xl lg:text-7xl text-[#5A434A] leading-[1.15] font-normal">
            Happy Birthday<br/>
            <span className="handwriting text-[#EA99B8] text-5xl sm:text-7xl lg:text-8xl block mt-1 drop-shadow-2xs">
              Mugduuu ♡
            </span>
          </h1>

          {/* Tiny Cute Dino Next to Heading */}
          <div className="absolute -top-6 right-2 sm:right-10 lg:-right-4 hidden xs:block animate-dino-wiggle pointer-events-none">
            <BabyTRex className="w-14 h-14 sm:w-16 sm:h-16" color="#D8EEE5" flowerColor="#F2BED1" />
          </div>
        </div>

        {/* Meaningful Subtext */}
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#8A6D76] mb-8 font-light max-w-lg mx-auto lg:mx-0">
          More than a friend, you're my sister, my best buddy, my constant support, my safe place, and one of the most special people in my life. ♡
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
          <button 
            onClick={() => scrollTo('#memories')}
            className="px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-[#F2BED1] to-[#EA99B8] text-white rounded-full font-medium text-sm sm:text-base hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2 border border-white/40 shadow-xs"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>See Our Memories ♡</span>
          </button>
          
          <button 
            onClick={() => scrollTo('#final-surprise')}
            className="px-6 sm:px-7 py-3 sm:py-3.5 bg-white/80 border border-[#F2BED1] text-[#5A434A] rounded-full font-medium text-sm sm:text-base hover:bg-white hover:border-[#EA99B8] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-2xs"
          >
            <span className="font-serif">A Special Note</span>
            <ArrowRight className="w-4 h-4 text-[#EA99B8]" />
          </button>
        </div>

        {/* Tiny Dinosaur Footprints Trail */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mt-8 opacity-60">
          <DinoFootprint className="w-4 h-4 text-[#FDCEDF]" rotate={20} />
          <DinoFootprint className="w-4 h-4 text-[#F2BED1]" rotate={40} />
          <DinoFootprint className="w-4 h-4 text-[#EA99B8]" rotate={25} />
          <span className="serif text-xs text-[#8A6D76] italic">a little walk down memory lane</span>
        </div>
      </div>

      {/* Hero Scrapbook Photo with Polaroid, Tape & Cute Dinosaur */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center">
        {/* Floating Garden Sparkles / Hearts */}
        <div ref={decorationsRef} className="absolute inset-0 pointer-events-none select-none">
          <span className="absolute -top-2 left-6 sm:left-12 text-2xl sm:text-3xl animate-bounce" style={{ animationDuration: '3.5s' }}>🌸</span>
          <span className="absolute bottom-4 right-4 sm:right-10 text-2xl sm:text-3xl animate-pulse">✨</span>
          <span className="absolute top-1/2 -left-2 sm:-left-6 text-xl sm:text-2xl text-[#F2BED1]">💖</span>
        </div>
        
        {/* Main Polaroid Photo Container */}
        <div 
          ref={photoRef} 
          className="scrapbook-photo z-10 transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[290px] sm:max-w-sm md:max-w-md w-full"
        >
          {/* Top Washi Tape */}
          <div className="tape"></div>
          
          {/* Real Photo */}
          <div className="relative overflow-hidden rounded-sm bg-[#F8E8EE] aspect-[4/5] flex items-center justify-center border border-[#F8E8EE]">
            <img 
              src="/assets/photos/mugduuu-hero.jpg" 
              alt="Mugduuu" 
              className="w-full h-full object-cover rounded-xs" 
              loading="eager"
              onError={(e) => {
                e.currentTarget.src = '/assets/photos/about-portrait.jpg';
              }}
            />

            {/* Little Brachio Peeking from bottom right corner */}
            <div className="absolute -bottom-3 -right-3 z-20 pointer-events-none">
              <LittleBrachio className="w-14 h-14 sm:w-16 sm:h-16" color="#DCE8D5" hatColor="#F2BED1" />
            </div>
          </div>

          {/* Polaroid Caption */}
          <div className="flex items-center justify-between mt-4 px-1">
            <p className="handwriting text-2xl sm:text-3xl text-[#5A434A]">
              My Best Buddy ♡
            </p>
            <span className="serif text-xs px-2.5 py-1 rounded-full bg-[#F8E8EE] text-[#8A6D76] border border-[#FDCEDF]/50">
              🦖 Mugduuu Day
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}