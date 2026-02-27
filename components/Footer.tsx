import Link from 'next/link';
import { Facebook, Instagram, Music2, Youtube } from 'lucide-react';

const footerLinks = {
  explore: [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Agencies', href: '/#agencies' },
    { name: 'Blog', href: '/#resources' },
  ],
  pathways: [
    { name: 'Instalment Plan', href: '#' },
    { name: 'Direct Purchase', href: '#' },
    { name: 'MicroLoan', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  partners: [
    { name: 'Travel Agencies', href: '#' },
    { name: 'Introducers', href: '#' },
    { name: 'OneCENT Plus', href: '#' },
    { name: 'MobilityOne', href: '#' },
  ],
  compliance: [
    { name: 'MOTAC: MYP/XXX/2026', href: '#' },
    { name: 'KPKT: One Tranzac', href: '#' },
    { name: 'PDPA Policy', href: '#' },
    { name: 'Refund Policy', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="section-pad pb-12">
      <div className="shell">
        <div className="panel rounded-[1.8rem] p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-content-center rounded-2xl border border-[var(--line)] bg-[rgba(217,173,99,0.14)]">
                  <span className="font-semibold text-[0.92rem] text-[var(--brand-soft)]">MM</span>
                </div>
                <span className="text-xl font-semibold tracking-tight">My Mega Holidays</span>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
                My Mega Holidays Sdn. Bhd. (202301047833)
                <br />
                &quot;Pemudah Jalan ke Tanah Suci&quot;
              </p>

              <div className="mt-6 flex items-center gap-3">
                {[Facebook, Instagram, Youtube, Music2].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="grid h-9 w-9 place-content-center rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.05)] text-[var(--muted)] transition-colors hover:text-[var(--brand-soft)]"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-base font-semibold">Explore</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--brand-soft)]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold">Pathways</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.pathways.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--brand-soft)]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold">Partners</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.partners.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--brand-soft)]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-[var(--line)] pt-6">
            <div className="flex flex-wrap gap-5">
              {footerLinks.compliance.map((link) => (
                <Link key={link.name} href={link.href} className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
              © 2026 My Mega Holidays Sdn. Bhd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
