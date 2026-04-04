'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Heart, ArrowRight, ChevronDown, Gift } from 'lucide-react'
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

  // Parallax effect for the fox
  const foxTranslate = scrollY * 0.15

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-10rem)]">
          {/* Text Content - Left Side */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-foreground/80 text-sm font-medium">Louisiana Licensed Wildlife Rehabilitation</span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6 text-balance transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Giving Wildlife a{' '}
              <span className="text-primary">Second Chance</span>
            </h1>
            
            <p className={`text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              We rescue, rehabilitate, and release injured and orphaned native Louisiana mammals. 
              Every animal deserves a chance to return to the wild.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-3 text-base h-14 px-8 rounded-full font-semibold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              >
                <Link href="/get-help">
                  <Phone className="h-5 w-5" />
                  Found Wildlife? Get Help
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-border hover:bg-secondary gap-2 text-base h-14 px-8 rounded-full font-medium hover:scale-105 transition-transform"
              >
                <Link href="/support">
                  <Heart className="h-5 w-5" />
                  Support Our Mission
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className={`grid grid-cols-3 gap-6 max-w-md transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {[
                { value: '1,247+', label: 'Animals Rescued' },
                { value: '78%', label: 'Release Rate' },
                { value: '9', label: 'Years Serving' },
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="group"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <p className="text-3xl lg:text-4xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform origin-left">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fox Image - Right Side */}
          <div className={`order-1 lg:order-2 relative flex items-center justify-center transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div 
              className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square"
              style={{ transform: `translateY(${-foxTranslate}px)` }}
            >
              {/* Soft shadow/glow behind animal */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl scale-90" />
              
              <Image
                src="/images/animals/fox.png"
                alt="Red Fox - One of the animals we help"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                quality={95}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Amazon Wishlist Quick Link */}
      <div className={`absolute top-32 right-8 hidden xl:block transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <a 
          href="https://www.amazon.com/hz/wishlist/ls/example" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-white rounded-full px-5 py-3 border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <Gift className="h-5 w-5 text-accent" />
          <span className="text-foreground text-sm font-medium">Shop Our Wishlist</span>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}
