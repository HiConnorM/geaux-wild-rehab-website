'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { species } from '@/lib/content'
import { Button } from '@/components/ui/button'

// Note: Metadata needs to be in a separate file for client components
// or use generateMetadata in a wrapper server component

export default function WildlifePage() {
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
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pb-20 overflow-hidden bg-background">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Native Louisiana Mammals
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 leading-tight text-balance">
            Wildlife We Rescue & Rehabilitate
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We specialize in native Louisiana mammals. Click on any species to learn more 
            about their habits and what to do if you find one in need.
          </p>
        </div>
      </section>

      {/* Note about birds */}
      <section className="py-4 bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-amber-800 text-sm">
            <strong>Please note:</strong> Geaux Wild Rehab specializes in mammals only. 
            For injured or orphaned birds, please contact a licensed avian rehabilitator.
          </p>
        </div>
      </section>

      {/* Species Grid - Clean white cards with big images */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={gridRef}
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible ? 'stagger-animate visible' : 'stagger-animate'}`}
          >
            {species.map((animal, index) => (
              <Link
                key={animal.id}
                href={`/wildlife/${animal.id}`}
                className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Animal Image - Big and centered */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-secondary/30 to-secondary/10">
                  {/* Soft background glow */}
                  <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
                  
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    className="object-contain p-4 drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-center border-t border-border/50">
                  <h2 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {animal.name}
                  </h2>
                  <p className="text-muted-foreground text-sm italic mb-3">
                    {animal.scientificName}
                  </p>
                  
                  <span className="inline-flex items-center gap-1 text-primary font-medium text-sm">
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                {/* Hover accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 gradient-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Found Wildlife?
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
            Every Second Counts
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you&apos;ve found an injured or orphaned animal, time is critical. 
            Contact us immediately for guidance on how to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 rounded-full px-10 h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              <Link href="/get-help">
                Get Help Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-10 h-14">
              <Link href="/faq">
                View FAQ
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
