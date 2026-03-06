import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import { species } from '@/lib/content'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Wildlife We Help',
  description: 'Learn about the native Louisiana mammals we rescue and rehabilitate, including raccoons, opossums, foxes, coyotes, bobcats, squirrels, rabbits, and beavers.',
}

export default function WildlifePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 animate-fade-in">
              Native Louisiana Mammals
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
              Wildlife We Rescue & Rehabilitate
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up animation-delay-100">
              We specialize in native Louisiana mammals - from tiny orphaned squirrels to 
              majestic bobcats. Learn about the species we help and what to do if you find 
              one in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
              <Button asChild size="lg" className="gap-2 rounded-full px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                <Link href="/get-help">
                  Found Wildlife? Get Help
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Note about birds */}
      <section className="py-6 bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-amber-800">
            <strong>Please note:</strong> Geaux Wild Rehab specializes in mammals only. 
            For injured or orphaned birds, please contact a licensed avian rehabilitator in your area.
          </p>
        </div>
      </section>

      {/* Species Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {species.map((animal, index) => (
              <Link
                key={animal.id}
                href={`/wildlife/${animal.id}`}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-border/50 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Scientific name badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-foreground text-xs font-medium backdrop-blur-sm">
                      {animal.category}
                    </span>
                  </div>
                  
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="text-2xl font-bold text-white mb-1">{animal.name}</h2>
                    <p className="text-white/80 text-sm italic">{animal.scientificName}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {animal.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold text-sm group-hover:underline">
                      Learn more
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 gradient-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-secondary/50 via-background to-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Found Wildlife?
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
            Every Second Counts
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you&apos;ve found an injured or orphaned animal, time is critical. 
            Contact us immediately for guidance on how to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 rounded-full px-10 h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              <Link href="/get-help">
                Get Help Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-10 h-14">
              <Link href="/faq">
                View FAQ
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
