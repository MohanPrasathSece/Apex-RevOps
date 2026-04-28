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
      <motion.div 
        style={{ y: bgY, willChange: "transform" }} 
        className="pointer-events-none absolute inset-0"
      >
        <img 
          src={`https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=${isMobile ? 800 : 1600}&auto=format&fit=crop`} 
          alt="" 
          className="w-full h-full object-cover opacity-30 md:opacity-40"
        />
        {/* Desktop-only overlays */}
        <div className="hidden md:block absolute -top-20 -left-20 w-[700px] h-[700px] rounded-full bg-[var(--beige-light)] blur-[100px] opacity-90 will-change-[filter]" />
        <div className="hidden md:block absolute -bottom-20 -right-20 w-[800px] h-[800px] rounded-full bg-[var(--beige-light)] blur-[120px] opacity-80 will-change-[filter]" />
        {/* Additional mobile white overlay for better readability */}
        <div className="absolute inset-0 bg-white/30 md:hidden pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/40 to-transparent md:hidden pointer-events-none" />
      </motion.div>

      <div className="absolute inset-0 grain pointer-events-none" />

      {/* horizon line */}
      <motion.div
        {...(!isMobile ? {
          initial: { scaleX: 0 },
          animate: { scaleX: 1 },
          transition: { duration: 1.4, delay: 2.0, ease: [0.76, 0, 0.24, 1] }
        } : {})}
        className="absolute left-6 right-6 top-32 h-px bg-[var(--ink)]/20 origin-left z-10"
      />

      <motion.div 
        style={{ y, opacity, willChange: "transform, opacity" }} 
        className="relative max-w-7xl mx-auto px-6 w-full z-20"
      >
        {/* Removed Edge Solutions header */}

        <h1 className="font-display text-[clamp(2.5rem,10vw,11rem)] leading-[0.9] text-[var(--ink)] font-light">
          <RevealText text="Revenue" />
          <br />
          <span className="italic font-normal">
            <RevealText text="engineered." />
          </span>
        </h1>

        <div className="mt-12 grid md:grid-cols-12 gap-10 items-end">
          <motion.p
            {...(!isMobile ? {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 2.3 }
            } : {})}
            className="md:col-span-5 text-base md:text-lg text-[var(--ink-soft)] leading-relaxed max-w-md"
          >
            An elite B2B growth agency specializing in targeted lead generation,
            appointment setting, and intelligent outreach automation — built for teams
            that demand predictable pipeline.
          </motion.p>

          <motion.div
            {...(!isMobile ? {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 2.4 }
            } : {})}
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
