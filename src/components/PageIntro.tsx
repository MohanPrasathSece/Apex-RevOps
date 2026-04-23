import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function PageIntro() {
  const [done, setDone] = useState(false);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    const t = setTimeout(() => setDone(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} -300 0 0 L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {!done && (
        <motion.div className="fixed inset-0 z-[200] pointer-events-none">
          <div 
            style={{ opacity: done ? 0 : 1 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[10px] uppercase tracking-[0.6em] text-[var(--beige-light)]/60 mb-8 font-medium"
            >
              Apex · RevOps
            </motion.div>
            
            <div className="relative overflow-hidden h-[120px] md:h-[160px] flex items-center">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
                className="font-display text-7xl md:text-[10rem] text-[var(--beige-light)] italic leading-none"
              >
                Apex
              </motion.h1>
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
              className="mt-10 h-[2px] bg-[var(--beige-light)]/30"
            />
          </div>

          <svg className="absolute top-0 w-full h-[calc(100%+300px)] fill-[var(--ink)] pointer-events-none">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
