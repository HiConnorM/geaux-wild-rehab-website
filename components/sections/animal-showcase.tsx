'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const animals = [
  {
    id: 'raccoon',
    name: 'Raccoon',
    scientificName: 'Procyon lotor',
    description: 'Intelligent and adaptable mammals known for their distinctive black mask and remarkable problem-solving abilities.',
    image: '/images/animals/raccoon.png',
    fact: 'Can remember solutions to tasks for up to 3 years',
  },
  {
    id: 'opossum',
    name: 'Virginia Opossum',
    scientificName: 'Didelphis virginiana',
    description: "North America's only marsupial. These gentle creatures are virtually immune to rabies.",
    image: '/images/animals/opossum.png',
    fact: 'Can eat up to 5,000 ticks per season',
  },
  {
    id: 'squirrel',
    name: 'Eastern Gray Squirrel',
    scientificName: 'Sciurus carolinensis',
    description: 'One of the most common species we rehabilitate. These acrobatic rodents are essential for forest growth.',
    image: '/images/animals/squirrel.png',
    fact: 'Plant thousands of trees yearly through forgotten nut caches',
  },
  {
    id: 'rabbit',
    name: 'Eastern Cottontail',
    scientificName: 'Sylvilagus floridanus',
    description: 'Frequently orphaned when nests are disturbed. Baby cottontails are independent remarkably quickly.',
    image: '/images/animals/rabbit.png',
    fact: 'Independent at just 3-4 weeks old',
  },
]

function AnimalSection({ animal, index }: { animal: typeof animals[0], index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)))
        setScrollProgress(progress)
      }
    }

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const imageTranslate = (0.5 - scrollProgress) * 40
  const isEven = index % 2 === 0

  return (
    <div 
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content positioned around the animal */}
        <div className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center">
          
          {/* Large Centered Animal */}
          <div 
            className={`relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg aspect-square transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transform: `translateY(${imageTranslate}px)` }}
          >
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              className="object-contain mix-blend-multiply"
              sizes="(max-width: 768px) 80vw, 50vw"
            />
          </div>

          {/* Title - Positioned based on index */}
          <div 
            className={`absolute ${isEven ? 'top-0 left-0 text-left' : 'top-0 right-0 text-right'} max-w-xs lg:max-w-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
              {animal.scientificName}
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-foreground leading-tight">
              {animal.name}
            </h2>
          </div>

          {/* Description - Opposite side */}
          <div 
            className={`absolute ${isEven ? 'top-4 right-0 text-right' : 'top-4 left-0 text-left'} max-w-xs hidden md:block transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <p className="text-muted-foreground leading-relaxed">
              {animal.description}
            </p>
          </div>

          {/* Fun Fact - Bottom positioned */}
          <div 
            className={`absolute ${isEven ? 'bottom-8 left-0' : 'bottom-8 right-0'} max-w-sm transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className={`bg-accent/10 rounded-2xl px-5 py-4 border border-accent/20 ${!isEven ? 'text-right' : ''}`}>
              <p className="text-sm font-medium text-foreground">
                <span className="text-primary font-bold">Fun fact:</span> {animal.fact}
              </p>
            </div>
          </div>

          {/* CTA Button - Opposite bottom */}
          <div 
            className={`absolute ${isEven ? 'bottom-8 right-0' : 'bottom-8 left-0'} transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <Button asChild variant="outline" className="rounded-full gap-2 h-11 px-6 border-2">
              <Link href={`/wildlife/${animal.id}`}>
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile description */}
        <p className={`md:hidden text-center text-muted-foreground mt-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {animal.description}
        </p>
      </div>

      {/* Subtle divider line */}
      {index < animals.length - 1 && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-border" />
      )}
    </div>
  )
}

export function AnimalShowcase() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-white">
      {/* Section Header */}
      <div ref={headerRef} className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Native Louisiana Mammals
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Wildlife We Rescue
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We specialize in rehabilitating Louisiana&apos;s native mammals. Each species has unique needs 
              and our team provides specialized care.
            </p>
          </div>
        </div>
      </div>

      {/* Animal Sections */}
      {animals.map((animal, index) => (
        <AnimalSection key={animal.id} animal={animal} index={index} />
      ))}

      {/* More Species CTA */}
      <div className="py-20 lg:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            We also help foxes, coyotes, bobcats, beavers, and more.
          </p>
          <Button asChild size="lg" className="rounded-full gap-2 h-14 px-8">
            <Link href="/wildlife">
              View All Species
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
