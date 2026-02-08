import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* 🔹 Import local images */
import sunset from "@/assets/memories/Sunset.jpg";
import coffee from "@/assets/memories/coffe.jpg";
import music from "@/assets/memories/music.jpg";
import night from "@/assets/memories/night.jpg";
import smile from "@/assets/memories/Smile.jpg";
import moments from "@/assets/memories/holding.jpg";

gsap.registerPlugin(ScrollTrigger);

const memories = [
  { image: sunset, label: "Our First Sunset", rotate: "-3deg" },
  { image: coffee, label: "Coffee Dates", rotate: "2deg" },
  { image: music, label: "Our Song", rotate: "-1deg" },
  { image: night, label: "Late Night Talks", rotate: "3deg" },
  { image: smile, label: "Your Smile", rotate: "-2deg" },
  { image: moments, label: "Every Moment", rotate: "1deg" },
];

const MemorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".polaroid");

    cards?.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.8, rotate: -10 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 relative z-10">
      <h2 className="text-4xl sm:text-6xl font-romantic text-center text-primary mb-16">
        Precious Memories 🌸
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
        {memories.map((mem, i) => (
          <div
            key={i}
            className="polaroid relative bg-white p-3 pb-10 rounded-xl shadow-xl"
            style={{ "--rotate": mem.rotate } as React.CSSProperties}
          >
            {/* Image Card */}
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={mem.image}
                alt={mem.label}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Label */}
            <p className="absolute bottom-3 left-0 right-0 text-center font-romantic text-lg text-foreground/70">
              {mem.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemorySection;
