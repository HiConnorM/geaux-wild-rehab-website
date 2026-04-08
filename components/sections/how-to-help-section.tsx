'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Gift, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HowToHelpSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1, rootMargin: '50px' })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative bg-[#3B468E] overflow-hidden py-20 lg:py-28">
      {/* Wavy top divider */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 80V40C360 0 720 80 1080 40C1260 20 1380 30 1440 40V80H0Z" fill="#F8F4F4"/>
        </svg>
      </div>

      {/* Decorative diamonds */}
      <div className="absolute top-32 left-[8%] w-6 h-6 bg-white/10 rotate-45 rounded" />
      <div className="absolute top-48 right-[12%] w-4 h-4 bg-[#26C9AA]/30 rotate-45 rounded-sm" />
      <div className="absolute bottom-40 left-[15%] w-5 h-5 border-2 border-white/10 rotate-45 rounded" />
      <div className="absolute bottom-28 right-[6%] w-8 h-8 bg-[#26C9AA]/20 rotate-45 rounded" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-3">Make a Difference</span>
          <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-4">
            How You Can Help
          </h2>
          <p className="text-lg text-white/70">
            Your support directly saves lives. Choose how you&apos;d like to make an impact.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-12 gap-5">
          
          {/* Donate card - large, spans 7 cols */}
          <div className={`lg:col-span-7 bg-white rounded-[2rem] p-8 shadow-xl transition-all duration-700 delay-100 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            <div className="flex gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#26C9AA] flex items-center justify-center shrink-0">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#1a1f3d] mb-1">Make a Donation</h3>
                <p className="text-gray-600">Every dollar goes directly to animal care. We are 100% volunteer-run.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {['$25', '$50', '$100', '$250'].map(amt => (
                <button key={amt} className="px-6 py-3 rounded-full bg-[#F8F4F4] hover:bg-[#26C9AA] hover:text-white text-[#1a1f3d] font-bold transition-all">
                  {amt}
                </button>
              ))}
            </div>
            
            <Button asChild size="lg" className="rounded-full h-14 px-8 bg-[#26C9AA] hover:bg-[#1eb89a] text-white font-bold">
              <Link href="/support">
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Wishlist card - spans 5 cols */}
          <div className={`lg:col-span-5 bg-[#26C9AA] rounded-[2rem] p-8 shadow-xl transition-all duration-700 delay-200 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
              <Gift className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-2xl text-white mb-2">Shop Our Wishlist</h3>
            <p className="text-white/80 mb-6">Purchase supplies we need most — formula, heating pads, cages &amp; more.</p>
            <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-6 border-2 border-white text-white hover:bg-white hover:text-[#26C9AA] font-bold">
              <Link href="/support#wishlist">
                View Wishlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Opossum - spans 5 cols, overlaps */}
          <div className={`lg:col-span-5 relative -mt-4 lg:-mt-12 transition-all duration-700 delay-300 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <Image 
                src="/images/animals/opossum.svg" 
                alt="Opossum" 
                fill 
                className="object-contain drop-shadow-2xl" 
                sizes="(max-width:768px) 100vw, 35vw" 
              />
            </div>
          </div>

          {/* Share + Tax info - spans 7 cols */}
          <div className={`lg:col-span-7 grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-400 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-6 border border-white/10">
              <Share2 className="h-6 w-6 text-[#26C9AA] mb-3" />
              <h3 className="font-bold text-lg text-white mb-1">Spread the Word</h3>
              <p className="text-white/60 text-sm">Follow us on social media and share our mission.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-6 border border-white/10">
              <div className="text-3xl font-black text-[#26C9AA] mb-2">501(c)(3)</div>
              <p className="text-white/60 text-sm">All donations are tax-deductible. EIN available upon request.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Wavy bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 0V40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V0H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
