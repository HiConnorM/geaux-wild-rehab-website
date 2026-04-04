'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Gift, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HowToHelpSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.08 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative min-h-screen bg-white overflow-hidden">

      {/* Section label */}
      <div className={`absolute top-14 right-8 sm:right-14 md:right-20 z-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
        <span className="text-[11px] tracking-[0.25em] uppercase text-primary font-semibold">Make a Difference</span>
      </div>

      {/* Giant heading - upper right */}
      <div className={`absolute top-24 sm:top-28 right-8 sm:right-14 md:right-20 z-20 text-right transition-all duration-900 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <h2 className="text-[3.8rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[11rem] font-serif font-bold text-foreground leading-[0.88] tracking-tight">
          How to<br />Help
        </h2>
      </div>

      {/* Short paragraph - upper left */}
      <div className={`absolute top-28 sm:top-36 left-8 sm:left-14 md:left-20 max-w-[170px] sm:max-w-[210px] z-20 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Every dollar and every item donated goes directly to the animals in our care.
        </p>
      </div>

      {/* Three mini-ways - stacked left, mid */}
      <div className={`absolute top-[38%] sm:top-[36%] left-8 sm:left-14 md:left-20 z-20 space-y-3 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
            <Heart className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-foreground">Donate funds</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shrink-0">
            <Gift className="h-3.5 w-3.5 text-accent-foreground" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-foreground">Shop our wishlist</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full bg-secondary border border-border/40 flex items-center justify-center shrink-0">
            <Phone className="h-3.5 w-3.5 text-primary" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-foreground">Spread the word</span>
        </div>
      </div>

      {/* Dollar amounts - right, mid-height */}
      <div className={`absolute top-[42%] right-8 sm:right-14 md:right-20 z-20 text-right space-y-1 transition-all duration-700 delay-350 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <p className="text-[10px] sm:text-xs text-muted-foreground">$25 — feeds a baby squirrel 2 weeks</p>
        <p className="text-[10px] sm:text-xs text-muted-foreground">$50 — covers vet supplies</p>
        <p className="text-[10px] sm:text-xs text-muted-foreground">$100 — sponsors full rehab</p>
      </div>

      {/* Donate button - bottom right */}
      <div className={`absolute bottom-32 sm:bottom-36 right-8 sm:right-14 md:right-20 z-20 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Button asChild className="rounded-full gap-2 h-12 px-7 bg-primary text-white hover:bg-primary/90 font-semibold text-sm shadow-xl shadow-primary/20">
          <Link href="/support">
            Support Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Wishlist link - bottom left */}
      <div className={`absolute bottom-36 left-8 sm:left-14 md:left-20 z-20 transition-all duration-700 delay-450 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Link href="/support#wishlist" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
          Amazon Wishlist
          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Opossum - large, bottom center */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] sm:w-[68%] md:w-[56%] lg:w-[46%] max-w-2xl z-10 transition-all duration-1000 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
          <Image src="/images/animals/opossum.svg" alt="Opossum" fill className="object-contain object-bottom" sizes="(max-width: 768px) 80vw, 56vw" />
        </div>
      </div>
    </div>
  )
}
