'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Extra Large Title - Top Left */}
      <div 
        className={`absolute top-28 sm:top-32 left-6 sm:left-10 md:left-16 lg:left-24 z-20 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
      >
        <h1 className="text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-serif font-bold text-primary leading-[0.85] tracking-tight">
          Geaux
        </h1>
        <h1 className="text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-serif font-bold text-foreground leading-[0.85] tracking-tight">
          Wild
        </h1>
      </div>

      {/* Small Description - Top Right, offset */}
      <div 
        className={`absolute top-36 sm:top-44 md:top-48 right-6 sm:right-10 md:right-16 lg:right-24 max-w-[180px] sm:max-w-[220px] md:max-w-xs z-20 transition-all duration-1000 delay-200 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
      >
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-right">
          Louisiana&apos;s trusted wildlife rehabilitation center. We rescue, rehabilitate, and release native wildlife.
        </p>
      </div>

      {/* CTA Button - Upper Right Area */}
      <div 
        className={`absolute top-[45%] sm:top-[40%] md:top-72 right-6 sm:right-10 md:right-20 lg:right-32 z-20 transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <Button 
          asChild 
          size="lg" 
          className="rounded-full px-6 sm:px-8 h-12 sm:h-14 bg-primary text-white hover:bg-primary/90 font-semibold shadow-xl shadow-primary/20"
        >
          <Link href="/get-help">
            Found Wildlife?
            <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
          </Link>
        </Button>
      </div>

      {/* Phone Badge - Left Side, Middle */}
      <div 
        className={`absolute top-[55%] sm:top-[50%] left-6 sm:left-10 md:left-16 z-20 transition-all duration-1000 delay-400 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}
      >
        <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-accent text-accent-foreground">
          <Phone className="h-4 sm:h-5 w-4 sm:w-5" />
          <span className="text-xs sm:text-sm font-semibold">24/7 Hotline</span>
        </div>
      </div>

      {/* Secondary CTA - Bottom Left */}
      <div 
        className={`absolute bottom-28 sm:bottom-32 left-6 sm:left-10 md:left-16 lg:left-24 z-20 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Button 
          asChild 
          variant="outline" 
          size="lg" 
          className="rounded-full px-6 sm:px-8 h-10 sm:h-12 border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-white font-medium"
        >
          <Link href="/support">
            Support Our Mission
          </Link>
        </Button>
      </div>

      {/* License Badge - Bottom Right */}
      <div 
        className={`absolute bottom-28 sm:bottom-32 right-6 sm:right-10 md:right-16 z-20 transition-all duration-1000 delay-600 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-right">
          <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest mb-1">Licensed by</p>
          <p className="text-xs sm:text-sm font-medium text-foreground">Louisiana Dept. of Wildlife</p>
        </div>
      </div>

      {/* Large Fox at Bottom - Takes up most of the section */}
      <div 
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-4xl z-10 transition-all duration-1000 delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/images/animals/fox.svg"
            alt="Red Fox"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  )
}
