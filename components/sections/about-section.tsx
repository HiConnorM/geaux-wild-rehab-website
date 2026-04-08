'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const anim = (delay: number) =>
    `transition-all duration-700 ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`

  return (
    <section ref={ref} className="relative min-h-screen bg-white overflow-hidden py-24 lg:py-32">
      {/* Decorative blob */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-[#26C9AA]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left - Animal image with floating cards */}
          <div className="relative order-2 lg:order-1">
            {/* Raccoon */}
            <div className={`relative w-full max-w-md mx-auto ${anim(200)}`} style={{ transitionDelay: '200ms' }}>
              <div className="aspect-[4/5] relative">
                <Image 
                  src="/images/animals/raccoon.svg" 
                  alt="Raccoon" 
                  fill 
                  className="object-contain drop-shadow-xl" 
                  sizes="(max-width:768px) 100vw, 50vw" 
                />
              </div>
            </div>

            {/* Floating stat card */}
            <div className={`absolute -top-4 -right-4 lg:right-0 bg-white rounded-2xl p-5 shadow-xl shadow-black/10 border border-gray-100 ${anim(400)}`} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#26C9AA]/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-[#26C9AA]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1a1f3d]">10+</p>
                  <p className="text-sm text-gray-500">Years serving LA</p>
                </div>
              </div>
            </div>

            {/* Location badge */}
            <div className={`absolute bottom-20 -left-4 lg:left-0 bg-[#3B468E] text-white rounded-2xl px-5 py-4 shadow-lg ${anim(500)}`} style={{ transitionDelay: '500ms' }}>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium">Baton Rouge, Louisiana</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <span className={`inline-block text-sm font-semibold text-[#26C9AA] uppercase tracking-wider mb-4 ${anim(100)}`} style={{ transitionDelay: '100ms' }}>
              Who We Are
            </span>

            <h2 className={`font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1a1f3d] leading-tight mb-6 ${anim(150)}`} style={{ transitionDelay: '150ms' }}>
              A Second Chance<br />for Wildlife
            </h2>

            <p className={`text-lg text-gray-600 leading-relaxed mb-8 ${anim(200)}`} style={{ transitionDelay: '200ms' }}>
              Geaux Wild Rehab is Louisiana&apos;s trusted wildlife rehabilitation center. We rescue injured, 
              orphaned, and displaced native wildlife, providing expert medical care and rehabilitation 
              before releasing them back to where they belong — the wild.
            </p>

            {/* Features */}
            <div className={`grid sm:grid-cols-2 gap-4 mb-10 ${anim(250)}`} style={{ transitionDelay: '250ms' }}>
              {[
                { icon: Shield, label: 'State Licensed', desc: 'Fully permitted facility' },
                { icon: Clock, label: '24/7 Response', desc: 'Always here to help' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex gap-3 p-4 rounded-2xl bg-[#F8F4F4]">
                  <div className="w-10 h-10 rounded-xl bg-[#26C9AA] flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1f3d]">{label}</p>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className={`rounded-full h-14 px-8 bg-[#3B468E] hover:bg-[#2d366d] text-white font-semibold ${anim(300)}`} style={{ transitionDelay: '300ms' }}>
              <Link href="/about">
                Our Full Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
