import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, type MouseEvent } from "react";
import { Target, Mail, Linkedin, Calendar, Globe, Bot, ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { Link } from "@tanstack/react-router";

const services = [
  { 
    icon: Target, 
    title: "Lead Generation", 
    desc: "Hyper-targeted prospect lists built from intent signals and ideal customer DNA.",
    bullets: ["Verified ICP enrichment", "Intent-based targeting", "CRM-ready exports"]
  },
  { 
    icon: Calendar, 
    title: "Appointment Setting", 
    desc: "SDR-grade conversations placing qualified decision-makers on your calendar.",
    bullets: ["Dedicated SDR pod", "Live qualification", "Calendar sync"]
  },
  { 
    icon: Mail, 
    title: "Cold Email Outreach", 
    desc: "Deliverability-first infrastructure paired with copy that earns the reply.",
    bullets: ["Inbox infrastructure", "A/B tested sequences", "Personalized copy"]
  },
  { 
    icon: Linkedin, 
    title: "LinkedIn Outreach", 
    desc: "Human-led, multi-touch social selling that builds authority while booking meetings.",
    bullets: ["Profile optimization", "Multi-step sequences", "Human-led follow-up"]
  },
  { 
    icon: Globe, 
    title: "Website Building", 
    desc: "High-conversion sites engineered to turn traffic into qualified pipeline.",
    bullets: ["Conversion strategy", "Bespoke design", "Sub-second load times"]
  },
  { 
    icon: Bot, 
    title: "AI Automation", 
    desc: "Custom GPT workflows, CRM enrichment and agents that work while you sleep.",
    bullets: ["GPT workflow design", "CRM auto-enrichment", "Inbox triage agents"]
  },
];

function MobileCard({ s, i }: { s: typeof services[number]; i: number }) {
  return (
    <div className="sticky top-24 mb-10 w-full md:hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[var(--beige-light)] rounded-[2rem] p-8 shadow-soft border border-[var(--ink)]/10 min-h-[420px] flex flex-col"
      >
        <div className="flex items-center justify-between mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[var(--ink)] flex items-center justify-center text-[var(--beige-light)]">
            <s.icon className="w-6 h-6" />
          </div>
          <div className="text-sm font-display italic text-[var(--ink-soft)]">0{i + 1}</div>
        </div>
        
        <h3 className="font-display text-3xl text-[var(--ink)] leading-[1.1] mb-4">{s.title}</h3>
        <p className="text-[var(--ink-soft)] text-base mb-8 leading-relaxed">{s.desc}</p>
        
        <div className="mt-auto space-y-3">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)]/60 mb-2">Key Features</div>
          {s.bullets.map((b, j) => (
            <div key={j} className="flex items-center gap-3 text-sm text-[var(--ink)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--ink)]/40" />
              {b}
            </div>
          ))}
        </div>
        
        <Link to="/contact" className="mt-8 flex items-center justify-center w-full py-4 rounded-xl border border-[var(--ink)] text-[var(--ink)] font-medium text-sm">
          Get Started
        </Link>
      </motion.div>
    </div>
  );
}

function Row({ s, i }: { s: typeof services[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 250, damping: 30 });
  const y = useSpring(my, { stiffness: 250, damping: 30 });

  const move = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="hidden md:block relative group border-t border-[var(--ink)]/15 last:border-b py-10 md:py-12 overflow-hidden"
    >
      {/* sliding hover wash */}
      <motion.div
        initial={false}
        animate={{ scaleY: hover ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-[var(--beige-light)] origin-bottom -z-10"
      />
      {/* magnetic floating icon - disabled on mobile */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: hover && !arrowHover ? 1 : 0, scale: hover && !arrowHover ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex pointer-events-none absolute top-0 left-0 w-24 h-24 rounded-full bg-[var(--ink)] text-[var(--beige-light)] items-center justify-center z-20"
      >
        <s.icon className="w-8 h-8" />
      </motion.div>

      <div className="relative grid grid-cols-12 gap-4 md:gap-6 items-center px-6 md:px-12 pointer-events-none">
        <div className="col-span-2 md:col-span-1 font-display text-lg md:text-2xl text-[var(--ink-soft)] italic">
          {String(i + 1).padStart(2, "0")}
        </div>
        <div className="col-span-10 md:col-span-5">
          <h3 className="font-display text-2xl md:text-6xl text-[var(--ink)] leading-[1.1] md:leading-[1] tracking-tight group-hover:-translate-y-1 transition-transform duration-500">
            {s.title}
          </h3>
        </div>
        <div className="col-span-12 md:col-span-5 text-[var(--ink-soft)] text-sm md:text-lg leading-relaxed mt-2 md:mt-0">
          {s.desc}
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 md:relative md:right-0 md:top-0 md:translate-y-0 md:col-span-1 flex justify-end pointer-events-auto">
          <Link 
            to="/contact"
            onMouseEnter={() => setArrowHover(true)}
            onMouseLeave={() => setArrowHover(false)}
          >
            <motion.div
              animate={{ rotate: hover ? 45 : 0 }}
              transition={{ duration: 0.4 }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--ink)]/40 flex items-center justify-center text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--beige-light)] transition-colors duration-300"
            >
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function HorizontalServices() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const labelY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-6 bg-[var(--beige)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-4">◆ Capabilities</div>
            <h2 className="font-display text-4xl md:text-8xl text-[var(--ink)] leading-[0.95] font-light">
              A full-stack <br/><span className="italic">revenue engine.</span>
            </h2>
          </Reveal>
          <motion.div style={{ y: labelY }} className="hidden md:block text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] writing-vertical">
            06 services / one system
          </motion.div>
        </div>

        <div className="relative">
          {services.map((s, i) => (
            <div key={i}>
              <Row s={s} i={i} />
              <MobileCard s={s} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
