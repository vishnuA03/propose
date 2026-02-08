import { useEffect, useRef } from "react";
import Typed from "typed.js";
import gsap from "gsap";

const LandingSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "back.out(1.7)" }
      );
    }

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Every moment with you feels like magic ✨",
          "You make my world brighter 🌸",
          "My heart beats only for you 💓",
          "You are my forever and always 💕",
        ],
        typeSpeed: 45,
        backSpeed: 25,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: "💗",
      });
      return () => typed.destroy();
    }
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4 text-center">
      <h1
        ref={headingRef}
        className="text-5xl sm:text-7xl md:text-8xl font-romantic text-glow mb-8 text-primary leading-tight"
      >
        Hey Abinaya ❤️
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl font-romantic text-foreground/80 mb-12 max-w-2xl">
        I have something special for you…
      </p>
      <div className="h-16 flex items-center justify-center max-w-xl">
        <span
          ref={typedRef}
          className="text-lg sm:text-xl md:text-2xl font-body text-muted-foreground"
        />
      </div>
      <div className="mt-16 animate-bounce">
        <span className="text-3xl">👇</span>
      </div>
    </section>
  );
};

export default LandingSection;
