'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { impactStats } from '@/lib/content'
import { Heart, TrendingUp, Calendar } from 'lucide-react'

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
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1, rootMargin: '50px' })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#26C9AA] pt-28 pb-0 md:pt-36">
      {/* Wavy top divider - z-20 covers anything above */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-14 md:h-20" preserveAspectRatio="none">
          <path d="M0 0H1440V40C1200 80 960 0 720 40C480 80 240 0 0 40V0Z" fill="white"/>
        </svg>
      </div>

      {/* Decorative diamonds */}
      <div className="absolute top-32 left-[8%] w-6 h-6 bg-white/15 rotate-45 rounded hidden md:block" />
      <div className="absolute top-48 right-[12%] w-4 h-4 bg-[#3B468E]/20 rotate-45 rounded-sm hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Bento grid */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-8">

          {/* Header + stats - 7 cols */}
          <div className="lg:col-span-7">
            <div className={`mb-8 md:mb-10 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block text-sm font-bold text-white/70 uppercase tracking-wider mb-3">By the Numbers</span>
              <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1] mb-4">
                Our Impact on<br className="hidden sm:block" />Louisiana Wildlife
              </h2>
              <p className="text-base md:text-lg text-white/80 max-w-md">
                Every number represents a life saved, a species protected, and a community united.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pb-16 md:pb-20">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} delay={200 + i * 100} vis={vis} />
              ))}
            </div>
          </div>

          {/* Beaver - 5 cols, z-0 so bottom wave covers its feet */}
          <div className={`lg:col-span-5 relative z-0 transition-all duration-700 delay-300 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Floating badge */}
            <div className={`absolute top-0 left-0 bg-white rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 shadow-xl z-10 transition-all duration-700 delay-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xs md:text-sm text-gray-500">100% of donations</p>
              <p className="text-lg md:text-xl font-black text-[#26C9AA]">Goes to animals</p>
            </div>

            <div className="relative h-[280px] sm:h-[320px] md:h-[420px] lg:h-[500px] min-h-[280px]">
              <Image
                src="/images/animals/beaver.svg"
                alt="Beaver"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                sizes="(max-width:768px) 100vw, 40vw"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Wave at bottom - z-20 sits IN FRONT of beaver (z-0) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 md:h-16" preserveAspectRatio="none">
          <path d="M0 80V40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0Z" fill="#F8F4F4"/>
        </svg>
      </div>
    </section>
  )
}

function StatCard({ value, label, suffix, icon: Icon, delay, vis }: {
  value: number; label: string; suffix: string; icon: typeof Heart; delay: number; vis: boolean
}) {
  const { count, ref } = useCountUp(value)
  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl md:rounded-[1.5rem] p-4 md:p-5 shadow-lg text-center transition-all duration-700 ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#26C9AA]/10 mb-2 md:mb-3">
        <Icon className="h-4 w-4 md:h-5 md:w-5 text-[#26C9AA]" />
      </div>
      <p className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1a1f3d] mb-1">{count}{suffix}</p>
      <p className="text-gray-600 text-xs md:text-sm font-medium">{label}</p>
    </div>
  )
}
