'use client';

import Link from 'next/link';
import { Calculator, Handshake, Rocket, Sprout } from 'lucide-react';
import { useState } from 'react';

const pathways = [
  {
    key: 'simpan',
    title: 'Simpan',
    headline: 'Rancang 20-Bulan',
    amount: 'RM345/bln',
    detail: 'Total: RM6,900',
    cta: 'Kira Simpanan Saya',
    hoverText: 'If I save RM345/month for 20 months = RM6,900 towards my Umrah',
    icon: Sprout,
    colorClass:
      'border-[rgba(67,178,111,0.35)] bg-[rgba(67,178,111,0.12)] text-[var(--green)]',
    buttonClass:
      'border-[rgba(67,178,111,0.45)] bg-[rgba(67,178,111,0.2)] text-[var(--green)] hover:bg-[rgba(67,178,111,0.3)]',
  },
  {
    key: 'terus',
    title: 'Terus',
    headline: 'Bertolak Segera',
    amount: 'RM1k/2k/3k Deposit',
    detail: 'Commission: Up to RM500',
    cta: 'Pilih Tarikh Bertolak',
    hoverText: 'Departure in <90 days? Pay RM1,000 deposit only',
    icon: Rocket,
    colorClass:
      'border-[rgba(109,143,255,0.35)] bg-[rgba(109,143,255,0.12)] text-[var(--blue)]',
    buttonClass:
      'border-[rgba(109,143,255,0.46)] bg-[rgba(109,143,255,0.2)] text-[var(--blue)] hover:bg-[rgba(109,143,255,0.3)]',
  },
  {
    key: 'biaya',
    title: 'Biaya',
    headline: 'Biaya Patuh Syariah',
    amount: 'Partner: One Tranzac (KPKT)',
    detail: 'Tawarruq: Compliant',
    cta: 'Semak Kelayakan',
    hoverText: 'Monthly repayment starting from RMXXX* (for illustration)',
    icon: Handshake,
    colorClass:
      'border-[rgba(217,173,99,0.35)] bg-[rgba(217,173,99,0.13)] text-[var(--brand-soft)]',
    buttonClass:
      'border-[rgba(217,173,99,0.45)] bg-[rgba(217,173,99,0.22)] text-[var(--brand-soft)] hover:bg-[rgba(217,173,99,0.32)]',
  },
];

export function Pathways() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="pathways" className="section-pad">
      <div className="shell">
        <div className="mb-12 text-center md:mb-16">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">Pathways</p>
          <h2 className="reveal mt-3 text-4xl leading-tight md:text-5xl" style={{ ['--delay' as string]: '80ms' }}>
            Tiga Jalan. Satu Tujuan.
          </h2>
          <p
            className="reveal mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[var(--muted)]"
            style={{ ['--delay' as string]: '180ms' }}
          >
            Every pilgrim&apos;s situation is unique. Choose the pathway that aligns with your timeline and finances.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {pathways.map((path, index) => {
            const Icon = path.icon;
            const isActive = active === path.key;

            return (
              <article
                key={path.key}
                className="panel reveal group relative overflow-hidden rounded-3xl p-6"
                style={{ ['--delay' as string]: `${220 + index * 100}ms` }}
                onMouseEnter={() => setActive(path.key)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex items-center justify-between">
                    <span className={`grid h-12 w-12 place-content-center rounded-2xl border ${path.colorClass}`}>
                      <Icon size={22} />
                    </span>
                    <span className="rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.05)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                      {path.title}
                    </span>
                  </div>

                  <h3 className="text-3xl leading-tight">{path.headline}</h3>
                  <p className="mt-4 text-sm font-semibold text-[var(--ink)]">{path.amount}</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{path.detail}</p>

                  <Link
                    href="/#contact"
                    className={`mt-7 inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${path.buttonClass}`}
                  >
                    {path.cta}
                  </Link>
                </div>

                <div
                  className={`absolute inset-0 z-20 flex translate-y-8 flex-col items-center justify-center gap-3 bg-[rgba(6,10,21,0.92)] px-6 text-center transition-all duration-300 ${
                    isActive ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0'
                  }`}
                >
                  <Calculator size={26} className="text-[var(--brand-soft)]" />
                  <p className="text-base font-medium leading-relaxed text-[var(--ink)]">{path.hoverText}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
