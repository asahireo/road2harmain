import { Compass, Handshake, MoonStar, ShieldCheck, Smartphone, Stamp } from 'lucide-react';

const pillars = [
  {
    title: 'Dana Terlindung',
    description: 'All payments held in BNM-compliant Escrow Account. Your money is safe until departure.',
    icon: ShieldCheck,
  },
  {
    title: 'Lesen Diiktiraf',
    description: 'Every agency is MOTAC-verified. No fly-by-night operators.',
    icon: Stamp,
  },
  {
    title: 'Patuh Syariah',
    description: 'Financing via Tawarruq. Endorsed by Shariah advisors.',
    icon: MoonStar,
  },
  {
    title: 'Digital Pertama',
    description: 'First fully-digital pilgrimage ecosystem in Malaysia.',
    icon: Smartphone,
  },
  {
    title: 'Rakan Strategik',
    description: 'Backed by MobilityOne (listed on LSE AIM). Strong corporate governance.',
    icon: Handshake,
  },
  {
    title: 'Bimbingan Menyeluruh',
    description: 'From registration to digital certificate post-return.',
    icon: Compass,
  },
];

export function TrustPillars() {
  return (
    <section id="trust" className="section-pad">
      <div className="shell">
        <div className="mb-12 text-center md:mb-16">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">Why Us</p>
          <h2 className="reveal mt-3 text-4xl leading-tight md:text-5xl" style={{ ['--delay' as string]: '80ms' }}>
            Bukan Sekadar Platform.
            <br />
            Ini Amanah.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <article key={pillar.title} className="panel reveal rounded-3xl p-6" style={{ ['--delay' as string]: `${170 + index * 75}ms` }}>
                <div className="mb-5 grid h-11 w-11 place-content-center rounded-xl border border-[rgba(217,173,99,0.4)] bg-[rgba(217,173,99,0.14)] text-[var(--brand-soft)]">
                  <Icon size={20} />
                </div>
                <h3 className="text-2xl leading-tight">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
