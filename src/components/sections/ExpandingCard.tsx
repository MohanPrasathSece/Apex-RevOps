import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../Reveal";

export function ExpandingCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // responsive transforms to ensure smoothness on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [isMobile ? 1 : 0.78, 1, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.5], [isMobile ? "0px" : "56px", isMobile ? "0px" : "8px"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", isMobile ? "0%" : "10%"]);

  return (
    <section ref={ref} className="relative pt-20 md:pt-32 bg-[var(--beige)]">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-4">◆ Philosophy</div>
          <h2 className="font-display text-4xl md:text-8xl text-[var(--ink)] max-w-4xl leading-[0.95] font-light">
            Less noise. <span className="italic">More revenue.</span>
          </h2>
          <p className="mt-8 text-[var(--ink-soft)] max-w-2xl text-lg leading-relaxed">
            Most agencies focus on bloated activity metrics. We focus on qualified pipeline and real business conversations.

Every outreach system we build is structured around your ideal customer profile, approved messaging and transparent execution.

From LinkedIn automation to cold email and AI workflows, every process is engineered to create measurable growth.
          </p>
        </Reveal>
      </div>

      <motion.div
        {...(!isMobile ? { style: { scale, borderRadius: radius } } : {})}
        className="relative mx-auto overflow-hidden bg-[var(--ink)] shadow-soft"
      >
        <motion.div style={{ y: imgY }} className="absolute inset-0 opacity-[0.06] noise-bg" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--beige)]/5 to-transparent" />

        <div className="relative px-6 md:px-20 py-20 md:py-48 grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--beige-light)]/50 mb-8">
              ◆ Our Promise
            </div>
            <h3 className="font-display text-4xl md:text-7xl text-[var(--beige-light)] leading-[1.0] font-light">
              We don't sell <span className="italic">activity.</span><br />
              We deliver <span className="italic">outcomes.</span>
            </h3>
            <p className="mt-10 text-[var(--beige-light)]/70 max-w-xl text-lg leading-relaxed">
              Every campaign, sequence and automation is built to generate meaningful conversations with decision-makers. No generic outreach. No bloated retainers. Just systems designed to create consistent opportunities.
            </p>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-px bg-[var(--beige-light)]/10 rounded-2xl overflow-hidden">
            {[
              { k: "Clients Managed", v: "50+" },
              { k: "Qualified Meetings/Campaign", v: "10 – 37+" },
              { k: "Ramp-Up Time", v: "72 Hours" },
              { k: "Lock-In Period", v: "0" },
            ].map((s) => (
              <div key={s.k} className="bg-[var(--ink)] p-8 flex flex-col justify-center border border-[var(--ink-soft)]/20 shadow-inner">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--beige-light)]/60">{s.k}</div>
                <div className="font-display text-5xl md:text-6xl text-[var(--beige-light)] mt-4 font-bold tracking-tight drop-shadow-[0_0_15px_rgba(237,230,218,0.2)]">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
