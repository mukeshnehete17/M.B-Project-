import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function About() {
  const containerRef = useRef(null);

  const tags = [
    { title: "Best Friend", rot: "-3deg" },
    { title: "Sister", rot: "2deg" },
    { title: "Partner in Crime", rot: "-2deg" },
    { title: "Support System", rot: "4deg" },
    { title: "My Best Buddy", rot: "-4deg" },
    { title: "Always You", rot: "3deg" },
  ];

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".about-tag");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 md:px-20 max-w-5xl mx-auto text-center">
      <h2 className="serif text-4xl md:text-6xl text-[#5A434A] mb-4">About Mugduuu ♡</h2>
      <p className="handwriting text-2xl md:text-3xl text-[#8A6D76] mb-12">
        More than a friend. More than a sister. Basically my best buddy.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {tags.map((item, idx) => (
          <div
            key={idx}
            className="about-tag scrapbook-photo text-center flex items-center justify-center p-8 bg-white border border-[#F8E8EE]"
            style={{ transform: `rotate(${item.rot})` }}
          >
            <div className="tape"></div>
            <span className="serif text-xl md:text-2xl text-[#5A434A] font-semibold">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}