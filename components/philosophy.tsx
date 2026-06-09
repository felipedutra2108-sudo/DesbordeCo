'use client'

import { motion } from 'motion/react'
import { WHATSAPP_URL } from '@/lib/site'
import { SplatIcon } from '@/components/icons'

const WORDS = [
  { text: 'DEJÁ', brand: false },
  { text: 'LA', brand: false },
  { text: 'POSE,', brand: false },
  { text: 'MOSTRÁ', brand: false },
  { text: 'EL', brand: false },
  { text: 'DESBORDE.', brand: true },
]

export function Philosophy() {
  return (
    <section
      id="actitud"
      className="relative overflow-hidden border-y-2 border-cream bg-secondary px-5 py-24 md:px-8 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 dots opacity-[0.07]" />

      {/* Splats decorativos */}
      <SplatIcon className="pointer-events-none absolute -right-6 bottom-10 size-40 text-brand opacity-10 md:size-64" />
      <SplatIcon className="pointer-events-none absolute -left-4 top-8 size-24 text-brand opacity-8 md:size-40" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="mb-8 flex items-center gap-3">
          <SplatIcon className="size-12 text-brand" />
          <span className="inline-block border-2 border-cream bg-brand px-3 py-1 text-sm font-black uppercase tracking-[0.2em] text-brand-foreground">
            La actitud
          </span>
        </div>

        <h2 className="font-display text-stamp text-[clamp(2rem,9vw,9rem)] uppercase leading-[0.92] tracking-tight">
  {WORDS.map((w, i) => (
    <span
      key={`${w.text}-${i}`}
      className={`inline-block pr-[0.25em] ${w.brand ? 'text-brand' : ''}`}
    >
      {w.text}
    </span>
  ))}
</h2>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border-2 border-cream bg-cream md:grid-cols-3">
          {[
            {
              t: 'Plancha caliente',
              d: 'Smasheamos el medallón hasta lograr esos bordes crocantes que te hacen volver.',
            },
            {
              t: 'Producto real',
              d: 'Carne fresca, pan del día y salsas hechas por nosotros. Nada congelado.',
            },
            {
              t: 'Energía de calle',
              d: 'Proyecto de Montevideo, hecho a pulmón y con mucha actitud. Sin pose.',
            },
          ].map((c, i) => (
            <div key={c.t} className="relative overflow-hidden bg-secondary p-8">
              <span className="font-logo text-5xl text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-xl uppercase tracking-tight">
                {c.t}
              </h3>
              <p className="mt-3 text-pretty font-medium text-muted-foreground">
                {c.d}
              </p>
            </div>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center gap-3 border-2 border-cream bg-cream px-8 py-4 font-display text-lg uppercase tracking-tight text-cream-foreground shadow-brutal-red transition-all hover:-translate-x-1 hover:-translate-y-1"
        >
          Vení a probar →
        </a>
      </div>
    </section>
  )
}
