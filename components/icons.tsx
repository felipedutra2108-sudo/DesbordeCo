import type { SVGProps } from 'react'

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

/** Splat/asterisco orgánico — sello visual de Desborde Co. */
export function SplatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M50 5 C53 18, 53 18, 65 10 C60 22, 60 22, 75 20 C66 30, 66 30, 78 35 C65 37, 65 37, 72 50 C60 46, 60 46, 65 60 C53 53, 53 53, 55 68 C46 58, 46 58, 42 72 C38 59, 38 59, 28 68 C30 55, 30 55, 18 58 C24 46, 24 46, 12 48 C22 37, 22 37, 10 32 C24 28, 24 28, 16 18 C28 22, 28 22, 26 9 C35 18, 35 18, 38 5 C44 17, 44 17, 50 5Z" />
    </svg>
  )
}
