import { Reveal } from "../Reveal";

const items = [
  { q: "Apex rebuilt our entire outbound infrastructure from the ground up. Within just 60 days of launching our new sequences, we had 23 highly qualified meetings on the calendar and a pipeline that was finally moving in the right direction.", a: "Sarah Chen", r: "VP Sales · Vertex AI" },
  { q: "The cleanest, most thoughtful B2B agency we've worked with. They obsess over the tiny details that most people miss, and it shows in the results. Our ROI has been consistent and impressive since day one.", a: "Marcus Webb", r: "CEO · Northwind Labs" },
  { q: "Our reply rate jumped from a stagnant 1.4% to a staggering 11%. The copy alone paid for the entire engagement five times over within the first quarter. Truly a category-defining revenue studio.", a: "Priya Raman", r: "CMO · Halo Systems" },
  { q: "They don't act like a vendor. They act like a core part of our revenue team. Their strategic insights during our first audit were enough to pivot our entire GTM strategy toward profitability.", a: "Diego Alvarez", r: "Founder · Cumulus" },
  { q: "The AI workflows they built save my SDRs over 14 hours of manual labor every week. It's game-changing technology paired with deep sales expertise. We couldn't imagine our stack without them now.", a: "Nina Kowalski", r: "Head of GTM · Forge" },
  { q: "We replaced three separate vendors with Apex and haven't looked back. Our pipeline is up significantly, while our overall acquisition costs are down. They ship high-quality work without any drama.", a: "Tomás Riviera", r: "COO · Meridian" },
  { q: "The strategic clarity we gained in their first audit alone was worth the entire year's investment. They helped us see the gaps in our motion that were costing us millions in lost revenue.", a: "Hannah Brooks", r: "VP Marketing · Aurum" },
  { q: "Quietly the best operators we've ever hired. They ship without drama, optimize relentlessly, and understand the nuances of cold outreach better than anyone in the industry right now.", a: "Kenji Watanabe", r: "Founder · Obelisk" },
  { q: "Pipeline that compounds month over month. Their reporting is the first one we actually understand and look forward to seeing. They've brought a level of precision to our sales that we didn't think was possible.", a: "Lila Park", r: "Revenue Lead · Parallax" },
];

function Card({ t }: { t: typeof items[number] }) {
  return (
    <figure className="bg-[var(--beige-light)] rounded-xl md:rounded-3xl p-5 md:p-8 border border-[var(--ink)]/10 shadow-soft flex flex-col justify-between overflow-hidden min-h-[320px] md:aspect-square">
      <div>
        <div className="font-display text-3xl md:text-5xl text-[var(--ink-soft)] leading-none italic">"</div>
        <blockquote className="mt-2 md:mt-3 text-sm md:text-lg text-[var(--ink)] leading-relaxed">{t.q}</blockquote>
      </div>
      <figcaption className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-[var(--ink)]/10">
        <div className="font-display text-base md:text-lg text-[var(--ink)]">{t.a}</div>
        <div className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[var(--ink-soft)] mt-1">{t.r}</div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  // distribute items across 3 columns
  const c1 = [items[0], items[3], items[6]];
  const c2 = [items[1], items[4], items[7]];
  const c3 = [items[2], items[5], items[8]];
  const cols = [
    { items: [...c1, ...c1], speed: "col-up-slow" },
    { items: [...c2, ...c2], speed: "col-up-fast" },
    { items: [...c3, ...c3], speed: "col-up-mid" },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[var(--beige)]">
      <div className="max-w-7xl mx-auto mb-20">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)] mb-4">◆ Voices</div>
          <h2 className="font-display text-5xl md:text-8xl text-[var(--ink)] max-w-4xl leading-[0.95] font-light">
            Quietly trusted by <span className="italic">operators.</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 marquee w-max items-stretch py-4 hover:[animation-play-state:paused]" style={{ animationDuration: '60s' }}>
          {[...items, ...items].map((t, j) => (
            <div key={`test-${j}`} className="w-[85vw] md:w-[400px] shrink-0">
              <Card t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
