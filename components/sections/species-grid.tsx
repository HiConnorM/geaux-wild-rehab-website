'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { species } from '@/lib/content'
import { Button } from '@/components/ui/button'

export function SpeciesGrid() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Native Species
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Louisiana Wildlife We Help
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We specialize in rehabilitating Louisiana&apos;s native mammals, birds, and reptiles. 
            Each species has unique needs, and our team is trained to provide specialized care.
          </p>
        </div>

        {/* Species Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {species.map((animal, index) => (
            <div
              key={animal.id}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-base mb-0.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {animal.name}
                </h3>
                <p className="text-white/70 text-xs italic opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {animal.scientificName}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 gradient-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full gap-2 px-8">
            <Link href="/faq">
              Learn More About Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
