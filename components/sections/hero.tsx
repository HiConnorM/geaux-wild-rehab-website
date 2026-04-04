'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Heart, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const foxTranslate = scrollY * 0.1

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden">
      {/* Content wrapper with animal in center */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32">
        {/* Top badge - centered */}
        <div className={`text-center mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-foreground/80 text-sm font-medium">Louisiana Licensed Wildlife Rehabilitation</span>
          </div>
        </div>

        {/* Main layout - Animal centered with content around it */}
        <div className="relative min-h-[70vh] flex flex-col items-center justify-center">
          {/* Large centered animal */}
          <div 
            className={`relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl aspect-square transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transform: `translateY(${-foxTranslate}px)` }}
          >
            <Image
              src="/images/animals/fox.png"
              alt="Red Fox"
              fill
              className="object-contain mix-blend-multiply"
              priority
            />
          </div>

          {/* Title - Top Left floating */}
          <div 
            className={`absolute top-0 left-0 lg:left-8 xl:left-0 max-w-md lg:max-w-lg transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground leading-[1.1] text-balance">
              Giving Wildlife a{' '}
              <span className="text-primary">Second Chance</span>
            </h1>
          </div>

          {/* Description - Top Right floating */}
          <div 
            className={`absolute top-8 right-0 lg:right-8 xl:right-0 max-w-xs lg:max-w-sm text-right hidden md:block transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              We rescue, rehabilitate, and release injured and orphaned native Louisiana mammals.
            </p>
          </div>

          {/* CTA Buttons - Bottom Left */}
          <div 
            className={`absolute bottom-16 lg:bottom-8 left-0 lg:left-8 xl:left-0 flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 h-12 px-6 rounded-full font-semibold shadow-lg shadow-primary/20"
            >
              <Link href="/get-help">
                <Phone className="h-4 w-4" />
                Found Wildlife?
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-border hover:bg-secondary gap-2 h-12 px-6 rounded-full font-medium"
            >
              <Link href="/support">
                <Heart className="h-4 w-4" />
                Support Us
              </Link>
            </Button>
          </div>

          {/* Stats - Bottom Right */}
          <div 
            className={`absolute bottom-16 lg:bottom-8 right-0 lg:right-8 xl:right-0 hidden sm:flex gap-8 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {[
              { value: '1,247+', label: 'Rescued' },
              { value: '78%', label: 'Released' },
              { value: '9 yrs', label: 'Serving' },
            ].map((stat) => (
              <div key={stat.label} className="text-right">
                <p className="text-2xl lg:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile description */}
        <p className={`md:hidden text-center text-muted-foreground mb-8 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          We rescue, rehabilitate, and release injured and orphaned native Louisiana mammals.
        </p>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce z-20"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}
