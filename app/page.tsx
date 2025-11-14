import Hero from '@/components/Hero'
import WhatWeOffer from '@/components/WhatWeOffer'
import Plans from '@/components/Plans'
import Differentiators from '@/components/Differentiators'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import SpecialOffer from '@/components/SpecialOffer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatWeOffer />
      <Plans />
      <Differentiators />
      <Gallery />
      <SpecialOffer />
      <Contact />
    </main>
  )
}

