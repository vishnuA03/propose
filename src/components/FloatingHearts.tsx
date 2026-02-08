import { useEffect, useState } from "react";

const HEART_EMOJIS = ["💕", "💗", "💖", "💓", "❤️", "🌸", "✨", "💐"];

interface Heart {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
      left: Math.random() * 100,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 10,
      size: 16 + Math.random() * 24,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-float-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            "--duration": `${heart.duration}s`,
            "--delay": `${heart.delay}s`,
            animationDelay: `${heart.delay}s`,
          } as React.CSSProperties}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
