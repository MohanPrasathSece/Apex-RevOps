import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealText } from "../components/Reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work · Apex RevOps" },
      { name: "description", content: "Selected case studies — outbound campaigns, AI automations and revenue engines we've engineered." },
      { property: "og:title", content: "Work · Apex RevOps" },
      { property: "og:description", content: "Selected case studies and revenue outcomes." },
    ],
  }),
  component: WorkPage,
});

const work = [
  { client: "Vertex AI", sector: "Enterprise AI", metric: "23 meetings / 60 days", year: "2024", color: "oklch(0.55 0.045 60)" },
  { client: "Northwind Labs", sector: "Climate SaaS", metric: "$1.2M pipeline added", year: "2024", color: "oklch(0.42 0.028 55)" },
  { client: "Halo Systems", sector: "Cybersecurity", metric: "Reply rate: 1.4% → 11%", year: "2023", color: "oklch(0.50 0.04 60)" },
  { client: "Cumulus", sector: "Devtools", metric: "14 days to launch", year: "2023", color: "oklch(0.38 0.025 55)" },
  { client: "Forge", sector: "Fintech", metric: "60% SDR time saved", year: "2024", color: "oklch(0.48 0.04 60)" },
  { client: "Meridian", sector: "Healthtech", metric: "3 vendors → 1 partner", year: "2025", color: "oklch(0.34 0.025 55)" },
];

function WorkRow({ w, i }: { w: typeof work[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: i * 0.05 }}
      className="group relative border-t border-[var(--ink)]/15 last:border-b py-10 md:py-14 cursor-pointer overflow-hidden"
    >
      <motion.div aria-hidden style={{ y, color: w.color }} className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block font-display italic text-[10rem] leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        0{i + 1}
      </motion.div>
      <div className="relative grid grid-cols-12 gap-6 items-center px-4 md:px-12">
        <div className="col-span-1 font-display text-xl text-[var(--ink-soft)] italic">{String(i + 1).padStart(2, "0")}</div>
        <div className="col-span-11 md:col-span-4">
          <div className="font-display text-3xl md:text-5xl text-[var(--ink)] font-light group-hover:italic transition-all">{w.client}</div>
        </div>
        <div className="col-span-6 md:col-span-3 text-sm text-[var(--ink-soft)]">{w.sector}</div>
        <div className="col-span-6 md:col-span-3 font-display text-lg md:text-xl text-[var(--ink)]">{w.metric}</div>
        <div className="col-span-12 md:col-span-1 flex md:justify-end items-center gap-3">
          <div className="text-xs text-[var(--ink-soft)] md:hidden">{w.year}</div>
          <div className="hidden md:block text-xs text-[var(--ink-soft)]">{w.year}</div>
          <ArrowUpRight className="w-5 h-5 text-[var(--ink)] group-hover:rotate-45 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

function WorkPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <>
      <section ref={ref} className="relative pt-40 pb-16 px-6 overflow-hidden">
        <motion.div style={{ y }} aria-hidden className="absolute -top-10 left-0 right-0 text-center font-display italic text-[22vw] text-[var(--ink)]/[0.04] leading-[0.85] select-none pointer-events-none">work</motion.div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-6">◆ Selected work · 2021 — 2025</div>
          <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] text-[var(--ink)] font-light">
            <RevealText text="Pipelines we've" />
            <br /><span className="italic"><RevealText text="quietly built." /></span>
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-10 max-w-xl text-lg text-[var(--ink-soft)] leading-relaxed">
              A small selection of partners we've engineered revenue systems for.
              We work under NDA — names shared with permission.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto">
          {work.map((w, i) => <WorkRow key={i} w={w} i={i} />)}
        </div>
      </section>

      <section className="py-32 px-6 bg-[var(--beige-light)] text-center">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl text-[var(--ink)] font-light max-w-3xl mx-auto leading-[0.95]">
            Want to be the next <span className="italic">case study?</span>
          </h2>
        </Reveal>
      </section>
    </>
  );
}
