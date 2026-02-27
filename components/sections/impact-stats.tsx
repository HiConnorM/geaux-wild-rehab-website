'use client'

import { useEffect, useState, useRef } from 'react'
import { impactStats } from '@/lib/content'

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
      setCount(Math.floor(progress * end))

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
  },
  {
    value: impactStats.speciesHelped,
    label: 'Species Helped',
    suffix: '',
  },
  {
    value: impactStats.volunteersActive,
    label: 'Active Volunteers',
    suffix: '+',
  },
  {
    value: impactStats.yearsServing,
    label: 'Years Serving Louisiana',
    suffix: '',
  },
]

export function ImpactStats() {
  return (
    <section className="py-20 lg:py-28 gradient-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
            Making a Difference
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Every number represents a life saved, a species protected, and a community united 
            in caring for Louisiana&apos;s wildlife.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const { count, ref } = useCountUp(value)

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl lg:text-5xl font-bold text-white mb-2">
        {count}
        {suffix}
      </p>
      <p className="text-white/70 text-sm">{label}</p>
    </div>
  )
}
