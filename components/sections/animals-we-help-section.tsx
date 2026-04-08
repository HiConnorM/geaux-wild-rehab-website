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
    <section ref={ref} className="relative bg-white overflow-hidden py-20 lg:py-28">
      {/* Decorative diamonds */}
      <div className="absolute top-28 left-[6%] w-5 h-5 bg-[#26C9AA]/15 rotate-45 rounded" />
      <div className="absolute top-48 right-[10%] w-4 h-4 bg-[#3B468E]/15 rotate-45 rounded-sm" />
      <div className="absolute bottom-40 right-[8%] w-6 h-6 border-2 border-[#26C9AA]/15 rotate-45 rounded" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-3">Native Louisiana Wildlife</span>
          <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-[#1a1f3d] leading-[1.1] mb-4">
            Animals We Help
          </h2>
          <p className="text-lg text-gray-600">
            From tiny squirrels to majestic bobcats, we provide expert care for Louisiana&apos;s diverse wildlife.
          </p>
        </div>

        {/* Animals grid - bento style with varying sizes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5 mb-12">
          {species.slice(0, 8).map((animal, i) => (
            <Link
              key={animal.id}
              href={`/wildlife/${animal.id}`}
              className={`group relative bg-[#F8F4F4] rounded-[1.5rem] overflow-hidden hover:shadow-xl hover:shadow-black/10 transition-all duration-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${150 + i * 75}ms` }}
            >
              <div className={`${i === 0 || i === 5 ? 'aspect-[3/4]' : 'aspect-square'} relative`}>
                <Image 
                  src={animal.image} 
                  alt={animal.name} 
                  fill 
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-500" 
                  sizes="(max-width:768px) 50vw, 25vw" 
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/95 to-transparent">
                <h3 className="font-bold text-[#1a1f3d] text-lg group-hover:text-[#26C9AA] transition-colors">
                  {animal.name}
                </h3>
                <p className="text-xs text-gray-500 italic">{animal.scientificName}</p>
              </div>
              
              {/* Hover arrow */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#26C9AA] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mb-16 transition-all duration-700 delay-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
          <Button asChild size="lg" className="rounded-full h-14 px-8 bg-[#1a1f3d] hover:bg-[#0f1225] text-white font-bold">
            <Link href="/wildlife">
              View All Species
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Emergency banner */}
        <div className={`bg-[#26C9AA] rounded-[2rem] p-8 lg:p-10 transition-all duration-700 delay-600 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0">
                <Phone className="h-7 w-7 text-[#26C9AA]" />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-white mb-1">Found an injured animal?</h3>
                <p className="text-white/80">Don&apos;t wait — call our 24/7 hotline or submit a report online.</p>
              </div>
            </div>
            <Button asChild size="lg" className="rounded-full h-14 px-8 bg-white text-[#26C9AA] hover:bg-white/90 font-bold shrink-0">
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
