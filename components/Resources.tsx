import Link from 'next/link';
import { ArrowRight, Clock3 } from 'lucide-react';

const resources = [
  {
    title: 'Panduan Visa Umrah 2026',
    summary: 'Step-by-step visa application process for Malaysian pilgrims.',
    readTime: '5 min read',
  },
  {
    title: 'Tawarruq Explained Simply',
    summary: 'How Shariah-compliant loans work for your spiritual journey.',
    readTime: '3 min read',
  },
  {
    title: 'Checklist 30 Hari Sebelum Bertolak',
    summary: 'What to pack, what to prepare physically and mentally.',
    readTime: '8 min read',
  },
];

export function Resources() {
  return (
    <section id="resources" className="section-pad">
      <div className="shell">
        <div className="mb-12 md:mb-16">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">Resources</p>
          <h2 className="reveal mt-3 text-4xl leading-tight md:text-5xl" style={{ ['--delay' as string]: '80ms' }}>
            Bekalan Ilmu Sebelum Bertolak
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {resources.map((item, index) => (
            <article
              key={item.title}
              className="panel reveal flex h-full flex-col rounded-3xl p-6"
              style={{ ['--delay' as string]: `${170 + index * 90}ms` }}
            >
              <h3 className="text-3xl leading-tight">{item.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">{item.summary}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  <Clock3 size={14} />
                  {item.readTime}
                </span>
                <Link href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-soft)]">
                  Baca Artikel
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/"
          className="reveal mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand-soft)]"
          style={{ ['--delay' as string]: '360ms' }}
        >
          Lawati Pusat Sumber
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
