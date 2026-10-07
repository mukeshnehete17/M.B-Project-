import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { BabyTRex, LittleBrachio, BotanicalLeaf } from './DinoGardenElements';
import { Sparkles, Heart } from 'lucide-react';

export default function Intro({ onComplete }) {
  const containerRef = useRef(null);
  const dinoRef = useRef(null);
  const cakeRef = useRef(null);
  const candleFlameRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const ctaRef = useRef(null);
  const sparklesRef = useRef(null);
  const tlRef = useRef(null);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tlRef.current = tl;

      // 1. Initial State: hide elements
      gsap.set([dinoRef.current, cakeRef.current, text1Ref.current, text2Ref.current, ctaRef.current, sparklesRef.current], {
        opacity: 0,
      });

      // 2. Sparkles fade in softly
      tl.to(sparklesRef.current, {
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
      })
      // 3. Tiny cute dinosaur walks / hops into scene
      .fromTo(
        dinoRef.current,
        { opacity: 0, x: -60, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'back.out(1.5)' },
        "-=0.6"
      )
      // 4. Birthday cake appears in center
      .fromTo(
        cakeRef.current,
        { opacity: 0, y: 35, scale: 0.85 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'back.out(1.4)' },
        "-=0.4"
      )
      // 5. Candle flame lights up with a glow
      .fromTo(
        candleFlameRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1.2, opacity: 1, duration: 0.6, ease: 'elastic.out(1.2, 0.4)' },
        "-=0.2"
      )
      // 6. Text 1: "Someone very special has a birthday today..."
      .fromTo(
        text1Ref.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        "-=0.2"
      )
      // 7. Text 2: "It’s Mugduuu’s Birthday 🦖🌸"
      .fromTo(
        text2Ref.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.6)' },
        "+=0.2"
      )
      // 8. CTA Button appears
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 15, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power2.out' },
        "+=0.1"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleEnterWorld = () => {
    if (isEntering) return;
    setIsEntering(true);

    if (tlRef.current) {
      tlRef.current.kill();
    }

    gsap.timeline()
      .to(cakeRef.current, {
        scale: 1.2,
        opacity: 0,
        filter: "blur(6px)",
        duration: 0.8,
        ease: "power2.in",
      })
      .to([dinoRef.current, text1Ref.current, text2Ref.current, ctaRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.6,
        stagger: 0.05,
      }, "<")
      .to(containerRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.9,
        ease: "power2.inOut",
        onComplete: () => {
          onComplete();
          const main = document.getElementById("main-content");
          if (main) {
            gsap.to(main, { opacity: 1, duration: 1, ease: "power2.out" });
          }
        }
      });
  };

  const handleSkip = () => {
    if (tlRef.current) {
      tlRef.current.kill();
    }
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        onComplete();
        const main = document.getElementById("main-content");
        if (main) {
          gsap.to(main, { opacity: 1, duration: 0.6 });
        }
      }
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF9F2] via-[#F9F5F6] to-[#F8E8EE] px-4 select-none overflow-hidden"
    >
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-50 text-xs font-serif text-[#8A6D76] hover:text-[#5A2438] bg-white/80 hover:bg-white px-4 py-2 rounded-full border border-[#FDCEDF] shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
      >
        Skip intro →
      </button>

      {/* Floating Sparkles & Garden Accents in Background */}
      <div ref={sparklesRef} className="absolute inset-0 pointer-events-none opacity-0">
        <div className="absolute top-[12%] left-[15%] text-2xl animate-pulse text-[#EA99B8]">✨</div>
        <div className="absolute top-[22%] right-[18%] text-xl animate-float text-[#F2BED1]">🌸</div>
        <div className="absolute bottom-[25%] left-[18%] text-2xl animate-float-reverse text-[#EA99B8]">💖</div>
        <div className="absolute bottom-[18%] right-[20%] text-xl animate-pulse text-[#D8EEE5]">🌿</div>
        <div className="absolute top-1/2 left-[8%] hidden sm:block">
          <BotanicalLeaf className="w-8 h-8 opacity-40 text-[#DCE8D5]" rotate={-25} />
        </div>
        <div className="absolute top-1/2 right-[8%] hidden sm:block">
          <BotanicalLeaf className="w-8 h-8 opacity-40 text-[#D8EEE5]" rotate={30} />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(253,206,223,0.35)_0%,_transparent_70%)]" />
      </div>

      {/* Center Stage Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
        {/* Cute Mascot Dino & Cake Duo */}
        <div className="relative flex items-center justify-center mb-6">
          {/* Peeking Mini Dino */}
          <div ref={dinoRef} className="absolute -left-12 sm:-left-16 bottom-2 z-20 animate-dino-wiggle">
            <BabyTRex className="w-16 h-16 sm:w-20 sm:h-20" color="#D8EEE5" />
          </div>

          {/* Birthday Cake */}
          <div ref={cakeRef} className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center">
            <img
              src="/assets/photos/cake-reference.svg"
              alt="Birthday Cake"
              className="w-full h-full object-contain drop-shadow-md"
              onError={(e) => {
                e.currentTarget.src = '/assets/photos/cake-reference.png';
              }}
            />
            {/* Flickering Candle Flame Light */}
            <div 
              ref={candleFlameRef} 
              className="absolute top-[18%] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-200/60 blur-md pointer-events-none animate-candle-flicker" 
            />
          </div>

          {/* Tiny Brachio on Right */}
          <div className="absolute -right-10 sm:-right-14 bottom-4 z-0 opacity-80 hidden sm:block">
            <LittleBrachio className="w-14 h-14" color="#DCE8D5" />
          </div>
        </div>

        {/* Intro Texts */}
        <div className="space-y-3 px-2">
          <p
            ref={text1Ref}
            className="serif text-lg sm:text-2xl text-[#8A6D76] font-normal tracking-wide"
          >
            Someone very special has a birthday today...
          </p>

          <h1
            ref={text2Ref}
            className="handwriting text-4xl sm:text-6xl text-[#5A434A] font-bold leading-tight drop-shadow-xs"
          >
            It’s Mugduuu’s Birthday <span className="inline-block animate-bounce">🦖</span>🌸
          </h1>
        </div>

        {/* CTA Enter Button */}
        <div ref={ctaRef} className="mt-8">
          <button
            onClick={handleEnterWorld}
            className="group px-8 py-4 bg-gradient-to-r from-[#F2BED1] via-[#EA99B8] to-[#F2BED1] text-white rounded-full font-medium text-base sm:text-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-3 border border-white/40"
          >
            <Sparkles className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '6s' }} />
            <span className="font-serif tracking-wide">Enter Her Little World ♡</span>
            <span className="group-hover:translate-x-1 transition-transform">✨</span>
          </button>
        </div>
      </div>
    </div>
  );
}