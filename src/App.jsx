import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Memories from './components/Memories';
import SpecialMoments from './components/SpecialMoments';
import WhySpecial from './components/WhySpecial';
import BirthdayWish from './components/BirthdayWish';
import FinalSurprise from './components/FinalSurprise';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  
  useEffect(() => {
    if (!introFinished) return;
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Fade in main site once mounted
    const timer = setTimeout(() => {
      gsap.to("#main-content", { opacity: 1, duration: 1.2, ease: "power2.out" });
    }, 100);

    return () => {
      clearTimeout(timer);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, [introFinished]);

  return (
    <main className="relative w-full min-h-screen bg-[#F9F5F6] text-[#5A434A]">
      {!introFinished && <Intro onComplete={() => setIntroFinished(true)} />}
      
      {introFinished && (
        <div className="opacity-0" id="main-content">
          <Navbar />
          <Hero />
          <About />
          <Memories />
          <SpecialMoments />
          <WhySpecial />
          <BirthdayWish />
          <FinalSurprise />
        </div>
      )}
    </main>
  );
}