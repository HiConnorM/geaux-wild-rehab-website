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
      {/* Decorative diamonds - hidden on mobile */}
      <div className="hidden md:block absolute top-32 left-[10%] w-6 h-6 bg-white/20 rotate-45 rounded" />
      <div className="hidden md:block absolute top-48 left-[5%] w-4 h-4 bg-white/30 rotate-45 rounded-sm" />
      <div className="hidden md:block absolute top-40 right-[15%] w-8 h-8 bg-white/15 rotate-45 rounded" />
      <div className="hidden md:block absolute top-72 right-[8%] w-5 h-5 bg-white/25 rotate-45 rounded-sm" />
      <div className="hidden md:block absolute bottom-[35%] left-[8%] w-10 h-10 border-2 border-white/20 rotate-45 rounded" />
      <div className="hidden md:block absolute bottom-[45%] right-[12%] w-6 h-6 border-2 border-white/15 rotate-45 rounded-sm" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 md:pt-28 lg:pt-36 pb-0">

        {/* Top bar - badge and hotline */}
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 md:mb-8 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-white">Louisiana Wildlife Rehabilitation</span>
          </div>

          <div className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-3 rounded-full bg-white shadow-lg">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#26C9AA] flex items-center justify-center">
              <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-gray-500">24/7 Hotline</p>
              <p className="font-bold text-sm md:text-base text-[#1a1f3d]">(225) 505-5050</p>
            </div>
          </div>
        </div>

        {/* Giant playful title */}
        <div className={`relative mb-4 transition-all duration-700 delay-100 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-serif font-black text-white tracking-tight" style={{ lineHeight: '1.2' }}>
            <span className="block text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem]">
              GEAUX
            </span>
            <span className="block text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem]" style={{ lineHeight: '1.2' }}>
              WILD
            </span>
          </h1>
        </div>

        {/* Subtitle and CTAs */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8 mb-6 md:mb-8 transition-all duration-700 delay-200 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-md">
            <p className="text-base md:text-xl text-white/90 leading-relaxed mb-4 md:mb-6">
              Rescuing, rehabilitating, and releasing Louisiana&apos;s native wildlife. Free of charge. Open 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full h-12 md:h-14 px-6 md:px-8 bg-white text-[#26C9AA] hover:bg-white/90 font-bold text-sm md:text-base shadow-lg w-full sm:w-auto justify-center">
                <Link href="/get-help">
                  Found Wildlife?
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-12 md:h-14 px-6 md:px-8 border-2 border-white hover:bg-white font-bold text-sm md:text-base w-full sm:w-auto justify-center [&>*]:text-[#e85d7a] hover:[&>*]:text-[#26C9AA]" style={{ color: '#e85d7a' }}>
                <Link href="/support" className="flex items-center">
                  <Heart className="mr-2 h-4 w-4 md:h-5 md:w-5 text-[#e85d7a]" />
                  <span className="text-[#e85d7a]">Donate</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats cards */}
          <div className="flex gap-3">
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-lg flex-1 sm:flex-initial">
              <p className="text-2xl md:text-4xl font-black text-[#3B468E]">2,500+</p>
              <p className="text-xs md:text-sm text-gray-500">Animals rescued</p>
            </div>
            <div className="bg-[#3B468E] rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-lg flex-1 sm:flex-initial">
              <p className="text-2xl md:text-4xl font-black text-white">87%</p>
              <p className="text-xs md:text-sm text-white/70">Release rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fox image - z-0 so wave (z-20) sits in front of it */}
      <div className={`relative z-0 max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-1000 delay-300 -mt-[236px] ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="relative w-[85%] sm:w-[70%] md:w-[55%] lg:w-[45%] mx-auto">
          <div className="relative aspect-[3/4]">
            <Image
              src="/images/animals/fox.svg"
              alt="Red Fox"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
              style={{ marginTop: '-19px' }}
              priority
              sizes="(max-width:768px) 85vw, 45vw"
            />
          </div>
        </div>
      </div>

      {/* Wavy bottom divider - z-20 so it sits IN FRONT of the fox (z-0) */}
      <div className="absolute bottom-0 left-0 right-0 z-20" style={{ marginTop: '1px' }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-24 lg:h-auto" preserveAspectRatio="none">
          <path d="M0 120V60C240 100 480 20 720 60C960 100 1200 20 1440 60V120H0Z" fill="#F8F4F4"/>
        </svg>
      </div>
    </section>
  )
}
