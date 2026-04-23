import { Reveal } from "../Reveal";

const items = [
  { q: "Apex rebuilt our outbound from zero. Within 60 days we had 23 qualified meetings on the calendar.", a: "Sarah Chen", r: "VP Sales · Vertex AI" },
  { q: "The cleanest, most thoughtful B2B agency we've worked with. They obsess over the details we miss.", a: "Marcus Webb", r: "CEO · Northwind Labs" },
  { q: "Our reply rate jumped from 1.4% to 11%. The copy alone paid for the engagement five times over.", a: "Priya Raman", r: "CMO · Halo Systems" },
  { q: "They don't act like a vendor. They act like our revenue team.", a: "Diego Alvarez", r: "Founder · Cumulus" },
  { q: "AI workflows they built save my SDRs 14 hours a week. Game-changing.", a: "Nina Kowalski", r: "Head of GTM · Forge" },
  { q: "We replaced three vendors with Apex. Pipeline is up, costs are down.", a: "Tomás Riviera", r: "COO · Meridian" },
  { q: "The strategic clarity in their first audit alone was worth the year.", a: "Hannah Brooks", r: "VP Marketing · Aurum" },
  { q: "Quietly the best operators we've hired. They ship without drama.", a: "Kenji Watanabe", r: "Founder · Obelisk" },
  { q: "Pipeline that compounds. Reporting we actually understand.", a: "Lila Park", r: "Revenue Lead · Parallax" },
];

function Card({ t }: { t: typeof items[number] }) {
  return (
    <figure className="bg-[var(--beige-light)] rounded-3xl p-8 border border-[var(--ink)]/10 shadow-soft">
      <div className="font-display text-5xl text-[var(--ink-soft)] leading-none italic">"</div>
      <blockquote className="mt-3 text-[var(--ink)] text-lg leading-relaxed">{t.q}</blockquote>
      <figcaption className="mt-6 pt-4 border-t border-[var(--ink)]/10">
        <div className="font-display text-[var(--ink)] text-lg">{t.a}</div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--ink-soft)] mt-1">{t.r}</div>
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

      <div className="relative h-[80vh] [mask-image:linear-gradient(180deg,transparent,black_12%,black_88%,transparent)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto h-full">
          {cols.map((col, i) => (
            <div key={i} className="relative overflow-hidden h-full">
              <div className={`flex flex-col gap-6 ${col.speed}`}>
                {col.items.map((t, j) => (
                  <Card key={`${i}-${j}`} t={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
