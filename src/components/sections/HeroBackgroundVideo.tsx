"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { images } from "@/data/site";

export function HeroBackgroundVideo() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const mutedRef = useRef(true);
  const inViewRef = useRef(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    mutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.7;

    const playWithSound = () => {
      if (!inViewRef.current) return Promise.resolve();
      audio.muted = false;
      return audio
        .play()
        .then(() => setIsMuted(false))
        .catch(() => {
          audio.muted = true;
          setIsMuted(true);
        });
    };

    playWithSound();

    const unlock = () => {
      void playWithSound();
    };

    window.addEventListener("pointerdown", unlock, { once: true });

    const section = audio.closest("section");
    if (!section) {
      return () => {
        window.removeEventListener("pointerdown", unlock);
        audio.pause();
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const fullyVisibleGone = !entry.isIntersecting;
        inViewRef.current = !fullyVisibleGone;

        if (fullyVisibleGone) {
          audio.pause();
          return;
        }

        if (!mutedRef.current) {
          audio.muted = false;
          void audio.play().catch(() => {});
        }
      },
      { threshold: 0 },
    );

    observer.observe(section);

    return () => {
      window.removeEventListener("pointerdown", unlock);
      observer.disconnect();
      audio.pause();
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      if (!inViewRef.current) {
        audio.muted = false;
        setIsMuted(false);
        return;
      }
      audio.muted = false;
      void audio.play().catch(() => {});
      setIsMuted(false);
    } else {
      audio.muted = true;
      audio.pause();
      setIsMuted(true);
    }
  };

  return (
    <>
      <div className="hero-video-bg pointer-events-none absolute inset-0" suppressHydrationWarning>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src={images.heroVideo} type="video/mp4" />
        </video>
        <audio ref={audioRef} src={images.heroAudio} loop preload="auto" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.22)_0%,transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.22)_0%,transparent_42%)]" />
      </div>

      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-deep-navy/80 text-white shadow-md backdrop-blur-sm transition-colors hover:bg-deep-navy"
        aria-label={isMuted ? "Unmute hero audio" : "Mute hero audio"}
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" strokeWidth={1.75} />
        ) : (
          <Volume2 className="h-5 w-5" strokeWidth={1.75} />
        )}
      </button>
    </>
  );
}
