import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Archivo, Rubik_Mono_One, Lilita_One } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const rubikMono = Rubik_Mono_One({
  variable: '--font-rubik-mono',
  subsets: ['latin'],
  weight: ['400'],
})

const lilita = Lilita_One({
  variable: '--font-lilita',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'DESBORDE.CO — Smash Burgers · Punta Carretas, Montevideo',
  description:
    'Mucho sabor, poco drama. Smash burgers de calle desde Punta Carretas, Montevideo. Dejá la pose, mostrá el desborde. Pedí por WhatsApp.',
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`dark ${archivo.variable} ${rubikMono.variable} ${lilita.variable} bg-background`}
    >
      <body className="font-sans antialiased grain">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
