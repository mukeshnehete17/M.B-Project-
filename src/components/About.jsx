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

export default function About() {
  const containerRef = useRef(null);

  const tags = [
    { 
      title: "Best Friend", 
      icon: "🦖", 
      badge: "Forever bond", 
      bg: "bg-white", 
      border: "border-[#FDCEDF]",
      rot: "-2deg",
      note: "always my person ♡"
    },
    { 
      title: "Sister", 
      icon: "🌸", 
      badge: "Chosen family", 
      bg: "bg-[#FFF9F2]", 
      border: "border-[#F8E8EE]",
      rot: "2.5deg",
      note: "sister by heart"
    },
    { 
      title: "Partner in Crime", 
      icon: "🥚", 
      badge: "Chaos duo", 
      bg: "bg-white", 
      border: "border-[#D8EEE5]",
      rot: "-1.5deg",
      note: "zero braincells required"
    },
    { 
      title: "Support System", 
      icon: "🌿", 
      badge: "Safe haven", 
      bg: "bg-[#F8E8EE]/70", 
      border: "border-[#FDCEDF]",
      rot: "3deg",
      note: "my constant anchor"
    },
    { 
      title: "My Best Buddy", 
      icon: "💗", 
      badge: "The greatest", 
      bg: "bg-white", 
      border: "border-[#F2BED1]",
      rot: "-3deg",
      note: "through everything"
    },
    { 
      title: "Always You", 
      icon: "✨", 
      badge: "One & only", 
      bg: "bg-[#FFF9F2]", 
      border: "border-[#DCE8D5]",
      rot: "2deg",
      note: "irreplaceable soul"
    },
  ];

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".about-tag");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 25, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.7,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background Decorative Garden Accents */}
      <div className="absolute top-10 right-4 sm:right-12 opacity-30 pointer-events-none">
        <BotanicalLeaf className="w-12 h-12 text-[#DCE8D5]" rotate={20} />
      </div>
      <div className="absolute bottom-12 left-4 sm:left-10 opacity-30 pointer-events-none">
        <BotanicalLeaf className="w-10 h-10 text-[#D8EEE5]" rotate={-35} />
      </div>

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8E8EE] border border-[#FDCEDF] text-[#8A6D76] text-xs font-serif mb-4 shadow-2xs">
          <span>🌿</span>
          <span className="tracking-wider uppercase font-semibold text-[11px] text-[#5A434A]">
            The Dino Scrapbook
          </span>
          <span>🦖</span>
        </div>

        <h2 className="serif text-3xl sm:text-5xl lg:text-6xl text-[#5A434A] mb-3 font-normal">
          About Mugduuu ♡
        </h2>
        
        <p className="handwriting text-2xl sm:text-3xl text-[#EA99B8] font-semibold leading-relaxed">
          More than a friend. More than a sister. Basically my best buddy.
        </p>

        {/* Footprint Trail */}
        <div className="flex items-center justify-center gap-3 mt-4 opacity-50">
          <DinoFootprint className="w-3.5 h-3.5 text-[#FDCEDF]" rotate={-10} />
          <DinoFootprint className="w-3.5 h-3.5 text-[#F2BED1]" rotate={15} />
          <DinoFootprint className="w-3.5 h-3.5 text-[#EA99B8]" rotate={-5} />
        </div>
      </div>

      {/* Collectible Scrapbook Sticker Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {tags.map((item, idx) => (
          <div
            key={idx}
            className={`about-tag scrapbook-card p-6 sm:p-7 flex flex-col justify-between ${item.bg} ${item.border} hover:scale-[1.03] transition-all duration-300 relative group`}
            style={{ transform: `rotate(${item.rot})` }}
          >
            {/* Top Washi Tape Strip */}
            <div className="tape"></div>

            {/* Card Header & Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl sm:text-3xl p-2 rounded-full bg-white shadow-2xs border border-[#F8E8EE] group-hover:rotate-12 transition-transform">
                {item.icon}
              </span>
              <span className="serif text-[11px] font-semibold uppercase tracking-wider text-[#8A6D76] bg-[#F9F5F6] px-2.5 py-1 rounded-full border border-[#FDCEDF]/40">
                {item.badge}
              </span>
            </div>

            {/* Core Title (Exact Existing Text) */}
            <div className="my-2">
              <h3 className="serif text-2xl sm:text-3xl text-[#5A434A] font-semibold tracking-tight">
                {item.title}
              </h3>
            </div>

            {/* Handwritten Accents & Decorative Subtext */}
            <div className="pt-3 border-t border-[#F8E8EE] flex items-center justify-between">
              <span className="font-note text-lg text-[#8A6D76] italic">
                {item.note}
              </span>
              <span className="text-xs text-[#EA99B8] opacity-0 group-hover:opacity-100 transition-opacity">
                ♡
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Cute Mascot Dino on Corner */}
      <div className="flex justify-center mt-12 sm:mt-16">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 border border-[#FDCEDF] shadow-xs">
          <CuteStego className="w-10 h-10" color="#D8EEE5" plateColor="#FDCEDF" />
          <p className="font-serif text-xs sm:text-sm text-[#8A6D76]">
            Every memory is stamped with infinite hugs and smiles 🦖🌸
          </p>
        </div>
      </div>
    </section>
  );
}