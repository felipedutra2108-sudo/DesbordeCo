'use client'

import { motion } from 'motion/react'
import { WHATSAPP_URL } from '@/lib/site'
import { SplatIcon } from '@/components/icons'

const STEPS = [
  { n: '01', t: 'Elegí tu burger', d: 'Mirá el menú y decidí cuál se te antoja hoy.' },
  { n: '02', t: 'Mandá WhatsApp', d: 'Nos escribís tu pedido y dirección. Rápido y sin apps.' },
  { n: '03', t: 'Desbordate', d: 'Pasás a buscarla o te la enviamos. Mucho sabor, poco drama.' },
]

export function HowToOrder() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-32">
      <div className="mb-16 flex items-start gap-4">
        <SplatIcon className="mt-2 size-8 shrink-0 text-brand md:size-12" />
        <h2 className="font-display text-stamp text-[clamp(2.2rem,8vw,6rem)] uppercase leading-[0.9] tracking-tight">
          ¿Cómo <span className="text-brand">pido?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-2 border-cream bg-card p-8 shadow-brutal-sm md:p-10"
            style={{ transform: `rotate(${i === 1 ? 1 : -1}deg)` }}
          >
            <span className="font-logo text-6xl text-brand md:text-7xl">
              {s.n}
            </span>
            <h3 className="mt-6 font-display text-xl uppercase tracking-tight">
              {s.t}
            </h3>
            <p className="mt-3 font-medium text-muted-foreground">{s.d}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 border-2 border-cream bg-brand px-10 py-6 font-display text-2xl uppercase tracking-tight text-brand-foreground shadow-brutal transition-all hover:-translate-x-1 hover:-translate-y-1 md:text-3xl"
        >
          Pedir ahora
          <SplatIcon className="size-6 transition-transform group-hover:rotate-12" />
        </a>
      </div>
    </section>
  )
}
