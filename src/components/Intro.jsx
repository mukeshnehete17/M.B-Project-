import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Intro({ onComplete }) {
  const containerRef = useRef(null);
  const heartRef = useRef(null);
  const cakeRef = useRef(null);
  const textRef = useRef(null);
  const particlesRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tlRef.current = tl;

    // Heart appears & pulses
    tl.fromTo(heartRef.current, 
      { scale: 0, opacity: 0 },
      { scale: 1.2, opacity: 1, duration: 1.5, ease: "back.out(1.7)" }
    )
    // Heart dissolves, Cake appears
    .to(heartRef.current, { scale: 0.8, opacity: 0, duration: 0.8, delay: 0.5 })
    .fromTo(cakeRef.current,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power2.out" }
    )
    // Text reveals
    .fromTo(textRef.current ? textRef.current.children : [],
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 1, stagger: 1.2, ease: "power2.out" },
      "-=0.5"
    )
    // Candles blow out & explosion
    .to(cakeRef.current, { opacity: 0, scale: 1.15, duration: 1, delay: 1.5, filter: "blur(8px)" })
    .to(particlesRef.current, { opacity: 1, scale: 1.8, duration: 1 }, "<")
    .to(containerRef.current, { opacity: 0, duration: 1.2, onComplete: () => {
        onComplete();
        gsap.to("#main-content", { opacity: 1, duration: 1.2 });
    }});

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (tlRef.current) {
      tlRef.current.kill();
    }
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        onComplete();
        gsap.to("#main-content", { opacity: 1, duration: 0.8 });
      }
    });
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex items-center justify-center bg-[#F9F5F6] select-none">
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-50 text-xs serif text-[#8A6D76] hover:text-[#5A434A] bg-white/70 hover:bg-white px-4 py-1.5 rounded-full border border-[#FDCEDF] transition-all cursor-pointer"
      >
        Skip Intro →
      </button>

      {/* Heart */}
      <div ref={heartRef} className="absolute text-7xl text-[#F2BED1] drop-shadow-md">
        💖
      </div>
      
      {/* Birthday Cake */}
      <div ref={cakeRef} className="absolute flex flex-col items-center opacity-0 max-w-xs sm:max-w-sm w-full px-4">
        <img 
          src="/assets/photos/cake-reference.svg" 
          alt="Birthday Cake" 
          className="w-56 h-56 sm:w-72 sm:h-72 object-contain drop-shadow-lg" 
          onError={(e) => {
            e.target.src = '/assets/photos/cake-reference.png';
          }}
        />
      </div>

      {/* Intro Text */}
      <div ref={textRef} className="absolute top-[16%] sm:top-[20%] flex flex-col items-center text-center px-4">
        <p className="serif text-xl sm:text-2xl text-[#8A6D76] opacity-0 font-light">
          Someone truly special has a birthday today...
        </p>
        <h1 className="handwriting text-4xl sm:text-6xl text-[#5A434A] mt-3 opacity-0 font-bold">
          Happy Birthday Mugduuu ♡
        </h1>
      </div>

      {/* Particles radial glow */}
      <div 
        ref={particlesRef} 
        className="absolute inset-0 pointer-events-none opacity-0 bg-[radial-gradient(circle_at_center,_#FDCEDF_0%,_transparent_70%)]" 
      />
    </div>
  );
}