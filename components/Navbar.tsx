'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Simpan', href: '/#pathways' },
  { label: 'Terus', href: '/#pathways' },
  { label: 'Biaya', href: '/#pathways' },
  { label: 'Agensi', href: '/#agencies' },
  { label: 'Sumber', href: '/#resources' },
  { label: 'Card Demo', href: '/travel-card-demo' },
  { label: 'About', href: '/about' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'border-b border-[var(--line)] bg-[rgba(6,10,21,0.86)] backdrop-blur-md'
        : 'bg-transparent'
        }`}
    >
      <div className="shell flex h-[78px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-[var(--line)] bg-[rgba(217,173,99,0.08)]">
            <Image
              src="/logo.svg"
              alt="My Mega Holidays Logo"
              fill
              className="object-contain p-1.5"
            />
          </div>
          <span className="text-xl font-semibold tracking-tight">My Mega Holidays</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--brand-soft)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/#pathways" className="btn-primary px-5 py-2.5 text-sm font-semibold">
            Mula Sekarang
          </Link>
        </div>

        <button
          className="grid h-11 w-11 place-content-center rounded-xl border border-[var(--line)] bg-[rgba(11,17,34,0.8)] md:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[var(--line)] bg-[rgba(6,10,21,0.96)] px-6 pb-6 pt-5 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--muted)] transition-colors hover:bg-[rgba(217,173,99,0.12)] hover:text-[var(--brand-soft)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#pathways"
            className="btn-primary mt-4 block px-5 py-3 text-center text-sm font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Mula Sekarang
          </Link>
        </div>
      )}
    </header>
  );
}
