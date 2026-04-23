import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type MouseEvent } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Target, Mail, Linkedin, Calendar, Globe, Bot, Plus, X, ArrowUpRight } from "lucide-react";
import { Reveal, RevealText } from "../components/Reveal";
import { MagneticButton } from "../components/MagneticButton";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Apex RevOps" },
      { name: "description", content: "Lead generation, cold email, LinkedIn outreach, appointment setting, websites and AI automation built for B2B revenue teams." },
      { property: "og:title", content: "Services · Apex RevOps" },
      { property: "og:description", content: "A full-stack revenue engine: outbound, automation and infrastructure." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Target, title: "Lead Generation", short: "Pipeline-grade lists, built from intent.", long: "We blend firmographics, technographics and intent signals to assemble lists that convert — verified, enriched and ready to ship.", bullets: ["Verified ICP enrichment", "Intent-based targeting", "CRM-ready exports", "Continuous list refresh"] },
  { icon: Calendar, title: "Appointment Setting", short: "SDR-grade conversations, on autopilot.", long: "Our team books qualified meetings directly to your calendar. We handle objection handling, qualification and scheduling.", bullets: ["Dedicated SDR pod", "Live qualification", "Calendar integrations", "Daily handoff briefs"] },
  { icon: Mail, title: "Cold Email Outreach", short: "Deliverability-first. Reply-rate obsessed.", long: "From inbox warm-up to copy that earns the reply, we build outbound systems that land in primary and convert at 3-5x category averages.", bullets: ["Warmed inbox infrastructure", "A/B tested sequences", "Personalized copy", "Real-time dashboards"] },
  { icon: Linkedin, title: "LinkedIn Outreach", short: "Social selling, engineered.", long: "Multi-touch LinkedIn campaigns combined with thought leadership and human-led conversations to fill your pipeline.", bullets: ["Profile optimization", "Multi-step sequences", "Content amplification", "Manual follow-up"] },
  { icon: Globe, title: "Website Building", short: "Conversion-engineered web presence.", long: "Premium B2B websites built to turn traffic into pipeline. Fast, accessible, beautifully animated and architected for SEO.", bullets: ["Conversion strategy", "Bespoke design", "CMS + analytics", "Sub-second load times"] },
  { icon: Bot, title: "AI Automation", short: "Custom agents that run your ops.", long: "Custom GPT workflows, CRM enrichment agents and outbound automation that cut SDR busywork by 60%.", bullets: ["GPT workflow design", "CRM auto-enrichment", "Inbox triage agents", "Reporting automation"] },
];

