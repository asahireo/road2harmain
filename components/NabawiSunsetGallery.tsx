import Image from 'next/image';

const sunsetPhotos = [
  {
    src: '/images/masjid-nabawi-sunset-1.jpg',
    alt: 'Minarets of Al-Masjid an-Nabawi with warm sunset clouds in Madinah.',
    caption: 'Golden hour over Al-Masjid an-Nabawi.',
    source: 'https://commons.wikimedia.org/wiki/File:Beautiful_Sunset_At_Masjid-e-Nabawi_in_May_2016.jpg',
  },
  {
    src: '/images/masjid-nabawi-sunset-2.jpg',
    alt: 'Pilgrims under umbrellas near Al-Masjid an-Nabawi during sunset.',
    caption: 'Soft evening light in the Prophet\'s Mosque courtyard.',
    source: 'https://commons.wikimedia.org/wiki/File:ClosedUmbrellaOfAl-Masjid-an-Nabawi.jpg',
  },
  {
    src: '/images/masjid-nabawi-sunset-3.jpg',
    alt: 'Sunset sky and minarets at Al-Masjid an-Nabawi in Madinah.',
    caption: 'A calm sunset view of Madinah Haram.',
    source: 'https://commons.wikimedia.org/wiki/File:Madinah_Haram_at_sunset_(2560580351).jpg',
  },
];

export function NabawiSunsetGallery() {
  return (
    <section id="nabawi-sunset" className="section-pad">
      <div className="shell">
        <div className="mb-12 md:mb-16">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">Inspiration</p>
          <h2 className="reveal mt-3 text-4xl leading-tight md:text-5xl" style={{ ['--delay' as string]: '80ms' }}>
            Masjid Nabawi at Sunset
          </h2>
          <p
            className="reveal mt-5 max-w-3xl text-lg leading-relaxed text-[var(--muted)]"
            style={{ ['--delay' as string]: '170ms' }}
          >
            A few sunset moments from Madinah to keep your niat strong while planning the journey.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {sunsetPhotos.map((photo, index) => (
            <figure
              key={photo.src}
              className="panel reveal group overflow-hidden rounded-3xl p-3"
              style={{ ['--delay' as string]: `${220 + index * 90}ms` }}
            >
              <div className="relative h-72 overflow-hidden rounded-2xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <figcaption className="px-1 pb-1 pt-4">
                <p className="text-sm font-medium leading-relaxed text-[var(--ink)]">{photo.caption}</p>
                <a
                  href={photo.source}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-soft)]"
                >
                  Wikimedia Commons
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
