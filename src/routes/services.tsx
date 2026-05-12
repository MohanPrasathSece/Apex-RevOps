import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type MouseEvent } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Target, Mail, Linkedin, Calendar, Globe, Bot, Plus, X, ArrowUpRight } from "lucide-react";
import { Reveal, RevealText } from "../components/Reveal";
import { MagneticButton } from "../components/MagneticButton";
import { useIsMobile } from "../hooks/use-mobile";
import { StackedCards } from "../components/sections/StackedCards";

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
  { 
    icon: Target, 
    title: "Lead Generation", 
    short: "Pipeline-ready prospect lists built around intent signals, ICP targeting and active decision-makers.", 
    long: "Targeted prospect lists built around your ideal customer profile, intent signals, active decision-makers and buying behavior.", 
    bullets: ["ICP-based targeting", "Active LinkedIn user sourcing", "Industry & company filtering", "Verified decision-maker data"] 
  },
  { 
    icon: Calendar, 
    title: "Appointment Setting", 
    short: "Dedicated outbound systems that generate qualified conversations and book meetings directly onto your calendar.", 
    long: "Dedicated outbound appointment-setting systems using cold calling, qualification workflows and real-time calendar booking.", 
    bullets: ["Human outbound callers", "Qualified meeting booking", "Script development", "Weekly optimization & reporting"] 
  },
  { 
    icon: Mail, 
    title: "Cold Email Outreach", 
    short: "Deliverability-first cold email infrastructure paired with personalized multi-touch messaging sequences.", 
    long: "Deliverability-focused cold email systems with domain setup, inbox warm-up, personalized copywriting and reply handling.", 
    bullets: ["Domain & inbox infrastructure", "Warm-up & deliverability setup", "Multi-step email sequences", "Slack reply notifications"] 
  },
  { 
    icon: Linkedin, 
    title: "LinkedIn Outreach", 
    short: "Multi-touch LinkedIn campaigns combining profile warming, outreach automation and social selling strategies.", 
    long: "LinkedIn outreach systems designed to build familiarity, generate conversations and book qualified meetings with decision-makers.", 
    bullets: ["Sales Navigator targeting", "Multi-touch outreach sequences", "AI-assisted engagement", "Account-safe automation setup"] 
  },
  { 
    icon: Globe, 
    title: "Website Building", 
    short: "Modern, conversion-focused websites engineered for credibility, SEO, speed and lead generation.", 
    long: "Premium B2B websites designed for conversion, credibility, speed and lead generation across desktop and mobile.", 
    bullets: ["Conversion-focused layouts", "SEO-ready structure", "CMS & analytics setup", "Fast, responsive performance"] 
  },
  { 
    icon: Bot, 
    title: "AI Automation", 
    short: "Custom AI workflows and operational automations designed to eliminate repetitive manual work across your business.", 
    long: "Custom AI workflows and automations that streamline operations, improve lead handling and eliminate repetitive manual work.", 
    bullets: ["CRM automation", "AI lead scoring", "Automated follow-ups", "Workflow integrations with N8N & AI tools"] 
  },
];

function ServiceCard({ s, i, onOpen }: { s: typeof services[number]; i: number; onOpen: () => void }) {
  return (
    <motion.div
      onClick={onOpen}
      whileHover={{ y: -8 }}
      className="relative group bg-[var(--beige-light)] rounded-3xl p-8 md:p-10 cursor-pointer border border-[var(--ink)]/5 hover:border-[var(--ink)]/20 shadow-soft transition-all duration-500 h-[380px] flex flex-col overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--ink)] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />
      
      <div className="relative z-10 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] group-hover:text-[var(--beige-light)]/60 transition-colors duration-500">
            0{i + 1}
          </div>
          <div className="w-10 h-10 rounded-full border border-[var(--ink)]/20 flex items-center justify-center text-[var(--ink)] group-hover:border-[var(--beige-light)]/20 group-hover:text-[var(--beige-light)] group-hover:rotate-45 transition-all duration-500">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        
        <div className="mt-8">
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
        <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[1.2] md:leading-[1.1] text-[var(--ink)] font-light">
          <RevealText text="Everything you need" />
          <br /><span className="italic"><RevealText text="for predictable growth." /></span>
        </h1>
        <Reveal delay={0.4}>
          <p className="mt-10 max-w-2xl text-lg text-[var(--ink-soft)] leading-relaxed">
            Apex RevOps combines outreach, appointment setting, automation and conversion systems into one unified revenue engine. 
            Every engagement is built around your market, offer and growth goals.
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
  const isMobile = useIsMobile();
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

      <StackedCards />

      <div className="hidden">
        <PricingTease />
      </div>

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
