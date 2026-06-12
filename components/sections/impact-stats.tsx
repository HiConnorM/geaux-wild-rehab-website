'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Heart, MapPin, RefreshCw } from 'lucide-react'
import { prefersReducedMotion, ST_DEFAULTS, EASE_OUT } from '@/lib/gsap-utils'

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true) }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

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

  return { count, ref }
}

export function ImpactStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const statsRowRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: import('gsap').Context | undefined
    ;(async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (prefersReducedMotion()) return

      ctx = gsap.context(() => {
        gsap.set([headerRef.current, badgeRef.current], { opacity: 0, y: 32 })

        gsap.to(headerRef.current, {
          opacity: 1, y: 0,
          duration: 0.7, ease: EASE_OUT,
          scrollTrigger: { trigger: headerRef.current, ...ST_DEFAULTS },
        })

        if (statsRowRef.current) {
          const cards = Array.from(statsRowRef.current.children)
          gsap.set(cards, { opacity: 0, y: 28 })
          gsap.to(cards, {
            opacity: 1, y: 0,
            duration: 0.65, ease: EASE_OUT,
            stagger: 0.1,
            scrollTrigger: { trigger: statsRowRef.current, ...ST_DEFAULTS },
          })
        }

        gsap.to(badgeRef.current, {
          opacity: 1, y: 0,
          duration: 0.6, ease: EASE_OUT,
          delay: 0.1,
          scrollTrigger: { trigger: badgeRef.current, ...ST_DEFAULTS },
        })
      }, sectionRef)
    })()

    return () => ctx?.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-0 overflow-hidden bg-[#26C9AA] -mt-[3px]">

      <div className="absolute top-12 left-[8%] w-6 h-6 bg-white/15 rotate-45 rounded hidden md:block" />
      <div className="absolute top-28 right-[12%] w-4 h-4 bg-[#3B468E]/20 rotate-45 rounded-sm hidden md:block" />

      {/* Squirrel — desktop */}
      <div className="pointer-events-none absolute right-0 bottom-0 z-0 hidden lg:block w-[600px] xl:w-[740px] 2xl:w-[860px]">
        <Image
          src="https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Squirrel/transparent-squirrel.png"
          alt=""
          aria-hidden="true"
          width={580}
          height={680}
          className="h-auto w-full object-contain object-right-bottom drop-shadow-2xl translate-x-6"
          sizes="(min-width: 1536px) 860px, (min-width: 1280px) 740px, 600px"
        />
      </div>

      {/* Squirrel — mobile */}
      <div className="pointer-events-none absolute right-0 bottom-0 z-0 block lg:hidden w-[240px] sm:w-[320px]">
        <Image
          src="https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Squirrel/transparent-squirrel.png"
          alt=""
          aria-hidden="true"
          width={320}
          height={380}
          className="h-auto w-full object-contain object-right-bottom drop-shadow-xl translate-x-4"
          sizes="(max-width: 640px) 240px, 320px"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 md:pt-20 pb-0">
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 items-end">

          <div className="lg:col-span-7 pb-16 md:pb-20">
            <div ref={headerRef} className="mb-8 md:mb-10" style={{ opacity: 0 }}>
              <span className="inline-block text-sm font-bold text-white/70 uppercase tracking-wider mb-3">By the Numbers</span>
              <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1] mb-4">
                Our Impact on<br className="hidden sm:block" />Louisiana Wildlife
              </h2>
              <p className="text-base md:text-lg text-white/80 max-w-md">
                Every number represents a life saved, a species protected, and a community united.
              </p>
            </div>

            {/* Stats row */}
            <div ref={statsRowRef} className="grid grid-cols-3 gap-3 md:gap-4 pb-8">
              <AnimalsRescuedCard />
              <StaticCard
                icon={MapPin}
                value="Est. 2021"
                label="Serving Louisiana Wildlife"
              />
              <StaticCard
                icon={RefreshCw}
                value="Second Chances"
                label="Rehabilitation & Release"
              />
            </div>

            <div ref={badgeRef} className="inline-block bg-white rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 shadow-xl" style={{ opacity: 0 }}>
              <p className="text-xs md:text-sm text-gray-500">100% of donations</p>
              <p className="text-lg md:text-xl font-black text-[#26C9AA]">Goes to animals</p>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5" aria-hidden="true" />
        </div>
      </div>

      <div className="absolute left-0 right-0 z-20 pointer-events-none" style={{ lineHeight: 0, bottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 'clamp(48px, 6vw, 80px)', display: 'block' }} preserveAspectRatio="none">
          <path d="M0 80V40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0Z" fill="#1a1f3d"/>
        </svg>
      </div>
    </section>
  )
}

function AnimalsRescuedCard() {
  const { count, ref } = useCountUp(1500)
  return (
    <div
      ref={ref}
      className="bg-white rounded-xl md:rounded-[1.5rem] p-4 md:p-5 shadow-lg text-center"
      style={{ opacity: 0 }}
    >
      <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#26C9AA]/10 mb-2 md:mb-3">
        <Heart className="h-4 w-4 md:h-5 md:w-5 text-[#26C9AA]" />
      </div>
      <p className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1a1f3d] mb-1">{count.toLocaleString()}+</p>
      <p className="text-gray-600 text-xs md:text-sm font-medium">Animals Rescued</p>
    </div>
  )
}

