'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVis(true), 100)
    return () => clearTimeout(t)
  }, [])

  const anim = (delay: number) =>
    `transition-all duration-700 ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}` +
    ` delay-[${delay}ms]`

  return (
    <section className="relative min-h-screen bg-[#F8F4F4] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#26C9AA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-[#3B468E]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 lg:pt-40">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          
          {/* Left column - Title & CTA */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8 ${anim(100)}`} style={{ transitionDelay: '100ms' }}>
              <span className="w-2 h-2 rounded-full bg-[#26C9AA] animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Louisiana Wildlife Rehabilitation</span>
            </div>

            {/* Giant title */}
            <h1 className={`font-serif font-bold leading-[0.9] tracking-tight mb-8 ${anim(200)}`} style={{ transitionDelay: '200ms' }}>
              <span className="block text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] text-[#3B468E]">
                Geaux
              </span>
              <span className="block text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] text-[#1a1f3d]">
                Wild
              </span>
            </h1>

            {/* Description */}
            <p className={`text-lg text-gray-600 leading-relaxed max-w-md mb-10 ${anim(300)}`} style={{ transitionDelay: '300ms' }}>
              Rescuing, rehabilitating, and releasing Louisiana&apos;s native wildlife. 
              Free of charge. Open 24/7.
            </p>

            {/* CTAs */}
            <div className={`flex flex-wrap items-center gap-4 ${anim(400)}`} style={{ transitionDelay: '400ms' }}>
              <Button asChild size="lg" className="rounded-full h-14 px-8 bg-[#26C9AA] hover:bg-[#1eb89a] text-white font-semibold text-base shadow-lg shadow-[#26C9AA]/25">
                <Link href="/get-help">
                  Found Wildlife?
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 border-2 border-[#3B468E]/20 text-[#3B468E] hover:bg-[#3B468E] hover:text-white font-semibold text-base">
                <Link href="/support">
                  <Heart className="mr-2 h-5 w-5" />
                  Support Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column - Info cards */}
          <div className={`flex flex-col gap-4 lg:pt-20 ${anim(500)}`} style={{ transitionDelay: '500ms' }}>
            {/* Hotline card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg shadow-black/5 border border-gray-100 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#26C9AA] flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-900">24/7 Wildlife Hotline</span>
              </div>
              <p className="text-2xl font-bold text-[#3B468E]">(225) 505-5050</p>
              <p className="text-sm text-gray-500 mt-1">Call anytime for wildlife emergencies</p>
            </div>

            {/* Stats card */}
            <div className="bg-[#3B468E] rounded-3xl p-6 shadow-lg max-w-xs">
              <div className="flex gap-6">
                <div>
                  <p className="text-3xl font-bold text-white">2,500+</p>
                  <p className="text-sm text-white/70">Animals rescued</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#26C9AA]">87%</p>
                  <p className="text-sm text-white/70">Release rate</p>
                </div>
              </div>
            </div>

            {/* License badge */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#26C9AA]" />
              Licensed by Louisiana Dept. of Wildlife &amp; Fisheries
            </div>
          </div>
        </div>
      </div>

      {/* Fox image - large, bottom center */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] sm:w-[70%] md:w-[55%] lg:w-[45%] max-w-2xl z-20 ${anim(300)}`} style={{ transitionDelay: '300ms' }}>
        <div className="relative w-full aspect-[3/4]">
          <Image 
            src="/images/animals/fox.svg" 
            alt="Red Fox" 
            fill 
            className="object-contain object-bottom drop-shadow-2xl" 
            priority 
            sizes="(max-width:768px) 85vw, 45vw" 
          />
        </div>
      </div>
    </section>
  )
}
