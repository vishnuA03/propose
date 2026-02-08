import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import confetti from "canvas-confetti";
import Swal from "sweetalert2";

gsap.registerPlugin(ScrollTrigger);

const ProposalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (heartRef.current) {
      gsap.fromTo(
        heartRef.current,
        { scale: 0.8 },
        {
          scale: 1.1,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const handleNoHover = useCallback(() => {
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 200;
    setNoPos({ x, y });
  }, []);

  const handleYes = useCallback(() => {
    setAccepted(true);

    // Big confetti burst
    const duration = 4000;
    const end = Date.now() + duration;
    const colors = ["#ec4899", "#f472b6", "#fb7185", "#e879f9", "#c084fc", "#ff6b6b"];

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 0.7 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();

    // Sweet alert
    setTimeout(() => {
      Swal.fire({
        title: "You just made me the happiest person ❤️",
        text: "I promise to love you endlessly, Abinaya 💍",
        icon: "success",
        confirmButtonText: "Forever & Always 💕",
        confirmButtonColor: "#ec4899",
        background: "#fff5f7",
        color: "#831843",
        showClass: { popup: "animate__animated animate__fadeInUp" },
      });
    }, 800);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 relative z-10 min-h-screen flex flex-col items-center justify-center">
      <div ref={heartRef} className="text-8xl sm:text-9xl mb-8">
        💓
      </div>
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-romantic text-primary text-glow mb-4 text-center">
        Will you be mine forever?
      </h2>
      <p className="text-xl font-body text-muted-foreground mb-12 text-center">
        This is the moment I've been waiting for… 💍
      </p>

      {!accepted ? (
        <div className="flex gap-6 items-center relative">
          <button
            onClick={handleYes}
            className="btn-romantic text-xl animate-glow-pulse"
          >
            Yes 💖
          </button>
          <button
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            onClick={handleNoHover}
            className="px-8 py-3 rounded-full font-semibold text-lg font-body bg-muted text-muted-foreground transition-all duration-200 hover:animate-shake"
            style={{
              transform: `translate(${noPos.x}px, ${noPos.y}px)`,
              transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            No 😢
          </button>
        </div>
      ) : (
        <div className="text-center animate-fade-in">
          <p className="text-3xl sm:text-4xl font-romantic text-primary text-glow mb-4">
            Thank you, Abinaya! 💕
          </p>
          <p className="text-xl font-body text-muted-foreground">
            You've made my heart complete. Forever yours. ✨
          </p>
        </div>
      )}
    </section>
  );
};

export default ProposalSection;
