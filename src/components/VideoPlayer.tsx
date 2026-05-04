import { Play, X } from "lucide-react";
import { useState } from "react";

/** Wedding invitation video player with Google Drive iframe modal */
export function VideoPlayer() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    window.dispatchEvent(new CustomEvent('videoStarted'));
  };

  const closeModal = () => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('videoStopped'));
  };

  return (
    <>
      <div className="relative mx-auto max-w-4xl space-y-4">
        <div className="ornate-border overflow-hidden bg-card">
          <button
            onClick={openModal}
            aria-label="Play invitation video"
            className="group relative w-full aspect-video flex items-center justify-center bg-gradient-to-br from-primary/80 to-primary hover:from-primary/90 hover:to-primary/80 transition-all overflow-hidden"
          >
            {/* Decorative shimmer background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_25%,rgba(255,255,255,.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.1)_75%,rgba(255,255,255,.1))] bg-[length:40px_40px] animate-pulse" />
            </div>

            {/* Play button */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="grid h-24 w-24 md:h-32 md:w-32 place-items-center rounded-full bg-gold shadow-gold transition-transform group-hover:scale-110">
                <Play className="h-12 w-12 md:h-16 md:w-16 text-primary translate-x-1 fill-current" />
              </div>
              <p className="font-display text-base md:text-lg text-white font-semibold tracking-wide">
                Watch Your Invitation
              </p>
            </div>
          </button>
        </div>
        <p className="text-center font-display text-sm italic text-muted-foreground md:text-base">
          Click the button above to watch your personal wedding invitation video.
        </p>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-4xl animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close video modal"
              className="absolute -top-10 right-0 z-10 p-2 rounded-full bg-secondary/20 hover:bg-secondary/40 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Iframe Container */}
            <div className="ornate-border overflow-hidden bg-black aspect-video">
              <iframe
                src="https://drive.google.com/file/d/1QzE_IjpUKiqIccydBC7sE9tN_J5LEPOT/preview"
                width="100%"
                height="100%"
                allow="autoplay"
                title="Wedding Invitation Video"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
