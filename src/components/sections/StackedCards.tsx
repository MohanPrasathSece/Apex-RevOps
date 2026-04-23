import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../Reveal";
import { GlobeInteractive } from "../ui/cobe-globe-interactive";

const steps = [
  { n: "01", title: "Discover", text: "We map your ICP, offer and motion. No assumptions, only data — extracted in our 90-minute audit." },
  { n: "02", title: "Engineer", text: "Infrastructure, copy and sequences built bespoke to your unique market and category." },
  { n: "03", title: "Launch", text: "Multi-channel campaigns go live with daily monitoring, A/B testing and tuning." },
  { n: "04", title: "Compound", text: "We optimize, automate and scale what's working — relentlessly, and forever." },
];

function Card({ i, total, item }: { i: number; total: number; item: typeof steps[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const scale = useTransform(scrollYProgress, [0, 1], [isMobile ? 1 : 0.92, 1]);
  const rot = useTransform(scrollYProgress, [0, 1], [isMobile ? 0 : -2, 0]);
  return (
    <div ref={ref} style={{ top: isMobile ? `${80 + i * 20}px` : `${100 + i * 28}px`, position: 'sticky' }}>
      <motion.div
        style={{ scale, rotate: rot }}
        className="relative bg-[var(--beige-light)] rounded-[2rem] p-10 md:p-16 shadow-soft border border-[var(--ink)]/10 overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--ink)]/[0.03] blur-[80px]" />
        <div className="relative grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-3">
            <div className="font-display text-7xl md:text-9xl text-[var(--ink)] leading-none font-light italic">{item.n}</div>
          </div>
          <div className="md:col-span-9">
            <h3 className="font-display text-4xl md:text-7xl text-[var(--ink)] leading-[1.0] font-light">{item.title}</h3>
            <p className="mt-6 text-[var(--ink-soft)] text-lg max-w-2xl leading-relaxed">{item.text}</p>
          </div>
        </div>
        <div className="absolute bottom-6 right-8 text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)]/60">
          {i + 1} / {total}
        </div>
      </motion.div>
    </div>
  );
}

export function StackedCards() {
  return (
    <section className="pt-4 pb-20 md:py-32 px-6 bg-[var(--beige)]">
      <div className="max-w-6xl mx-auto">
        {/* Removed GlobeInteractive on mobile for performance */}
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-4">◆ The process</div>
          <h2 className="font-display text-5xl md:text-8xl text-[var(--ink)] max-w-3xl leading-[0.95] mb-20 font-light">
            Four steps to a <span className="italic">predictable engine.</span>
          </h2>
        </Reveal>
        <div className="space-y-6">
          {steps.map((s, i) => (
            <Card key={i} i={i} total={steps.length} item={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
