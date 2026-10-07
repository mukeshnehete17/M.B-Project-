import { useState, useRef } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { BabyTRex, LittleBrachio, CuteStego, DinoEgg, BotanicalLeaf, DinoFootprint } from './DinoGardenElements';
import { Sparkles, Heart, Crown, RotateCcw } from 'lucide-react';

export default function FinalSurprise() {
  const [isWished, setIsWished] = useState(false);
  const containerRef = useRef(null);
  const particlesRef = useRef(null);
  const cakeRef = useRef(null);

  const handleMakeWish = () => {
    setIsWished(true);
    
    // Background transition to a dreamy starry dusk garden
    gsap.to(containerRef.current, {
      backgroundColor: "#2B1A22",
      duration: 1.2,
      ease: "power2.out"
    });

    // Multi-stage confetti celebration
    const end = Date.now() + 2 * 1000;
    const colors = ['#F2BED1', '#FDCEDF', '#EA99B8', '#FFF9F2', '#D8EEE5', '#FFD93D'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Generate floating sparkles & hearts
    const particleCount = 45;
    const fragment = document.createDocumentFragment();
    const symbols = ['✨', '💖', '🌸', '🦖', '🌟', '🦕'];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute text-xl sm:text-2xl select-none pointer-events-none';
      particle.innerHTML = symbols[i % symbols.length];
      fragment.appendChild(particle);
    }
    
    if (particlesRef.current) {
      particlesRef.current.innerHTML = '';
      particlesRef.current.appendChild(fragment);

      gsap.fromTo(
        particlesRef.current.children,
        { x: 0, y: 0, scale: 0.5, opacity: 1 },
        {
          x: () => (Math.random() - 0.5) * window.innerWidth * 0.9,
          y: () => (Math.random() - 0.5) * window.innerHeight * 0.85,
          rotation: () => Math.random() * 360,
          scale: () => Math.random() * 1.5 + 0.8,
          opacity: 0,
          duration: 3.5,
          ease: "power3.out",
          stagger: 0.02,
        }
      );
    }
  };

  const handleResetWish = () => {
    setIsWished(false);
    gsap.to(containerRef.current, {
      backgroundColor: "#F9F5F6",
      duration: 0.8
    });
  };

  return (
    <section 
      id="final-surprise" 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden bg-[#F9F5F6] transition-colors duration-1000"
    >
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none flex items-center justify-center" />
      
      {!isWished ? (
        <div className="z-10 text-center flex flex-col items-center max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-500">
          {/* Cake Icon & Cute Dino Duo */}
          <div className="relative mb-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-md border border-[#FDCEDF] flex items-center justify-center animate-bounce" style={{ animationDuration: '2.5s' }}>
              <span className="text-5xl sm:text-6xl">🎂</span>
            </div>
            
            <div className="absolute -bottom-2 -left-8 animate-dino-wiggle hidden xs:block">
              <BabyTRex className="w-12 h-12" color="#D8EEE5" flowerColor="#F2BED1" />
            </div>
            <div className="absolute -bottom-2 -right-8 hidden xs:block">
              <LittleBrachio className="w-12 h-12" color="#DCE8D5" hatColor="#EA99B8" />
            </div>
          </div>

          <h2 className="serif text-3xl sm:text-5xl text-[#5A434A] mb-4 font-normal">
            One Final Surprise For You
          </h2>

          <p className="font-note text-xl sm:text-2xl text-[#8A6D76] mb-8 max-w-md leading-relaxed">
            Close your eyes, make the deepest wish in your heart, and click below... ✨
          </p>

          <button 
            onClick={handleMakeWish}
            className="group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#F2BED1] via-[#EA99B8] to-[#F2BED1] text-white text-xl sm:text-2xl serif rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-3 border border-white/40"
          >
            <Sparkles className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '4s' }} />
            <span>Make A Wish</span>
            <span className="group-hover:scale-125 transition-transform">✨</span>
          </button>
        </div>
      ) : (
        <div className="z-10 text-center flex flex-col items-center px-4 max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-700 text-white">
          {/* Celebration Crown */}
          <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-[#FDCEDF]/30 shadow-lg mb-6 animate-bounce" style={{ animationDuration: '2s' }}>
            <span className="text-5xl sm:text-6xl">👑</span>
          </div>

          <h1 className="handwriting text-5xl sm:text-7xl lg:text-8xl text-[#FDCEDF] mb-6 drop-shadow-lg leading-tight font-bold">
            Happy Birthday, Mugduuu ♡
          </h1>

          <div className="space-y-3 mb-8">
            <p className="serif text-2xl sm:text-3xl text-[#FFF9F2] font-light tracking-wide">
              Keep smiling always.
            </p>
            <p className="serif text-2xl sm:text-3xl text-[#FFF9F2] font-light tracking-wide">
              Keep being the wonderful person you are.
            </p>
            <p className="font-note text-2xl sm:text-3xl text-[#D8EEE5] pt-2">
              Stay the same crazy, kind, wonderful Mugduuu 🦖🌸
            </p>
          </div>

          {/* Sibling & Best Buddy Footer Card */}
          <div className="inline-block px-6 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white/10 backdrop-blur-md border border-[#FDCEDF]/40 shadow-md">
            <p className="handwriting text-2xl sm:text-3xl text-[#F2BED1]">
              — your best buddy forever & always ♡
            </p>
          </div>

          {/* Reset / Relive Button */}
          <div className="mt-10">
            <button
              onClick={handleResetWish}
              className="inline-flex items-center gap-2 text-xs font-serif text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/20 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Wish Again</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}