function StaticCard({ icon: Icon, value, label }: { icon: typeof Heart; value: string; label: string }) {
  return (
    <div
      className="bg-white rounded-xl md:rounded-[1.5rem] p-4 md:p-5 shadow-lg text-center"
      style={{ opacity: 0 }}
    >
      <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#26C9AA]/10 mb-2 md:mb-3">
        <Icon className="h-4 w-4 md:h-5 md:w-5 text-[#26C9AA]" />
      </div>
      <p className="text-base md:text-lg lg:text-xl font-black text-[#1a1f3d] mb-1 leading-tight">{value}</p>
      <p className="text-gray-600 text-xs md:text-sm font-medium">{label}</p>
    </div>
  )
}

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true) }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

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

  return { count, ref }
}

const stats = [
  { value: impactStats.animalsRescued, label: 'Animals Rescued', suffix: '+', icon: Heart },
  { value: impactStats.releaseRate, label: 'Release Rate', suffix: '%', icon: TrendingUp },
  { value: impactStats.yearsServing, label: 'Years Serving', suffix: '+', icon: Calendar },
]

export function ImpactStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const statsRowRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: import('gsap').Context | undefined
    ;(async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (prefersReducedMotion()) return

      ctx = gsap.context(() => {
        gsap.set([headerRef.current, badgeRef.current], { opacity: 0, y: 32 })

        gsap.to(headerRef.current, {
          opacity: 1, y: 0,
          duration: 0.7, ease: EASE_OUT,
          scrollTrigger: { trigger: headerRef.current, ...ST_DEFAULTS },
        })

        // Stat cards stagger in
        if (statsRowRef.current) {
          const cards = Array.from(statsRowRef.current.children)
          gsap.set(cards, { opacity: 0, y: 28 })
          gsap.to(cards, {
            opacity: 1, y: 0,
            duration: 0.65, ease: EASE_OUT,
            stagger: 0.1,
            scrollTrigger: { trigger: statsRowRef.current, ...ST_DEFAULTS },
          })
        }

        gsap.to(badgeRef.current, {
          opacity: 1, y: 0,
          duration: 0.6, ease: EASE_OUT,
          delay: 0.1,
          scrollTrigger: { trigger: badgeRef.current, ...ST_DEFAULTS },
        })
      }, sectionRef)
    })()

    return () => ctx?.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-0 overflow-hidden bg-[#26C9AA] -mt-[3px]">

      {/* Decorative diamonds */}
      <div className="absolute top-12 left-[8%] w-6 h-6 bg-white/15 rotate-45 rounded hidden md:block" />
      <div className="absolute top-28 right-[12%] w-4 h-4 bg-[#3B468E]/20 rotate-45 rounded-sm hidden md:block" />

      {/* Squirrel — desktop */}
      <div className="pointer-events-none absolute right-0 bottom-0 z-0 hidden lg:block w-[600px] xl:w-[740px] 2xl:w-[860px]">
        <Image
          src="https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Squirrel/transparent-squirrel.png"
          alt=""
          aria-hidden="true"
          width={580}
          height={680}
          className="h-auto w-full object-contain object-right-bottom drop-shadow-2xl translate-x-6"
          sizes="(min-width: 1536px) 860px, (min-width: 1280px) 740px, 600px"
        />
      </div>

      {/* Squirrel — mobile */}
      <div className="pointer-events-none absolute right-0 bottom-0 z-0 block lg:hidden w-[240px] sm:w-[320px]">
        <Image
          src="https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Squirrel/transparent-squirrel.png"
          alt=""
          aria-hidden="true"
          width={320}
          height={380}
          className="h-auto w-full object-contain object-right-bottom drop-shadow-xl translate-x-4"
          sizes="(max-width: 640px) 240px, 320px"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 md:pt-20 pb-0">
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 items-end">

          <div className="lg:col-span-7 pb-16 md:pb-20">
            <div ref={headerRef} className="mb-8 md:mb-10" style={{ opacity: 0 }}>
              <span className="inline-block text-sm font-bold text-white/70 uppercase tracking-wider mb-3">By the Numbers</span>
              <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1] mb-4">
                Our Impact on<br className="hidden sm:block" />Louisiana Wildlife
              </h2>
              <p className="text-base md:text-lg text-white/80 max-w-md">
                Every number represents a life saved, a species protected, and a community united.
              </p>
            </div>

            {/* Stats row */}
            <div ref={statsRowRef} className="grid grid-cols-3 gap-3 md:gap-4 pb-8">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            <div ref={badgeRef} className="inline-block bg-white rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 shadow-xl" style={{ opacity: 0 }}>
              <p className="text-xs md:text-sm text-gray-500">100% of donations</p>
              <p className="text-lg md:text-xl font-black text-[#26C9AA]">Goes to animals</p>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5" aria-hidden="true" />
        </div>
      </div>

      <div className="absolute left-0 right-0 z-20 pointer-events-none" style={{ lineHeight: 0, bottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 'clamp(48px, 6vw, 80px)', display: 'block' }} preserveAspectRatio="none">
          <path d="M0 80V40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0Z" fill="#1a1f3d"/>
        </svg>
      </div>
    </section>
  )
}

function StatCard({ value, label, suffix, icon: Icon }: {
  value: number; label: string; suffix: string; icon: typeof Heart
}) {
  const { count, ref } = useCountUp(value)
  return (
    <div
      ref={ref}
      className="bg-white rounded-xl md:rounded-[1.5rem] p-4 md:p-5 shadow-lg text-center"
      style={{ opacity: 0 }}
    >
      <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#26C9AA]/10 mb-2 md:mb-3">
        <Icon className="h-4 w-4 md:h-5 md:w-5 text-[#26C9AA]" />
      </div>
      <p className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1a1f3d] mb-1">{count}{suffix}</p>
      <p className="text-gray-600 text-xs md:text-sm font-medium">{label}</p>
    </div>
  )
}
