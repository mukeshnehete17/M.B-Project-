import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navRef.current, {
          paddingTop: "12px",
          paddingBottom: "12px",
          backgroundColor: "rgba(249, 245, 246, 0.85)",
          boxShadow: "0 10px 30px rgba(90, 67, 74, 0.08)",
          duration: 0.3,
        });
      } else {
        gsap.to(navRef.current, {
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "rgba(249, 245, 246, 0.6)",
          boxShadow: "none",
          duration: 0.3,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-40 px-8 md:px-16 flex items-center justify-between transition-all glass-nav py-5"
    >
      <div className="handwriting text-2xl md:text-3xl text-[#5A434A] font-bold">
        Mugduuu 🌸
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8A6D76]">
        {["Home", "About", "Memories", "Gallery", "Messages", "A Special Note"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:text-[#F2BED1] transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      <button className="px-5 py-2.5 rounded-full text-xs md:text-sm font-medium text-white bg-[#F2BED1] hover:bg-[#FDCEDF] transition-all shadow-sm hover:scale-105 active:scale-95">
        Happy Birthday Mugduuu ♡
      </button>
    </header>
  );
}