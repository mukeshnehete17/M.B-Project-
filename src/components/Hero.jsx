import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, Heart } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);
  const photoRef = useRef(null);
  const textRef = useRef(null);
  const decorationsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      }
    });

    if (photoRef.current) {
      tl.to(photoRef.current, { y: -80, scale: 0.95, rotation: -2 }, 0);
    }
    if (textRef.current) {
      tl.to(textRef.current, { y: -120, opacity: 0.3 }, 0);
    }
    if (decorationsRef.current) {
      tl.to(decorationsRef.current, { y: -40 }, 0);
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
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 pt-28 pb-16 overflow-hidden bg-[#F9F5F6]"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#FDCEDF]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#F8E8EE] rounded-full blur-3xl pointer-events-none" />

      {/* Hero Text */}
      <div ref={textRef} className="w-full lg:w-1/2 z-10 text-center lg:text-left mb-12 lg:mb-0">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8E8EE] border border-[#FDCEDF] text-[#8A6D76] text-sm mb-6">
          <Sparkles className="w-4 h-4 text-[#EA99B8]" />
          <span className="serif tracking-wider font-semibold text-xs uppercase">A Beautiful Soul's Birthday</span>
        </div>

        <h1 className="serif text-5xl sm:text-6xl lg:text-7xl mb-6 text-[#5A434A] leading-tight">
          Happy Birthday<br/>
          <span className="handwriting text-[#EA99B8] text-6xl sm:text-7xl lg:text-8xl block mt-2">
            Mugduuu ♡
          </span>
        </h1>

        <p className="text-lg sm:text-xl leading-relaxed text-[#8A6D76] mb-8 font-light max-w-lg mx-auto lg:mx-0">
          More than a friend, you're my sister, my best buddy, my constant support, my safe place, and one of the most special people in my life. ♡
        </p>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <button 
            onClick={() => scrollTo('#memories')}
            className="px-7 py-3.5 bg-[#F2BED1] text-white rounded-full font-medium hover:bg-[#EA99B8] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            See Our Memories ♡
          </button>
          <button 
            onClick={() => scrollTo('#final-surprise')}
            className="px-7 py-3.5 border border-[#F2BED1] text-[#5A434A] rounded-full font-medium hover:bg-[#F8E8EE] transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            <span>A Special Note</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Scrapbook Hero Photo */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center">
        <div ref={decorationsRef} className="absolute inset-0 pointer-events-none select-none">
          <span className="absolute top-4 left-8 text-3xl animate-bounce" style={{ animationDuration: '3s' }}>🌸</span>
          <span className="absolute bottom-12 right-6 text-3xl animate-pulse">✨</span>
          <span className="absolute top-1/2 -left-4 text-2xl">💖</span>
        </div>
        
        <div ref={photoRef} className="scrapbook-photo z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-sm sm:max-w-md w-full">
          <div className="tape"></div>
          <div className="relative overflow-hidden rounded bg-[#F8E8EE] aspect-[4/5] flex items-center justify-center">
            <img 
              src="/assets/photos/mugduuu-hero.jpg" 
              alt="Mugduuu" 
              className="w-full h-full object-cover rounded" 
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <p className="handwriting text-center mt-4 text-2xl md:text-3xl text-[#5A434A]">My Best Buddy ♡</p>
        </div>
      </div>
    </section>
  );
}