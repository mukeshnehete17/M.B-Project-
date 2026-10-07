import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import confetti from "canvas-confetti";
import { Menu, X, Sparkles, Heart } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Memories", href: "#memories" },
    { name: "Gallery", href: "#gallery" },
    { name: "Messages", href: "#messages" },
    { name: "A Special Note", href: "#a-special-note" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerMiniConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x, y },
      colors: ["#F2BED1", "#FDCEDF", "#EA99B8", "#D8EEE5", "#FFF9F2"],
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 px-4 sm:px-8 md:px-12 ${
          isScrolled
            ? "py-3 bg-[#F9F5F6]/90 backdrop-blur-md shadow-xs border-b border-[#FDCEDF]/40"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="handwriting text-2xl sm:text-3xl text-[#5A434A] font-bold group-hover:text-[#EA99B8] transition-colors">
              Mugduuu
            </span>
            <span className="text-xl inline-block group-hover:rotate-12 transition-transform">🌸</span>
            <span className="text-base inline-block -ml-1 group-hover:-translate-y-0.5 transition-transform">🦖</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#FDCEDF]/60 shadow-xs">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#8A6D76] hover:text-[#5A2438] hover:bg-[#F8E8EE] transition-all duration-150"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={triggerMiniConfetti}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-[#F2BED1] via-[#EA99B8] to-[#F2BED1] hover:shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 border border-white/40 shadow-xs"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span className="hidden sm:inline">Happy Birthday</span> Mugduuu ♡
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/80 border border-[#FDCEDF] text-[#5A434A] hover:bg-white active:scale-95 transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#5A2438]/20 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-[#FDCEDF] flex flex-col gap-2">
            <div className="flex items-center justify-between pb-3 border-b border-[#F8E8EE]">
              <span className="serif text-xs font-semibold uppercase tracking-wider text-[#8A6D76]">
                Garden Navigation 🦖🌸
              </span>
              <span className="text-xs text-[#EA99B8]">♡ Mugduuu Day</span>
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 rounded-xl text-base font-serif font-medium text-[#5A434A] hover:bg-[#F8E8EE] hover:text-[#EA99B8] flex items-center justify-between transition-colors"
              >
                <span>{item.name}</span>
                <span className="text-xs text-[#8A6D76]">→</span>
              </a>
            ))}

            <div className="pt-3 mt-1 border-t border-[#F8E8EE] flex justify-center">
              <p className="handwriting text-xl text-[#8A6D76]">
                More than a friend, my best buddy ♡
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}