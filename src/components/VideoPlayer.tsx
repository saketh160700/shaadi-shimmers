import { Play, Pause } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import poster from "@/assets/UpdatedLetter.png";
import weddingVideo from "@/assets/WeddingInvitationFullVideo.mp4";

/** Full wedding invitation film — uses `WeddingInvitationFullVideo.mp4` only here so the large file loads once. */
export function VideoPlayer() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        const v = ref.current;
        if (v) {
          v.pause();
          setPlaying(false);
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggle = async () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { 
      try {
        if (v.requestFullscreen) {
          await v.requestFullscreen();
        } else if ((v as any).webkitRequestFullscreen) {
          await (v as any).webkitRequestFullscreen();
        } else if ((v as any).msRequestFullscreen) {
          await (v as any).msRequestFullscreen();
        }
      } catch (err) {
        console.error("Error attempting to enable fullscreen:", err);
      }
      v.play(); 
      setPlaying(true);
      // Dispatch event to stop background music
      window.dispatchEvent(new CustomEvent('videoStarted')); 
    }
    else { 
      v.pause(); 
      setPlaying(false);
      // Dispatch event to resume background music
      window.dispatchEvent(new CustomEvent('videoStopped'));
      if (document.fullscreenElement || (document as any).webkitFullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(console.error);
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen();
        }
      }
    }
  };

  return (
    <div className="relative mx-auto max-w-4xl space-y-4">
      <div className="ornate-border overflow-hidden bg-card">
        <div className="relative aspect-video bg-black">
          <video
            ref={ref}
            poster={poster}
            className="h-full w-full object-cover"
            src={weddingVideo}
            preload="metadata"
            onEnded={() => setPlaying(false)}
            playsInline
          />
          <button
            onClick={toggle}
            aria-label={playing ? "Pause invitation video" : "Play invitation video"}
            className="absolute inset-0 grid place-items-center bg-black/30 hover:bg-black/40 transition group"
          >
            <span
              className={`grid h-20 w-20 md:h-28 md:w-28 place-items-center rounded-full bg-gold shadow-gold transition-transform group-hover:scale-110 ${
                playing ? "opacity-0" : "opacity-100"
              }`}
            >
              {playing ? (
                <Pause className="h-10 w-10 text-primary" />
              ) : (
                <Play className="h-10 w-10 text-primary translate-x-1" fill="currentColor" />
              )}
            </span>
          </button>
        </div>
      </div>
      <p className="text-center font-display text-sm italic text-muted-foreground md:text-base">
        Your personal wedding invitation video — tap play to watch in fullscreen.
      </p>
    </div>
  );
}
