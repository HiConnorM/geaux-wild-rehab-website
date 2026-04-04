'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.07, rootMargin: '0px 0px -80px 0px' })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const b = 'transition-all duration-700'
  const h = 'opacity-0 translate-y-6'
  const s = 'opacity-100 translate-y-0'

  return (
    <div ref={ref} className="relative min-h-screen bg-[#F8F4F4] overflow-hidden">

      {/* ── Top content grid ── */}
      <div className="relative z-20 grid grid-cols-2 gap-x-8 px-6 sm:px-12 md:px-20 pt-20 pb-0">

        {/* LEFT: section label + giant heading */}
        <div className="flex flex-col gap-4">
          <span className={`text-[11px] tracking-[0.22em] uppercase text-primary font-semibold ${b} delay-75 ${vis ? s : h}`}>
            Who We Are
          </span>
          <h2 className={`font-serif font-bold leading-[0.85] tracking-tight text-[3.2rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10.5rem] text-foreground ${b} delay-100 ${vis ? s : h}`}>
            Our<br />Mission
          </h2>
        </div>

        {/* RIGHT: short paragraph + badges */}
        <div className="flex flex-col items-end gap-5 text-right pt-4">
          <p className={`text-sm text-muted-foreground leading-relaxed max-w-xs ${b} delay-150 ${vis ? s : h}`}>
            We rescue, rehabilitate, and release injured and orphaned native Louisiana wildlife back to the wild — completely free of charge to the public.
          </p>
          <div className={`flex flex-wrap justify-end gap-2 ${b} delay-200 ${vis ? s : h}`}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border text-xs font-medium text-foreground">
              <MapPin className="h-3 w-3 text-primary" /> Louisiana, USA
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
              <Award className="h-3 w-3" /> State Licensed
            </div>
          </div>
        </div>
      </div>

      {/* ── Mid-section: mission pillars ── */}
      <div className="relative z-20 px-6 sm:px-12 md:px-20 mt-10">
        <div className={`grid grid-cols-3 gap-4 max-w-lg ${b} delay-250 ${vis ? s : h}`}>
          {[
            { num: '01', label: 'Rescue', desc: 'Responding 24/7 across Louisiana' },
            { num: '02', label: 'Rehab', desc: 'Expert medical care & nourishment' },
            { num: '03', label: 'Release', desc: 'Returning animals to the wild' },
          ].map(({ num, label, desc }) => (
            <div key={num} className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-primary">{num}</span>
              <span className="text-sm font-bold text-foreground">{label}</span>
              <span className="text-[11px] text-muted-foreground leading-snug">{desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom-left CTA — sits above animal ── */}
      <div className={`absolute bottom-[44%] sm:bottom-[42%] left-6 sm:left-12 md:left-20 z-20 ${b} delay-350 ${vis ? s : h}`}>
        <Button asChild variant="outline" className="rounded-full h-11 px-6 border-2 border-foreground/20 hover:bg-accent hover:text-accent-foreground hover:border-accent font-medium text-sm">
          <Link href="/about">Our Story <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
        </Button>
      </div>

      {/* ── Bottom-right quote ── */}
      <div className={`absolute bottom-[46%] sm:bottom-[44%] right-6 sm:right-12 md:right-20 z-20 text-right max-w-[160px] ${b} delay-400 ${vis ? s : h}`}>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground leading-relaxed">
          All volunteer<br />All heart
        </p>
      </div>

      {/* Raccoon — bottom center */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] sm:w-[76%] md:w-[62%] lg:w-[50%] max-w-2xl z-10 ${b} delay-100 ${vis ? s : h}`}>
        <div className="relative w-full aspect-[3/4]">
          <Image src="/images/animals/raccoon.svg" alt="Raccoon" fill className="object-contain object-bottom" sizes="(max-width:768px) 92vw, 62vw" />
        </div>
      </div>
    </div>
  )
}
