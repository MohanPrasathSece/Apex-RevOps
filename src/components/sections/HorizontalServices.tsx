import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, type MouseEvent } from "react";
import { Target, Mail, Linkedin, Calendar, Globe, Bot, ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { Link } from "@tanstack/react-router";

const services = [
  { icon: Target, title: "Lead Generation", desc: "Hyper-targeted prospect lists built from intent signals and ideal customer DNA." },
  { icon: Calendar, title: "Appointment Setting", desc: "SDR-grade conversations placing qualified decision-makers on your calendar." },
  { icon: Mail, title: "Cold Email Outreach", desc: "Deliverability-first infrastructure paired with copy that earns the reply." },
  { icon: Linkedin, title: "LinkedIn Outreach", desc: "Human-led, multi-touch social selling that builds authority while booking meetings." },
  { icon: Globe, title: "Website Building", desc: "High-conversion sites engineered to turn traffic into qualified pipeline." },
  { icon: Bot, title: "AI Automation", desc: "Custom GPT workflows, CRM enrichment and agents that work while you sleep." },
];

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
      className="relative group border-t border-[var(--ink)]/15 last:border-b py-10 md:py-12 overflow-hidden"
    >
      {/* sliding hover wash */}
      <motion.div
        initial={false}
        animate={{ scaleY: hover ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-[var(--beige-light)] origin-bottom -z-10"
      />
      {/* magnetic floating icon */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: hover && !arrowHover ? 1 : 0, scale: hover && !arrowHover ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute top-0 left-0 w-24 h-24 rounded-full bg-[var(--ink)] text-[var(--beige-light)] flex items-center justify-center z-20"
      >
        <s.icon className="w-8 h-8" />
      </motion.div>

      <div className="relative grid grid-cols-12 gap-6 items-center px-6 md:px-12 pointer-events-none">
        <div className="col-span-2 md:col-span-1 font-display text-xl md:text-2xl text-[var(--ink-soft)] italic">
          {String(i + 1).padStart(2, "0")}
        </div>
        <div className="col-span-7 md:col-span-5">
          <h3 className="font-display text-3xl md:text-6xl text-[var(--ink)] leading-[1] tracking-tight group-hover:-translate-y-1 transition-transform duration-500">
            {s.title}
          </h3>
        </div>
        <div className="col-span-12 md:col-span-5 text-[var(--ink-soft)] text-base md:text-lg leading-relaxed">
          {s.desc}
        </div>
        <div className="col-span-3 md:col-span-1 flex justify-end pointer-events-auto">
          <Link 
            to="/contact"
            onMouseEnter={() => setArrowHover(true)}
            onMouseLeave={() => setArrowHover(false)}
          >
            <motion.div
              animate={{ rotate: hover ? 45 : 0 }}
              transition={{ duration: 0.4 }}
              className="w-12 h-12 rounded-full border border-[var(--ink)]/40 flex items-center justify-center text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--beige-light)] transition-colors duration-300"
            >
              <ArrowUpRight className="w-5 h-5" />
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

        <div>
          {services.map((s, i) => <Row key={i} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
