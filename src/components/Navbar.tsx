import { Link } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Untitled_design-removebg-preview.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 2.4 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-1.5 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : ""
          }`}
        >
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 group">
            <img src={logo} alt="Apex" width={64} height={64} className="w-16 h-16 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-2xl text-[var(--ink)] font-medium tracking-tight">Apex<span className="italic">RevOps</span></div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => window.scrollTo(0, 0)}
                activeOptions={{ exact: true }}
                className="px-3.5 py-2 text-sm text-[var(--ink)]/75 hover:text-[var(--ink)] transition-colors relative group"
                activeProps={{ className: "text-[var(--ink)]" }}
              >
                {({ isActive }) => (
                  <>
                    <span>{l.label}</span>
                    <span className={`absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-[var(--ink)] transition-transform origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </>
                )}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-[var(--ink)] text-[var(--beige-light)] text-sm font-medium hover:shadow-gold transition-shadow"
          >
            Schedule Meeting
          </Link>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-[var(--ink)]" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-3 glass rounded-3xl p-6 flex flex-col gap-2"
            >
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => { setOpen(false); window.scrollTo(0, 0); }}
                  className="text-[var(--ink)] py-2 font-display text-2xl"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => { setOpen(false); window.scrollTo(0, 0); }}
                className="mt-2 text-center px-5 py-3 rounded-full bg-[var(--ink)] text-[var(--beige-light)]"
              >
                Schedule Meeting
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
