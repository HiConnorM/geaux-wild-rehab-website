import { Hero } from '@/components/sections/hero'
import { AnimalShowcase } from '@/components/sections/animal-showcase'
import { DonationBanner } from '@/components/sections/donation-banner'
import { ImpactStats } from '@/components/sections/impact-stats'
import { FeaturedStories } from '@/components/sections/featured-stories'
import { FAQTeaser } from '@/components/sections/faq-teaser'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AnimalShowcase />
      <DonationBanner />
      <ImpactStats />
      <FeaturedStories />
      <FAQTeaser />
    </>
  )
}
