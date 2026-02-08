import { useState, useRef, useEffect } from "react";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Use a royalty-free romantic melody URL
    audioRef.current = new Audio(
      "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 glass-card p-3 rounded-full hover:scale-110 transition-transform duration-300"
      aria-label="Toggle music"
    >
      <span className="text-2xl">{playing ? "🎵" : "🔇"}</span>
    </button>
  );
};

export default MusicToggle;
