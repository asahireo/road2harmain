import { BarChart3, Handshake, ShieldCheck, Sparkles, UserRound } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const timeline = [
  {
    year: '2015',
    title: 'The Early Agency Era',
    text: 'My Mega Holidays started as a humble travel agency promoting Malaysia\'s beauty.',
  },
  {
    year: '2025',
    title: 'Acquisition & New Direction',
    text: 'New leadership, new vision: From general travel to spiritual travel specialist.',
  },
  {
    year: '2026',
    title: 'Road2Haramain Launch',
    text: 'Launch of Road2Haramain: Malaysia\'s first integrated digital pilgrimage ecosystem.',
  },
];

const leaders = [
  {
    name: 'Datuk Hj Abdul Rahim',
    role: 'Chairman, My Mega',
    quote: 'Spiritual travel must be accessible to all Malaysians.',
  },
  {
    name: 'Murthaza Hamzah',
    role: 'Chief Strategy Officer',
    quote: 'We are building more than a platform. We are building a community.',
  },
  {
    name: 'Partner Representative',
    role: 'One Tranzac',
    quote: 'Providing accessible, Shariah-compliant financing for all.',
  },
];

const partners = [
  {
    name: 'MobilityOne (M1)',
    role: 'Technology backbone listed on LSE AIM. Provides OneCENT Plus infrastructure.',
  },
  {
    name: 'One Tranzac',
    role: 'KPKT-licensed credit provider. Offers Shariah-compliant Tawarruq financing.',
  },
  {
    name: 'TFP (OneCENT)',
    role: 'Super app developer and technology partner.',
  },
  {
    name: 'MOTAC',
    role: 'Regulatory body ensuring all agencies are licensed and compliant.',
  },
];

const commitments = [
  {
    title: 'Transparency',
    text: 'No hidden fees. Ever.',
    icon: Sparkles,
  },
  {
    title: 'Security',
    text: 'Your money is always in a trust account.',
    icon: ShieldCheck,
  },
  {
    title: 'Accessibility',
    text: 'Three pathways for every financial situation.',
    icon: BarChart3,
  },
  {
    title: 'Support',
    text: 'Malaysian customer service, 7 days a week.',
    icon: Handshake,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(6,10,21,0.72),rgba(6,10,21,0.95)_50%,rgba(6,10,21,1))]" />
        <div className="shell">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">About Us</p>
          <h1 className="reveal mt-4 max-w-4xl text-5xl leading-[1.05] md:text-7xl" style={{ ['--delay' as string]: '80ms' }}>
            Dari 2015 ke 2026:
            <br />
            Transformasi Sebuah Amanah
          </h1>
          <p
            className="reveal mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)]"
            style={{ ['--delay' as string]: '170ms' }}
          >
            From a humble agency to a digital pilgrimage ecosystem, our mission stays the same: helping every Malaysian Muslim move toward the Holy Land with clarity and trust.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <div className="mb-12">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">Our Story</p>
            <h2 className="reveal mt-3 text-4xl leading-tight md:text-5xl" style={{ ['--delay' as string]: '70ms' }}>
              Visual Timeline
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {timeline.map((item, index) => (
              <article key={item.year} className="panel reveal rounded-3xl p-6" style={{ ['--delay' as string]: `${170 + index * 90}ms` }}>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-soft)]">{item.year}</p>
                <h3 className="mt-3 text-3xl leading-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <div className="mb-12">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">Leadership</p>
            <h2 className="reveal mt-3 text-4xl leading-tight md:text-5xl" style={{ ['--delay' as string]: '70ms' }}>
              Di Sebalik Transformasi
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {leaders.map((leader, index) => (
              <article key={leader.name} className="panel reveal rounded-3xl p-6" style={{ ['--delay' as string]: `${170 + index * 90}ms` }}>
                <div className="mb-5 grid h-16 w-16 place-content-center rounded-full border border-[rgba(217,173,99,0.36)] bg-[rgba(217,173,99,0.13)] text-[var(--brand-soft)]">
                  <UserRound size={28} />
                </div>
                <h3 className="text-3xl leading-tight">{leader.name}</h3>
                <p className="mt-3 text-sm font-semibold text-[var(--ink)]">{leader.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">&quot;{leader.quote}&quot;</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <div className="mb-12">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">Strategic Partners</p>
            <h2 className="reveal mt-3 text-4xl leading-tight md:text-5xl" style={{ ['--delay' as string]: '70ms' }}>
              Sinergi Kukuh, Ekosistem Lengkap
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {partners.map((partner, index) => (
              <article key={partner.name} className="panel reveal rounded-3xl p-6" style={{ ['--delay' as string]: `${170 + index * 80}ms` }}>
                <h3 className="text-3xl leading-tight">{partner.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{partner.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <div className="mb-12">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">Our Commitment</p>
            <h2 className="reveal mt-3 text-4xl leading-tight md:text-5xl" style={{ ['--delay' as string]: '70ms' }}>
              Amanah Kami Kepada Jemaah
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="panel reveal rounded-3xl p-6" style={{ ['--delay' as string]: `${160 + index * 70}ms` }}>
                  <div className="mb-4 grid h-11 w-11 place-content-center rounded-xl border border-[rgba(217,173,99,0.4)] bg-[rgba(217,173,99,0.14)] text-[var(--brand-soft)]">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-2xl leading-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
