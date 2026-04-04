'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const animals = [
  { id: 'raccoon',  name: 'Raccoon',  fact: '3yr memory' },
  { id: 'opossum',  name: 'Opossum',  fact: "N. America's only marsupial" },
  { id: 'squirrel', name: 'Squirrel', fact: 'Plants 1000s of trees/yr' },
  { id: 'rabbit',   name: 'Rabbit',   fact: 'Independent at 3-4 wks' },
  { id: 'fox',      name: 'Red Fox',  fact: 'Hears mice under snow' },
  { id: 'coyote',   name: 'Coyote',   fact: 'Ecosystem engineer' },
  { id: 'bobcat',   name: 'Bobcat',   fact: 'Silent apex predator' },
  { id: 'beaver',   name: 'Beaver',   fact: 'Orange iron-strong teeth' },
]

export function AnimalsWeHelpSection() {
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

      {/* ── Top content ── */}
      <div className="relative z-20 grid grid-cols-2 gap-x-8 px-6 sm:px-12 md:px-20 pt-20">
        {/* LEFT */}
        <div className="flex flex-col gap-4">
          <span className={`text-[11px] tracking-[0.22em] uppercase text-primary font-semibold ${b} delay-75 ${vis ? s : h}`}>
            Native Louisiana Wildlife
          </span>
          <h2 className={`font-serif font-bold leading-[0.85] tracking-tight text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] xl:text-[9.5rem] text-foreground ${b} delay-100 ${vis ? s : h}`}>
            Animals<br />We Help
          </h2>
        </div>

        {/* RIGHT: copy + quote */}
        <div className="flex flex-col items-end gap-4 text-right pt-4">
          <p className={`text-sm text-muted-foreground leading-relaxed max-w-xs ${b} delay-150 ${vis ? s : h}`}>
            We care for all native Louisiana mammals — from tiny orphaned squirrels to full-grown coyotes and bobcats.
          </p>
          <p className={`text-xs italic text-accent/80 max-w-[180px] ${b} delay-200 ${vis ? s : h}`}>
            "The only facility in our region accepting coyotes and bobcats."
          </p>
        </div>
      </div>

      {/* ── Animal pill grid ── */}
      <div className={`relative z-20 px-6 sm:px-12 md:px-20 mt-8 ${b} delay-250 ${vis ? s : h}`}>
        <div className="flex flex-wrap gap-2 max-w-md">
          {animals.map((a, i) => (
            <Link
              key={a.id}
              href={`/wildlife/${a.id}`}
              className="group flex flex-col px-3 py-2 rounded-xl bg-white border border-border hover:border-primary hover:bg-primary hover:text-white transition-all duration-200"
              style={{ transitionDelay: vis ? `${i * 30}ms` : '0ms' }}
            >
              <span className="text-xs font-semibold leading-none">{a.name}</span>
              <span className="text-[10px] text-muted-foreground group-hover:text-white/70 mt-0.5 leading-none">{a.fact}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className={`absolute bottom-[46%] sm:bottom-[44%] left-6 sm:left-12 md:left-20 z-20 ${b} delay-350 ${vis ? s : h}`}>
        <Button asChild className="rounded-full h-11 px-6 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm">
          <Link href="/wildlife">View All Species <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
        </Button>
      </div>

      {/* ── Bottom right tag ── */}
      <div className={`absolute bottom-[47%] sm:bottom-[45%] right-6 sm:right-12 md:right-20 z-20 text-right ${b} delay-400 ${vis ? s : h}`}>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">8+ species<br />year-round</p>
      </div>

      {/* Squirrel — left bottom */}
      <div className={`absolute bottom-0 left-0 w-[50%] sm:w-[40%] md:w-[32%] max-w-sm z-10 ${b} delay-150 ${vis ? s : h}`}>
        <div className="relative w-full aspect-square">
          <Image src="/images/animals/squirrel.svg" alt="Squirrel" fill className="object-contain object-bottom" sizes="50vw" />
        </div>
      </div>

      {/* Beaver — right bottom, slightly larger */}
      <div className={`absolute bottom-0 right-0 w-[55%] sm:w-[44%] md:w-[36%] max-w-md z-10 ${b} delay-200 ${vis ? s : h}`}>
        <div className="relative w-full aspect-[3/4]">
          <Image src="/images/animals/beaver.svg" alt="Beaver" fill className="object-contain object-bottom" sizes="55vw" />
        </div>
      </div>
    </div>
  )
}
