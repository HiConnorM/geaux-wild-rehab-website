'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Heart, Gift, ExternalLink, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DonationBanner() {
  const bannerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={bannerRef}
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-brand" />
      
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-float animation-delay-300" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-float animation-delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-white/90 text-sm font-medium">Every Gift Makes a Difference</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-6 text-balance">
            Help Us Save More Wildlife
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your support provides food, medicine, and shelter for injured and orphaned animals. 
            Choose how you would like to help today.
          </p>
        </div>

        {/* Two-column CTA */}
        <div className={`grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Donate Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-rose-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Make a Donation</h3>
            <p className="text-muted-foreground mb-6">
              100% of your tax-deductible donation goes directly to animal care. 
              We are an all-volunteer organization.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">$25 feeds a baby squirrel for 2 weeks</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">$50 covers veterinary supplies</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">$100 sponsors a full rehabilitation</span>
              </div>
            </div>
            <Button asChild size="lg" className="w-full gap-2 rounded-full h-14 bg-rose-500 text-white hover:bg-rose-600 font-semibold">
              <Link href="/support#donate">
                Donate Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Amazon Wishlist Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            {/* Featured badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
              Most Needed
            </div>
            
            <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Shop Our Amazon Wishlist</h3>
            <p className="text-muted-foreground mb-6">
              Purchase supplies we need and have them shipped directly to our facility. 
              Every item helps!
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-foreground">Heating pads & heat lamps</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-foreground">Kitten milk replacer (KMR)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-foreground">Cages, carriers & cleaning supplies</span>
              </div>
            </div>
            <Button asChild size="lg" className="w-full gap-2 rounded-full h-14 bg-amber-500 text-white hover:bg-amber-600 font-semibold">
              <a href="https://www.amazon.com/hz/wishlist/ls/example" target="_blank" rel="noopener noreferrer">
                View Wishlist
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Additional CTA */}
        <div className={`text-center mt-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white/70 mb-4">Want to help in other ways?</p>
          <Link 
            href="/support#volunteer" 
            className="inline-flex items-center gap-2 text-white font-medium hover:underline underline-offset-4"
          >
            Become a Volunteer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
