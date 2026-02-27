import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'My Mega Holidays | Pemudah Jalan ke Tanah Suci',
  description:
    'Setiap Muslim Rindu. Kami Bantu Sampai. A digital, Shariah-conscious platform for trusted Umrah and Hajj planning.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans text-[color:var(--ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
