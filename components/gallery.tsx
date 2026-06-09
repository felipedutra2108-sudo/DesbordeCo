'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { INSTAGRAM_URL } from '@/lib/site'

const SHOTS = [
  { src: '/gallery-1.png', span: 'md:col-span-7 md:row-span-2', label: 'Noche de calle', rotate: '-1deg' },
  { src: '/gallery-2.png', span: 'md:col-span-5', label: 'Papas voladoras', rotate: '1.5deg' },
  { src: '/gallery-3.png', span: 'md:col-span-5', label: 'En la plancha', rotate: '-1.5deg' },
  { src: '/gallery-4.png', span: 'md:col-span-4', label: 'Pared roja', rotate: '1deg' },
  { src: '/gallery-5.png', span: 'md:col-span-4', label: 'Para llevar', rotate: '-1deg' },
  { src: '/gallery-6.png', span: 'md:col-span-4', label: 'El festín', rotate: '1.5deg' },
]

export function Gallery() {
  return (
    <section
      id="momentos"
      className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-32"
    >
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-[clamp(2.2rem,8vw,6.5rem)] uppercase leading-[0.9] tracking-tight">
          Los <span className="text-brand">momentos</span>
        </h2>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-black uppercase tracking-widest text-brand transition-opacity hover:opacity-70"
        >
          @desbordeco.uy
        </a>
      </div>

      <div className="grid auto-rows-[220px] grid-cols-1 gap-5 md:auto-rows-[260px] md:grid-cols-12">
        {SHOTS.map((s, i) => (
          <motion.figure
            key={s.src}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            className={`group relative overflow-hidden border-2 border-cream shadow-brutal-sm transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 ${s.span}`}
            style={{ transform: `rotate(${s.rotate})` }}
          >
            <Image
              src={s.src || '/placeholder.svg'}
              alt={s.label}
              fill
              className="object-cover contrast-125 grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
            />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-full border-t-2 border-cream bg-brand px-4 py-2 text-sm font-black uppercase tracking-wide text-brand-foreground transition-transform duration-300 group-hover:translate-y-0">
              {s.label}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
