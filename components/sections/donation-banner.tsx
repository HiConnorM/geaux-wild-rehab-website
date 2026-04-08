'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Heart, Gift, ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DonationBanner() {
  const bannerRef = useRef<HTMLElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.15 })
    if (bannerRef.current) obs.observe(bannerRef.current)
    return () => obs.disconnect()
  }, [])

  const anim = (delay: number) =>
    `transition-all duration-700 ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`

  return (
    <section ref={bannerRef} className="py-24 lg:py-32 bg-[#F8F4F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`inline-block text-sm font-semibold text-[#26C9AA] uppercase tracking-wider mb-4 ${anim(100)}`} style={{ transitionDelay: '100ms' }}>
            Support Our Mission
          </span>
          <h2 className={`font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1a1f3d] leading-tight mb-6 ${anim(150)}`} style={{ transitionDelay: '150ms' }}>
            Help Us Save More Wildlife
          </h2>
          <p className={`text-lg text-gray-600 ${anim(200)}`} style={{ transitionDelay: '200ms' }}>
            Your support provides food, medicine, and shelter for injured and orphaned animals. 
            Choose how you would like to help today.
          </p>
        </div>

        {/* Two-column CTA */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Donate Card */}
          <div 
            className={`group bg-white rounded-3xl p-8 shadow-lg shadow-black/5 border border-gray-100 hover:shadow-xl hover:border-[#26C9AA]/30 transition-all ${anim(250)}`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#26C9AA] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a1f3d] mb-3">Make a Donation</h3>
            <p className="text-gray-600 mb-6">
              100% of your tax-deductible donation goes directly to animal care. We are an all-volunteer organization.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['$25', '$50', '$100', '$250'].map(amt => (
                <span key={amt} className="px-4 py-2 rounded-full bg-[#F8F4F4] text-sm font-semibold text-[#3B468E]">
                  {amt}
                </span>
              ))}
            </div>
            <Button asChild size="lg" className="w-full rounded-full h-14 bg-[#26C9AA] hover:bg-[#1eb89a] text-white font-semibold">
              <Link href="/support#donate">
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Amazon Wishlist Card */}
          <div 
            className={`group bg-white rounded-3xl p-8 shadow-lg shadow-black/5 border border-gray-100 hover:shadow-xl hover:border-[#3B468E]/30 transition-all relative ${anim(350)}`}
            style={{ transitionDelay: '350ms' }}
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#3B468E]/10 text-[#3B468E] text-xs font-semibold">
              Most Needed
            </div>
            
            <div className="w-14 h-14 rounded-2xl bg-[#3B468E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Gift className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a1f3d] mb-3">Shop Our Wishlist</h3>
            <p className="text-gray-600 mb-6">
              Purchase supplies we need and have them shipped directly to our facility. Every item helps!
            </p>
            <ul className="space-y-2 mb-6">
              {['Heating pads & lamps', 'Kitten milk replacer', 'Cages & carriers'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#26C9AA]" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="w-full rounded-full h-14 bg-[#3B468E] hover:bg-[#2d366d] text-white font-semibold">
              <a href="https://www.amazon.com/hz/wishlist/ls/example" target="_blank" rel="noopener noreferrer">
                View Wishlist
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Tax info */}
        <div className={`text-center mt-12 ${anim(450)}`} style={{ transitionDelay: '450ms' }}>
          <p className="text-sm text-gray-500">
            Geaux Wild Rehab is a registered 501(c)(3) nonprofit. All donations are tax-deductible.
          </p>
        </div>
      </div>
    </section>
  )
}
