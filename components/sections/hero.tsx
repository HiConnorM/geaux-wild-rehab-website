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

  return (
    <section className="relative min-h-screen bg-[#26C9AA] overflow-hidden">
      {/* Decorative diamonds */}
      <div className="absolute top-32 left-[10%] w-6 h-6 bg-white/20 rotate-45 rounded" />
      <div className="absolute top-48 left-[5%] w-4 h-4 bg-white/30 rotate-45 rounded-sm" />
      <div className="absolute top-40 right-[15%] w-8 h-8 bg-white/15 rotate-45 rounded" />
      <div className="absolute top-72 right-[8%] w-5 h-5 bg-white/25 rotate-45 rounded-sm" />
      <div className="absolute bottom-[35%] left-[8%] w-10 h-10 border-2 border-white/20 rotate-45 rounded" />
      <div className="absolute bottom-[45%] right-[12%] w-6 h-6 border-2 border-white/15 rotate-45 rounded-sm" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 lg:pt-36 pb-0">
        
        {/* Top bar - badge and hotline */}
        <div className={`flex flex-wrap items-center justify-between gap-4 mb-8 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm font-medium text-white">Louisiana Wildlife Rehabilitation</span>
          </div>
          
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-lg">
            <div className="w-8 h-8 rounded-full bg-[#26C9AA] flex items-center justify-center">
              <Phone className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">24/7 Hotline</p>
              <p className="font-bold text-[#1a1f3d]">(225) 505-5050</p>
            </div>
          </div>
        </div>

        {/* Giant playful title */}
        <div className={`relative mb-4 transition-all duration-700 delay-100 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-serif font-black text-white leading-[0.85] tracking-tight">
            <span className="block text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem]">
              GEAUX
            </span>
            <span className="block text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem] -mt-4 sm:-mt-8 lg:-mt-12">
              WILD
            </span>
          </h1>
        </div>

        {/* Subtitle and CTAs in a row */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-8 transition-all duration-700 delay-200 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-md">
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Rescuing, rehabilitating, and releasing Louisiana&apos;s native wildlife. Free of charge. Open 24/7.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full h-14 px-8 bg-white text-[#26C9AA] hover:bg-white/90 font-bold text-base shadow-lg">
                <Link href="/get-help">
                  Found Wildlife?
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 border-2 border-white text-white hover:bg-white hover:text-[#26C9AA] font-bold text-base">
                <Link href="/support">
                  <Heart className="mr-2 h-5 w-5" />
                  Donate
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats cards - bento style */}
          <div className="flex gap-3">
            <div className="bg-white rounded-3xl p-5 shadow-lg">
              <p className="text-4xl font-black text-[#3B468E]">2,500+</p>
              <p className="text-sm text-gray-500">Animals rescued</p>
            </div>
            <div className="bg-[#3B468E] rounded-3xl p-5 shadow-lg">
              <p className="text-4xl font-black text-white">87%</p>
              <p className="text-sm text-white/70">Release rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fox image - large, breaking out from bottom */}
      <div className={`relative z-20 max-w-7xl mx-auto px-6 transition-all duration-1000 delay-300 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="relative w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] mx-auto">
          <div className="relative aspect-[3/4]">
            <Image 
              src="/images/animals/fox.svg" 
              alt="Red Fox" 
              fill 
              className="object-contain object-bottom drop-shadow-2xl" 
              priority 
              sizes="(max-width:768px) 90vw, 50vw" 
            />
          </div>
        </div>
      </div>

      {/* Wavy bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 120V60C240 100 480 20 720 60C960 100 1200 20 1440 60V120H0Z" fill="#F8F4F4"/>
        </svg>
      </div>
    </section>
  )
}
