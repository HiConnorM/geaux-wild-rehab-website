'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

const dodoStories = [
  {
    title: 'She Was Lifeless And Couldn\'t Move — Then A Kind Woman Decided To Help',
    url: 'https://www.thedodo.com/daily-dodo/she-was-lifeless-and-couldnt-move-then-a-kind-woman-decided-to-help',
  },
  {
    title: 'Little Boy Spots Fuzzy Lump Near Storm Drain And Runs To Get Help',
    url: 'https://www.thedodo.com/daily-dodo/little-boy-spots-fuzzy-lump-near-storm-drain-and-runs-to-get-help',
  },
]

export function WhoWeAreSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVis(true),
      { threshold: 0.1, rootMargin: '50px' }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative bg-[#3B468E] overflow-hidden -mt-px">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24 md:pt-20 md:pb-32">

        {/* Section header */}
        <div className={`mb-10 md:mb-12 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
          <div className={`bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl md:rounded-[2rem] p-6 md:p-8 transition-all duration-700 delay-100 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-bold text-xl md:text-2xl text-white mb-4">
              Dedicated to Louisiana Wildlife
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
              Geaux Wild Rehab is a 501(c)(3) licensed nonprofit wildlife rehabilitation center based in Hammond, Louisiana. We are permitted by the Louisiana Department of Wildlife &amp; Fisheries to care for all native mammal species.
            </p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Our mission is simple: rescue injured and orphaned wildlife, provide expert rehabilitative care, and release them back into their natural habitat whenever possible. With over 2,146 animals rescued and an 82% release rate, every life matters to us.
            </p>
          </div>

          {/* Featured on The Dodo card */}
          <div className={`bg-white rounded-xl md:rounded-[2rem] p-6 md:p-8 shadow-lg shadow-black/10 transition-all duration-700 delay-200 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xs font-bold text-[#3B468E] uppercase tracking-wider mb-4">
              Featured On
            </p>

            {/* Dodo logo */}
            <div className="mb-6">
              <Image
                src="/images/dodo-logo.png"
                alt="The Dodo"
                width={180}
                height={72}
                className="object-contain"
              />
            </div>

            <p className="text-sm text-gray-500 mb-5 leading-relaxed">
              Geaux Wild Rehab has been featured in two stories on The Dodo, one of the world&apos;s largest animal and wildlife media brands.
            </p>

            {/* Story links */}
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

        </div>
      </div>

      {/* Wave at bottom — transitions into the next section (HowToHelp = #3B468E → stays, so white for next section) */}
      <div className="absolute left-0 right-0 z-20 pointer-events-none" style={{ lineHeight: 0, bottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 'clamp(48px, 6vw, 80px)', display: 'block' }} preserveAspectRatio="none">
          <path d="M0 80V40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0Z" fill="#3B468E"/>
        </svg>
      </div>
    </section>
  )
}
