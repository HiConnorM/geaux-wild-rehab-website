import Link from 'next/link'
import Image from 'next/image'
import { Phone, Heart, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-wildlife.jpg"
          alt="Wildlife rehabilitation"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <p className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider mb-4">
            Louisiana Native Wildlife Rehabilitation
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            <span className="block">Rescue. Rehabilitate.</span>
            <span className="gradient-brand-text">Release.</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
            Every year, we help hundreds of injured and orphaned Louisiana wildlife get a second chance at life. 
            From baby squirrels to injured opossums, we provide critical care until they can return to the wild.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="gradient-brand text-white border-0 hover:opacity-90 gap-2 text-base h-12 px-8"
            >
              <Link href="/get-help">
                <Phone className="h-5 w-5" />
                Found Wildlife?
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 gap-2 text-base h-12 px-8"
            >
              <Link href="/support">
                <Heart className="h-5 w-5" />
                Support Our Mission
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <p className="text-3xl font-bold text-white">847+</p>
              <p className="text-sm text-white/60">Animals Rescued</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">32</p>
              <p className="text-sm text-white/60">Species Helped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">8</p>
              <p className="text-sm text-white/60">Years Serving</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
