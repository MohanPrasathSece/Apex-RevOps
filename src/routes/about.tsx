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
  { year: "2020", title: "Start Operations", text: "Initial launch of Apex RevOps with focus on revenue generation systems." },
  { year: "2021", title: "Initiated Outbound Systems", text: "Focused on creating real conversations instead of generic spam campaigns." },
  { year: "2022", title: "Expansion Into Inbound Channels", text: "Introduced SEO, paid advertising campaigns and inbound lead generation systems to support outbound growth channels." },
  { year: "2023", title: "Expansion Into AI Automation", text: "Introduced AI automation systems and workflow infrastructure." },
  { year: "2024", title: "Scaled Across Industries", text: "Worked with MSPs, consultants, SaaS companies, cybersecurity firms and agencies across the US, Canada and Australia." },
  { year: "2025", title: "Omni-Channel Revenue Partner", text: "Expanded from outreach execution into full outbound infrastructure, automation systems, websites and white-label fulfillment." },
  { year: "2026", title: "Apex Becomes Revenue-Focused", text: "No bloated agency retainers. If your product or service has strong market fit, we work on a revenue-share basis focused on measurable growth." },
];

const values = [
  { t: "Precision Over Volume", d: "Every campaign is built around a clearly defined ICP, personalized messaging and channel-specific execution." },
  { t: "Transparency by Default", d: "You see the same metrics, reporting and campaign activity we see. No hidden processes or black-box delivery." },
  { t: "Outcomes That Matter", d: "We focus on qualified meetings, pipeline growth and real business opportunities - not vanity metrics." },
  { t: "Systems That Compound", d: "Our outreach and automation systems are designed for long-term scalability, not short-term spikes." },
  { t: "Multi-Channel Execution", d: "LinkedIn outreach, cold email, appointment setting and AI automation working together as one coordinated system." },
  { t: "Fast, Flexible Engagements", d: "Month-to-month partnerships with fast onboarding and no unnecessary long-term lock-ins." },
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
          <RevealText text="Revenue systems" />
          <br />
          <span className="italic"><RevealText text="built for actual growth." /></span>
        </h1>
        <motion.div style={{ y: y1 }} className="mt-12 grid md:grid-cols-12 gap-12">
          <Reveal delay={0.4} className="md:col-span-8 md:col-start-5">
            <p className="text-lg text-[var(--ink-soft)] leading-relaxed">
              Apex RevOps helps businesses build predictable inbound and outbound pipeline through LinkedIn outreach, 
              cold email, appointment setting, AI automation and revenue-focused systems.
              We work with a focused group of clients across SaaS, MSP, consulting, cybersecurity, 
              fintech and service industries, combining strategy, execution and automation 
              into one scalable growth engine.
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
        <div className="text-[10px] uppercase tracking-[0.35em] opacity-50 mb-8">◆ Our Philosophy</div>
        <p className="font-display text-2xl md:text-5xl leading-[1.15] font-light">
          We believe growth should feel structured, relevant and human. 
          Mass outreach without strategy becomes noise. Strategy without execution produces no pipeline. 
          We combine targeted systems, transparent processes and consistent optimization. 
          Every campaign is built around the right audience, the right messaging and measurable outcomes.
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
              We Treat <br /><span className="italic">Your Pipeline</span><br /> Like Our Own.
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
            <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-4">◆ Our Story</div>
            <h2 className="font-display text-5xl md:text-7xl text-[var(--ink)] mb-20 font-light">
              Built through execution, <br /><span className="italic">not theory.</span>
            </h2>
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
      
      <section className="py-32 px-6 bg-[var(--beige-light)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-4">◆ How We Work</div>
              <h2 className="font-display text-5xl md:text-7xl text-[var(--ink)] leading-[0.95] font-light">
                Structured systems. <br /><span className="italic">Clear execution.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.2}>
              <p className="text-xl text-[var(--ink)] leading-relaxed">
                Every engagement starts with an intake form, onboarding, ICP definition, cadence approval and infrastructure setup before campaign goes live.
              </p>
              <p className="mt-8 text-[var(--ink-soft)] text-lg leading-relaxed">
                From data sourcing to automation setup to campaign optimization, every step follows a transparent process with actual human involvement, not generic AI slop.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[var(--beige)] border-t border-[var(--ink)]/5 text-center">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-8">◆ Trusted By</div>
            <p className="text-lg md:text-2xl text-[var(--ink-soft)] leading-relaxed">
              Apex supports growing SaaS, IT & Cybersecurity, Consulting, Investment Mergers & Acquisitions and service businesses looking for scalable systems for predictable revenue.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
