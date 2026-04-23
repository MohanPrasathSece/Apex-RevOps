const logos = ["VERTEX", "NORTHWIND", "HALO", "CUMULUS", "FORGE", "PARALLAX", "OBELISK", "AURUM", "MERIDIAN", "NOVA"];

export function LogoMarquee() {
  const loop = [...logos, ...logos];
  return (
    <section className="py-14 border-y border-[var(--ink)]/15 overflow-hidden bg-[var(--beige-light)]">
      <div className="text-center text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-6">
        ◆ Partnered with category-defining teams
      </div>
      <div className="relative [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-16 marquee w-max items-center">
          {loop.map((l, i) => (
            <div key={i} className="font-display text-3xl md:text-4xl text-[var(--ink)]/35 hover:text-[var(--ink)] transition-colors tracking-[0.15em] italic font-light">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
