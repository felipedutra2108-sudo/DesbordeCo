'use client'

import { MapPin, Clock, Phone } from 'lucide-react'
import { ADDRESS, MAPS_URL, WHATSAPP_URL } from '@/lib/site'

const HOURS = [
  { d: 'Lun — Jue', h: '19:00 — 00:00' },
  { d: 'Vie — Sáb', h: '19:00 — 02:00' },
  { d: 'Domingo', h: '19:00 — 00:00' },
]

export function Location() {
  return (
    <section
      id="donde"
      className="border-t-2 border-cream bg-secondary px-5 py-20 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="mb-6 inline-block border-2 border-cream bg-brand px-3 py-1 text-sm font-black uppercase tracking-[0.2em] text-brand-foreground">
            Dónde estamos
          </span>
          <h2 className="font-display text-[clamp(2rem,8vw,5.5rem)] uppercase leading-[0.92] tracking-tight">
            Pasá a <span className="text-brand">desbordarte</span>
          </h2>

          <div className="mt-10 space-y-8">
            <div className="flex items-start gap-4">
              <span className="border-2 border-cream bg-brand p-2 text-brand-foreground">
                <MapPin className="size-5" />
              </span>
              <div>
                <p className="font-display text-lg uppercase">Dirección</p>
                <p className="font-medium text-muted-foreground">{ADDRESS}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="border-2 border-cream bg-brand p-2 text-brand-foreground">
                <Clock className="size-5" />
              </span>
              <div className="flex-1">
                <p className="font-display text-lg uppercase">Horarios</p>
                <ul className="mt-2 space-y-1">
                  {HOURS.map((h) => (
                    <li
                      key={h.d}
                      className="flex justify-between gap-8 font-medium text-muted-foreground"
                    >
                      <span>{h.d}</span>
                      <span className="text-foreground">{h.h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-cream bg-background px-5 py-3 text-sm font-black uppercase tracking-wide transition-colors hover:bg-cream hover:text-cream-foreground"
              >
                Ver en el mapa
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-cream bg-brand px-5 py-3 text-sm font-black uppercase tracking-wide text-brand-foreground shadow-brutal-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <Phone className="size-4" /> Escribinos
              </a>
            </div>
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden border-2 border-cream shadow-brutal md:aspect-[4/3]">
          <iframe
            title="Mapa DESBORDE.CO — Luis Franzini 818, Punta Carretas"
            src="https://www.google.com/maps?q=Luis+Franzini+818+Montevideo+Uruguay&output=embed"
            className="h-full w-full grayscale invert-[0.9] contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
