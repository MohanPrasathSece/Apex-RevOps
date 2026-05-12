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
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", isMobile ? "-20%" : "20%"]);

  let content = {
    top: "◆ Ready to Build Your Pipeline?",
    heading1: "Let's build",
    heading2: "your edge.",
    description: "If you're looking for predictable outbound growth, qualified meetings and systems that scale, let's start the conversation.",
    btn1: "Schedule a Meeting",
    btn2: "Contact Us"
  };

  if (location.pathname === "/about") {
    content = {
      top: "◆ Find Your Edge",
      heading1: "Let's build your",
      heading2: "growth engine.",
      description: "If you want predictable pipeline, qualified meetings and scalable outbound systems, let's start the conversation.",
      btn1: "Schedule a Meeting",
      btn2: "Contact Us"
    };
  } else if (location.pathname === "/services") {
    content = {
      top: "◆ Take The Edge",
      heading1: "Ready to build",
      heading2: "your pipeline engine?",
      description: "If you want a scalable outbound system that generates qualified conversations consistently, let’s talk.",
      btn1: "Discuss Your Project",
      btn2: "Contact Us"
    };
  } else if (location.pathname === "/contact") {
    content = {
      top: "◆ Let’s Build Your Edge",
      heading1: "Build a revenue system",
      heading2: "that compounds.",
      description: "If you’re looking for scalable outbound growth and qualified pipeline generation, let’s start the conversation.",
      btn1: "Schedule a Meeting",
      btn2: "Contact Us"
    };
  }

  return (
    <section ref={ref} className="relative py-32 px-6 bg-[var(--beige-light)] border-t border-[var(--ink)]/5">
      <motion.div 
        style={{ y }} 
        aria-hidden 
        className="absolute top-16 md:top-0 left-8 font-display italic text-[14vw] md:text-[12vw] text-ink opacity-5 leading-none select-none pointer-events-none"
      >
        edge
      </motion.div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-6">
            {content.top}
          </div>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.95] text-[var(--ink)] font-light mb-8">
            {content.heading1} <br />
            <span className="italic">{content.heading2}</span>
          </h2>
          <p className="mt-6 text-[var(--ink-soft)] text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            {content.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton href={content.btn1 === "Schedule a Meeting" ? "https://cal.com/rosh-chander/lead-gen?layout=mobile&overlayCalendar=true" : "/contact"} target={content.btn1 === "Schedule a Meeting" ? "_blank" : undefined} rel={content.btn1 === "Schedule a Meeting" ? "noopener noreferrer" : undefined}>
              {content.btn1}
            </MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              {content.btn2}
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
