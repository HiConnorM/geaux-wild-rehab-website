'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    // small timeout so it fires after paint
    const t = setTimeout(() => setVis(true), 80)
    return () => clearTimeout(t)
  }, [])

  const base = 'transition-all duration-700'
  const hidden = 'opacity-0'
  const show = 'opacity-100'

  return (
    <section ref={ref} className="relative min-h-screen bg-[#F8F4F4] overflow-hidden">

      {/* ── Content layer ─────────────────────────────────────── */}
      {/* Top bar */}
      <div className="relative z-20 flex items-start justify-between px-6 sm:px-12 md:px-20 pt-28 pb-0">

        {/* LEFT col — giant title + phone */}
        <div className="flex flex-col gap-6">
          <div className={`${base} delay-100 ${vis ? show : hidden} -translate-y-4 ${vis ? 'translate-y-0' : ''}`}>
            <h1 className="font-serif font-bold leading-[0.82] tracking-tight text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem]">
              <span className="text-primary block">Geaux</span>
              <span className="text-foreground block">Wild</span>
            </h1>
          </div>

          <div className={`${base} delay-300 ${vis ? show : hidden}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-xs sm:text-sm font-semibold">
              <Phone className="h-3.5 w-3.5" />
              24/7 Wildlife Hotline
            </div>
          </div>
        </div>

        {/* RIGHT col — description + CTA */}
        <div className="flex flex-col items-end gap-6 max-w-[200px] sm:max-w-xs text-right">
          <p className={`text-xs sm:text-sm text-muted-foreground leading-relaxed ${base} delay-200 ${vis ? show : hidden}`}>
            Louisiana&apos;s trusted wildlife rehabilitation center. We rescue, rehabilitate, and release native wildlife — free of charge.
          </p>

          <Button
            asChild
            size="lg"
            className={`rounded-full px-7 h-12 bg-primary text-white hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20 ${base} delay-300 ${vis ? show : hidden}`}
          >
            <Link href="/get-help">
              Found Wildlife? <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <div className={`${base} delay-500 ${vis ? show : hidden}`}>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Licensed by</p>
            <p className="text-xs font-medium text-foreground">Louisiana Dept. of Wildlife</p>
          </div>
        </div>
      </div>

      {/* Bottom-left secondary CTA — sits above animal */}
      <div className={`absolute bottom-[46%] sm:bottom-[44%] left-6 sm:left-12 md:left-20 z-20 ${base} delay-500 ${vis ? show : hidden}`}>
        <Button asChild variant="outline" className="rounded-full h-11 px-6 border-2 border-foreground/20 hover:bg-accent hover:text-accent-foreground hover:border-accent font-medium text-sm">
          <Link href="/support">Support Our Mission</Link>
        </Button>
      </div>

      {/* Fox — large, bottom center, transparent SVG */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-[82%] md:w-[68%] lg:w-[56%] max-w-3xl z-10 ${base} delay-150 ${vis ? show : hidden}`}>
        <div className="relative w-full aspect-[3/4]">
          <Image src="/images/animals/fox.svg" alt="Red Fox" fill className="object-contain object-bottom" priority sizes="(max-width:768px) 95vw, 68vw" />
        </div>
      </div>
    </section>
  )
}
