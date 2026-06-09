'use client'

import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

export function WhatsappFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Pedir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 border-2 border-cream bg-brand px-5 py-4 font-black uppercase tracking-wide text-brand-foreground shadow-brutal-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Pedí ya</span>
    </a>
  )
}
