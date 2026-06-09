'use client'

import { motion } from 'motion/react'
import { Star } from 'lucide-react'
import { SplatIcon } from '@/components/icons'

const REVIEWS = [
  {
    name: 'Martina R.',
    text: 'Las mejores smash de Montevideo, sin discusión. Los bordes crocantes son otra cosa.',
  },
  {
    name: 'Joaquín P.',
    text: 'Pedí por WhatsApp y en 20 minutos la tenía. La Bacon Deluxe es un peligro.',
  },
  {
    name: 'Carolina M.',
    text: 'Onda, sabor y precio justo. Ya es mi lugar fijo del finde.',
  },
  {
    name: 'Diego S.',
    text: 'La Picante me voló la cabeza. Atención de diez y todo bien fresco.',
  },
]

export function Reviews() {
  return (
    <section
      id="reviews"
      className="border-y-2 border-cream bg-background px-5 py-20 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-stamp text-[clamp(2.2rem,8vw,6rem)] uppercase leading-[0.9] tracking-tight">
            Hablan <br />
            <span className="text-brand">por nosotros</span>
          </h2>
          <div className="inline-flex items-center gap-4 border-2 border-cream bg-brand px-6 py-4 text-brand-foreground shadow-brutal">
            <span className="font-logo text-5xl md:text-6xl">4.8</span>
            <div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-brand-foreground text-brand-foreground" />
                ))}
              </div>
              <p className="mt-1 text-sm font-bold uppercase tracking-wide">
                Rating en Google
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r, i) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex flex-col justify-between border-2 border-cream bg-card p-6 shadow-brutal-sm"
              style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
            >
              {/* Splat mini decorativo en la esquina */}
              <SplatIcon className="absolute right-3 top-3 size-5 text-brand opacity-30" />

              <div className="mb-6 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="text-pretty font-medium leading-relaxed">
                {'"'}
                {r.text}
                {'"'}
              </p>
              <footer className="mt-6 font-display text-base uppercase tracking-tight">
                — {r.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
