'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.08 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative min-h-screen bg-white overflow-hidden">

      {/* Section label - top left */}
      <div className={`absolute top-14 left-8 sm:left-14 md:left-20 z-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
        <span className="text-[11px] tracking-[0.25em] uppercase text-primary font-semibold">Who We Are</span>
      </div>

      {/* Giant heading - upper left */}
      <div className={`absolute top-24 sm:top-28 left-8 sm:left-14 md:left-20 z-20 transition-all duration-900 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <h2 className="text-[3.8rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[11rem] font-serif font-bold text-foreground leading-[0.88] tracking-tight">
          Our<br />Mission
        </h2>
      </div>

      {/* Short paragraph - upper right, abstract placement */}
      <div className={`absolute top-28 sm:top-36 right-8 sm:right-14 md:right-20 max-w-[170px] sm:max-w-[220px] z-20 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-right">
          We rescue, rehabilitate, and release injured and orphaned native Louisiana wildlife back to the wild — free of charge.
        </p>
      </div>

      {/* Location badge - left, mid-height */}
      <div className={`absolute top-[42%] left-8 sm:left-14 md:left-20 z-20 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary border border-border/40">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-semibold text-foreground">Louisiana, USA</span>
        </div>
      </div>

      {/* License badge - right, mid-height */}
      <div className={`absolute top-[50%] right-8 sm:right-14 md:right-20 z-20 transition-all duration-700 delay-350 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary/8 border border-primary/20">
          <Award className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-semibold text-primary">State Licensed</span>
        </div>
      </div>

      {/* Our story CTA - bottom left */}
      <div className={`absolute bottom-32 sm:bottom-36 left-8 sm:left-14 md:left-20 z-20 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Button asChild variant="outline" className="rounded-full gap-2 h-11 px-6 border-2 border-foreground/20 hover:bg-foreground hover:text-white font-medium text-sm">
          <Link href="/about">
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* "All volunteer, all heart" - bottom right */}
      <div className={`absolute bottom-36 right-8 sm:right-14 md:right-20 z-20 text-right transition-all duration-700 delay-450 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">All volunteer</p>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">All heart</p>
      </div>

      {/* Raccoon - large, bottom center, transparent */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[82%] sm:w-[70%] md:w-[58%] lg:w-[48%] max-w-2xl z-10 transition-all duration-1000 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
          <Image src="/images/animals/raccoon.svg" alt="Raccoon" fill className="object-contain object-bottom" sizes="(max-width: 768px) 82vw, 58vw" />
        </div>
      </div>
    </div>
  )
}
