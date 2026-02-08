import { useEffect } from "react";

const HeartCursorTrail = () => {
  useEffect(() => {
    const hearts = ["💗", "💕", "✨", "💖"];
    
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.3) return; // throttle
      
      const heart = document.createElement("span");
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        font-size: ${12 + Math.random() * 12}px;
        z-index: 9999;
        transition: all 1s ease-out;
        opacity: 1;
      `;
      document.body.appendChild(heart);

      requestAnimationFrame(() => {
        heart.style.transform = `translateY(-${40 + Math.random() * 40}px) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = "0";
      });

      setTimeout(() => heart.remove(), 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default HeartCursorTrail;
