import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const agencies = [
  { name: 'Andalas Travel', motac: '1234', packages: 8, rating: 4.8 },
  { name: 'Mega Holidays', motac: '5678', packages: 12, rating: 4.9 },
  { name: 'Suci Tours', motac: '9012', packages: 5, rating: 4.7 },
  { name: 'Harmoni Umrah', motac: '3456', packages: 15, rating: 5.0 },
];

export function Agencies() {
  return (
    <section id="agencies" className="section-pad">
      <div className="shell">
        <div className="mb-12 md:mb-16">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">Agencies</p>
          <h2 className="reveal mt-3 text-4xl leading-tight md:text-5xl" style={{ ['--delay' as string]: '80ms' }}>
            Rakan Perjalanan Bertauliah
            <br />
            Your Certified Travel Companions
          </h2>
        </div>

        <div className="hide-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {agencies.map((agency, index) => (
            <article
              key={agency.name}
              className="panel reveal min-w-[270px] snap-center rounded-3xl p-6 md:min-w-0"
              style={{ ['--delay' as string]: `${170 + index * 80}ms` }}
            >
              <div className="mb-5 grid h-16 w-16 place-content-center rounded-full border border-[rgba(217,173,99,0.36)] bg-[rgba(217,173,99,0.13)] text-xl font-semibold text-[var(--brand-soft)]">
                {agency.name
                  .split(' ')
                  .map((word) => word[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <h3 className="text-2xl leading-tight">{agency.name}</h3>
              <p className="mt-4 text-sm text-[var(--muted)]">MOTAC: {agency.motac}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">Packages: {agency.packages}</p>
              <p className="mt-2 inline-flex items-center gap-1 text-sm text-[var(--brand-soft)]">
                <Star size={14} className="fill-[var(--brand-soft)]" />
                Rating: {agency.rating}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/"
          className="reveal mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand-soft)]"
          style={{ ['--delay' as string]: '430ms' }}
        >
          Lihat Semua 20+ Agensi Bertauliah
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
