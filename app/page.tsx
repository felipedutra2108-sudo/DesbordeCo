import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { FeaturedBurgers } from '@/components/featured-burgers'
import { Philosophy } from '@/components/philosophy'
import { Gallery } from '@/components/gallery'
import { Reviews } from '@/components/reviews'
import { HowToOrder } from '@/components/how-to-order'
import { Location } from '@/components/location'
import { InstagramSection } from '@/components/instagram-section'
import { Footer } from '@/components/footer'
import { WhatsappFab } from '@/components/whatsapp-fab'

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <FeaturedBurgers />
      <Philosophy />
      <Gallery />
      <Reviews />
      <HowToOrder />
      <Location />
      <InstagramSection />
      <Footer />
      <WhatsappFab />
    </main>
  )
}
