'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, MapPin, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(true)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1, rootMargin: '50px' })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    /* -mt-px closes any sub-pixel gap between the hero wave and this section */
    <section ref={ref} className="relative z-10 bg-[#F8F4F4] overflow-hidden -mt-px">
      {/* Decorative diamonds */}
      <div className="hidden md:block absolute top-20 right-[10%] w-5 h-5 bg-[#26C9AA]/20 rotate-45 rounded" />
      <div className="hidden md:block absolute top-40 right-[5%] w-3 h-3 bg-[#3B468E]/20 rotate-45 rounded-sm" />

      {/* Beaver — anchored to left browser edge, desktop only */}
      <div className="pointer-events-none absolute left-0 bottom-0 z-0 hidden lg:block w-[620px] xl:w-[760px] 2xl:w-[880px]">
        <Image
          src="https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Beaver/transparent-beaver.png"
          alt=""
          aria-hidden="true"
          width={600}
          height={700}
          className="h-auto w-full object-contain object-left-bottom drop-shadow-2xl -translate-x-8"
          sizes="(min-width: 1536px) 880px, (min-width: 1280px) 760px, 620px"
        />
      </div>

      {/* Beaver — mobile: absolute, pinned to left edge, big, z-20 so it shows above cards */}
      <div className="pointer-events-none absolute left-0 bottom-0 z-20 block lg:hidden w-[260px] sm:w-[340px]">
        <Image
          src="https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Beaver/transparent-beaver.png"
          alt=""
          aria-hidden="true"
          width={340}
          height={400}
          className="h-auto w-full object-contain object-left-bottom drop-shadow-xl"
          sizes="(max-width: 640px) 260px, 340px"
        />
      </div>

      {/* Content — generous top padding so cards sit below the hero wave curve */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6 md:pt-16 md:pb-8 lg:pt-20">
        <div className="grid lg:grid-cols-12 gap-4 md:gap-5 lg:items-start">

          {/* Left spacer on desktop so content sits to the right of the beaver */}
          <div className="hidden lg:block lg:col-span-5" aria-hidden="true" />

          {/* Right column: title card + stats card stacked */}
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5 pb-56 sm:pb-48 md:pb-36">

            {/* Title card */}
            <div className={`bg-white rounded-xl md:rounded-[2rem] p-6 md:p-8 shadow-lg shadow-black/5 border border-gray-100 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-3">Who We Are</span>
              <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#1a1f3d] leading-[1.1] mb-4 md:mb-6">
                A Second Chance<br className="hidden sm:block" /> for Wildlife
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5 md:mb-6 max-w-xl">
                Geaux Wild Rehab is a 501(c)(3) nonprofit wildlife rehabilitation center dedicated to giving Louisiana&apos;s native wildlife a second chance. We are licensed by the Louisiana Department of Wildlife and Fisheries to care for all native mammal species.
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
                    <p className="text-3xl md:text-4xl font-black text-white">6+</p>
                    <p className="text-xs md:text-sm text-white/70">Years Active</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-black text-white">501(c)(3)</p>
                    <p className="text-xs md:text-sm text-white/70">Nonprofit</p>
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
                  <p className="text-xs md:text-sm text-gray-500">Licensed &amp; trained rehabilitators with years of experience.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl md:rounded-[2rem] p-5 md:p-6 shadow-lg shadow-black/5 border border-gray-100 flex gap-3 md:gap-4 items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#3B468E] flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1f3d] text-sm md:text-base mb-1">Hammond, LA</h3>
                  <p className="text-xs md:text-sm text-gray-500">Serving native wildlife across Louisiana</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Wave at bottom — navy section bites up; z-20 so it sits above beaver (z-0) */}
      <div className="absolute left-0 right-0 z-20 pointer-events-none" style={{ lineHeight: 0, bottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 'clamp(48px, 6vw, 80px)', display: 'block' }} preserveAspectRatio="none">
          <path d="M0 80V40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0Z" fill="#3B468E"/>
        </svg>
      </div>
    </section>
  )
}
