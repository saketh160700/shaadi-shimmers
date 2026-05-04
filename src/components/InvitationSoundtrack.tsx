import { useRef, useState, useEffect, useCallback } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import songSrc from "@/assets/Song.mp3";

const FIRST_MINUTE_SEC = 60;
const LOOP_TRIM_SEC = 0.12;

export function InvitationSoundtrack() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const mutedRef = useRef(false);
  const startedRef = useRef(false);
  const startingRef = useRef(false);
  const wasPlayingRef = useRef(false);

  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  const applyMuted = useCallback((next: boolean) => {
    mutedRef.current = next;
    setMuted(next);
    const a = audioRef.current;
    if (a) a.muted = next;
  }, []);

  useEffect(() => {
    const handleVideoStarted = () => {
      const a = audioRef.current;
      if (a) {
        wasPlayingRef.current = !a.paused;
        if (!a.paused) {
          a.pause();
        }
      }
    };

    const handleVideoStopped = () => {
      const a = audioRef.current;
      if (a && wasPlayingRef.current && startedRef.current) {
        a.play().catch(() => {});
      }
    };

    window.addEventListener('videoStarted', handleVideoStarted);
    window.addEventListener('videoStopped', handleVideoStopped);
    return () => {
      window.removeEventListener('videoStarted', handleVideoStarted);
      window.removeEventListener('videoStopped', handleVideoStopped);
    };
  }, []);

  /** First tap / click anywhere on the page starts the soundtrack (browser autoplay rules). */
  useEffect(() => {
    const tryPlay = () => {
      if (startedRef.current || startingRef.current) return;
      const a = audioRef.current;
      if (!a) return;
      startingRef.current = true;
      a.currentTime = 0;
      a.muted = mutedRef.current;
      void a
        .play()
        .then(() => {
          startedRef.current = true;
          setStarted(true);
        })
        .catch(() => {
          /* autoplay blocked — next gesture will retry */
        })
        .finally(() => {
          startingRef.current = false;
        });
    };

    document.addEventListener("pointerdown", tryPlay, { capture: true, passive: true });
    return () => document.removeEventListener("pointerdown", tryPlay, { capture: true });
  }, []);

  const toggleMute = () => {
    applyMuted(!mutedRef.current);
  };

  return (
    <>
      <audio ref={audioRef} src={songSrc} preload="auto" />
      <div className="fixed bottom-6 right-6 z-50 flex max-w-[min(100vw-1.5rem,260px)] flex-col items-end gap-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          aria-label={muted ? "Unmute music" : "Mute music"}
          aria-pressed={muted}
          className="flex items-center gap-2 rounded-full border border-accent/40 bg-card/90 px-4 py-2.5 text-sm font-display text-primary shadow-lg backdrop-blur-md transition hover:border-accent hover:shadow-md"
        >
          {muted ? (
            <VolumeX className="h-4 w-4 text-muted-foreground" aria-hidden />
          ) : (
            <Volume2 className="h-4 w-4 text-accent" aria-hidden />
          )}
          <Music className="h-4 w-4 text-accent" aria-hidden />
          <span className="hidden sm:inline">{muted ? "Muted" : started ? "Music on" : "Music"}</span>
        </button>
        <p className="text-right text-[10px] leading-snug text-secondary/80 font-body">
          {started
            ? "First minute loops. Tap here to mute or unmute."
            : "Tap anywhere to start music (first minute, looping). Use this button to mute."}
        </p>
      </div>
    </>
  );
}
