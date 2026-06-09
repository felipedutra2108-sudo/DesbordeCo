import { SplatIcon } from '@/components/icons'

const ITEMS = [
  'DESBORDE O NADA',
  'SMASH BURGERS',
  'MONTEVIDEO',
  'DESBORDATE TRANQUILA',
  'PUNTA CARRETAS',
  'MUCHO SABOR POCO DRAMA',
]

export function Marquee() {
  return (
    <div className="border-y-2 border-cream bg-brand py-3 text-brand-foreground overflow-hidden">
      <div className="marquee flex w-max whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex" aria-hidden={dup === 1}>
            {ITEMS.map((item) => (
              <span
                key={`${dup}-${item}`}
                className="mx-4 inline-flex items-center gap-4 font-display text-xl uppercase tracking-tight md:text-3xl"
              >
                {item}
                <SplatIcon
                  aria-hidden
                  className="size-5 text-brand-foreground/70 md:size-7"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
