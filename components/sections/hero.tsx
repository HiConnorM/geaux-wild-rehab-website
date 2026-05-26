'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { impactStats } from '@/lib/content'

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
  const [vis, setVis] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsStarted, setStatsStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVis(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setStatsStarted(true), { threshold: 0.3 })
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  const rescuedCount = useCountUp(impactStats.animalsRescued, 2200, statsStarted)
  const releaseCount = useCountUp(impactStats.releaseRate, 1600, statsStarted)

  return (
    <section className="relative min-h-screen bg-[#26C9AA] overflow-hidden">
      {/* Decorative diamonds - hidden on mobile */}
      <div className="hidden md:block absolute top-32 left-[10%] w-6 h-6 bg-white/20 rotate-45 rounded" />
      <div className="hidden md:block absolute top-48 left-[5%] w-4 h-4 bg-white/30 rotate-45 rounded-sm" />
      <div className="hidden md:block absolute bottom-[35%] left-[8%] w-10 h-10 border-2 border-white/20 rotate-45 rounded" />
      <div className="hidden md:block absolute bottom-[45%] right-[12%] w-6 h-6 border-2 border-white/15 rotate-45 rounded-sm" />

      {/* Fox image — large focal point on right, transparent PNG, wave hides the base */}
      <div
        className={`absolute bottom-0 right-0 z-0 transition-all duration-1000 delay-300 ${vis ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
        style={{
          width: 'clamp(480px, 90vw, 1400px)',
          height: 'clamp(680px, 130vh, 1600px)',
        }}
      >
        {/* Subtle white glow ring so the fox "pops" against the teal bg */}
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
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 md:mb-8 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-white">Louisiana Wildlife Rehabilitation</span>
          </div>
          <a
            href="tel:5044918036"
            className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Call Geaux Wild Rehab at 504-491-8036"
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
        <div className={`relative mb-4 transition-all duration-700 delay-100 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-serif font-black text-white tracking-tight" style={{ lineHeight: '1.2' }}>
            <span className="block text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem]">GEAUX</span>
            <span className="block text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem]" style={{ lineHeight: '0.8' }}>WILD</span>
          </h1>
        </div>

        {/* Subtitle and CTAs */}
        <div className={`flex flex-col gap-6 mb-6 md:mb-8 transition-all duration-700 delay-200 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-md lg:max-w-lg">
            <p className="text-base md:text-xl text-white/90 leading-relaxed mb-4 md:mb-6">
              Based in Hammond, Louisiana, Geaux Wild Rehab gives injured and orphaned native wildlife a second chance through licensed rehabilitation, compassionate care, and release back into the wild whenever possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full h-12 md:h-14 px-6 md:px-8 bg-white text-[#26C9AA] hover:bg-white/90 font-bold text-sm md:text-base shadow-lg w-full sm:w-auto justify-center">
                <Link href="/get-help">
                  Found Wildlife?
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-12 md:h-14 px-6 md:px-8 border-2 border-white bg-transparent hover:bg-white/10 font-bold text-sm md:text-base w-full sm:w-auto justify-center">
                <Link href="/support" className="flex items-center text-white">
                  <Heart className="mr-2 h-4 w-4 md:h-5 md:w-5 text-white" />
                  <span className="text-white">Donate</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Animated stats cards */}
          <div ref={statsRef} className="flex gap-3">
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-lg flex-1 sm:flex-initial">
              <p className="text-2xl md:text-4xl font-black text-[#3B468E]">{rescuedCount.toLocaleString()}+</p>
              <p className="text-xs md:text-sm text-gray-500">Animals rescued</p>
            </div>
            <div className="bg-[#3B468E] rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-lg flex-1 sm:flex-initial">
              <p className="text-2xl md:text-4xl font-black text-white">{releaseCount}%</p>
              <p className="text-xs md:text-sm text-white/70">Release rate</p>
            </div>
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

