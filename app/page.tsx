import { Hero } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about-section'
import { HowToHelpSection } from '@/components/sections/how-to-help-section'
import { AnimalsWeHelpSection } from '@/components/sections/animals-we-help-section'
import { StoriesSection } from '@/components/sections/stories-section'
import { TikTokSection } from '@/components/sections/tiktok-section'
import { FAQSection } from '@/components/sections/faq-section'
import { ImpactStats } from '@/components/sections/impact-stats'

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutSection />
      <HowToHelpSection />
      <AnimalsWeHelpSection />
      <StoriesSection />
      <TikTokSection />
      <FAQSection />
      <ImpactStats />
    </div>
  )
}
