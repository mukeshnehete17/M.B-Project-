import { useState, useRef } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';

export default function FinalSurprise() {
  const [isWished, setIsWished] = useState(false);
  const containerRef = useRef(null);
  const particlesRef = useRef(null);

  const handleMakeWish = () => {
    setIsWished(true);
    
    // Background transition
    gsap.to(containerRef.current, {
      backgroundColor: "#2A1B20", // Darker contrast pink/brown for dramatic effect
      duration: 1.5
    });

    // Confetti burst
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#F2BED1', '#FDCEDF', '#EA99B8', '#FFF0F5', '#FFD93D'],
    });

    // Generate floating sparkles/hearts
    const particleCount = 80;
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute text-2xl select-none pointer-events-none';
      if (i % 3 === 0) particle.innerHTML = '✨';
      else if (i % 3 === 1) particle.innerHTML = '💖';
      else particle.innerHTML = '🌸';
      fragment.appendChild(particle);
    }
    
    if (particlesRef.current) {
      particlesRef.current.appendChild(fragment);

      // Explode particles outward
      gsap.to(particlesRef.current.children, {
        x: () => (Math.random() - 0.5) * window.innerWidth * 0.9,
        y: () => (Math.random() - 0.5) * window.innerHeight * 0.9,
        rotation: () => Math.random() * 360,
        scale: () => Math.random() * 2 + 0.5,
        opacity: 0,
        duration: 3.5,
        ease: "power3.out",
        stagger: 0.01,
      });
    }
  };

  return (
    <section 
      id="final-surprise" 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden bg-[#F9F5F6] transition-colors duration-1000"
    >
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none flex items-center justify-center" />
      
      {!isWished ? (
        <div className="z-10 text-center flex flex-col items-center max-w-lg">
          <div className="text-5xl mb-4 animate-bounce">🎂</div>
          <h2 className="serif text-4xl sm:text-5xl text-[#5A434A] mb-4">
            One Final Surprise For You
          </h2>
          <p className="serif text-xl text-[#8A6D76] mb-8 italic">
            Close your eyes, make the deepest wish in your heart, and click below...
          </p>
          <button 
            onClick={handleMakeWish}
            className="px-10 py-5 bg-[#F2BED1] text-white text-2xl serif rounded-full shadow-lg hover:bg-[#EA99B8] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-3"
          >
            <span>Make A Wish</span>
            <span>✨</span>
          </button>
        </div>
      ) : (
        <div className="z-10 text-center flex flex-col items-center px-4 animate-in fade-in zoom-in duration-700">
          <div className="text-6xl mb-6">👑</div>
          <h1 className="handwriting text-5xl sm:text-7xl text-[#FDCEDF] mb-6 drop-shadow-md">
            Happy Birthday, Mugduuu ♡
          </h1>
          <p className="serif text-2xl sm:text-3xl text-[#F8E8EE] mb-2 font-light">Keep smiling always.</p>
          <p className="serif text-2xl sm:text-3xl text-[#F8E8EE] mb-8 font-light">Keep being the wonderful person you are.</p>
          <div className="inline-block px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-[#FDCEDF]/30">
            <p className="handwriting text-2xl sm:text-3xl text-[#F2BED1]">— your best buddy forever & always ♡</p>
          </div>
        </div>
      )}
    </section>
  );
}