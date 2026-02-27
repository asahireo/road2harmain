import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Saya fikir Umrah mustahil kerana kos. Tapi RM345 sebulan selama 20 bulan, saya berjaya juga. Terima kasih My Mega Holidays!',
    author: 'Ahmad Fauzi, Guru (Simpan)',
    date: 'Pilgrim, Jan 2026',
  },
  {
    quote:
      'Proses biaya dengan One Tranzac sangat mudah dan cepat. Dalam 3 hari kerja, loan diluluskan. Sekarang saya sudah di Madinah.',
    author: 'Norliza Hamid, Usahawan (Biaya)',
    date: 'Pilgrim, Feb 2026',
  },
  {
    quote:
      'Sebagai agensi, platform ini memudahkan kami urus booking dan sijil digital. Semua di satu tempat.',
    author: 'Andalas Travel Sdn Bhd (Rakan Agensi)',
    date: 'Partner since 2025',
  },
];

export function Testimonials() {
  return (
    <section id="stories" className="section-pad">
      <div className="shell">
        <div className="mb-12 md:mb-16">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">Testimonials</p>
          <h2 className="reveal mt-3 text-4xl leading-tight md:text-5xl" style={{ ['--delay' as string]: '80ms' }}>
            Suara Jemaah Yang Telah Sampai
          </h2>
        </div>

        <div className="hide-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 md:mx-0 md:px-0">
          {testimonials.map((item, index) => (
            <article
              key={item.author}
              className="panel reveal min-h-[330px] min-w-[320px] snap-center rounded-3xl p-7 md:min-w-[360px]"
              style={{ ['--delay' as string]: `${160 + index * 80}ms` }}
            >
              <Quote size={24} className="text-[var(--brand-soft)]" />
              <p className="mt-5 text-lg leading-relaxed text-[var(--ink)]">{item.quote}</p>
              <div className="mt-7 border-t border-[var(--line)] pt-4">
                <p className="text-sm font-semibold text-[var(--ink)]">{item.author}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">{item.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
