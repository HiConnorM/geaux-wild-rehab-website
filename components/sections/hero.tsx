'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Heart, ArrowRight, ChevronDown, Gift } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-wildlife.jpg"
          alt="Wildlife rehabilitation"
          fill
          className="object-cover animate-kenburns"
          priority
          quality={95}
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Louisiana Licensed Wildlife Rehabilitation</span>
          </div>

          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 text-balance transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Giving Wildlife a Second Chance
          </h1>
          
          <p className={`text-xl lg:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl font-light transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            We rescue, rehabilitate, and release injured and orphaned native Louisiana mammals. 
            Every animal deserves a chance to return to the wild.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button
              asChild
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 gap-3 text-base h-14 px-8 rounded-full font-semibold shadow-lg shadow-black/20 hover:scale-105 transition-transform"
            >
              <Link href="/get-help">
                <Phone className="h-5 w-5" />
                Found Wildlife? Get Help
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 gap-2 text-base h-14 px-8 rounded-full font-medium backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <Link href="/support">
                <Heart className="h-5 w-5" />
                Support Our Mission
              </Link>
            </Button>
          </div>

          {/* Quick Stats - Glassmorphism style */}
          <div className={`grid grid-cols-3 gap-4 max-w-lg transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {[
              { value: '1,247+', label: 'Animals Rescued' },
              { value: '24', label: 'Species Helped' },
              { value: '9', label: 'Years Serving' },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/15 transition-colors group"
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <p className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform origin-left">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Amazon Wishlist Quick Link */}
      <div className={`absolute top-32 right-8 hidden xl:block transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <a 
          href="https://www.amazon.com/hz/wishlist/ls/example" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20 hover:bg-white/20 transition-all"
        >
          <Gift className="h-5 w-5 text-amber-400" />
          <span className="text-white text-sm font-medium">Shop Our Wishlist</span>
          <ArrowRight className="h-4 w-4 text-white/60 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}
