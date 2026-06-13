'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { prefersReducedMotion, EASE_OUT, EASE_EXPO } from '@/lib/gsap-utils'

function useCountUp(end: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let startTime: number
    let raf: number
    const animate = (now: number) => {
      if (!startTime) startTime = now
      const p = Math.min((now - startTime) / duration, 1)
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end))
      if (p < 1) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [started, end, duration])
  return count
}

export function Hero() {
  const [statsStarted, setStatsStarted] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  // GSAP refs
  const sectionRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLAnchorElement>(null)
  const geauxRef = useRef<HTMLSpanElement>(null)
  const wildRef = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const foxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Stats counter trigger
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setStatsStarted(true), { threshold: 0.3 })
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    // Lazy-load GSAP only on client
    let ctx: import('gsap').Context | undefined
    ;(async () => {
      const gsap = (await import('gsap')).default

      if (prefersReducedMotion()) {
        // Just make everything visible instantly
        gsap.set([badgeRef.current, phoneRef.current, geauxRef.current, wildRef.current, subtitleRef.current, ctaRef.current, statsRef.current, foxRef.current], { opacity: 1, x: 0, y: 0 })
        return
      }

      ctx = gsap.context(() => {
        // Set initial hidden states
        gsap.set([badgeRef.current, phoneRef.current], { opacity: 0, y: -16 })
        gsap.set([geauxRef.current, wildRef.current], { opacity: 0, y: 40 })
        gsap.set([subtitleRef.current, ctaRef.current, statsRef.current], { opacity: 0, y: 28 })
        gsap.set(foxRef.current, { opacity: 0, x: 60 })

        const tl = gsap.timeline({ delay: 0.1 })

        // Top bar elements slide in from above
        tl.to([badgeRef.current, phoneRef.current], {
          opacity: 1, y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: EASE_OUT,
        })

        // Headline words stagger up with expo ease for premium feel
        tl.to(geauxRef.current, {
          opacity: 1, y: 0,
          duration: 0.75,
          ease: EASE_EXPO,
        }, '-=0.35')

        tl.to(wildRef.current, {
          opacity: 1, y: 0,
          duration: 0.75,
          ease: EASE_EXPO,
        }, '-=0.55')

        // Fox slides in from right while headline is finishing
        tl.to(foxRef.current, {
          opacity: 1, x: 0,
          duration: 1.0,
          ease: EASE_OUT,
        }, '-=0.5')

        // Subtitle, CTAs, stats fade up in sequence
        tl.to(subtitleRef.current, {
          opacity: 1, y: 0,
          duration: 0.6,
          ease: EASE_OUT,
        }, '-=0.6')

        tl.to(ctaRef.current, {
          opacity: 1, y: 0,
          duration: 0.55,
          ease: EASE_OUT,
        }, '-=0.4')

        tl.to(statsRef.current, {
          opacity: 1, y: 0,
          duration: 0.55,
          ease: EASE_OUT,
        }, '-=0.35')
      }, sectionRef)
    })()

    return () => ctx?.revert()
  }, [])

  const rescuedCount = useCountUp(1500, 2200, statsStarted)

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#26C9AA] overflow-hidden">
      {/* Decorative diamonds - hidden on mobile */}
      <div className="hidden md:block absolute top-32 left-[10%] w-6 h-6 bg-white/20 rotate-45 rounded" />
      <div className="hidden md:block absolute top-48 left-[5%] w-4 h-4 bg-white/30 rotate-45 rounded-sm" />
      <div className="hidden md:block absolute bottom-[35%] left-[8%] w-10 h-10 border-2 border-white/20 rotate-45 rounded" />
      <div className="hidden md:block absolute bottom-[45%] right-[12%] w-6 h-6 border-2 border-white/15 rotate-45 rounded-sm" />

      {/* Fox image */}
      <div
        ref={foxRef}
        className="absolute bottom-0 right-0 z-0"
        style={{
          width: 'clamp(540px, 98vw, 1550px)',
          height: 'clamp(760px, 140vh, 1750px)',
          opacity: 0,
        }}
      >
        <div className="absolute inset-0 rounded-full pointer-events-none" style={{ boxShadow: '0 0 80px 20px rgba(255,255,255,0.08)' }} />
        <Image
          src="/images/hero-fox.png"
          alt="Gray Fox on tree stump"
          fill
          className="object-contain object-bottom [filter:drop-shadow(0_0_18px_rgba(255,255,255,0.45))_drop-shadow(0_0_4px_rgba(255,255,255,0.7))]"
          priority
          sizes="(max-width:640px) 90vw, (max-width:1024px) 60vw, 50vw"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 md:pt-28 lg:pt-36 pb-0">

        {/* Top bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 md:mb-8">
          <div
            ref={badgeRef}
            className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/20 backdrop-blur-sm"
            style={{ opacity: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-white">Louisiana Wildlife Rehabilitation</span>
          </div>
          <a
            ref={phoneRef}
            href="tel:5044918036"
            className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Call Geaux Wild Rehab at 504-491-8036"
            style={{ opacity: 0 }}
          >
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#26C9AA] flex items-center justify-center">
              <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-gray-500">Contact Us</p>
              <p className="font-bold text-sm md:text-base text-[#1a1f3d]">504-491-8036</p>
            </div>
          </a>
        </div>

        {/* Giant title */}
        <div className="relative mb-4">
          <h1 className="font-serif font-black text-white tracking-tight" style={{ lineHeight: '1.2' }}>
            <span
              ref={geauxRef}
              className="block text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem]"
              style={{ opacity: 0 }}
            >
              GEAUX
            </span>
            <span
              ref={wildRef}
              className="block text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem]"
              style={{ lineHeight: '0.8', opacity: 0 }}
            >
              WILD
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base md:text-xl text-white/90 leading-relaxed mb-4 md:mb-6 max-w-md lg:max-w-lg"
          style={{ opacity: 0 }}
        >
          Based in Hammond, Louisiana, Geaux Wild Rehab gives injured and orphaned native wildlife a second chance through licensed rehabilitation, compassionate care, and release back into the wild whenever possible.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-row flex-wrap gap-3 mb-6"
          style={{ opacity: 0 }}
        >
          <Button asChild size="lg" className="rounded-full h-12 md:h-14 px-5 md:px-8 bg-white text-[#26C9AA] hover:bg-white/90 font-bold text-sm md:text-base shadow-lg w-auto justify-center">
            <Link href="/get-help">
              Found Wildlife?
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full h-12 md:h-14 px-5 md:px-8 border-2 border-white bg-transparent hover:bg-white/10 font-bold text-sm md:text-base w-auto justify-center">
            <Link href="/support" className="flex items-center text-white">
              <Heart className="mr-2 h-4 w-4 md:h-5 md:w-5 text-white" />
              <span className="text-white">Donate</span>
            </Link>
          </Button>
        </div>

        {/* Stat cards */}
        <div ref={statsRef} className="flex gap-3" style={{ opacity: 0 }}>
          <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-lg flex-1 sm:flex-initial">
            <p className="text-2xl md:text-4xl font-black text-[#3B468E]">{rescuedCount.toLocaleString()}+</p>
            <p className="text-xs md:text-sm text-gray-500">Animals rescued</p>
          </div>
          <div className="bg-[#3B468E] rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-lg flex-1 sm:flex-initial">
            <p className="text-2xl md:text-4xl font-black text-white">Est. 2021</p>
            <p className="text-xs md:text-sm text-white/70">Serving Louisiana</p>
          </div>
        </div>

        {/* Spacer so fox is fully visible */}
        <div className="h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px]" />
      </div>

      {/* Wavy bottom divider */}
      <div className="absolute left-0 right-0 z-20" style={{ lineHeight: 0, bottom: '-2px' }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 'clamp(60px, 8vw, 120px)', display: 'block' }} preserveAspectRatio="none">
          <path d="M0 120V60C240 100 480 20 720 60C960 100 1200 20 1440 60V120H0Z" fill="#F8F4F4"/>
        </svg>
      </div>
    </section>
  )
}
