import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const badges = [
  'MOTAC LICENSED',
  'KPKT PARTNER',
  'BNM-COMPLIANT ESCROW',
  'SHARIAH-COMPLIANT TAWARRUQ',
];

const trustStats = [
  '50,000+ Pilgrims Target 2026',
  '20+ MOTAC Licensed Agencies',
  '3 Flexible Payment Pathways',
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-24 md:pt-40">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/images/masjid-nabawi-sunset-2.jpg')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(4,7,18,0.74),rgba(4,7,18,0.95)_48%,rgba(4,7,18,1))]" />
      <div className="float-orb absolute -left-28 top-18 h-72 w-72 rounded-full bg-[rgba(217,173,99,0.2)] blur-3xl" />
      <div className="float-orb absolute -right-24 top-22 h-72 w-72 rounded-full bg-[rgba(48,182,146,0.18)] blur-3xl [animation-delay:1800ms]" />

      <div className="shell">
        <div className="max-w-5xl">
          <div className="reveal mb-8 flex flex-wrap gap-2" style={{ ['--delay' as string]: '80ms' }}>
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[rgba(217,173,99,0.34)] bg-[rgba(217,173,99,0.1)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]"
              >
                {badge}
              </span>
            ))}
          </div>

          <h1 className="reveal text-5xl leading-[1.05] md:text-7xl" style={{ ['--delay' as string]: '160ms' }}>
            Setiap Muslim Rindu.
            <br />
            <span className="text-[var(--brand-soft)]">Kami Bantu Sampai.</span>
          </h1>

          <p className="reveal mt-7 max-w-3xl text-lg leading-relaxed text-[var(--muted)] md:text-xl" style={{ ['--delay' as string]: '250ms' }}>
            The first fully-digital, Shariah-conscious platform that transforms your dream of Umrah and Hajj into a structured, affordable reality. No more barriers. Just a clear path forward.
          </p>

          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row" style={{ ['--delay' as string]: '340ms' }}>
            <Link
              href="/#pathways"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em]"
            >
              Mulakan Perjalanan Suci
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/#pathways"
              className="btn-secondary inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em]"
            >
              Saya Perlu Biaya
            </Link>
          </div>
        </div>

        <div
          className="reveal panel mt-14 grid gap-4 rounded-2xl p-5 md:grid-cols-3 md:items-center md:gap-6 md:p-6"
          style={{ ['--delay' as string]: '430ms' }}
        >
          {trustStats.map((stat) => (
            <div key={stat} className="flex items-center gap-3">
              <span className="grid h-6 w-6 place-content-center rounded-full bg-[rgba(48,182,146,0.24)] text-[var(--emerald)]">
                <CheckCircle2 size={14} />
              </span>
              <span className="text-sm font-medium text-[var(--ink)] md:text-[15px]">{stat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
