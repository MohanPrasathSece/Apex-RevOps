import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[var(--ink)] text-[var(--beige-light)] overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-[0.04] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-12 gap-12 pb-16 border-b border-[var(--beige-light)]/15"
        >
          <div className="md:col-span-6">
            <h2 className="font-display text-5xl md:text-8xl leading-[0.9] text-[var(--beige-light)] font-light">
              Let's build<br /><span className="italic">your edge.</span>
            </h2>
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 mt-10 px-7 py-4 rounded-full bg-[var(--beige-light)] text-[var(--ink)] font-medium hover:shadow-glow transition-shadow"
            >
              Schedule a meeting <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-5">Pages</div>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} onClick={() => window.scrollTo(0, 0)} className="hover:text-[var(--beige-light)] opacity-80 hover:opacity-100 transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-5">Services</div>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-[var(--beige-light)] transition">Lead Generation</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-[var(--beige-light)] transition">Cold Email</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-[var(--beige-light)] transition">LinkedIn Outreach</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-[var(--beige-light)] transition">AI Automation</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-5">Contact</div>
            <ul className="space-y-3 text-sm opacity-80">
              <li><a href="mailto:rosh@apex-revops.com" className="hover:text-[var(--beige-light)] transition">rosh@apex-revops.com</a></li>
            </ul>
          </div>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-[11px] opacity-50">
          <div>© {new Date().getFullYear()} Apex RevOps. All rights reserved.</div>
          <div className="mt-3 md:mt-0">Crafted with precision · Built for revenue. Developed by Zyra Digitals.</div>
        </div>
      </div>
    </footer>
  );
}
