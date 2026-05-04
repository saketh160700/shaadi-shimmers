import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-09T08:15:00").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    setMounted(true);
    setT(calc());
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 md:gap-6">
      {items.map((it) => (
        <div
          key={it.label}
          className="ornate-border bg-card/95 px-2 py-4 text-center shadow-sm md:py-6"
        >
          <div className="text-3xl md:text-5xl font-display text-gold-shimmer font-bold tabular-nums">
            {mounted ? String(it.value).padStart(2, "0") : "--"}
          </div>
          <div className="mt-1 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
}
