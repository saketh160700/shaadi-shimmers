import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import couple from "@/assets/couple.jpg";

export function VideoPlayer() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  return (
    <div className="relative mx-auto max-w-4xl ornate-border bg-card overflow-hidden shadow-royal">
      <div className="relative aspect-video bg-black">
        <video
          ref={ref}
          poster={couple}
          className="h-full w-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-an-indian-wedding-ceremony-7186/1080p.mp4"
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
  );
}
