import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  CalendarRange,
  Gem,
  HandCoins,
  Landmark,
  PlaneTakeoff,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  WalletCards,
} from 'lucide-react';

const navItems = [
  { label: 'Pathways', href: '#pathways' },
  { label: 'Journey', href: '#journey' },
  { label: 'Proof', href: '#proof' },
  { label: 'Gallery', href: '#gallery' },
];

const pathways = [
  {
    title: 'Simpan',
    subtitle: 'Structured Monthly Plan',
    headline: 'RM345 / month for 20 months',
    description:
      'A disciplined runway for pilgrims who prefer certainty: clear target, predictable amount, no sudden shocks.',
    icon: WalletCards,
    accent: 'from-emerald-300/45 to-emerald-500/10',
    border: 'border-emerald-300/40',
  },
  {
    title: 'Terus',
    subtitle: 'Fast Departure Track',
    headline: 'Deposit from RM1,000',
    description:
      'For near-term departures. Move quickly while preserving flexibility with staged commitments and partner choices.',
    icon: PlaneTakeoff,
    accent: 'from-blue-300/45 to-blue-500/10',
    border: 'border-blue-300/40',
  },
  {
    title: 'Biaya',
    subtitle: 'Shariah-Conscious Financing',
    headline: 'Tawarruq-compliant structure',
    description:
      'Built with compliant financing rails and transparent terms so affordability does not compromise principles.',
    icon: HandCoins,
    accent: 'from-amber-200/55 to-amber-500/10',
    border: 'border-amber-200/45',
  },
];

const journeySteps = [
  {
    id: '01',
    title: 'Onboard',
    detail: 'Complete profile and verification in minutes.',
    icon: Users,
  },
  {
    id: '02',
    title: 'Compare',
    detail: 'Review agencies, itineraries, and package details side-by-side.',
    icon: Landmark,
  },
  {
    id: '03',
    title: 'Secure',
    detail: 'Lock your spot through the pathway that matches your cash flow.',
    icon: ShieldCheck,
  },
  {
    id: '04',
    title: 'Depart',
    detail: 'Travel prep, updates, and documents coordinated from one place.',
    icon: CalendarRange,
  },
];

const trustMetrics = [
  { value: '50K+', label: 'Pilgrim target across campaigns' },
  { value: '20+', label: 'Licensed agency partners' },
  { value: '3', label: 'Payment pathways with clear rules' },
  { value: '24/7', label: 'Digital visibility into your journey' },
];

const testimonials = [
  {
    quote:
      'I stopped delaying Umrah when the numbers finally made sense. The monthly plan made it feel real, not risky.',
    person: 'Ahmad F., Teacher',
    route: 'Simpan Pathway',
  },
  {
    quote:
      'The process felt premium end-to-end. I could compare agencies quickly and move without chasing paperwork.',
    person: 'Nur L., Founder',
    route: 'Terus Pathway',
  },
];

const gallery = [
  {
    src: '/road2harmain/images/masjid-nabawi-sunset-1.jpg',
    alt: 'Sunset clouds over Al-Masjid an-Nabawi.',
    title: 'Golden Horizon',
  },
  {
    src: '/road2harmain/images/masjid-nabawi-sunset-2.jpg',
    alt: 'Pilgrims in the courtyard during evening light.',
    title: 'Courtyard Calm',
  },
  {
    src: '/road2harmain/images/masjid-nabawi-sunset-3.jpg',
    alt: 'Minarets against a warm Madinah sky.',
    title: 'Evening Minarets',
  },
  {
    src: '/road2harmain/images/masjid-nabawi-sunset-4.jpg',
    alt: 'Night sky transition around the mosque architecture.',
    title: 'Blue Hour Reverence',
  },
];

