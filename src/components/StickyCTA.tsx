import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function StickyCTA() {
  return (
    <motion.a
      href="https://cal.com/rosh-chander/lead-gen?layout=mobile&overlayCalendar=true"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 2,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 bg-[var(--ink)] text-[var(--beige-light)] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
    >
      <Phone className="w-5 h-5 group-hover:animate-pulse" />
    </motion.a>
  );
}
