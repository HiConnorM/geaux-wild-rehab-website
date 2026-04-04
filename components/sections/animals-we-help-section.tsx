'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { species } from '@/lib/content'

// Smaller portrait images for the grid — use the PNGs for the card grid, SVGs are for hero/section
const animalGrid = [
  { id: 'raccoon',  name: 'Raccoon',   img: '/images/animals/raccoon.svg',  fact: 'Remembers solutions 3+ years' },
  { id: 'opossum',  name: 'Opossum',   img: '/images/animals/opossum.svg',  fact: 'North America\'s only marsupial' },
  { id: 'squirrel', name: 'Squirrel',  img: '/images/animals/squirrel.svg', fact: 'Plants thousands of trees/yr' },
  { id: 'rabbit',   name: 'Rabbit',    img: '/images/animals/rabbit.svg',   fact: 'Independent at 3-4 weeks' },
  { id: 'fox',      name: 'Red Fox',   img: '/images/animals/fox.svg',      fact: 'Can hear mice under snow' },
  { id: 'coyote',   name: 'Coyote',    img: '/images/animals/coyote.svg',   fact: 'Essential ecosystem engineer' },
  { id: 'bobcat',   name: 'Bobcat',    img: '/images/animals/bobcat.svg',   fact: 'Silent stalker, apex predator' },
  { id: 'beaver',   name: 'Beaver',    img: '/images/animals/beaver.svg',   fact: 'Nature\'s best dam builders' },
]

export function AnimalsWeHelpSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.06 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative min-h-screen bg-white overflow-hidden">

      {/* Section label */}
      <div className={`absolute top-14 left-8 sm:left-14 md:left-20 z-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
        <span className="text-[11px] tracking-[0.25em] uppercase text-primary font-semibold">Native Louisiana Wildlife</span>
      </div>

      {/* Giant heading */}
      <div className={`absolute top-24 sm:top-28 left-8 sm:left-14 md:left-20 z-20 transition-all duration-900 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <h2 className="text-[3.4rem] sm:text-[4.8rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9.5rem] font-serif font-bold text-foreground leading-[0.88] tracking-tight">
          Animals<br />We Help
        </h2>
      </div>

      {/* Short copy - upper right */}
      <div className={`absolute top-28 sm:top-36 right-8 sm:right-14 md:right-20 max-w-[160px] sm:max-w-[210px] z-20 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-right">
          We care for all native Louisiana mammals — from tiny orphaned squirrels to full-grown coyotes.
        </p>
      </div>

      {/* Animal pill grid - sits left/center, lower mid-section */}
      <div className={`absolute top-[46%] sm:top-[44%] left-8 sm:left-14 md:left-20 z-20 max-w-[260px] sm:max-w-sm transition-all duration-700 delay-250 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-wrap gap-2">
          {animalGrid.map((a, i) => (
            <Link
              key={a.id}
              href={`/wildlife/${a.id}`}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all duration-300 border border-border/30"
              style={{ transitionDelay: visible ? `${i * 40}ms` : '0ms' }}
            >
              <span className="text-xs font-medium">{a.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Fun fact - right mid */}
      <div className={`absolute top-[52%] sm:top-[50%] right-8 sm:right-14 md:right-20 max-w-[160px] z-20 text-right transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <p className="text-[10px] sm:text-xs text-muted-foreground italic leading-relaxed">
          "We are the only facility in our region accepting coyotes and bobcats."
        </p>
      </div>

      {/* View all species CTA - bottom left */}
      <div className={`absolute bottom-32 sm:bottom-36 left-8 sm:left-14 md:left-20 z-20 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Button asChild className="rounded-full gap-2 h-12 px-7 bg-foreground text-white hover:bg-foreground/85 font-semibold text-sm">
          <Link href="/wildlife">
            View All Species
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Count - bottom right */}
      <div className={`absolute bottom-36 right-8 sm:right-14 md:right-20 z-20 text-right transition-all duration-700 delay-450 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">8+ species</p>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">accepted year-round</p>
      </div>

      {/* Beaver + squirrel duo — both at bottom, offset */}
      <div className={`absolute bottom-0 right-[8%] sm:right-[12%] md:right-[16%] w-[45%] sm:w-[36%] md:w-[28%] lg:w-[22%] max-w-sm z-10 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
          <Image src="/images/animals/beaver.svg" alt="Beaver" fill className="object-contain object-bottom" sizes="45vw" />
        </div>
      </div>
      <div className={`absolute bottom-0 left-[8%] sm:left-[12%] md:left-[18%] w-[38%] sm:w-[30%] md:w-[24%] lg:w-[19%] max-w-xs z-11 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
          <Image src="/images/animals/squirrel.svg" alt="Squirrel" fill className="object-contain object-bottom" sizes="38vw" />
        </div>
      </div>
    </div>
  )
}
