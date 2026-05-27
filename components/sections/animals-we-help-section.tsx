'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { species } from '@/lib/content'

export function AnimalsWeHelpSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(true)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1, rootMargin: '50px' })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    /* -mt-px + relative z-10 so this section sits directly on top of the HowToHelp wave */
    <section ref={ref} className="relative z-0 bg-white overflow-hidden -mt-px">

      {/* Content — generous padding; bottom gives clearance for the outgoing wave */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-28 md:pt-20 md:pb-36 lg:pt-24 lg:pb-40">

        {/* Decorative diamonds */}
        <div className="absolute top-8 left-[6%] w-5 h-5 bg-[#26C9AA]/15 rotate-45 rounded hidden md:block" />
        <div className="absolute top-24 right-[10%] w-4 h-4 bg-[#3B468E]/15 rotate-45 rounded-sm hidden md:block" />
        <div className="absolute bottom-40 right-[8%] w-6 h-6 border-2 border-[#26C9AA]/15 rotate-45 rounded hidden md:block" />

        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-10 md:mb-14 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-3">Native Louisiana Wildlife</span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1f3d] leading-[1.1] mb-4">
            Animals We Help
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            From tiny squirrels to majestic bobcats, we provide expert care for Louisiana&apos;s diverse wildlife.
          </p>
        </div>

        {/* Animals grid — real species photos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5 mb-10 md:mb-12">
          {species.slice(0, 8).map((animal, i) => (
            <Link
              key={animal.id}
              href={`/wildlife/${animal.id}`}
              className={`group relative bg-[#F8F4F4] rounded-xl md:rounded-[1.5rem] overflow-hidden hover:shadow-xl hover:shadow-black/10 transition-all duration-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${150 + i * 75}ms` }}
            >
              <div className="aspect-square relative">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                />
                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <h3 className="font-bold text-white text-sm md:text-base group-hover:text-[#26C9AA] transition-colors leading-tight">
                  {animal.name}
                </h3>
                <p className="text-white/60 text-[10px] md:text-xs italic hidden sm:block">{animal.scientificName}</p>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-2 right-2 md:top-3 md:right-3 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#26C9AA] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4 text-white" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 delay-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button asChild size="lg" className="rounded-full h-12 md:h-14 px-6 md:px-8 bg-[#1a1f3d] hover:bg-[#0f1225] text-white font-bold w-full sm:w-auto">
            <Link href="/wildlife">
              View All Species
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Emergency banner */}
        <div className={`bg-[#26C9AA] rounded-xl md:rounded-[2rem] p-6 md:p-8 lg:p-10 transition-all duration-700 delay-600 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 text-center sm:text-left">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6 md:h-7 md:w-7 text-[#26C9AA]" />
              </div>
              <div>
                <h3 className="font-bold text-xl md:text-2xl text-white mb-1">Found an injured animal?</h3>
                <p className="text-white/80 text-sm md:text-base">If you have found injured or orphaned wildlife, please reach out — we are here to help.</p>
              </div>
            </div>
            <Button asChild size="lg" className="rounded-full h-12 md:h-14 px-6 md:px-8 bg-white text-[#26C9AA] hover:bg-white/90 font-bold shrink-0 w-full sm:w-auto">
              <Link href="/get-help">
                Get Help Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave at bottom — matches TikTok section bg (#1a1f3d) for seamless transition */}
      <div className="absolute left-0 right-0 z-20 pointer-events-none" style={{ lineHeight: 0, bottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 'clamp(48px, 6vw, 80px)', display: 'block' }} preserveAspectRatio="none">
          <path d="M0 80V40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0Z" fill="#1a1f3d"/>
        </svg>
      </div>
    </section>
  )
}
