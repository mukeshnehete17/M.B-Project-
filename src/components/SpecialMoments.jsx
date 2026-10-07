import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BabyTRex, BotanicalLeaf, DinoFootprint, WaxSeal, WashiTape } from "./DinoGardenElements";
import { Sparkles, Heart } from "lucide-react";

export default function SpecialMoments() {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { scale: 0.94, opacity: 0, y: 30 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section 
      id="gallery" 
      className="relative py-20 sm:py-28 px-4 sm:px-8 flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#F8E8EE] via-[#F9F5F6] to-[#F9F5F6]"
    >
      {/* Background Soft Glows & Leaves */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FDCEDF]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-8 opacity-30 pointer-events-none hidden sm:block">
        <BotanicalLeaf className="w-10 h-10 text-[#DCE8D5]" rotate={-20} />
      </div>
      <div className="absolute bottom-12 right-8 opacity-30 pointer-events-none hidden sm:block">
        <BotanicalLeaf className="w-10 h-10 text-[#D8EEE5]" rotate={35} />
      </div>

      {/* Header Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#FDCEDF] text-[#8A6D76] text-xs font-serif shadow-2xs mb-8">
        <Sparkles className="w-3.5 h-3.5 text-[#EA99B8]" />
        <span className="serif tracking-widest font-semibold uppercase text-[11px] text-[#5A434A]">
          Treasured Garden Snapshot
        </span>
        <span className="text-xs">🌸</span>
      </div>

      {/* Centerpiece Scrapbook Photo Card */}
      <div 
        ref={cardRef} 
        className="scrapbook-photo max-w-lg sm:max-w-xl w-full p-4 sm:p-7 bg-white relative group transform hover:rotate-0 transition-transform duration-500 shadow-xl"
        style={{ transform: "rotate(-1deg)" }}
      >
        {/* Top Washi Tape */}
        <div className="tape"></div>

        {/* Real Photo Frame */}
        <div className="w-full h-72 sm:h-96 rounded-sm bg-[#F8E8EE] flex items-center justify-center overflow-hidden border border-[#F8E8EE] relative">
          <img
            src="/assets/photos/mugduuu-hero.jpg"
            alt="Special Moment"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/assets/photos/about-portrait.jpg";
            }}
          />

          {/* Cute Little T-Rex in Bottom Right Corner */}
          <div className="absolute -bottom-3 -right-3 z-20 pointer-events-none">
            <BabyTRex className="w-14 h-14 sm:w-16 sm:h-16" color="#D8EEE5" flowerColor="#F2BED1" />
          </div>
        </div>

        {/* Preserved Core Quote */}
        <div className="pt-6 pb-2 px-2">
          <p className="handwriting text-2xl sm:text-4xl text-[#5A434A] leading-relaxed">
            "One of those moments I'll always remember."
          </p>

          <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-[#F8E8EE]">
            <DinoFootprint className="w-3 h-3 text-[#FDCEDF]" rotate={20} />
            <span className="font-note text-lg text-[#8A6D76]">
              Forever in my heart ♡
            </span>
            <DinoFootprint className="w-3 h-3 text-[#FDCEDF]" rotate={-20} />
          </div>
        </div>
      </div>
    </section>
  );
}