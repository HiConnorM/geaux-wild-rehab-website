'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Gift, Share2, Youtube, Facebook, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HowToHelpSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(true)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1, rootMargin: '50px' })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    /* -mt-px closes any sub-pixel gap with the about-section wave */
    <section ref={ref} className="relative z-0 bg-[#3B468E] overflow-hidden -mt-[3px]">
      {/* Decorative diamonds */}
      <div className="absolute top-32 left-[8%] w-6 h-6 bg-white/10 rotate-45 rounded hidden md:block" />
      <div className="absolute top-48 right-[12%] w-4 h-4 bg-[#26C9AA]/30 rotate-45 rounded-sm hidden md:block" />
      <div className="absolute bottom-60 left-[15%] w-5 h-5 border-2 border-white/10 rotate-45 rounded hidden md:block" />

      {/* Armadillo — anchored to right browser edge, desktop only */}
      <div className="pointer-events-none absolute right-0 bottom-0 z-40 hidden lg:block w-[560px] xl:w-[680px] 2xl:w-[800px]">
        <Image
          src="https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Armadillo/transparent-armadillo.png"
          alt=""
          aria-hidden="true"
          width={540}
          height={540}
          className="h-auto w-full object-contain object-right-bottom drop-shadow-2xl translate-x-6"
          sizes="(min-width: 1536px) 800px, (min-width: 1280px) 680px, 560px"
        />
      </div>

      {/* Armadillo — mobile: absolute, pinned to right edge, z-0 so cards stay readable */}
      <div className="pointer-events-none absolute right-0 bottom-0 z-0 block lg:hidden w-[220px] sm:w-[300px]">
        <Image
          src="https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Armadillo/transparent-armadillo.png"
          alt=""
          aria-hidden="true"
          width={300}
          height={300}
          className="h-auto w-full object-contain object-right-bottom drop-shadow-xl translate-x-4"
          sizes="(max-width: 640px) 220px, 300px"
        />
      </div>

      {/* Content — top padding accounts for the incoming navy wave height */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-14 md:pt-20 pb-0">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-10 md:mb-14 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-3">Make a Difference</span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-4">
            How You Can Help
          </h2>
          <p className="text-base md:text-lg text-white/70 px-4">
            Your support directly saves lives. Choose how you&apos;d like to make an impact.
          </p>
        </div>

        {/* Bento grid — 7 cols wide so it doesn't collide with absolute armadillo */}
        <div className="grid lg:grid-cols-12 gap-4 md:gap-5 pb-24 md:pb-32">

          {/* Donate card - large */}
          <div className={`lg:col-span-7 bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-xl transition-all duration-700 delay-100 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#26C9AA] flex items-center justify-center shrink-0">
                <Heart className="h-7 w-7 md:h-8 md:w-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl md:text-2xl text-[#1a1f3d] mb-1">Make a Donation</h3>
                <p className="text-gray-600 text-sm md:text-base">Every dollar goes directly to animal care. 100% of donations support the animals.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
              {['$25', '$50', '$100', '$250'].map(amt => (
                <button key={amt} className="px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-[#F8F4F4] hover:bg-[#26C9AA] hover:text-white text-[#1a1f3d] font-bold transition-all text-sm md:text-base">
                  {amt}
                </button>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full h-12 md:h-14 px-6 md:px-8 bg-[#3B468E] hover:bg-[#2d366d] text-white font-bold w-full sm:w-auto">
              <Link href="/support">
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Wishlist card */}
          <div className={`lg:col-span-5 bg-[#26C9AA] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-xl transition-all duration-700 delay-200 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4 md:mb-5">
              <Gift className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </div>
            <h3 className="font-bold text-xl md:text-2xl text-white mb-2">Shop Our Wishlist</h3>
            <p className="text-white/80 mb-6 text-sm md:text-base">Purchase supplies we need most — formula, heating pads, cages &amp; more.</p>
            <Button asChild variant="outline" size="lg" className="rounded-full h-11 md:h-12 px-5 md:px-6 border-2 border-white bg-white text-[#26C9AA] hover:bg-white/90 font-bold w-full sm:w-auto">
              <a href="https://www.amazon.com/hz/wishlist/ls/1HO01EY1HD0TS?ref_=wl_share" target="_blank" rel="noopener noreferrer" aria-label="View our Amazon Wishlist (opens in new tab)">
                View Wishlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Share + Tax info */}
          <div className={`lg:col-span-7 grid sm:grid-cols-2 gap-3 md:gap-4 transition-all duration-700 delay-300 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 border border-white/10">
              <Share2 className="h-5 w-5 md:h-6 md:w-6 text-[#26C9AA] mb-3" />
              <h3 className="font-bold text-base md:text-lg text-white mb-2">Spread the Word</h3>
              <p className="text-white/60 text-xs md:text-sm mb-4">Follow us and share our mission across social media.</p>
              <div className="flex flex-wrap gap-2">
                <a href="https://www.youtube.com/@geauxwildrehab" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-xs font-medium">
                  <Youtube className="h-3.5 w-3.5" /> YouTube
                </a>
                <a href="https://www.facebook.com/geauxwildrehab" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-xs font-medium">
                  <Facebook className="h-3.5 w-3.5" /> Facebook
                </a>
                <a href="https://www.instagram.com/geauxwildrehab" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-xs font-medium">
                  <Instagram className="h-3.5 w-3.5" /> Instagram
                </a>
                <a href="https://www.tiktok.com/@geauxwildrehab" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-xs font-medium">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.77a4.85 4.85 0 01-1-.08z"/></svg>
                  TikTok
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 border border-white/10">
              <div className="text-2xl md:text-3xl font-black text-[#26C9AA] mb-2">501(c)(3)</div>
              <p className="text-white/60 text-xs md:text-sm">All donations are tax-deductible. EIN available upon request.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Wave at bottom — white; z-10 sits BEHIND armadillo (z-40) */}
      <div className="absolute left-0 right-0 z-10 pointer-events-none" style={{ lineHeight: 0, bottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 'clamp(48px, 6vw, 80px)', display: 'block' }} preserveAspectRatio="none">
          <path d="M0 80V40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