const revealDelay = (delay: number) => ({ ['--delay' as string]: `${delay}ms` });

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip pb-20">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(1300px_780px_at_90%_-8%,rgba(245,196,118,0.22),transparent_65%),radial-gradient(980px_680px_at_-10%_20%,rgba(69,182,167,0.2),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(4,7,18,0.72)_0%,rgba(4,7,18,0.96)_30%,rgba(4,7,18,1)_100%)]" />

      <section className="shell relative pb-10 pt-6 md:pb-12 md:pt-8 lg:min-h-[calc(100vh-1.5rem)]">
        <header className="panel reveal sticky top-3 z-50 flex items-center justify-between rounded-2xl px-4 py-2.5 md:px-6" style={revealDelay(40)}>
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-[rgba(242,202,136,0.3)] bg-[rgba(242,202,136,0.08)]">
              <Image
                src="/road2harmain/haraminlogo.svg"
                alt="My Mega Holidays Logo"
                fill
                className="object-contain p-1.5"
              />
            </div>
            <div>
              <p className="text-[0.95rem] font-semibold leading-none">My Mega Holidays</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Pemudah Jalan ke Tanah Suci
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--brand-soft)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pathways"
              className="rounded-full border border-[rgba(242,202,136,0.5)] bg-[linear-gradient(135deg,rgba(242,202,136,0.92),rgba(201,150,71,0.92))] px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#111723]"
            >
              Start
            </a>
          </nav>
        </header>

        <div className="relative mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
          <div>
            <p className="reveal inline-flex items-center gap-2 rounded-full border border-[rgba(242,202,136,0.35)] bg-[rgba(242,202,136,0.1)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]" style={revealDelay(110)}>
              <Sparkles size={14} />
              Premium Pilgrimage Platform
            </p>

            <h1 className="reveal mt-5 max-w-4xl text-[clamp(2.8rem,5.3vw,5.9rem)] leading-[0.95]" style={revealDelay(180)}>
              Not Another
              <span className="block text-[var(--brand-soft)]">Travel Listing.</span>
              This Is a Financially
              <span className="block text-[var(--emerald)]">Engineered Journey.</span>
            </h1>

            <p className="reveal mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-[1.3rem]" style={revealDelay(250)}>
              Designed for Muslims who are serious about reaching the Holy Land without guesswork. Trusted agencies,
              clear structures, and one digital experience from niat to departure.
            </p>

            <div className="reveal mt-7 flex flex-col gap-3 sm:flex-row" style={revealDelay(320)}>
              <a
                href="#pathways"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(242,202,136,0.5)] bg-[linear-gradient(135deg,#c99647,var(--brand-soft))] px-8 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#111723]"
              >
                Build My Plan
                <ArrowRight size={16} />
              </a>
              <a
                href="#proof"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.04)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink)]"
              >
                See Proof
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {trustMetrics.map((metric, index) => (
                <article
                  key={metric.label}
                  className="panel reveal rounded-2xl p-4"
                  style={revealDelay(380 + index * 80)}
                >
                  <p className="text-2xl font-semibold text-[var(--brand-soft)] md:text-3xl">{metric.value}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">{metric.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-3 lg:pt-6">
            <article className="panel reveal overflow-hidden rounded-[1.8rem] p-3" style={revealDelay(210)}>
              <div className="relative h-52 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/road2harmain/images/masjid-nabawi-sunset-2.jpg"
                  alt="Pilgrims in the Prophet's Mosque courtyard"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_10%,rgba(4,7,18,0.9)_90%)]" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">Live Momentum</p>
                    <p className="mt-2 text-lg leading-tight text-white">Open campaigns moving pilgrims every quarter.</p>
                  </div>
                  <BadgeCheck className="text-[var(--emerald)]" />
                </div>
              </div>
            </article>

            <article className="panel reveal rounded-[1.6rem] p-5" style={revealDelay(290)}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">What Changes</p>
              <div className="mt-3.5 space-y-2.5">
                {[
                  'No opaque pricing ladders',
                  'No agency guesswork under pressure',
                  'No disconnected payment journey',
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <Gem size={16} className="mt-1 text-[var(--brand-soft)]" />
                    <p className="text-[0.96rem] leading-relaxed text-[var(--muted)]">{line}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="pathways" className="shell section-pad">
        <div className="mb-10 md:mb-14">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]" style={revealDelay(60)}>
            Three Pathways
          </p>
          <h2 className="reveal mt-3 max-w-4xl text-4xl leading-tight md:text-6xl" style={revealDelay(120)}>
            Pick the Track.
            <span className="block text-[var(--muted)]">Keep the Intention.</span>
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {pathways.map((path, index) => {
            const Icon = path.icon;
            return (
              <article
                key={path.title}
                className={`panel reveal relative overflow-hidden rounded-[1.8rem] p-6 ${path.border}`}
                style={revealDelay(170 + index * 90)}
              >
                <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${path.accent}`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      {path.subtitle}
                    </span>
                    <span className="grid h-10 w-10 place-content-center rounded-xl border border-white/20 bg-[rgba(255,255,255,0.06)] text-[var(--brand-soft)]">
                      <Icon size={18} />
                    </span>
                  </div>

                  <h3 className="mt-6 text-3xl leading-tight">{path.title}</h3>
                  <p className="mt-3 text-base font-semibold text-[var(--ink)]">{path.headline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{path.description}</p>

                  <a
                    href="#"
                    className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-soft)]"
                  >
                    Explore {path.title}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="journey" className="shell section-pad">
        <div className="panel reveal rounded-[2rem] p-6 md:p-10" style={revealDelay(80)}>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">Journey Architecture</p>
              <h2 className="mt-3 text-4xl leading-tight md:text-5xl">From Niat to Boarding Pass</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
              This flow removes hesitation by design: each step has one outcome and one next action.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.id} className="relative rounded-2xl border border-white/12 bg-[rgba(255,255,255,0.03)] p-5">
                  {index < journeySteps.length - 1 && (
                    <span className="pointer-events-none absolute right-[-16px] top-1/2 hidden h-px w-8 bg-[rgba(242,202,136,0.4)] md:block" />
                  )}
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">Step {step.id}</span>
                  <div className="mt-4 grid h-10 w-10 place-content-center rounded-xl border border-white/15 bg-black/20 text-[var(--brand-soft)]">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{step.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="proof" className="shell section-pad">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="panel reveal rounded-[1.8rem] p-7" style={revealDelay(80)}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">Market Confidence</p>
            <h2 className="mt-4 text-4xl leading-tight">Built on Trust, Not Hype.</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Operational clarity, licensed partners, and visible progress signals at every stage.
            </p>

            <div className="mt-7 grid gap-3">
              {[
                'MOTAC-aligned agency ecosystem',
                'Escrow-first payment posture',
                'Shariah-conscious financing pathways',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3">
                  <ShieldCheck size={16} className="mt-0.5 text-[var(--emerald)]" />
                  <p className="text-sm text-[var(--muted)]">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-4">
            {testimonials.map((item, index) => (
              <article
                key={item.person}
                className="panel reveal rounded-[1.6rem] p-6"
                style={revealDelay(140 + index * 80)}
              >
                <div className="mb-4 inline-flex rounded-full border border-[rgba(242,202,136,0.4)] bg-[rgba(242,202,136,0.12)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">
                  <Star size={12} className="mr-1" />
                  Verified Story
                </div>
                <p className="text-lg leading-relaxed text-[var(--ink)]">&quot;{item.quote}&quot;</p>
                <p className="mt-5 text-sm font-semibold text-[var(--ink)]">{item.person}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">{item.route}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="shell section-pad pb-14">
        <div className="mb-10 md:mb-12">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]" style={revealDelay(60)}>
            Atmosphere
          </p>
          <h2 className="reveal mt-3 text-4xl leading-tight md:text-5xl" style={revealDelay(120)}>
            Madinah, Rendered in Light.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
          {gallery.map((item, index) => {
            const layout =
              index === 0
                ? 'md:col-span-7 md:row-span-2'
                : index === 1
                  ? 'md:col-span-5'
                  : index === 2
                    ? 'md:col-span-3'
                    : 'md:col-span-2';

            return (
              <figure
                key={item.src}
                className={`panel reveal group relative overflow-hidden rounded-[1.3rem] p-2 ${layout}`}
                style={revealDelay(180 + index * 70)}
              >
                <div className={`relative overflow-hidden rounded-[1rem] ${index === 0 ? 'h-[26rem]' : 'h-[12.5rem]'}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(4,7,18,0.88)_100%)]" />
                  <figcaption className="absolute bottom-4 left-4 right-4 text-sm font-medium text-[var(--ink)]">
                    {item.title}
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>
      </section>

      <section className="shell pb-12">
        <div className="reveal rounded-[2rem] border border-[rgba(242,202,136,0.35)] bg-[linear-gradient(120deg,rgba(242,202,136,0.2),rgba(48,182,146,0.18))] p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-10" style={revealDelay(120)}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">Ready to Move</p>
            <h2 className="mt-3 max-w-2xl text-3xl leading-tight md:text-4xl">
              Build a journey plan that is emotional in purpose, precise in execution.
            </h2>
          </div>
          <a
            href="#pathways"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.45)] bg-[rgba(4,7,18,0.55)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink)] md:mt-0"
          >
            Start Pathway Match
            <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </main>
  );
}
