import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Memories() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  const memories = [
    { src: 'mem1.jpg', caption: 'Pure Chaos & Big Smiles' },
    { src: 'mem2.jpg', caption: 'Matching Bands & Endless Giggles' },
    { src: 'mem3.jpg', caption: 'The Goofy Mirror Squad' },
    { src: 'mem4.jpg', caption: 'Our Unforgettable Hangouts' },
    { src: 'mem5.jpg', caption: 'Campus Sunshine Days' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const photos = gsap.utils.toArray('.memory-photo');
      if (photos.length > 0) {
        const scrollTween = gsap.to(photos, {
          xPercent: -100 * (photos.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            end: () => `+=${photos.length * 800}`,
            anticipatePin: 1,
          }
        });

        // Scale up photos when they hit the center of the viewport
        photos.forEach(photo => {
          gsap.to(photo.querySelector('.scrapbook-photo'), {
            scale: 1.08,
            boxShadow: "0 25px 50px rgba(90,67,74,0.2)",
            scrollTrigger: {
              trigger: photo,
              containerAnimation: scrollTween,
              start: "center 70%",
              end: "center 30%",
              scrub: true,
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="memories" 
      ref={sectionRef} 
      className="h-screen w-full flex flex-col justify-center bg-[#F8E8EE] overflow-hidden relative"
    >
      <div className="z-10 mb-6 text-center">
        <span className="serif text-xs uppercase tracking-widest text-[#8A6D76] font-semibold bg-white/60 px-4 py-1.5 rounded-full border border-[#FDCEDF]">
          Scroll Horizontally
        </span>
        <h2 className="serif text-4xl sm:text-5xl text-center mt-3 text-[#5A434A]">
          Our Real <span className="handwriting text-5xl sm:text-6xl text-[#EA99B8]">Memories ♡</span>
        </h2>
      </div>
      
      <div className="flex w-[500vw]" ref={wrapperRef}>
        {memories.map((mem, i) => (
          <div key={i} className="memory-photo flex-shrink-0 w-screen flex justify-center items-center px-6 sm:px-20">
            <div className={`scrapbook-photo transform ${i % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'} max-w-lg w-full`}>
              <div className="tape"></div>
              <div className="relative aspect-[4/3] overflow-hidden rounded bg-[#F9F5F6] flex items-center justify-center">
                <img 
                  src={`/assets/photos/${mem.src}`} 
                  alt={mem.caption} 
                  className="w-full h-full object-cover rounded" 
                />
              </div>
              <p className="handwriting text-center mt-5 text-2xl sm:text-3xl text-[#5A434A]">{mem.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}