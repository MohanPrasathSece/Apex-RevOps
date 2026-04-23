import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { RevealText } from "../Reveal";
import { MagneticButton } from "../MagneticButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const targetY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 180]);
  const targetOpacity = useTransform(scrollYProgress, [0, 0.85], [1, isMobile ? 1 : 0]);
  const targetBgY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "0%" : "30%"]);

  const y = useSpring(targetY, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const opacity = useSpring(targetOpacity, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const bgY = targetBgY; // Background doesn't need spring as much, but can be added if needed

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-[var(--beige)]">
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="" 
          className="w-full h-full object-cover opacity-30 md:opacity-40"
        />
        {/* Mobile-enhanced overlays */}
        <div className="absolute -top-20 -left-20 w-[300px] md:w-[700px] h-[300px] md:h-[700px] rounded-full bg-[var(--beige-light)] blur-[60px] md:blur-[140px] opacity-100 md:opacity-90" />
        <div className="absolute -bottom-20 -right-20 w-[350px] md:w-[800px] h-[350px] md:h-[800px] rounded-full bg-[var(--beige-light)] blur-[80px] md:blur-[160px] opacity-100 md:opacity-80" />
        {/* Additional mobile white overlay */}
        <div className="absolute inset-0 bg-white/10 md:hidden pointer-events-none" />
      </motion.div>

      <div className="absolute inset-0 grain pointer-events-none" />

      {/* horizon line */}
      <motion.div
        initial={isMobile ? { scaleX: 1 } : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: isMobile ? 0 : 2.0, ease: [0.76, 0, 0.24, 1] }}
        className="absolute left-6 right-6 top-32 h-px bg-[var(--ink)]/20 origin-left z-10"
      />

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-6 w-full z-20">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: isMobile ? 0 : 2.0 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)]">
            ◆ Edge Solutions · Est. 2021
          </div>
          <div className="hidden md:block text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)]">
            Now booking · Q3 2026
          </div>
        </motion.div>

        <h1 className="font-display text-[clamp(2.5rem,10vw,11rem)] leading-[0.9] text-[var(--ink)] font-light">
          <RevealText text="Growth" />
          <br />
          <span className="italic font-normal">
            <RevealText text="that compounds." />
          </span>
        </h1>

        <div className="mt-12 grid md:grid-cols-12 gap-10 items-end">
          <motion.p
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: isMobile ? 0 : 2.3 }}
            className="md:col-span-5 text-base md:text-lg text-[var(--ink-soft)] leading-relaxed max-w-md"
          >
            A boutique B2B revenue studio engineering precision lead generation,
            cold outreach and AI automation — for teams that take pipeline seriously.
          </motion.p>

          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: isMobile ? 0 : 2.4 }}
            className="md:col-span-7 flex flex-wrap items-center gap-4 md:justify-end"
          >
            <MagneticButton href="/contact">Schedule a meeting</MagneticButton>
            <MagneticButton href="/services" variant="ghost">
              Explore services
            </MagneticButton>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
