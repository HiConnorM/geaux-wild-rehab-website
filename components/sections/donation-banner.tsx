'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Heart, Gift, ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DonationBanner() {
  const bannerRef = useRef<HTMLElement>(null)
  const [vis, setVis] = useState(true)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1, rootMargin: '50px' })
    if (bannerRef.current) obs.observe(bannerRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    /* -mt-px closes the sub-pixel gap after the ImpactStats wave */
    <section ref={bannerRef} className="relative pt-16 pb-16 md:pt-20 md:pb-20 lg:pb-28 bg-[#F8F4F4] overflow-hidden -mt-[3px]">

      {/* Decorative diamonds */}
      <div className="absolute top-8 left-[10%] w-5 h-5 bg-[#26C9AA]/10 rotate-45 rounded hidden md:block" />
      <div className="absolute top-20 right-[8%] w-4 h-4 bg-[#3B468E]/10 rotate-45 rounded-sm hidden md:block" />
      <div className="absolute bottom-24 left-[6%] w-6 h-6 border-2 border-[#26C9AA]/10 rotate-45 rounded hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-10 md:mb-14 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-3">Support Our Mission</span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#1a1f3d] leading-[1.1] mb-4">
            Help Us Save More Wildlife
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            Your support provides food, medicine, and shelter for injured and orphaned animals.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {/* Donate Card */}
          <div
            className={`group bg-white rounded-xl md:rounded-[2rem] p-6 md:p-8 shadow-lg shadow-black/5 border border-gray-100 hover:shadow-xl hover:border-[#26C9AA]/30 transition-all duration-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#26C9AA] flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform">
              <Heart className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-black text-[#1a1f3d] mb-2 md:mb-3">Make a Donation</h3>
            <p className="text-gray-600 mb-5 md:mb-6 text-sm md:text-base">
              100% of your tax-deductible donation goes directly to animal care. We are an all-volunteer organization.
            </p>
            <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
              {['$25', '$50', '$100', '$250'].map(amt => (
                <button key={amt} className="px-3 md:px-4 py-2 rounded-full bg-[#F8F4F4] hover:bg-[#26C9AA] hover:text-white text-xs md:text-sm font-bold text-[#1a1f3d] transition-all">
                  {amt}
                </button>
              ))}
            </div>
            <Button asChild size="lg" className="w-full rounded-full h-12 md:h-14 bg-[#26C9AA] hover:bg-[#1eb89a] text-white font-bold">
              <Link href="/support#donate">
                Donate Now
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Wishlist Card */}
          <div
            className={`group bg-[#3B468E] rounded-xl md:rounded-[2rem] p-6 md:p-8 shadow-lg transition-all duration-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="flex items-center justify-between mb-5 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Gift className="h-6 w-6 md:h-7 md:w-7 text-white" />
              </div>
              <span className="px-2.5 md:px-3 py-1 rounded-full bg-[#26C9AA] text-white text-[10px] md:text-xs font-bold">
                Most Needed
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3">Shop Our Wishlist</h3>
            <p className="text-white/80 mb-5 md:mb-6 text-sm md:text-base">
              Purchase supplies we need and have them shipped directly to our facility.
            </p>
            <ul className="space-y-2 mb-5 md:mb-6">
              {['Heating pads & lamps', 'Kitten milk replacer', 'Cages & carriers'].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs md:text-sm text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#26C9AA]" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="w-full rounded-full h-12 md:h-14 bg-white text-[#3B468E] hover:bg-white/90 font-bold">
              <a href="https://amazon.com/hz/wishlist/ls/1U43EOQ2AS8LA?ref_=wl_share" target="_blank" rel="noopener noreferrer" aria-label="View our Amazon Wishlist (opens in new tab)">
                Shop Our Wishlist
                <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Tax info */}
        <div className={`text-center mt-8 md:mt-10 transition-all duration-700 delay-400 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs md:text-sm text-gray-500 px-4">
            Geaux Wild Rehab is a registered 501(c)(3) nonprofit. All donations are tax-deductible.
          </p>
        </div>
      </div>
    </section>
  )
}
