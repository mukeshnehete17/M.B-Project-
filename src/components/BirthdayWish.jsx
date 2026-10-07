import { useRef } from "react";
import confetti from "canvas-confetti";
import { BabyTRex, LittleBrachio, BotanicalLeaf, DinoFootprint, WaxSeal, WashiTape } from "./DinoGardenElements";
import { Heart, Sparkles } from "lucide-react";

export default function BirthdayWish() {
  const letterRef = useRef(null);

  const handleSprinkleLove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x, y },
      colors: ["#F2BED1", "#FDCEDF", "#EA99B8", "#D8EEE5", "#FFF9F2"],
    });
  };

  return (
    <section 
      id="a-special-note" 
      className="relative py-20 sm:py-28 px-4 sm:px-8 flex justify-center overflow-hidden bg-gradient-to-b from-[#F9F5F6] via-[#F8E8EE] to-[#F9F5F6]"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-[#FDCEDF]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Botanical Elements */}
      <div className="absolute top-8 left-6 opacity-35 pointer-events-none hidden sm:block">
        <BotanicalLeaf className="w-10 h-10 text-[#DCE8D5]" rotate={-15} />
      </div>
      <div className="absolute bottom-8 right-6 opacity-35 pointer-events-none hidden sm:block">
        <BotanicalLeaf className="w-10 h-10 text-[#D8EEE5]" rotate={30} />
      </div>

      {/* Main Letter Card */}
      <div 
        ref={letterRef}
        className="relative max-w-2xl w-full parchment-letter p-6 sm:p-12 md:p-14 rounded-2xl shadow-xl border border-[#FDCEDF] transition-all duration-300"
      >
        {/* Top Washi Tape Strip */}
        <div className="tape"></div>

        {/* Vintage Wax Seal at Top Corner */}
        <div className="absolute -top-5 -right-4 sm:-top-6 sm:-right-5 z-20">
          <WaxSeal className="w-12 h-12 sm:w-14 sm:h-14" icon="🦖" />
        </div>

        {/* Tiny Dino Peeking on Top Left */}
        <div className="absolute -top-8 left-4 z-20 animate-dino-wiggle hidden sm:block">
          <LittleBrachio className="w-14 h-14" color="#DCE8D5" hatColor="#F2BED1" />
        </div>

        {/* Letter Header */}
        <div className="text-center mb-8 pb-4 border-b border-[#FDCEDF]/60">
          <div className="inline-flex items-center gap-1.5 text-xs font-serif uppercase tracking-widest text-[#8A6D76] mb-2">
            <span>🌸</span>
            <span>A Letter From The Heart</span>
            <span>🌸</span>
          </div>
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl text-[#5A434A] font-normal">
            A Birthday Wish For You ♡
          </h2>
        </div>

        {/* Preserved Letter Body Text */}
        <div className="space-y-5 text-base sm:text-lg md:text-xl leading-relaxed text-[#5A434A] font-light">
          <p className="first-letter:text-4xl first-letter:font-serif first-letter:text-[#EA99B8] first-letter:mr-1 first-letter:float-left">
            May this year bring you more happiness, good health, new opportunities, amazing people, and everything you dream of.
          </p>
          <p>
            Keep smiling. Keep being your crazy, kind, and beautiful self.
          </p>
          <p className="font-medium text-[#5A2438]">
            You deserve all the love and happiness in the world.
          </p>
          
          {/* Handwritten Signoff */}
          <div className="pt-6 text-right">
            <p className="handwriting text-3xl sm:text-4xl text-[#EA99B8] font-bold">
              Always stay the same. ♡
            </p>
            <p className="font-note text-xl text-[#8A6D76] mt-1">
              — your buddy forever 🦖
            </p>
          </div>
        </div>

        {/* Interactive Love Button */}
        <div className="mt-8 pt-6 border-t border-[#F8E8EE] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 opacity-70">
            <DinoFootprint className="w-3.5 h-3.5 text-[#FDCEDF]" rotate={15} />
            <span className="serif text-xs text-[#8A6D76]">Sealed with dinosaur hugs</span>
          </div>

          <button
            onClick={handleSprinkleLove}
            className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[#F8E8EE] hover:bg-[#FDCEDF] text-[#5A434A] border border-[#FDCEDF] shadow-2xs hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#EA99B8]" />
            <span>Sprinkle Birthday Love ✨</span>
          </button>
        </div>
      </div>
    </section>
  );
}