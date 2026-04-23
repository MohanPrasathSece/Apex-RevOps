import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";
import { useLocation } from "@tanstack/react-router";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  let content = {
    bgWord: "scale",
    top: "◆ The next step",
    heading1: "Build a pipeline",
    heading2: "that compounds.",
    btn: "Start the conversation"
  };

  if (location.pathname === "/about") {
    content = {
      bgWord: "partner",
      top: "◆ Let's connect",
      heading1: "Find your next",
      heading2: "growth partner.",
      btn: "Get in touch"
    };
  } else if (location.pathname === "/services") {
    content = {
      bgWord: "action",
      top: "◆ Take action",
      heading1: "Ready to",
      heading2: "deploy?",
      btn: "Discuss your project"
    };
  }

  return (
    <section ref={ref} className="relative py-32 px-6 bg-[var(--beige-light)] border-t border-[var(--ink)]/5">
      <motion.div 
        style={{ y }} 
        aria-hidden 
        className="absolute top-16 md:top-0 left-8 font-display italic text-[14vw] md:text-[12vw] text-ink opacity-5 leading-none select-none pointer-events-none"
      >
        {content.bgWord}
      </motion.div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-6">
            {content.top}
          </div>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.95] text-[var(--ink)] font-light mb-12">
            {content.heading1} <br />
            <span className="italic">{content.heading2}</span>
          </h2>
          <div className="flex justify-center">
            <MagneticButton href="/contact">
              {content.btn}
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
