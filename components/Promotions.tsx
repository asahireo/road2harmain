import Link from 'next/link';

const offers = [
  {
    title: 'Early Bird 2027',
    subtitle: 'Book Umrah for Jan 2027',
    perks: ['FREE S4S SIM', 'Takaful Insurance'],
    validity: 'Valid until 30 June 2026',
    cta: 'Rebut Peluang',
  },
  {
    title: 'Group Discount',
    subtitle: 'Bring 10 friends',
    perks: ['All get RM150 cashback', 'Valid for all pathways'],
    validity: 'Ongoing promotion',
    cta: 'Bina Kumpulan',
  },
];

export function Promotions() {
  return (
    <section id="promotions" className="section-pad">
      <div className="shell">
        <div className="mb-12 md:mb-16">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">Promotions</p>
          <h2 className="reveal mt-3 text-4xl leading-tight md:text-5xl" style={{ ['--delay' as string]: '80ms' }}>
            Promosi Terkini
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {offers.map((offer, index) => (
            <article
              key={offer.title}
              className="panel reveal rounded-3xl p-7"
              style={{ ['--delay' as string]: `${180 + index * 90}ms` }}
            >
              <h3 className="text-3xl leading-tight">{offer.title}</h3>
              <p className="mt-2 text-sm font-semibold text-[var(--muted)]">{offer.subtitle}</p>

              <ul className="mt-5 space-y-2">
                {offer.perks.map((perk) => (
                  <li key={perk} className="text-sm text-[var(--ink)]">- {perk}</li>
                ))}
              </ul>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">{offer.validity}</p>

              <Link
                href="/#contact"
                className="mt-6 inline-flex rounded-full border border-[rgba(217,173,99,0.46)] bg-[rgba(217,173,99,0.16)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-soft)] transition-colors hover:bg-[rgba(217,173,99,0.24)]"
              >
                {offer.cta} -&gt;
              </Link>
            </article>
          ))}
        </div>

        <div
          className="reveal mt-5 rounded-3xl border border-[rgba(48,182,146,0.45)] bg-[linear-gradient(120deg,rgba(48,182,146,0.2),rgba(217,173,99,0.2))] p-6 md:p-7"
          style={{ ['--delay' as string]: '360ms' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--emerald)]">Introducer Programme</p>
          <p className="mt-3 text-2xl leading-tight text-[var(--ink)]">
            Earn RM150-RM500 per referral. Daftar sekarang!
          </p>
        </div>
      </div>
    </section>
  );
}
