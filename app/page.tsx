import { Hero } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about-section'
import { HowToHelpSection } from '@/components/sections/how-to-help-section'
import { AnimalsWeHelpSection } from '@/components/sections/animals-we-help-section'
import { StoriesSection } from '@/components/sections/stories-section'
import { FAQSection } from '@/components/sections/faq-section'
import { DonationBanner } from '@/components/sections/donation-banner'
import { ImpactStats } from '@/components/sections/impact-stats'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <HowToHelpSection />
      <AnimalsWeHelpSection />
      <StoriesSection />
      <FAQSection />
      <ImpactStats />
      <DonationBanner />
    </>
  )
}
