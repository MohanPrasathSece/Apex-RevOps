import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealText } from "../components/Reveal";
import { MagneticButton } from "../components/MagneticButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Apex RevOps" },
      { name: "description", content: "A boutique B2B revenue agency engineering predictable pipeline for category-defining companies." },
      { property: "og:title", content: "About · Apex RevOps" },
      { property: "og:description", content: "A boutique B2B revenue agency engineering predictable pipeline." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2021", title: "Founded in a back room", text: "Two operators, one mission: kill outbound spam, build pipelines that compound." },
  { year: "2022", title: "First $1M in client pipeline", text: "30 campaigns, 12,000 personalized emails, our first repeatable playbook." },
  { year: "2023", title: "AI automation lab launched", text: "Custom GPT agents and workflow infra for revenue teams." },
  { year: "2024", title: "150K+ emails, 300+ meetings", text: "Trusted by founders, CMOs and SDR leaders across SaaS, fintech and AI." },
  { year: "2025", title: "Apex Edge becomes a system", text: "From boutique to multidisciplinary growth partner, without losing the craft." },
];

const values = [
  { t: "Craft over volume", d: "Every email is read before it ships. Every metric is interrogated." },
  { t: "Transparency by default", d: "You see the numbers we see. Always. No black box." },
  { t: "Outcomes, not activity", d: "Meetings, pipeline, revenue. The rest is noise." },
  { t: "Long horizons", d: "We design systems that compound, not campaigns that spike." },
];

function AboutHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <section ref={ref} className="relative pt-40 pb-32 px-6">
      <motion.div style={{ y: y2 }} aria-hidden className="absolute top-10 right-10 font-display italic text-[18vw] md:text-[16vw] text-ink opacity-5 leading-none select-none pointer-events-none">about</motion.div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-6">◆ About Apex RevOps</div>
        <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] text-[var(--ink)] font-light">
          <RevealText text="A boutique" />
          <br />
          <span className="italic"><RevealText text="revenue studio." /></span>
        </h1>
        <motion.div style={{ y: y1 }} className="mt-12 grid md:grid-cols-12 gap-12">
          <Reveal delay={0.4} className="md:col-span-6 md:col-start-7">
            <p className="text-lg text-[var(--ink-soft)] leading-relaxed">
              We work with a small, deliberate roster of B2B companies, pairing strategy,
              copy, infrastructure and AI to turn outbound from a cost center into a
              compounding asset.
            </p>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}

function ParallaxQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  return (
    <section ref={ref} className="py-32 px-6 overflow-hidden bg-[var(--ink)] text-[var(--beige-light)] relative">
      <div className="absolute inset-0 noise-bg opacity-[0.05]" />
      <motion.div style={{ y }} className="relative max-w-5xl mx-auto text-center">
        <div className="text-[10px] uppercase tracking-[0.35em] opacity-50 mb-8">◆ Manifesto</div>
        <p className="font-display text-3xl md:text-6xl leading-[1.15] font-light">
          We believe outbound is a craft, not a numbers game. <span className="italic opacity-70">Volume without taste is spam.</span> Taste without rigor is poetry. We do both.
        </p>
      </motion.div>
    </section>
  );
}

function StickyNarrative() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative py-32 px-6 bg-[var(--beige)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-4">◆ Why Apex</div>
            <h2 className="font-display text-5xl md:text-7xl text-[var(--ink)] leading-[0.95] font-light">
              We treat <br /><span className="italic">your pipeline</span><br /> like our own.
            </h2>
            <motion.div style={{ y }} className="mt-12 hidden md:block">
              <div className="w-32 h-32 rounded-full bg-[var(--ink)] opacity-20" />
            </motion.div>
          </div>
        </div>
        <div className="md:col-span-7 space-y-20">
          {values.map((v, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="border-l-2 border-[var(--ink)]/30 pl-8">
                <div className="font-display text-3xl md:text-5xl text-[var(--ink)] font-light">{v.t}</div>
                <p className="mt-4 text-[var(--ink-soft)] text-lg leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <AboutHero />

      <section className="py-32 px-6 bg-[var(--beige-light)]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-4">◆ Our story</div>
            <h2 className="font-display text-5xl md:text-7xl text-[var(--ink)] mb-20 font-light">A short timeline.</h2>
          </Reveal>
          <div className="space-y-0 relative border-l-2 border-[var(--ink)]/10 ml-4 md:ml-12 pl-8 md:pl-16">
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ x: 12 }}
                  transition={{ duration: 0.4 }}
                  className="relative py-12 group"
                >
                  <div className="absolute -left-[39px] md:-left-[71px] top-14 w-4 h-4 rounded-full bg-[var(--beige-light)] border-2 border-[var(--ink)] group-hover:bg-[var(--ink)] transition-colors duration-300" />
                  <div className="grid md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-3">
                      <div className="font-display text-4xl md:text-5xl text-gold italic font-light">{t.year}</div>
                    </div>
                    <div className="md:col-span-9 bg-[var(--beige)]/50 p-8 rounded-3xl border border-[var(--ink)]/5 shadow-soft">
                      <div className="font-display text-2xl md:text-3xl text-[var(--ink)] font-medium mb-3">{t.title}</div>
                      <div className="text-[var(--ink-soft)] text-lg leading-relaxed">{t.text}</div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ParallaxQuote />

      <StickyNarrative />


    </>
  );
}
