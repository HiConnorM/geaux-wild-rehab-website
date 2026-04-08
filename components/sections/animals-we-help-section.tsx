'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { species } from '@/lib/content'

export function AnimalsWeHelpSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const anim = (delay: number) =>
    `transition-all duration-700 ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`

  return (
    <section ref={ref} className="relative bg-white overflow-hidden py-24 lg:py-32">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#26C9AA]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#3B468E]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`inline-block text-sm font-semibold text-[#26C9AA] uppercase tracking-wider mb-4 ${anim(100)}`} style={{ transitionDelay: '100ms' }}>
            Native Louisiana Wildlife
          </span>
          <h2 className={`font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1a1f3d] leading-tight mb-6 ${anim(150)}`} style={{ transitionDelay: '150ms' }}>
            Animals We Help
          </h2>
          <p className={`text-lg text-gray-600 ${anim(200)}`} style={{ transitionDelay: '200ms' }}>
            From tiny squirrels to majestic bobcats, we provide expert care for Louisiana&apos;s diverse wildlife.
          </p>
        </div>

        {/* Animals grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {species.map((animal, i) => (
            <Link
              key={animal.id}
              href={`/wildlife/${animal.id}`}
              className={`group relative bg-[#F8F4F4] rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-black/10 transition-all ${anim(250 + i * 50)}`}
              style={{ transitionDelay: `${250 + i * 50}ms` }}
            >
              <div className="aspect-[3/4] relative">
                <Image 
                  src={animal.image} 
                  alt={animal.name} 
                  fill 
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" 
                  sizes="(max-width:768px) 50vw, 25vw" 
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F4F4] to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bold text-[#1a1f3d] text-lg group-hover:text-[#26C9AA] transition-colors">
                  {animal.name}
                </h3>
                <p className="text-sm text-gray-500 italic">{animal.scientificName}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center ${anim(600)}`} style={{ transitionDelay: '600ms' }}>
          <Button asChild size="lg" className="rounded-full h-14 px-8 bg-[#3B468E] hover:bg-[#2d366d] text-white font-semibold">
            <Link href="/wildlife">
              View All Species
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Bottom info banner */}
        <div className={`mt-16 bg-gradient-to-r from-[#26C9AA] to-[#3B468E] rounded-3xl p-8 lg:p-12 ${anim(700)}`} style={{ transitionDelay: '700ms' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-white">
            <div>
              <h3 className="font-bold text-2xl mb-2">Found an injured animal?</h3>
              <p className="text-white/80">Don&apos;t wait — call our 24/7 hotline or submit an online report.</p>
            </div>
            <Button asChild size="lg" className="rounded-full h-14 px-8 bg-white text-[#3B468E] hover:bg-white/90 font-semibold shrink-0">
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
