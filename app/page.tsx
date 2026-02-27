import { Hero } from '@/components/sections/hero'
import { RehabTimeline } from '@/components/sections/rehab-timeline'
import { SpeciesGrid } from '@/components/sections/species-grid'
import { ImpactStats } from '@/components/sections/impact-stats'
import { SupportTiles } from '@/components/sections/support-tiles'
import { FeaturedStories } from '@/components/sections/featured-stories'
import { FAQTeaser } from '@/components/sections/faq-teaser'

export default function HomePage() {
  return (
    <>
      <Hero />
      <RehabTimeline />
      <SpeciesGrid />
      <ImpactStats />
      <SupportTiles />
      <FeaturedStories />
      <FAQTeaser />
    </>
  )
}
