import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SpecialMoments() {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section id="gallery" className="py-20 px-6 flex flex-col items-center justify-center text-center">
      <div ref={cardRef} className="scrapbook-photo max-w-xl w-full p-6 md:p-8 bg-white">
        <div className="tape"></div>
        <div className="w-full h-80 rounded bg-[#F8E8EE] flex items-center justify-center overflow-hidden">
          <img
            src="/assets/photos/mugduuu-hero.jpg"
            alt="Special Moment"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <p className="handwriting text-2xl md:text-3xl text-[#5A434A] mt-6">
          "One of those moments I'll always remember."
        </p>
      </div>
    </section>
  );
}