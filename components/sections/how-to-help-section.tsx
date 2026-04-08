'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Gift, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ways = [
  { 
    icon: Heart, 
    title: 'Make a Donation',
    desc: 'Every dollar goes directly to animal care. We are 100% volunteer-run.',
    amounts: ['$25', '$50', '$100'],
    cta: 'Donate Now',
    href: '/support',
    accent: true
  },
  { 
    icon: Gift, 
    title: 'Shop Our Wishlist',
    desc: 'Purchase supplies we need most — formula, heating pads, cages & more.',
    amounts: null,
    cta: 'View Wishlist',
    href: '/support#wishlist',
    accent: false
  },
  { 
    icon: Share2, 
    title: 'Spread the Word',
    desc: 'Follow us on social media and share our mission with friends and family.',
    amounts: null,
    cta: 'Follow Us',
    href: '/about#social',
    accent: false
  },
]

export function HowToHelpSection() {
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
    <section ref={ref} className="relative min-h-screen bg-[#F8F4F4] overflow-hidden py-24 lg:py-32">
      {/* Decorative blob */}
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#3B468E]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`inline-block text-sm font-semibold text-[#26C9AA] uppercase tracking-wider mb-4 ${anim(100)}`} style={{ transitionDelay: '100ms' }}>
            Make a Difference
          </span>
          <h2 className={`font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1a1f3d] leading-tight mb-6 ${anim(150)}`} style={{ transitionDelay: '150ms' }}>
            How You Can Help
          </h2>
          <p className={`text-lg text-gray-600 ${anim(200)}`} style={{ transitionDelay: '200ms' }}>
            Your support saves lives. Choose how you&apos;d like to make a difference today.
          </p>
        </div>

        {/* Cards grid with animal */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Cards */}
          <div className="flex flex-col gap-5">
            {ways.map((way, i) => (
              <div 
                key={way.title}
                className={`bg-white rounded-3xl p-6 shadow-lg shadow-black/5 border border-gray-100 hover:shadow-xl hover:border-[#26C9AA]/30 transition-all ${anim(250 + i * 100)}`}
                style={{ transitionDelay: `${250 + i * 100}ms` }}
              >
                <div className="flex gap-5">
                  <div className={`w-14 h-14 rounded-2xl ${way.accent ? 'bg-[#26C9AA]' : 'bg-[#3B468E]/10'} flex items-center justify-center shrink-0`}>
                    <way.icon className={`h-6 w-6 ${way.accent ? 'text-white' : 'text-[#3B468E]'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#1a1f3d] mb-1">{way.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{way.desc}</p>
                    
                    {way.amounts && (
                      <div className="flex gap-2 mb-4">
                        {way.amounts.map(amt => (
                          <span key={amt} className="px-3 py-1 rounded-full bg-[#F8F4F4] text-sm font-medium text-[#3B468E]">
                            {amt}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <Link 
                      href={way.href}
                      className={`inline-flex items-center gap-2 text-sm font-semibold ${way.accent ? 'text-[#26C9AA]' : 'text-[#3B468E]'} hover:gap-3 transition-all`}
                    >
                      {way.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Opossum */}
          <div className={`relative ${anim(300)}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square relative">
                <Image 
                  src="/images/animals/opossum.svg" 
                  alt="Opossum" 
                  fill 
                  className="object-contain drop-shadow-xl" 
                  sizes="(max-width:768px) 100vw, 50vw" 
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className={`absolute bottom-10 right-0 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100 ${anim(500)}`} style={{ transitionDelay: '500ms' }}>
              <p className="text-sm text-gray-500">Tax-deductible</p>
              <p className="text-lg font-bold text-[#26C9AA]">501(c)(3) Nonprofit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
