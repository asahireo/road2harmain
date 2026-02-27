'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { Building2, CalendarDays, Smartphone, Wallet } from 'lucide-react';
import { useRef } from 'react';

const steps = [
  {
    id: '01',
    title: 'DAFTAR',
    description: 'Register on OneCENT Plus\n5-minute e-KYC',
    icon: Smartphone,
  },
  {
    id: '02',
    title: 'PILIH',
    description: 'Choose agency and package\nCompare 20+ agencies',
    icon: CalendarDays,
  },
  {
    id: '03',
    title: 'BAYAR',
    description: 'Pay via instalment,\ndeposit, or financing',
    icon: Wallet,
  },
  {
    id: '04',
    title: 'BERANGKAT',
    description: 'All set! Certificate\nawaits on return',
    icon: Building2,
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="how-it-works" className="section-pad">
      <div className="shell">
        <div className="mb-12 text-center md:mb-16">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">How It Works</p>
          <h2 className="reveal mt-3 text-4xl leading-tight md:text-5xl" style={{ ['--delay' as string]: '80ms' }}>
            Dari Niat ke Penerbangan.
            <br />
            Digital Sepenuhnya.
          </h2>
        </div>

        <div ref={ref} className="relative max-w-6xl mx-auto">
          <div className="absolute left-[9%] right-[9%] top-12 hidden h-px bg-[rgba(255,255,255,0.14)] md:block">
            <motion.div className="h-full bg-[linear-gradient(90deg,var(--brand),var(--brand-soft))]" style={{ width: progressWidth }} />
          </div>

          <div className="absolute bottom-0 left-8 top-0 w-px bg-[rgba(255,255,255,0.14)] md:hidden">
            <motion.div className="w-full bg-[linear-gradient(180deg,var(--brand),var(--brand-soft))]" style={{ height: progressHeight }} />
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article key={step.id} className="panel reveal relative rounded-3xl p-6" style={{ ['--delay' as string]: `${180 + index * 80}ms` }}>
                  <span className="absolute right-4 top-4 text-4xl leading-none text-[rgba(255,255,255,0.14)]">
                    {step.id}
                  </span>
                  <div className="mb-5 grid h-12 w-12 place-content-center rounded-2xl border border-[rgba(217,173,99,0.35)] bg-[rgba(217,173,99,0.14)] text-[var(--brand-soft)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-2xl leading-tight">{step.title}</h3>
                  <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
