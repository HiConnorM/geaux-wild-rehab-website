'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Gift, Megaphone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ways = [
  { icon: Heart,     label: 'Donate Funds',    desc: '$25 feeds a baby squirrel 2 weeks' },
  { icon: Gift,      label: 'Shop Wishlist',    desc: '$50 covers veterinary supplies' },
  { icon: Megaphone, label: 'Spread the Word',  desc: 'Share our mission with others' },
]

export function HowToHelpSection() {
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
    <div ref={ref} className="relative min-h-screen bg-white overflow-hidden">

      {/* ── Top content grid ── */}
      <div className="relative z-20 grid grid-cols-2 gap-x-8 px-6 sm:px-12 md:px-20 pt-20">

        {/* RIGHT: section label + giant heading */}
        <div className="col-start-2 flex flex-col gap-4 items-end text-right">
          <span className={`text-[11px] tracking-[0.22em] uppercase text-primary font-semibold ${b} delay-75 ${vis ? s : h}`}>
            Make a Difference
          </span>
          <h2 className={`font-serif font-bold leading-[0.85] tracking-tight text-[3.2rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10.5rem] text-foreground ${b} delay-100 ${vis ? s : h}`}>
            How to<br />Help
          </h2>
        </div>

        {/* LEFT: short paragraph */}
        <div className="row-start-1 col-start-1 flex items-end pb-2">
          <p className={`text-sm text-muted-foreground leading-relaxed max-w-xs ${b} delay-150 ${vis ? s : h}`}>
            Every dollar and item donated goes directly to the animals in our care. We are a 100% volunteer-run non-profit — no overhead, just wildlife.
          </p>
        </div>
      </div>

      {/* ── Three ways row ── */}
      <div className={`relative z-20 grid grid-cols-3 gap-4 px-6 sm:px-12 md:px-20 mt-8 ${b} delay-200 ${vis ? s : h}`}>
        {ways.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="flex flex-col gap-2 p-4 rounded-2xl bg-secondary/60 border border-border/30">
            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Icon className="h-4 w-4 text-white" />
            </span>
            <span className="text-sm font-bold text-foreground">{label}</span>
            <span className="text-[11px] text-muted-foreground leading-snug">{desc}</span>
          </div>
        ))}
      </div>

      {/* ── Bottom CTAs above animal ── */}
      <div className={`absolute bottom-[44%] sm:bottom-[42%] left-6 sm:left-12 md:left-20 z-20 flex gap-3 flex-wrap ${b} delay-300 ${vis ? s : h}`}>
        <Button asChild className="rounded-full h-11 px-6 bg-primary text-white hover:bg-primary/90 font-semibold text-sm shadow-lg shadow-primary/20">
          <Link href="/support">Donate Now <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
        </Button>
        <Link href="/support#wishlist" className="inline-flex items-center gap-1.5 h-11 px-4 rounded-full border-2 border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
          Amazon Wishlist
        </Link>
      </div>

      {/* ── Bottom-right note ── */}
      <div className={`absolute bottom-[46%] sm:bottom-[43%] right-6 sm:right-12 md:right-20 z-20 text-right max-w-[150px] ${b} delay-350 ${vis ? s : h}`}>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          100% goes<br />to the animals
        </p>
      </div>

      {/* Opossum — bottom center */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[74%] md:w-[60%] lg:w-[48%] max-w-2xl z-10 ${b} delay-100 ${vis ? s : h}`}>
        <div className="relative w-full aspect-square">
          <Image src="/images/animals/opossum.svg" alt="Opossum" fill className="object-contain object-bottom" sizes="(max-width:768px) 90vw, 60vw" />
        </div>
      </div>
    </div>
  )
}
