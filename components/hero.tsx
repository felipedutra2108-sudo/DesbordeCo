'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { Star } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'
import { SplatIcon } from '@/components/icons'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden pb-10 pt-28"
    >
      {/* Parallax flash-photo burger */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/burger-hero.png"
          alt="Smash burger DESBORDE.CO con queso derretido, fotografía con flash"
          fill
          priority
          className="object-cover opacity-80 contrast-125 saturate-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60" />
      </motion.div>

      {/* Splat decorativo — arriba derecha */}
      <motion.div
        initial={{ opacity: 0, rotate: -20, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute right-8 top-24 text-brand md:right-16 md:top-28"
      >
        <SplatIcon className="size-20 opacity-70 md:size-32" />
      </motion.div>

      {/* Top chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mb-8 flex w-full max-w-[1600px] flex-wrap items-center gap-3 px-5 md:px-8"
      >
        <div className="flex items-center gap-1.5 border-2 border-cream bg-background/70 px-3 py-1.5 backdrop-blur">
          <Star className="size-4 fill-brand text-brand" />
          <span className="text-sm font-black">4.8</span>
          <span className="text-sm text-muted-foreground">en Google</span>
        </div>
        <span className="border-2 border-cream bg-brand px-3 py-1.5 text-sm font-black uppercase tracking-widest text-brand-foreground">
          Punta Carretas · MVD
        </span>
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="mx-auto w-full max-w-[1600px] px-5 md:px-8"
      >
        <h1 className="font-display text-stamp uppercase leading-[0.92] tracking-tight">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(2.4rem,9vw,8rem)]"
            >
              Mucho sabor,
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.22, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-[clamp(2.4rem,9vw,8rem)] text-brand"
              style={{ transform: 'rotate(-1.5deg)' }}
            >
              poco drama.
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-pretty text-base font-medium text-foreground/90 md:text-lg">
            Smash burgers de calle, a la plancha y sin vueltas. Dejá la pose,
            mostrá el desborde. Pedí por WhatsApp y listo.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 border-2 border-cream bg-brand px-8 py-5 font-display text-lg uppercase tracking-wide text-brand-foreground shadow-brutal transition-all hover:-translate-x-1 hover:-translate-y-1"
          >
            Pedir ahora
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
