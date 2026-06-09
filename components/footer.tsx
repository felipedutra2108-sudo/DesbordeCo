import { MessageCircle, MapPin } from 'lucide-react'
import { InstagramIcon, SplatIcon } from '@/components/icons'
import { ADDRESS, INSTAGRAM_URL, WHATSAPP_URL } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t-2 border-cream bg-background">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <SplatIcon className="size-8 text-brand" />
              <SplatIcon className="size-5 text-brand opacity-50" />
            </div>
            <p className="font-display text-stamp text-3xl uppercase leading-none tracking-tight md:text-5xl">
              MUCHO SABOR,
              <br />
              <span className="text-brand">POCO DRAMA.</span>
            </p>
            <p className="mt-4 text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Hamburguesas smash que desbordan.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-brand">
                Contacto
              </h3>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-brand"
                  >
                    <MessageCircle className="size-4" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-brand"
                  >
                    <InstagramIcon className="size-4" /> @desbordeco.uy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-brand">
                Local
              </h3>
              <p className="inline-flex items-start gap-2 text-sm font-medium text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                {ADDRESS}
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-brand">
                Menú
              </h3>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a href="#burgers" className="transition-colors hover:text-brand">
                    Burgers
                  </a>
                </li>
                <li>
                  <a href="#momentos" className="transition-colors hover:text-brand">
                    Momentos
                  </a>
                </li>
                <li>
                  <a href="#donde" className="transition-colors hover:text-brand">
                    Dónde estamos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logo gigante en tipografía bubbly */}
        <div className="mt-16 overflow-hidden">
          <p className="font-logo text-[clamp(2.5rem,16vw,15rem)] uppercase leading-[0.85] tracking-tighter text-foreground">
            DESBORDE<span className="text-brand">.</span><span className="text-brand">CO</span>
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t-2 border-cream pt-6 text-xs font-medium text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} DESBORDE.CO Smash Burgers · Punta
            Carretas, Montevideo, Uruguay
          </p>
          <p>Hecho con mucha hambre.</p>
        </div>
      </div>
    </footer>
  )
}
