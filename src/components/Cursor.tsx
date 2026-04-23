import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [hidden, setHidden] = useState(true);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 25, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 300, damping: 25, mass: 0.4 });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile || window.matchMedia("(pointer: coarse)").matches) return;
    setHidden(false);
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (hidden) return null;
  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-[var(--ink)]/40 pointer-events-none z-[150] mix-blend-multiply"
    />
  );
}
