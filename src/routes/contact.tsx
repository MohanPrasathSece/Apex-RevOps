import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, Send, Check, Calendar, ArrowUpRight } from "lucide-react";
import { Reveal, RevealText } from "../components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Apex RevOps" },
      { name: "description", content: "Schedule a meeting with Apex Edge Solutions to design your B2B revenue engine." },
      { property: "og:title", content: "Contact · Apex RevOps" },
      { property: "og:description", content: "Tell us about your goals. We'll show you what's possible." },
    ],
  }),
  component: ContactPage,
});

function FloatingInput({
  label, type = "text", value, onChange, textarea, required,
}: {
  label: string; type?: string; value: string;
  onChange: (v: string) => void; textarea?: boolean; required?: boolean;
}) {
  const filled = value.length > 0;
  return (
    <div className="relative">
      {textarea ? (
        <textarea required={required} value={value} onChange={(e) => onChange(e.target.value)} rows={5}
          className="peer w-full bg-transparent border-b border-[var(--ink)]/30 pt-7 pb-3 text-[var(--ink)] outline-none focus:border-[var(--ink)] transition-colors resize-none" />
      ) : (
        <input required={required} type={type} value={value} onChange={(e) => onChange(e.target.value)}
          className="peer w-full bg-transparent border-b border-[var(--ink)]/30 pt-7 pb-3 text-[var(--ink)] outline-none focus:border-[var(--ink)] transition-colors" />
      )}
      <label className={`absolute left-0 transition-all pointer-events-none uppercase tracking-[0.25em] text-[10px] ${filled ? "top-0 text-[var(--ink-soft)]" : "top-7 text-[var(--ink-soft)]/60"} peer-focus:top-0 peer-focus:text-[var(--ink)]`}>
        {label}
      </label>
    </div>
  );
}

function ContactHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  return (
    <section ref={ref} className="relative pt-40 pb-16 px-6">
      <motion.div style={{ y }} aria-hidden className="absolute top-0 right-8 font-display italic text-[16vw] md:text-[14vw] text-ink opacity-5 leading-none select-none pointer-events-none">talk</motion.div>
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse" />
          <span>Currently accepting Q3 2026 engagements</span>
        </div>
        <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] text-[var(--ink)] font-light">
          <RevealText text="Tell us about" />
          <br /><span className="italic"><RevealText text="your ambitions." /></span>
        </h1>
      </div>
    </section>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", company: "", budget: "", message: "" });
    }, 3500);
  };

  return (
    <>
      <ContactHero />

      <section className="pb-20 px-6 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-5">
            <div className="space-y-12 lg:sticky lg:top-32">
              <p className="text-[var(--ink-soft)] text-lg leading-relaxed max-w-md">
                Whether you need one capability or a full revenue engine, expect an initial
                response within 1 hour and a tailored proposal within 24 hours.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "rosh@apex-revops.com", link: "mailto:rosh@apex-revops.com" },
                  { icon: Calendar, label: "Service Level", value: "1-Hour Response · 24-Hour Proposal" },
                ].map((c) => (
                  <motion.div
                    key={c.label}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-4 py-3 border-b border-[var(--ink)]/15"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--ink)] text-[var(--beige-light)] flex items-center justify-center shrink-0">
                      <c.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)]">{c.label}</div>
                      {c.link ? (
                        <a href={c.link} className="font-display text-xl text-[var(--ink)] mt-1 block hover:opacity-70 transition-opacity">{c.value}</a>
                      ) : (
                        <div className="font-display text-xl text-[var(--ink)] mt-1">{c.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.15}>
            <div className="bg-[var(--beige-light)] rounded-[2rem] p-10 md:p-16 shadow-soft border border-[var(--ink)]/10 h-full flex flex-col justify-center text-center">
              <div className="w-20 h-20 mx-auto bg-[var(--ink)] rounded-full flex items-center justify-center text-[var(--beige-light)] mb-8">
                <Calendar className="w-8 h-8" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-[var(--ink)] leading-[1.1] mb-6">
                Ready to scale your pipeline?
              </h2>
              <p className="text-[var(--ink-soft)] text-lg mb-10 max-w-md mx-auto leading-relaxed">
                Skip the back-and-forth. Book a direct strategy session with our team to map out your custom revenue engine.
              </p>
              <div>
                <a 
                  href="https://cal.com/rosh-chander/lead-gen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--ink)] text-[var(--beige-light)] font-medium hover:shadow-gold transition-shadow text-lg"
                >
                  Book your strategy call <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
