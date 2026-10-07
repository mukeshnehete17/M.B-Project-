import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WhySpecial() {
  const containerRef = useRef(null);

  const reasons = [
    "You always listen.",
    "You make everything fun.",
    "You're strong and independent.",
    "You care about people deeply.",
    "You have the prettiest smile.",
    "You inspire everyone around you.",
    "You're just YOU — and that's enough.",
  ];

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".reason-card");
    gsap.fromTo(
      cards,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.12,
        duration: 0.6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section id="messages" ref={containerRef} className="py-24 px-6 md:px-20 max-w-4xl mx-auto">
      <h2 className="serif text-4xl md:text-5xl text-center text-[#5A434A] mb-12">
        Why You're So Special ♡
      </h2>
      <div className="flex flex-col gap-4">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="reason-card scrapbook-photo p-5 flex items-center gap-4 bg-white/90"
            style={{ transform: `rotate(${idx % 2 === 0 ? "1deg" : "-1deg"})` }}
          >
            <span className="text-xl">🌸</span>
            <p className="serif text-lg md:text-xl text-[#5A434A]">{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}