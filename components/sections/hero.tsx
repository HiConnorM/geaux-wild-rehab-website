'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Heart, ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-wildlife.jpg"
          alt="Wildlife rehabilitation"
          fill
          className="object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]"
          priority
          quality={95}
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Louisiana Licensed Wildlife Rehabilitation</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 text-balance">
            Giving Wildlife a Second Chance
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl font-light">
            We rescue, rehabilitate, and release injured and orphaned native Louisiana wildlife. 
            Every animal deserves a chance to return to the wild.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 gap-3 text-base h-14 px-8 rounded-full font-semibold shadow-lg shadow-black/20"
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
              className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 gap-2 text-base h-14 px-8 rounded-full font-medium backdrop-blur-sm"
            >
              <Link href="/support">
                <Heart className="h-5 w-5" />
                Support Our Mission
              </Link>
            </Button>
          </div>

          {/* Quick Stats - Glassmorphism style */}
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {[
              { value: '847+', label: 'Animals Rescued' },
              { value: '32', label: 'Species Helped' },
              { value: '8', label: 'Years Serving' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <p className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>

      <style jsx>{`
        @keyframes kenburns {
          0% { transform: scale(1.05) translate(0, 0); }
          100% { transform: scale(1.15) translate(-2%, -1%); }
        }
      `}</style>
    </section>
  )
}
