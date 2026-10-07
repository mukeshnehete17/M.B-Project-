import { useEffect, useRef } from "react";
import gsap from "gsap";
import { 
  BabyTRex, 
  LittleBrachio, 
  CuteStego, 
  DinoEgg, 
  BotanicalLeaf, 
  DinoFootprint,
  WashiTape 
} from "./DinoGardenElements";
import { Sparkles, Heart } from "lucide-react";

export default function WhySpecial() {
  const containerRef = useRef(null);

  const reasons = [
    {
      text: "You always listen.",
      badge: "Empathy Level: 100%",
      icon: "🌸",
      rot: "-1deg",
      bg: "bg-white",
      color: "text-[#EA99B8]"
    },
    {
      text: "You make everything fun.",
      badge: "Chaos & Joy: Maximum",
      icon: "🦖",
      rot: "1.5deg",
      bg: "bg-[#FFF9F2]",
      color: "text-[#5A434A]"
    },
    {
      text: "You're strong and independent.",
      badge: "Resilience: Unbreakable",
      icon: "🌿",
      rot: "-1.2deg",
      bg: "bg-white",
      color: "text-[#5A434A]"
    },
    {
      text: "You care about people deeply.",
      badge: "Heart: Pure Gold",
      icon: "💗",
      rot: "1.8deg",
      bg: "bg-[#F8E8EE]/60",
      color: "text-[#EA99B8]"
    },
    {
      text: "You have the prettiest smile.",
      badge: "Smile Power: Radiant",
      icon: "✨",
      rot: "-1.5deg",
      bg: "bg-white",
      color: "text-[#5A434A]"
    },
    {
      text: "You inspire everyone around you.",
      badge: "Aura: 10/10 Sparkle",
      icon: "🌟",
      rot: "1.2deg",
      bg: "bg-[#FFF9F2]",
      color: "text-[#5A434A]"
    },
    {
      text: "You're just YOU — and that's enough.",
      badge: "Rarity: One in 8 Billion",
      icon: "🥚",
      rot: "-1deg",
      bg: "bg-gradient-to-r from-white via-[#FFF9F2] to-white",
      color: "text-[#EA99B8]"
    },
  ];

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".reason-card");
    gsap.fromTo(
      cards,
      { opacity: 0, x: -25, scale: 0.98 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section 
      id="messages" 
      ref={containerRef} 
      className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-16 max-w-4xl mx-auto overflow-hidden"
    >
      {/* Background Soft Botanicals */}
      <div className="absolute top-12 left-2 opacity-30 pointer-events-none hidden sm:block">
        <BotanicalLeaf className="w-12 h-12 text-[#D8EEE5]" rotate={-30} />
      </div>
      <div className="absolute bottom-16 right-2 opacity-30 pointer-events-none hidden sm:block">
        <BotanicalLeaf className="w-10 h-10 text-[#DCE8D5]" rotate={25} />
      </div>

      {/* Header with Dinosaur Field Guide Concept */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D8EEE5]/70 border border-[#B8D5B0] text-[#5A434A] text-xs font-serif mb-4 shadow-2xs">
          <span>🦖</span>
          <span className="tracking-widest font-semibold uppercase text-[11px]">
            SPECIES: MUGDUUU • FIELD GUIDE
          </span>
          <span>📋</span>
        </div>

        <h2 className="serif text-3xl sm:text-5xl lg:text-6xl text-[#5A434A] mb-3 font-normal">
          Why You're So Special ♡
        </h2>
        
        <p className="font-note text-2xl sm:text-3xl text-[#8A6D76]">
          A cute official field-note log on why you light up the world ✨
        </p>
      </div>

      {/* Field Note Cards List */}
      <div className="flex flex-col gap-4 sm:gap-5">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className={`reason-card scrapbook-card p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 ${item.bg} border border-[#FDCEDF]/60 hover:scale-[1.01] transition-all duration-200 shadow-xs group`}
            style={{ transform: `rotate(${item.rot})` }}
          >
            {/* Left: Icon & Exact Text */}
            <div className="flex items-center gap-3.5 flex-1">
              <span className="text-2xl p-2 rounded-full bg-white shadow-2xs border border-[#F8E8EE] group-hover:rotate-12 transition-transform flex-shrink-0">
                {item.icon}
              </span>
              <p className="serif text-lg sm:text-xl md:text-2xl text-[#5A434A] font-medium">
                {item.text}
              </p>
            </div>

            {/* Right: Cute Field Guide Attribute Badge */}
            <div className="self-end sm:self-center">
              <span className="serif text-xs font-semibold px-3 py-1 rounded-full bg-[#F8E8EE] text-[#8A6D76] border border-[#FDCEDF]/60 whitespace-nowrap shadow-2xs">
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Cute Mascot Dino Footer */}
      <div className="flex justify-center mt-10">
        <div className="inline-flex items-center gap-2 text-xs font-serif text-[#8A6D76] bg-white/70 px-4 py-2 rounded-full border border-[#FDCEDF]/50">
          <BabyTRex className="w-6 h-6" color="#D8EEE5" flowerColor="#F2BED1" />
          <span>Verdict: Certified 100% Wonderful Best Buddy ♡</span>
        </div>
      </div>
    </section>
  );
}