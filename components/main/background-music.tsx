"use client";

import { useEffect, useRef, useState } from "react";

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.volume = 0.5;
    // Démarrer en muet : les navigateurs autorisent l'autoplay uniquement si le son est coupé
    audio.muted = true;
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  }, []);

  // Au premier clic n'importe où sur la page, activer le son (une seule fois)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const unmuteOnFirstClick = () => {
      if (audio.muted) {
        audio.muted = false;
        setMuted(false);
      }
      document.removeEventListener("click", unmuteOnFirstClick);
      document.removeEventListener("keydown", unmuteOnFirstClick);
    };
    document.addEventListener("click", unmuteOnFirstClick);
    document.addEventListener("keydown", unmuteOnFirstClick);
    return () => {
      document.removeEventListener("click", unmuteOnFirstClick);
      document.removeEventListener("keydown", unmuteOnFirstClick);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" preload="auto" />
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#030014]/90 px-3 py-2 backdrop-blur border border-[#7042f88b]">
        <button
          type="button"
          onClick={toggle}
          className="text-white hover:text-[#b49bff] transition text-sm"
          aria-label={isPlaying ? "Pause" : "Lecture"}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          className="text-white hover:text-[#b49bff] transition text-sm"
          aria-label={muted ? "Activer le son" : "Couper le son"}
        >
          {muted ? "🔇" : "🔊"}
        </button>
      </div>
    </>
  );
};
