'use client'

import { useEffect, useState, useRef } from 'react'
import { impactStats } from '@/lib/content'
import { Heart, Leaf, Calendar } from 'lucide-react'

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      // Easing function for smoother animation
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [hasStarted, end, duration])

  return { count, ref }
}

const stats = [
  {
    value: impactStats.animalsRescued,
    label: 'Animals Rescued',
    suffix: '+',
    icon: Heart,
    description: 'Lives saved and returned to the wild'
  },
  {
    value: impactStats.releaseRate,
    label: 'Release Rate',
    suffix: '%',
    icon: Leaf,
    description: 'Successfully returned to the wild'
  },
  {
    value: impactStats.yearsServing,
    label: 'Years Serving',
    suffix: '',
    icon: Calendar,
    description: 'Protecting Louisiana wildlife'
  },
]

export function ImpactStats() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Solid brand background */}
      <div className="absolute inset-0 gradient-forest" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 text-balance">
            Our Impact on Louisiana Wildlife
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Every number represents a life saved, a species protected, and a community united 
            in caring for Louisiana&apos;s wildlife.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ 
  value, 
  label, 
  suffix, 
  icon: Icon, 
  description,
  index 
}: { 
  value: number
  label: string
  suffix: string
  icon: typeof Heart
  description: string
  index: number
}) {
  const { count, ref } = useCountUp(value)

  return (
    <div 
      ref={ref} 
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 text-center hover:bg-white/15 transition-colors"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <p className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2">
        {count}
        {suffix}
      </p>
      <p className="text-white font-semibold text-lg mb-1">{label}</p>
      <p className="text-white/60 text-sm">{description}</p>
    </div>
  )
}
