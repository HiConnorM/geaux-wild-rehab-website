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
    description: 'Intelligent and adaptable mammals known for their distinctive black mask. They have remarkably dexterous paws and excellent problem-solving abilities.',
    image: '/images/animals/raccoon.png',
    fact: 'Can remember solutions to tasks for up to 3 years',
    align: 'right' as const,
  },
  {
    id: 'opossum',
    name: 'Virginia Opossum',
    scientificName: 'Didelphis virginiana',
    description: "North America's only marsupial. These gentle creatures are virtually immune to rabies and can eat up to 5,000 ticks per season.",
    image: '/images/animals/opossum.png',
    fact: 'Virtually immune to rabies due to low body temperature',
    align: 'left' as const,
  },
  {
    id: 'squirrel',
    name: 'Eastern Gray Squirrel',
    scientificName: 'Sciurus carolinensis',
    description: 'One of the most common species we rehabilitate. These acrobatic rodents plant thousands of trees each year by forgetting where they buried their nuts.',
    image: '/images/animals/squirrel.png',
    fact: 'Plant thousands of trees yearly through forgotten nut caches',
    align: 'right' as const,
  },
  {
    id: 'rabbit',
    name: 'Eastern Cottontail',
    scientificName: 'Sylvilagus floridanus',
    description: 'Frequently orphaned when nests are disturbed. Baby cottontails are independent at just 3-4 weeks old and can see nearly 360 degrees.',
    image: '/images/animals/rabbit.png',
    fact: 'Independent at just 3-4 weeks old',
    align: 'left' as const,
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
      { threshold: 0.2 }
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

  const imageTranslate = (1 - scrollProgress) * 30
  const isLeftAlign = animal.align === 'left'

  return (
    <div 
      ref={sectionRef}
      className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isLeftAlign ? '' : 'lg:grid-flow-dense'}`}>
          {/* Text Content */}
          <div className={`${isLeftAlign ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {animal.scientificName}
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
                {animal.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {animal.description}
              </p>
              
              {/* Fun Fact */}
              <div className="bg-accent/10 rounded-2xl p-4 mb-8 border border-accent/20">
                <p className="text-sm font-medium text-accent-foreground">
                  <span className="text-accent font-bold">Fun fact:</span> {animal.fact}
                </p>
              </div>

              <Button asChild className="rounded-full gap-2 h-12 px-6">
                <Link href={`/wildlife/${animal.id}`}>
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Animal Image */}
          <div className={`${isLeftAlign ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}>
            <div 
              className={`relative w-full max-w-md lg:max-w-lg aspect-square transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transform: `translateY(${imageTranslate}px)` }}
            >
              {/* Soft glow behind animal */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent blur-2xl scale-110" />
              
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
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
    <section className="bg-background">
      {/* Section Header */}
      <div ref={headerRef} className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Native Louisiana Mammals
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Wildlife We Rescue
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We specialize in rehabilitating Louisiana&apos;s native mammals. Each species has unique needs, 
              and our team is trained to provide specialized care.
            </p>
          </div>
        </div>
      </div>

      {/* Animal Sections */}
      {animals.map((animal, index) => (
        <AnimalSection key={animal.id} animal={animal} index={index} />
      ))}

      {/* More Species CTA */}
      <div className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            We also help foxes, coyotes, bobcats, beavers, and more.
          </p>
          <Button asChild size="lg" variant="outline" className="rounded-full gap-2 h-14 px-8">
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
