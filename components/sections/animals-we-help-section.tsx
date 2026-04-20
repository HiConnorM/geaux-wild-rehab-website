'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { species } from '@/lib/content'

export function AnimalsWeHelpSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1, rootMargin: '50px' })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative bg-white overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 lg:pb-28">
      {/* Wavy top divider — matches white wave from HowToHelp bottom */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-14 md:h-20" preserveAspectRatio="none">
          <path d="M0 0H1440V40C1200 80 960 0 720 40C480 80 240 0 0 40V0Z" fill="white"/>
        </svg>
      </div>

      {/* Decorative diamonds */}
      <div className="absolute top-28 left-[6%] w-5 h-5 bg-[#26C9AA]/15 rotate-45 rounded hidden md:block" />
      <div className="absolute top-48 right-[10%] w-4 h-4 bg-[#3B468E]/15 rotate-45 rounded-sm hidden md:block" />
      <div className="absolute bottom-40 right-[8%] w-6 h-6 border-2 border-[#26C9AA]/15 rotate-45 rounded hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
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

        {/* Animals grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5 mb-10 md:mb-12">
          {species.slice(0, 8).map((animal, i) => (
            <Link
              key={animal.id}
              href={`/wildlife/${animal.id}`}
              className={`group relative bg-[#F8F4F4] rounded-xl md:rounded-[1.5rem] overflow-hidden hover:shadow-xl hover:shadow-black/10 transition-all duration-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${150 + i * 75}ms` }}
            >
              <div className={`${i === 0 || i === 5 ? 'aspect-[3/4]' : 'aspect-square'} relative`}>
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-contain p-2 md:p-3 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width:768px) 50vw, 25vw"
                  style={{
                    marginTop: i === 1 ? '36px' : i === 2 ? '22px' : i === 3 ? '17px' : '0px',
                    marginBottom: i === 1 ? '5px' : i === 2 ? '9px' : '0px',
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-white via-white/95 to-transparent">
                <h3 className="font-bold text-[#1a1f3d] text-sm md:text-lg group-hover:text-[#26C9AA] transition-colors">
                  {animal.name}
                </h3>
                <p className="text-[10px] md:text-xs text-gray-500 italic hidden sm:block">{animal.scientificName}</p>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-2 right-2 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#26C9AA] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
                <p className="text-white/80 text-sm md:text-base">Don&apos;t wait — call our 24/7 hotline or submit a report online.</p>
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
    </section>
  )
}
