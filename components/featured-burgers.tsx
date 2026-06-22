'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { WHATSAPP_URL } from '@/lib/site'
import { SplatIcon } from '@/components/icons'

const BURGERS = [
  {
    n: '01',
    name: 'DESBORDADA',
    desc: 'Doble carne, cheddar, panceta,cebolla crispy y salsa barbacoa.',
    price: '$530',
    img: '/burger-1.png',
    rotate: '-1.5deg',
  },
  {
    n: '02',
    name: 'PROVO CO',
    desc: 'Doble carne, cheddar, provolone, cebolla colorada y chimichurri cremoso.',
    price: '$580',
    img: '/burger-2.png',
    rotate: '1.5deg',
  },
  {
    n: '03',
    name: 'LA PICANTE',
    desc: 'Jalapeños, pepper jack y salsa roja brava. Para los que se animan.',
    price: '$330',
    img: '/burger-3.png',
    rotate: '-1deg',
  },
]

export function FeaturedBurgers() {
  return (
    <section
      id="burgers"
      className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-32"
    >
      <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div className="flex items-start gap-4">
          <SplatIcon className="mt-2 size-8 shrink-0 text-brand md:size-12" />
          <h2 className="font-display text-stamp text-[clamp(2.2rem,8vw,6.5rem)] uppercase leading-[0.9] tracking-tight">
            El <span className="text-brand">menú</span>
          </h2>
        </div>
        <p className="max-w-xs text-pretty font-medium text-muted-foreground">
          Pocas burgers. Todas perfectas. Cada una se arma al momento sobre la
          plancha caliente.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-12 md:gap-y-24">
        {/* 01 — large, offset left */}
        <motion.article
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group md:col-span-7"
        >
          <BurgerCard b={BURGERS[0]} big />
        </motion.article>

        {/* 02 — smaller, pushed down right */}
        <motion.article
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group md:col-span-5 md:mt-24"
        >
          <BurgerCard b={BURGERS[1]} />
        </motion.article>

        {/* 03 — medium, right-aligned offset */}
        <motion.article
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group md:col-span-6 md:col-start-6"
        >
          <BurgerCard b={BURGERS[2]} />
        </motion.article>
      </div>
    </section>
  )
}

function BurgerCard({
  b,
  big = false,
}: {
  b: (typeof BURGERS)[number]
  big?: boolean
}) {
  return (
    <div>
      <div
        className="relative overflow-hidden border-2 border-cream shadow-brutal transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
        style={{ transform: `rotate(${b.rotate})` }}
      >
        <div
          className={`relative w-full overflow-hidden ${
            big ? 'aspect-[4/3]' : 'aspect-square'
          }`}
        >
          <Image
            src={b.img || '/placeholder.svg'}
            alt={b.name}
            fill
            className="object-cover contrast-110 transition-transform duration-700 group-hover:scale-110"
          />
          {/* Número en tipografía bubbly */}
          <span className="absolute left-3 top-3 font-logo text-4xl text-cream drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)] md:text-6xl">
            {b.n}
          </span>
          <span className="absolute right-0 top-3 border-2 border-cream bg-brand px-3 py-1 font-display text-lg text-brand-foreground md:text-2xl">
            {b.price}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <h3 className="font-display text-stamp text-2xl uppercase leading-none tracking-tight md:text-4xl">
            {b.name}
          </h3>
          <p className="mt-3 max-w-sm font-medium text-muted-foreground">
            {b.desc}
          </p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 border-2 border-cream bg-background px-5 py-2.5 text-xs font-black uppercase tracking-wide transition-colors hover:bg-brand hover:text-brand-foreground"
        >
          Pedir
        </a>
      </div>
    </div>
  )
}
