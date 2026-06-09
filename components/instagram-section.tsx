'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { InstagramIcon } from '@/components/icons'
import { INSTAGRAM_URL } from '@/lib/site'

const FEED = [
  '/gallery-4.png',
  '/burger-1.png',
  '/gallery-1.png',
  '/burger-3.png',
  '/gallery-6.png',
  '/burger-2.png',
]

export function InstagramSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-32">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-[clamp(2.2rem,8vw,6rem)] uppercase leading-[0.9] tracking-tight">
          Seguinos
        </h2>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border-2 border-cream bg-brand px-5 py-2.5 text-base font-black uppercase tracking-wide text-brand-foreground shadow-brutal-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          <InstagramIcon className="size-5" /> @desbordeco.uy
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
        {FEED.map((src, i) => (
          <motion.a
            key={src}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group relative aspect-square overflow-hidden border-2 border-cream"
          >
            <Image
              src={src || '/placeholder.svg'}
              alt="Post de Instagram DESBORDE.CO"
              fill
              className="object-cover contrast-125 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-brand/0 transition-colors group-hover:bg-brand/80">
              <InstagramIcon className="size-7 text-brand-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
