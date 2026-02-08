import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    emoji: "✨",
    title: "The First Spark",
    text: "The moment I saw you, something changed inside me. My heart skipped a beat, and I knew you were special.",
  },
  {
    emoji: "💕",
    title: "Falling For You",
    text: "Every conversation made me fall deeper. Your laugh became my favorite sound in the whole world.",
  },
  {
    emoji: "🌸",
    title: "You're My World",
    text: "You turned ordinary days into magical ones. Just being near you makes everything feel right.",
  },
  {
    emoji: "💍",
    title: "Today & Forever",
    text: "I can't imagine my life without you. You're the missing piece I've been looking for all along.",
  },
];

const StorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".story-card");
    cards?.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, rotateY: -15 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
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
      <h2 className="text-4xl sm:text-6xl font-romantic text-center text-primary text-glow mb-16">
        Our Love Story 💕
      </h2>
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
        {stories.map((story, i) => (
          <div
            key={i}
            className="story-card glass-card p-8 text-center hover:scale-[1.03] transition-transform duration-300"
          >
            <span className="text-5xl block mb-4">{story.emoji}</span>
            <h3 className="text-2xl font-romantic text-primary mb-3">{story.title}</h3>
            <p className="font-body text-muted-foreground leading-relaxed">{story.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StorySection;
