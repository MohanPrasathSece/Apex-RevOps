import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 40, className }: Props) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
    },
  };
  return (
    <motion.div
      {...(!isMobile ? {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-80px" },
        variants: variants
      } : {})}
      style={{ willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block align-bottom mr-[0.25em]">
          <motion.span
            {...(!isMobile ? {
              initial: { y: 20, opacity: 0 },
              whileInView: { y: 0, opacity: 1 },
              viewport: { once: true, margin: "-50px" },
              transition: { 
                duration: 0.5, 
                ease: [0.22, 1, 0.36, 1], 
                delay: i * 0.04 
              }
            } : {})}
            style={{ willChange: "transform, opacity" }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}