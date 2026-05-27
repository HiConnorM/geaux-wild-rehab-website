import { Hero } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about-section'
import { WhoWeAreSection } from '@/components/sections/who-we-are-section'
import { HowToHelpSection } from '@/components/sections/how-to-help-section'
import { AnimalsWeHelpSection } from '@/components/sections/animals-we-help-section'
import { TikTokSection } from '@/components/sections/tiktok-section'
import { FAQSection } from '@/components/sections/faq-section'
import { ImpactStats } from '@/components/sections/impact-stats'

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutSection />
      <WhoWeAreSection />
      <HowToHelpSection />
      <AnimalsWeHelpSection />
      <TikTokSection />
      <FAQSection />
      <ImpactStats />
    </div>
  )
}
