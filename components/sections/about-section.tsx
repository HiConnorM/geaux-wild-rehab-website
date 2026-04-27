'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, MapPin, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1, rootMargin: '50px' })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative bg-[#F8F4F4] overflow-hidden pt-16 pb-0 md:pt-20 lg:pt-28" style={{ marginTop: '-4px' }}>
      {/* Decorative diamonds - hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-[10%] w-5 h-5 bg-[#26C9AA]/20 rotate-45 rounded" />
      <div className="hidden md:block absolute top-40 right-[5%] w-3 h-3 bg-[#3B468E]/20 rotate-45 rounded-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-4 md:gap-5">

          {/* Raccoon - LEFT side, 5 cols, z-0 so the bottom wave sits in front of its feet */}
          <div className={`lg:col-span-5 relative h-[260px] sm:h-[300px] md:h-[380px] z-0 order-last lg:order-first transition-all duration-700 delay-200 self-end ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Image
              src="/images/animals/raccoon.svg"
              alt="Raccoon"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
              sizes="(max-width:768px) 80vw, 40vw"
            />
          </div>

          {/* Right column: title card + stats card stacked */}
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5 order-first lg:order-last">

            {/* Title card */}
            <div className={`bg-white rounded-xl md:rounded-[2rem] p-6 md:p-8 shadow-lg shadow-black/5 border border-gray-100 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-3">Who We Are</span>
              <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#1a1f3d] leading-[1.1] mb-4 md:mb-6">
                A Second Chance<br className="hidden sm:block" /> for Wildlife
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5 md:mb-6 max-w-xl">
                Geaux Wild Rehab is Louisiana&apos;s trusted wildlife rehabilitation center. We rescue injured,
                orphaned, and displaced native wildlife, providing expert care before releasing them back to the wild.
              </p>
              <Button asChild size="lg" className="rounded-full h-11 md:h-12 px-5 md:px-6 bg-[#3B468E] hover:bg-[#2d366d] text-white font-semibold w-full sm:w-auto">
                <Link href="/about">
                  Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Stats card */}
            <div className={`bg-[#26C9AA] rounded-xl md:rounded-[2rem] p-6 md:p-8 shadow-lg shadow-[#26C9AA]/20 text-white transition-all duration-700 delay-100 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <Award className="h-8 w-8 md:h-10 md:w-10 text-white/80 mb-3" />
                  <h3 className="font-bold text-xl md:text-2xl text-white mb-1">Licensed Facility</h3>
                  <p className="text-white/80 text-xs md:text-sm">Fully permitted by Louisiana Dept. of Wildlife &amp; Fisheries</p>
                </div>
                <div className="flex gap-6 md:gap-8 pt-2">
                  <div>
                    <p className="text-3xl md:text-4xl font-black text-white">10+</p>
                    <p className="text-xs md:text-sm text-white/70">Years Active</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-black text-white">24/7</p>
                    <p className="text-xs md:text-sm text-white/70">Emergency Line</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature cards */}
            <div className={`grid sm:grid-cols-2 gap-3 md:gap-4 transition-all duration-700 delay-300 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white rounded-xl md:rounded-[2rem] p-5 md:p-6 shadow-lg shadow-black/5 border border-gray-100 flex gap-3 md:gap-4 items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#26C9AA] flex items-center justify-center shrink-0">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1f3d] text-sm md:text-base mb-1">Expert Care</h3>
                  <p className="text-xs md:text-sm text-gray-500">Trained rehabilitators with years of experience</p>
                </div>
              </div>
              <div className="bg-white rounded-xl md:rounded-[2rem] p-5 md:p-6 shadow-lg shadow-black/5 border border-gray-100 flex gap-3 md:gap-4 items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#3B468E] flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1f3d] text-sm md:text-base mb-1">Baton Rouge, LA</h3>
                  <p className="text-xs md:text-sm text-gray-500">Serving the greater Louisiana area</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
