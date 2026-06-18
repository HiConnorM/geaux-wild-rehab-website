'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { TransitionLink } from '@/components/page-transition/transition-link'
import { ArrowRight } from 'lucide-react'
import { species } from '@/lib/content'
import { Button } from '@/components/ui/button'

export function SpeciesGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (gridRef.current) {
      observer.observe(gridRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Native Louisiana Mammals
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Wildlife We Rescue & Rehabilitate
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We specialize in rehabilitating Louisiana&apos;s native mammals. 
            Click on any species to learn more about their habitat, behavior, and what to do if you find one.
          </p>
        </div>

        {/* Species Grid */}
        <div 
          ref={gridRef} 
          className={`grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6 stagger-animate ${isVisible ? 'visible' : ''}`}
        >
          {species.map((animal, index) => (
            <TransitionLink
              key={animal.id}
              href={`/wildlife/${animal.id}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: isVisible ? `${index * 75}ms` : '0ms' }}
            >
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-5">
                <h3 className="text-white font-bold text-lg lg:text-xl mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {animal.name}
                </h3>
                <p className="text-white/70 text-xs lg:text-sm italic mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {animal.scientificName}
                </p>
                <span className="text-primary-foreground text-xs font-medium bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full w-fit opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  Learn more
                </span>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 gradient-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </TransitionLink>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="rounded-full gap-2 px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <TransitionLink href="/wildlife">
              Explore All Species
              <ArrowRight className="h-4 w-4" />
            </TransitionLink>
          </Button>
        </div>
      </div>
    </section>
  )
}
