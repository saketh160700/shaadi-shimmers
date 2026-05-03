import { useEffect, useState } from "react";

export function Petals() {
  const [petals, setPetals] = useState<Array<{ left: number; delay: number; dur: number; size: number; color: string }>>([]);

  useEffect(() => {
    const colors = ["#ff8c2a", "#e63946", "#f4a261", "#c1121f"];
    setPetals(
      Array.from({ length: 18 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        dur: 10 + Math.random() * 12,
        size: 14 + Math.random() * 18,
        color: colors[i % colors.length],
      })),
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: "-5vh",
            width: p.size,
            height: p.size * 0.6,
            background: `radial-gradient(ellipse at center, ${p.color}, transparent 70%)`,
            borderRadius: "50% 0 50% 0",
            animation: `petal-fall ${p.dur}s linear ${p.delay}s infinite`,
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}
