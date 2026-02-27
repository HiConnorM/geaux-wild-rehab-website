import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { species } from '@/lib/content'
import { Button } from '@/components/ui/button'

export function SpeciesGrid() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Who We Help
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Louisiana Native Wildlife
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              We specialize in rehabilitating Louisiana&apos;s native mammals, birds, and reptiles. 
              Each species has unique needs, and our team is trained to provide specialized care.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 gap-2">
            <Link href="/faq">
              Learn More About Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {species.map((animal) => (
            <div
              key={animal.id}
              className="group relative aspect-square rounded-xl overflow-hidden bg-muted"
            >
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-sm">{animal.name}</h3>
                <p className="text-white/70 text-xs italic">{animal.scientificName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
