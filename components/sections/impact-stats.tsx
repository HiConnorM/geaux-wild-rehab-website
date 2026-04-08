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
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const anim = (delay: number) =>
    `transition-all duration-700 ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 lg:py-32" style={{ background: 'linear-gradient(135deg, #26C9AA 0%, #2a7fb8 50%, #3B468E 100%)' }}>
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Content */}
          <div>
            <span className={`inline-block text-sm font-semibold text-white/70 uppercase tracking-wider mb-4 ${anim(100)}`} style={{ transitionDelay: '100ms' }}>
              By the Numbers
            </span>
            <h2 className={`font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 ${anim(150)}`} style={{ transitionDelay: '150ms' }}>
              Our Impact on Louisiana Wildlife
            </h2>
            <p className={`text-lg text-white/80 mb-12 max-w-md ${anim(200)}`} style={{ transitionDelay: '200ms' }}>
              Every number represents a life saved, a species protected, and a community united in conservation.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} delay={250 + i * 80} vis={vis} />
              ))}
            </div>
          </div>

          {/* Right - Beaver */}
          <div className={`relative ${anim(300)}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative w-full max-w-md ml-auto">
              <div className="aspect-[3/4] relative">
                <Image 
                  src="/images/animals/beaver.svg" 
                  alt="Beaver" 
                  fill 
                  className="object-contain drop-shadow-2xl" 
                  sizes="(max-width:768px) 100vw, 50vw" 
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className={`absolute top-10 left-0 bg-white rounded-2xl px-5 py-4 shadow-xl ${anim(500)}`} style={{ transitionDelay: '500ms' }}>
              <p className="text-sm text-gray-500">100% of donations</p>
              <p className="text-lg font-bold text-[#26C9AA]">Goes to animals</p>
            </div>
          </div>
        </div>
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
      className={`bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 text-center transition-all duration-700 ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 mb-3">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <p className="text-3xl lg:text-4xl font-bold text-white mb-1">{count}{suffix}</p>
      <p className="text-white/80 text-sm font-medium">{label}</p>
    </div>
  )
}
