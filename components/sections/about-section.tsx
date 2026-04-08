'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Clock, MapPin, Award } from 'lucide-react'
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
    <section ref={ref} className="relative bg-[#F8F4F4] overflow-visible py-20 lg:py-28">
      {/* Decorative diamonds */}
      <div className="absolute top-20 right-[10%] w-5 h-5 bg-[#26C9AA]/20 rotate-45 rounded" />
      <div className="absolute top-40 right-[5%] w-3 h-3 bg-[#3B468E]/20 rotate-45 rounded-sm" />
      <div className="absolute bottom-32 left-[8%] w-6 h-6 border-2 border-[#26C9AA]/20 rotate-45 rounded" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Bento grid layout */}
        <div className="grid lg:grid-cols-12 gap-5">
          
          {/* Title card - spans 7 cols */}
          <div className={`lg:col-span-7 bento-card transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-3">Who We Are</span>
            <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-[#1a1f3d] leading-[1.1] mb-6">
              A Second Chance<br/>for Wildlife
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl">
              Geaux Wild Rehab is Louisiana&apos;s trusted wildlife rehabilitation center. We rescue injured, 
              orphaned, and displaced native wildlife, providing expert care before releasing them back to the wild.
            </p>
            <Button asChild size="lg" className="rounded-full h-12 px-6 bg-[#3B468E] hover:bg-[#2d366d] text-white font-semibold">
              <Link href="/about">
                Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Stats card - spans 5 cols */}
          <div className={`lg:col-span-5 bento-card-accent transition-all duration-700 delay-100 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            <div className="flex flex-col h-full justify-between">
              <div>
                <Award className="h-10 w-10 text-white/80 mb-4" />
                <h3 className="font-bold text-2xl text-white mb-2">Licensed Facility</h3>
                <p className="text-white/80 text-sm">Fully permitted by Louisiana Dept. of Wildlife &amp; Fisheries</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex gap-8">
                  <div>
                    <p className="text-4xl font-black text-white">10+</p>
                    <p className="text-sm text-white/70">Years Active</p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-white">24/7</p>
                    <p className="text-sm text-white/70">Emergency Line</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Raccoon image - spans 5 cols, overlaps up */}
          <div className={`lg:col-span-5 relative -mt-8 lg:-mt-20 transition-all duration-700 delay-200 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
              <Image 
                src="/images/animals/raccoon.svg" 
                alt="Raccoon" 
                fill 
                className="object-contain drop-shadow-2xl" 
                sizes="(max-width:768px) 100vw, 40vw" 
              />
            </div>
          </div>

          {/* Feature cards - span 7 cols, 2 cols each */}
          <div className={`lg:col-span-7 grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-300 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="bento-card flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#26C9AA] flex items-center justify-center shrink-0">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1f3d] mb-1">Expert Care</h3>
                <p className="text-sm text-gray-500">Trained rehabilitators with years of experience</p>
              </div>
            </div>
            
            <div className="bento-card flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#3B468E] flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1f3d] mb-1">Baton Rouge, LA</h3>
                <p className="text-sm text-gray-500">Serving the greater Louisiana area</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
