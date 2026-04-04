'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { impactStats } from '@/lib/content'
import { Heart, Leaf, Calendar } from 'lucide-react'

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
  { value: impactStats.animalsRescued, label: 'Animals Rescued', suffix: '+', icon: Heart, desc: 'Lives saved and returned to the wild' },
  { value: impactStats.releaseRate,    label: 'Release Rate',    suffix: '%', icon: Leaf,   desc: 'Successfully returned to the wild' },
  { value: impactStats.yearsServing,   label: 'Years Serving',   suffix: '',  icon: Calendar, desc: 'Protecting Louisiana wildlife' },
]

export function ImpactStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.07 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const b = 'transition-all duration-700'
  const h = 'opacity-0 translate-y-6'
  const s = 'opacity-100 translate-y-0'

  return (
    <section ref={sectionRef} className="relative min-h-[70vh] overflow-hidden" style={{ background: 'linear-gradient(135deg, #26C9AA, #2e7fbb, #3B468E)' }}>

      {/* ── Top content ── */}
      <div className="relative z-20 px-6 sm:px-12 md:px-20 pt-16">
        <div className="grid grid-cols-2 gap-x-8 items-start">
          <div className="flex flex-col gap-3">
            <span className={`text-[11px] tracking-[0.22em] uppercase text-white/60 font-semibold ${b} delay-75 ${vis ? s : h}`}>
              By the Numbers
            </span>
            <h2 className={`font-serif font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl text-white ${b} delay-100 ${vis ? s : h}`}>
              Our Impact on<br />Louisiana Wildlife
            </h2>
          </div>
          <div className={`flex items-end justify-end ${b} delay-150 ${vis ? s : h}`}>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs text-right">
              Every number represents a life saved, a species protected, and a community united in caring for Louisiana&apos;s native wildlife.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className={`grid grid-cols-3 gap-4 mt-10 ${b} delay-200 ${vis ? s : h}`}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>

      {/* Beaver — right side, bottom */}
      <div className={`absolute bottom-0 right-0 w-[42%] sm:w-[34%] md:w-[26%] max-w-xs z-10 ${b} delay-200 ${vis ? s : h}`}>
        <div className="relative w-full aspect-[3/4]">
          <Image src="/images/animals/beaver.svg" alt="Beaver" fill className="object-contain object-bottom" sizes="42vw" />
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label, suffix, icon: Icon, desc, index }: {
  value: number; label: string; suffix: string; icon: typeof Heart; desc: string; index: number
}) {
  const { count, ref } = useCountUp(value)
  return (
    <div ref={ref} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 lg:p-7 border border-white/20 text-center hover:bg-white/15 transition-colors" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 mb-3">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <p className="text-3xl lg:text-5xl font-bold text-white mb-1">{count}{suffix}</p>
      <p className="text-white font-semibold text-sm mb-1">{label}</p>
      <p className="text-white/60 text-xs">{desc}</p>
    </div>
  )
}
