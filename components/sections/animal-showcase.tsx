'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { TransitionLink } from '@/components/page-transition/transition-link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const animals = [
  {
    id: 'raccoon',
    name: 'Raccoons',
    tagline: 'Masked Bandits',
    description: 'Intelligent problem-solvers with remarkable dexterity.',
    image: '/images/animals/raccoon.svg',
    fact: 'Remember solutions for 3+ years',
  },
  {
    id: 'opossum',
    name: 'Opossums',
    tagline: 'Nature\'s Pest Control',
    description: 'North America\'s only marsupial. Virtually immune to rabies.',
    image: '/images/animals/opossum.svg',
    fact: 'Eat 5,000 ticks per season',
  },
  {
    id: 'squirrel',
    name: 'Squirrels',
    tagline: 'Forest Planters',
    description: 'Acrobatic tree-dwellers essential for forest regeneration.',
    image: '/images/animals/squirrel.svg',
    fact: 'Plant thousands of trees yearly',
  },
  {
    id: 'rabbit',
    name: 'Rabbits',
    tagline: 'Gentle Hoppers',
    description: 'Swift and silent, they become independent at just weeks old.',
    image: '/images/animals/rabbit.svg',
    fact: 'Independent at 3-4 weeks',
  },
]

function AnimalSection({ animal, index }: { animal: typeof animals[0], index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Alternate layouts for variety
  const layout = index % 4

  return (
    <div 
      ref={sectionRef}
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Extra Large Title */}
      {layout === 0 && (
        <>
          {/* Title Top Left */}
          <div 
            className={`absolute top-24 sm:top-28 md:top-32 left-6 sm:left-10 md:left-16 lg:left-24 z-20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <p className="text-xs sm:text-sm text-primary font-medium tracking-widest uppercase mb-2">{animal.tagline}</p>
            <h2 className="text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-serif font-bold text-foreground leading-[0.9]">
              {animal.name}
            </h2>
          </div>

          {/* Description - Right side, upper */}
          <div 
            className={`absolute top-40 sm:top-52 md:top-56 right-6 sm:right-10 md:right-16 lg:right-24 max-w-[200px] sm:max-w-xs z-20 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-right">
              {animal.description}
            </p>
          </div>

          {/* Fact badge - Left, middle */}
          <div 
            className={`absolute top-[45%] sm:top-[40%] left-6 sm:left-10 md:left-16 z-20 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-accent text-accent-foreground px-4 sm:px-5 py-2 sm:py-3 rounded-full">
              <span className="text-xs sm:text-sm font-semibold">{animal.fact}</span>
            </div>
          </div>

          {/* Button - Bottom left */}
          <div 
            className={`absolute bottom-28 sm:bottom-32 left-6 sm:left-10 md:left-16 lg:left-24 z-20 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button asChild variant="outline" className="rounded-full gap-2 h-10 sm:h-12 px-5 sm:px-6 border-2 border-foreground/20 hover:bg-foreground hover:text-white">
              <TransitionLink href={`/wildlife/${animal.id}`}>
                Learn More
                <ArrowRight className="h-4 w-4" />
              </TransitionLink>
            </Button>
          </div>
        </>
      )}

      {layout === 1 && (
        <>
          {/* Title Top Right */}
          <div 
            className={`absolute top-24 sm:top-28 md:top-32 right-6 sm:right-10 md:right-16 lg:right-24 z-20 text-right transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <p className="text-xs sm:text-sm text-primary font-medium tracking-widest uppercase mb-2">{animal.tagline}</p>
            <h2 className="text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-serif font-bold text-foreground leading-[0.9]">
              {animal.name}
            </h2>
          </div>

          {/* Description - Left side, upper */}
          <div 
            className={`absolute top-40 sm:top-52 md:top-56 left-6 sm:left-10 md:left-16 lg:left-24 max-w-[200px] sm:max-w-xs z-20 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {animal.description}
            </p>
          </div>

          {/* Fact badge - Right, middle */}
          <div 
            className={`absolute top-[45%] sm:top-[40%] right-6 sm:right-10 md:right-16 z-20 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-primary text-primary-foreground px-4 sm:px-5 py-2 sm:py-3 rounded-full">
              <span className="text-xs sm:text-sm font-semibold">{animal.fact}</span>
            </div>
          </div>

          {/* Button - Bottom right */}
          <div 
            className={`absolute bottom-28 sm:bottom-32 right-6 sm:right-10 md:right-16 lg:right-24 z-20 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button asChild className="rounded-full gap-2 h-10 sm:h-12 px-5 sm:px-6 bg-primary text-primary-foreground hover:bg-primary/90">
              <TransitionLink href={`/wildlife/${animal.id}`}>
                Learn More
                <ArrowRight className="h-4 w-4" />
              </TransitionLink>
            </Button>
          </div>
        </>
      )}

      {layout === 2 && (
        <>
          {/* Title Center Top */}
          <div 
            className={`absolute top-24 sm:top-28 md:top-32 left-1/2 -translate-x-1/2 z-20 text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <p className="text-xs sm:text-sm text-primary font-medium tracking-widest uppercase mb-2">{animal.tagline}</p>
            <h2 className="text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-serif font-bold text-foreground leading-[0.9]">
              {animal.name}
            </h2>
          </div>

          {/* Description - Bottom Left */}
          <div 
            className={`absolute bottom-36 sm:bottom-44 left-6 sm:left-10 md:left-16 lg:left-24 max-w-[200px] sm:max-w-xs z-20 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {animal.description}
            </p>
            <div className="mt-3 bg-secondary text-foreground px-4 py-2 rounded-full inline-block">
              <span className="text-xs font-semibold">{animal.fact}</span>
            </div>
          </div>

          {/* Button - Bottom right */}
          <div 
            className={`absolute bottom-28 sm:bottom-32 right-6 sm:right-10 md:right-16 lg:right-24 z-20 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button asChild variant="outline" className="rounded-full gap-2 h-10 sm:h-12 px-5 sm:px-6 border-2 border-primary text-primary hover:bg-primary hover:text-white">
              <TransitionLink href={`/wildlife/${animal.id}`}>
                Learn More
                <ArrowRight className="h-4 w-4" />
              </TransitionLink>
            </Button>
          </div>
        </>
      )}

      {layout === 3 && (
        <>
          {/* Title Bottom Left (above animal) */}
          <div 
            className={`absolute top-24 sm:top-28 md:top-32 left-6 sm:left-10 md:left-16 lg:left-24 z-20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <h2 className="text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-serif font-bold text-foreground leading-[0.9]">
              {animal.name}
            </h2>
            <p className="text-xs sm:text-sm text-primary font-medium tracking-widest uppercase mt-2">{animal.tagline}</p>
          </div>

          {/* Description - Right side */}
          <div 
            className={`absolute top-[35%] right-6 sm:right-10 md:right-16 lg:right-24 max-w-[200px] sm:max-w-xs z-20 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-right">
              {animal.description}
            </p>
          </div>

          {/* Fact + Button - Bottom spread */}
          <div 
            className={`absolute bottom-28 sm:bottom-32 left-6 sm:left-10 md:left-16 lg:left-24 z-20 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-accent text-accent-foreground px-4 sm:px-5 py-2 sm:py-3 rounded-full inline-block">
              <span className="text-xs sm:text-sm font-semibold">{animal.fact}</span>
            </div>
          </div>

          <div 
            className={`absolute bottom-28 sm:bottom-32 right-6 sm:right-10 md:right-16 lg:right-24 z-20 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button asChild className="rounded-full gap-2 h-10 sm:h-12 px-5 sm:px-6 bg-foreground text-background hover:bg-foreground/90">
              <TransitionLink href={`/wildlife/${animal.id}`}>
                Learn More
                <ArrowRight className="h-4 w-4" />
              </TransitionLink>
            </Button>
          </div>
        </>
      )}

      {/* Large Animal at Bottom - Takes up most of section */}
      <div 
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] sm:w-[75%] md:w-[65%] lg:w-[55%] max-w-3xl z-10 transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="relative w-full aspect-square">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 65vw, 55vw"
          />
        </div>
      </div>
    </div>
  )
}

export function AnimalShowcase() {
  return (
    <section className="bg-white">
      {/* Animal Sections */}
      {animals.map((animal, index) => (
        <AnimalSection key={animal.id} animal={animal} index={index} />
      ))}

      {/* More Species CTA */}
      <div className="relative min-h-[60vh] bg-white overflow-hidden flex items-center justify-center">
        <div className="text-center z-20 px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            And Many More
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            We also rehabilitate foxes, coyotes, bobcats, beavers, and other native Louisiana wildlife.
          </p>
          <Button asChild size="lg" className="rounded-full gap-2 h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <TransitionLink href="/wildlife">
              View All Species
              <ArrowRight className="h-5 w-5" />
            </TransitionLink>
          </Button>
        </div>
      </div>
    </section>
  )
}
