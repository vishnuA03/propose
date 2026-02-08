import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EndAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const heartsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      heartsRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
    )
      .fromTo(
        textRef.current?.querySelectorAll(".end-line") || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.3, ease: "power2.out" },
        "-=0.3"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 relative z-10 flex flex-col items-center justify-center text-center"
    >
      <div ref={heartsRef} className="text-7xl sm:text-8xl mb-8 flex gap-4">
        <span className="animate-bounce" style={{ animationDelay: "0s" }}>💖</span>
        <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>💕</span>
        <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>💗</span>
      </div>
      <div ref={textRef}>
        <p className="end-line text-3xl sm:text-5xl font-romantic text-primary text-glow mb-4">
          Forever & Always
        </p>
        <p className="end-line text-xl sm:text-2xl font-body text-muted-foreground mb-2">
          Every love story is beautiful, but ours is my favourite 💫
        </p>
        <p className="end-line text-lg font-body text-muted-foreground/70">
          — With all my love, for you Abinaya ❤️
        </p>
      </div>
    </section>
  );
};

export default EndAnimation;
