'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'
import { SplatIcon } from '@/components/icons'

const LINKS = [
  { label: 'Burgers', href: '#burgers' },
  { label: 'Actitud', href: '#actitud' },
  { label: 'Momentos', href: '#momentos' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Dónde', href: '#donde' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b-2 border-cream bg-background/90 backdrop-blur-md'
            : 'border-b-2 border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-3 md:px-8">
          {/* Logo — tipografía bubbly como la marca */}
          <a href="#top" className="flex items-center gap-2 leading-none">
            <span className="font-logo text-xl uppercase leading-none tracking-tight md:text-2xl">
              DESB<span className="text-brand">ORDE</span>
            </span>
            <span className="font-logo text-xl text-brand uppercase leading-none md:text-2xl">.CO</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 border-2 border-cream bg-brand px-5 py-2.5 text-sm font-black uppercase tracking-wide text-brand-foreground shadow-brutal-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:inline-flex"
          >
            Pedir ahora
          </a>

          <button
            onClick={() => setOpen(true)}
            className="border-2 border-cream bg-brand p-1.5 text-brand-foreground md:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="size-6" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-brand text-brand-foreground md:hidden"
          >
            {/* Splat decorativo en menú móvil */}
            <SplatIcon className="absolute right-6 top-20 size-28 text-brand-foreground/10" />

            <div className="flex items-center justify-between border-b-2 border-cream px-5 py-3">
              <span className="font-logo text-xl uppercase">
                DESBORDE<span className="text-background">.CO</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="border-2 border-cream p-1.5"
                aria-label="Cerrar menú"
              >
                <X className="size-6" />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-3 px-5">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-4xl uppercase leading-[0.95]"
                  style={{ transform: `rotate(${i % 2 === 0 ? -2 : 1.5}deg)` }}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="m-5 border-2 border-cream bg-cream py-4 text-center font-black uppercase tracking-wide text-cream-foreground"
            >
              Pedir por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
