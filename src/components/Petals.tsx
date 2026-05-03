export function Petals() {
  const petals = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const dur = 10 + Math.random() * 12;
        const size = 14 + Math.random() * 18;
        const colors = ["#ff8c2a", "#e63946", "#f4a261", "#c1121f"];
        const color = colors[i % colors.length];
        return (
          <span
            key={i}
            aria-hidden
            style={{
              position: "absolute",
              left: `${left}%`,
              top: "-5vh",
              width: size,
              height: size * 0.6,
              background: `radial-gradient(ellipse at center, ${color}, transparent 70%)`,
              borderRadius: "50% 0 50% 0",
              animation: `petal-fall ${dur}s linear ${delay}s infinite`,
              opacity: 0.85,
            }}
          />
        );
      })}
    </div>
  );
}