function ServiceCard({ s, i, onOpen }: { s: typeof services[number]; i: number; onOpen: () => void }) {
  return (
    <motion.div
      onClick={onOpen}
      whileHover={{ y: -8 }}
      className="relative group bg-[var(--beige-light)] rounded-3xl p-8 md:p-10 cursor-pointer border border-[var(--ink)]/5 hover:border-[var(--ink)]/20 shadow-soft transition-all duration-500 min-h-[380px] flex flex-col overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--ink)] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />
      
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] group-hover:text-[var(--beige-light)]/60 transition-colors duration-500">
            0{i + 1}
          </div>
          <div className="w-10 h-10 rounded-full border border-[var(--ink)]/20 flex items-center justify-center text-[var(--ink)] group-hover:border-[var(--beige-light)]/20 group-hover:text-[var(--beige-light)] group-hover:rotate-45 transition-all duration-500">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="w-14 h-14 rounded-2xl bg-[var(--ink)] group-hover:bg-[var(--beige-light)] flex items-center justify-center text-[var(--beige-light)] group-hover:text-[var(--ink)] mb-8 transition-colors duration-500">
            <s.icon className="w-6 h-6" />
          </div>
          <h3 className="font-display text-3xl md:text-4xl text-[var(--ink)] group-hover:text-[var(--beige-light)] leading-[1.05] font-light transition-colors duration-500">
            {s.title}
          </h3>
          <p className="mt-4 text-[var(--ink-soft)] group-hover:text-[var(--beige-light)]/70 text-base leading-relaxed transition-colors duration-500">
            {s.short}
          </p>
          
          <div className="mt-6 space-y-2 md:hidden">
            {s.bullets.map((b, j) => (
              <div key={j} className="flex items-center gap-3 text-sm text-[var(--ink)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--ink)]/40" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ServicesHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  return (
    <section ref={ref} className="relative pt-40 pb-20 px-6">
      <motion.div style={{ y }} aria-hidden className="absolute top-4 right-8 font-display italic text-[16vw] md:text-[14vw] text-ink opacity-5 leading-[0.85] select-none pointer-events-none">services</motion.div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-6">◆ Capabilities</div>
        <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[1.15] md:leading-[0.9] text-[var(--ink)] font-light">
          <RevealText text="Everything you need" />
          <br /><span className="italic"><RevealText text="to grow on purpose." /></span>
        </h1>
        <Reveal delay={0.4}>
          <p className="mt-10 max-w-2xl text-lg text-[var(--ink-soft)] leading-relaxed">
            Six interlocking services. One revenue engine. Engage one capability or
            run the full system — every engagement is bespoke to your motion.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PricingTease() {
  return (
    <section className="py-32 px-6 bg-[var(--ink)] text-[var(--beige-light)] relative overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-[0.05]" />
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          { t: "Starter", p: "$4.5k / mo", d: "Lead gen + cold email. One ICP, one channel, real pipeline." },
          { t: "Studio", p: "$9k / mo", d: "Full-stack outbound, AI automation and weekly strategy.", featured: true },
          { t: "Bespoke", p: "Custom", d: "End-to-end revenue ownership for ambitious operators." },
        ].map((tier, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className={`rounded-3xl p-10 h-full border ${tier.featured ? "bg-[var(--beige-light)] text-[var(--ink)] border-transparent" : "border-[var(--beige-light)]/15"}`}>
              <div className={`text-[10px] uppercase tracking-[0.3em] mb-6 ${tier.featured ? "text-[var(--ink-soft)]" : "opacity-60"}`}>0{i + 1} · {tier.t}</div>
              <div className="font-display text-5xl font-light mb-6">{tier.p}</div>
              <p className={`text-base leading-relaxed ${tier.featured ? "text-[var(--ink-soft)]" : "opacity-70"}`}>{tier.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const open = openIdx === null ? null : services[openIdx];

  return (
    <>
      <ServicesHero />

      <section className="py-20 px-6 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-10 md:space-y-0">
          {services.map((s, i) => (
            <div key={i} className="sticky md:relative top-24 md:top-0 pb-10 md:pb-0">
              <Reveal delay={i * 0.05}>
                <ServiceCard s={s} i={i} onOpen={() => setOpenIdx(i)} />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <PricingTease />

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenIdx(null)}
              className="fixed inset-0 z-[60] bg-[var(--ink)]/60 backdrop-blur-md"
            />
            
            {/* Modal / Bottom Sheet */}
            <motion.div
              initial={isMobile ? { y: "100%" } : { scale: 0.9, opacity: 0, y: 30 }}
              animate={isMobile ? { y: "0%" } : { scale: 1, opacity: 1, y: 0 }}
              exit={isMobile ? { y: "100%" } : { scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: isMobile ? 300 : 200, damping: isMobile ? 32 : 25 }}
              drag={isMobile ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.y > 100) setOpenIdx(null);
              }}
              onClick={(e) => e.stopPropagation()}
              className={`fixed z-[70] bg-[var(--beige-light)] shadow-gold border-[var(--ink)]/20 overflow-hidden 
                ${isMobile 
                  ? "inset-x-0 bottom-0 rounded-t-[2.5rem] p-10 pt-12 pb-16 h-[85vh] overflow-y-auto" 
                  : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl rounded-[2rem] p-10 md:p-14"
                }`}
            >
              {isMobile && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[var(--ink)]/10 rounded-full" />
              )}
              
              <button
                onClick={() => setOpenIdx(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[var(--ink)] text-[var(--beige-light)] flex items-center justify-center z-10"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[var(--ink)] flex items-center justify-center text-[var(--beige-light)]">
                  <open.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-8 font-display text-4xl md:text-6xl text-[var(--ink)] leading-[1.0] font-light">{open.title}</h3>
                <p className="mt-6 text-[var(--ink-soft)] text-lg leading-relaxed">{open.long}</p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                  {open.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[var(--ink)]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--ink)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <MagneticButton href="/contact">Discuss this service</MagneticButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
