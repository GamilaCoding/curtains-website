import { Nav } from "@/components/nav"
import { HeroSlider } from "@/components/hero-slider"
import { Features } from "@/components/features"
import { Products } from "@/components/products"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroSlider />
      <Features />
      <Products />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

