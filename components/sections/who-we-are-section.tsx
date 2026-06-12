'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { prefersReducedMotion, ST_DEFAULTS, EASE_OUT } from '@/lib/gsap-utils'

const fox8Story = {
  title: 'Hammond wildlife rehab gives abandoned animals a second chance',
  url: 'https://www.fox8live.com/2026/06/06/hammond-wildlife-rehab-gives-abandoned-animals-second-chance/',
  summary: 'FOX 8 visited Geaux Wild Rehab near Hammond to share the people, volunteers, and specialized care behind the rehabilitation of Louisiana\'s native wildlife.',
  date: 'June 5, 2026',
  publisher: 'FOX 8 / WVUE',
}

const dodoStories = [
  {
    title: "She Was Lifeless And Couldn't Move — Then A Kind Woman Decided To Help",
    url: 'https://www.thedodo.com/daily-dodo/she-was-lifeless-and-couldnt-move-then-a-kind-woman-decided-to-help',
  },
  {
    title: 'Little Boy Spots Fuzzy Lump Near Storm Drain And Runs To Get Help',
    url: 'https://www.thedodo.com/daily-dodo/little-boy-spots-fuzzy-lump-near-storm-drain-and-runs-to-get-help',
  },
]

const earthRangersStories = [
  {
    title: 'Can a 3-Legged Bobcat Survive in the Wild?',
    url: 'https://www.earthrangers.com/EN/US/youtube/can-a-3-legged-bobcat-survive-in-the-wild-2/',
  },
  {
    title: "This Coyote Couldn't Stand — But She Refused to Give Up",
    url: 'https://www.earthrangers.com/EN/US/videos/this-coyote-couldnt-stand-but-she-refused-to-give-up/',
  },
]

export function WhoWeAreSection() {
  const ref = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const missionCardRef = useRef<HTMLDivElement>(null)
  const featuredCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: import('gsap').Context | undefined
    ;(async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (prefersReducedMotion()) return

      ctx = gsap.context(() => {
        gsap.set([headerRef.current, missionCardRef.current, featuredCardRef.current], { opacity: 0, y: 36 })

        gsap.to(headerRef.current, {
          opacity: 1, y: 0,
          duration: 0.7, ease: EASE_OUT,
          scrollTrigger: { trigger: headerRef.current, ...ST_DEFAULTS },
        })

        gsap.to(missionCardRef.current, {
          opacity: 1, y: 0,
          duration: 0.7, ease: EASE_OUT,
          scrollTrigger: { trigger: missionCardRef.current, ...ST_DEFAULTS },
        })

        gsap.to(featuredCardRef.current, {
          opacity: 1, y: 0,
          duration: 0.7, ease: EASE_OUT,
          delay: 0.1,
          scrollTrigger: { trigger: featuredCardRef.current, ...ST_DEFAULTS },
        })
      }, ref)
    })()

    return () => ctx?.revert()
  }, [])

  return (
    <section ref={ref} className="relative bg-[#3B468E] overflow-hidden -mt-px">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24 md:pt-20 md:pb-32">

        {/* Section header */}
        <div ref={headerRef} className="mb-10 md:mb-12" style={{ opacity: 0 }}>
          <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-3">
            Our Story
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1] max-w-2xl text-balance">
            Who We Are
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-5">

          {/* Mission card */}
          <div ref={missionCardRef} className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl md:rounded-[2rem] p-6 md:p-8" style={{ opacity: 0 }}>
            <h3 className="font-bold text-xl md:text-2xl text-white mb-4">
              Dedicated to Louisiana Wildlife
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
              Geaux Wild Rehab is a 501(c)(3) licensed nonprofit wildlife rehabilitation center based in Hammond, Louisiana. We are permitted by the Louisiana Department of Wildlife &amp; Fisheries to care for all native mammal species.
            </p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Our mission is simple: rescue injured and orphaned wildlife, provide expert rehabilitative care, and release them back into their natural habitat whenever possible. Every animal receives compassionate rehabilitation with the goal of returning to the wild whenever possible.
            </p>
          </div>

          {/* Featured on card */}
          <div ref={featuredCardRef} className="bg-white rounded-xl md:rounded-[2rem] p-6 md:p-8 shadow-lg shadow-black/10" style={{ opacity: 0 }}>
            <p className="text-xs font-bold text-[#3B468E] uppercase tracking-wider mb-6">
              Featured On
            </p>

            {/* FOX 8 / WVUE */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src="/images/fox8-logo.png"
                  alt="FOX 8 Local First"
                  width={96}
                  height={48}
                  className="object-contain"
                />
                <span className="text-xs text-gray-400">{fox8Story.date}</span>
              </div>
              <a
                href={fox8Story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-4 rounded-xl md:rounded-2xl border border-gray-100 hover:border-[#26C9AA] hover:bg-[#26C9AA]/5 transition-all duration-200"
                aria-label={`${fox8Story.title} — ${fox8Story.publisher} (opens in new tab)`}
              >
                <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#26C9AA]/10 flex items-center justify-center group-hover:bg-[#26C9AA]/20 transition-colors">
                  <ExternalLink className="h-3.5 w-3.5 text-[#26C9AA]" />
                </div>
                <div>
                  <span className="text-sm font-medium text-[#1a1f3d] leading-snug group-hover:text-[#26C9AA] transition-colors block mb-1">
                    {fox8Story.title}
                  </span>
                  <span className="text-xs text-gray-500 leading-relaxed">{fox8Story.summary}</span>
                </div>
              </a>
            </div>

            <div className="border-t border-gray-100 my-6" />

            {/* The Dodo */}
            <div className="mb-6">
              <div className="mb-4">
                <Image
                  src="/images/dodo-logo.png"
                  alt="The Dodo"
                  width={160}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-3">
                {dodoStories.map((story, i) => (
                  <a
                    key={i}
                    href={story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-4 rounded-xl md:rounded-2xl border border-gray-100 hover:border-[#26C9AA] hover:bg-[#26C9AA]/5 transition-all duration-200"
                  >
                    <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#26C9AA]/10 flex items-center justify-center group-hover:bg-[#26C9AA]/20 transition-colors">
                      <ExternalLink className="h-3.5 w-3.5 text-[#26C9AA]" />
                    </div>
                    <span className="text-sm font-medium text-[#1a1f3d] leading-snug group-hover:text-[#26C9AA] transition-colors">
                      {story.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 my-6" />

            {/* Earth Rangers */}
            <div>
              <div className="mb-4">
                <Image
                  src="/images/earth-rangers-logo.png"
                  alt="Earth Rangers"
                  width={160}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-3">
                {earthRangersStories.map((story, i) => (
                  <a
                    key={i}
                    href={story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-4 rounded-xl md:rounded-2xl border border-gray-100 hover:border-[#26C9AA] hover:bg-[#26C9AA]/5 transition-all duration-200"
                  >
                    <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#26C9AA]/10 flex items-center justify-center group-hover:bg-[#26C9AA]/20 transition-colors">
                      <ExternalLink className="h-3.5 w-3.5 text-[#26C9AA]" />
                    </div>
                    <span className="text-sm font-medium text-[#1a1f3d] leading-snug group-hover:text-[#26C9AA] transition-colors">
                      {story.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute left-0 right-0 z-20 pointer-events-none" style={{ lineHeight: 0, bottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 'clamp(48px, 6vw, 80px)', display: 'block' }} preserveAspectRatio="none">
          <path d="M0 80V40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0Z" fill="#3B468E"/>
        </svg>
      </div>
    </section>
  )
}
