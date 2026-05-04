const LINKS = [
  { href: "#invitation", label: "Invitation" },
  { href: "#gallery", label: "Gallery" },
  { href: "#couple", label: "Couple" },
  { href: "#blessings", label: "Blessings" },
  { href: "#maps", label: "Maps" },
] as const;

export function SiteLinksNav() {
  return (
    <nav
      className="fixed right-0 top-0 z-[100] flex max-w-[100vw] justify-end px-2 pt-[max(0.5rem,env(safe-area-inset-top))] sm:px-4 sm:pt-3"
      aria-label="Page sections"
    >
      <ul className="flex max-w-[calc(100vw-1rem)] flex-wrap items-center justify-end gap-0.5 rounded-full border border-accent/25 bg-background/90 px-1.5 py-1 shadow-md backdrop-blur-md sm:gap-1 sm:px-3 sm:py-1.5">
        {LINKS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block rounded-full px-2 py-1 font-display text-[9px] font-semibold uppercase tracking-[0.12em] text-primary/80 transition hover:bg-accent/15 hover:text-primary sm:px-2.5 sm:text-[10px] sm:tracking-[0.16em] md:text-[11px]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
