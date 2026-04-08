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
    <section ref={sectionRef} className="relative overflow-hidden py-20 lg:py-28 bg-[#26C9AA]">
      {/* Wavy top divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 60V30C360 60 720 0 1080 30C1260 50 1380 40 1440 30V60H0Z" fill="white"/>
        </svg>
      </div>

      {/* Decorative diamonds */}
      <div className="absolute top-28 left-[8%] w-6 h-6 bg-white/15 rotate-45 rounded" />
      <div className="absolute top-48 right-[12%] w-4 h-4 bg-[#3B468E]/20 rotate-45 rounded-sm" />
      <div className="absolute bottom-40 left-[15%] w-5 h-5 border-2 border-white/15 rotate-45 rounded" />
      <div className="absolute bottom-28 right-[6%] w-8 h-8 bg-white/10 rotate-45 rounded" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
        {/* Bento grid */}
        <div className="grid lg:grid-cols-12 gap-5">
          
          {/* Header + stats - 7 cols */}
          <div className="lg:col-span-7">
            <div className={`mb-10 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block text-sm font-bold text-white/70 uppercase tracking-wider mb-3">By the Numbers</span>
              <h2 className="font-serif font-black text-4xl sm:text-5xl text-white leading-[1.1] mb-4">
                Our Impact on<br/>Louisiana Wildlife
              </h2>
              <p className="text-lg text-white/80 max-w-md">
                Every number represents a life saved, a species protected, and a community united.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} delay={200 + i * 100} vis={vis} />
              ))}
            </div>
          </div>

          {/* Beaver - 5 cols */}
          <div className={`lg:col-span-5 relative transition-all duration-700 delay-300 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative w-full max-w-sm ml-auto">
              <div className="aspect-square relative">
                <Image 
                  src="/images/animals/beaver.svg" 
                  alt="Beaver" 
                  fill 
                  className="object-contain drop-shadow-2xl" 
                  sizes="(max-width:768px) 100vw, 35vw" 
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className={`absolute top-0 left-0 bg-white rounded-2xl px-5 py-4 shadow-xl transition-all duration-700 delay-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
              <p className="text-sm text-gray-500">100% of donations</p>
              <p className="text-xl font-black text-[#26C9AA]">Goes to animals</p>
            </div>
          </div>

        </div>
      </div>

      {/* Wavy bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 0V30C360 0 720 60 1080 30C1260 10 1380 20 1440 30V0H0Z" fill="#F8F4F4"/>
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
      className={`bg-white rounded-[1.5rem] p-5 shadow-lg text-center transition-all duration-700 ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#26C9AA]/10 mb-3">
        <Icon className="h-5 w-5 text-[#26C9AA]" />
      </div>
      <p className="text-3xl lg:text-4xl font-black text-[#1a1f3d] mb-1">{count}{suffix}</p>
      <p className="text-gray-600 text-sm font-medium">{label}</p>
    </div>
  )
}
