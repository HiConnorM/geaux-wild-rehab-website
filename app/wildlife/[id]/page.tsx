import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, MapPin, Utensils, Brain, Clock, Heart, Lightbulb, ShieldCheck, AlertTriangle } from 'lucide-react'
import { species } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const animal = species.find((s) => s.id === id)
  
  if (!animal) {
    return { title: 'Species Not Found' }
  }

  return {
    title: `${animal.name} | Wildlife Information`,
    description: `Learn about ${animal.name} (${animal.scientificName}): habitat, behavior, diet, and what to do if you find one in need. ${animal.description}`,
  }
}

export async function generateStaticParams() {
  return species.map((animal) => ({
    id: animal.id,
  }))
}

export default async function SpeciesDetailPage({ params }: Props) {
  const { id } = await params
  const animal = species.find((s) => s.id === id)
  
  if (!animal) {
    notFound()
  }

  // Get adjacent species for navigation
  const currentIndex = species.findIndex((s) => s.id === id)
  const prevSpecies = currentIndex > 0 ? species[currentIndex - 1] : null
  const nextSpecies = currentIndex < species.length - 1 ? species[currentIndex + 1] : null

  return (
    <>
      {/* Hero Section - Clean white with large animal */}
      <section className="relative pt-24 pb-0 overflow-hidden bg-background">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link 
            href="/wildlife" 
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            All Wildlife
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center pb-16">
            {/* Large Animal Image - Centered */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
                {/* Soft glow behind animal */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl scale-110" />
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-primary/10 text-primary border-0 px-4 py-1">
                {animal.category}
              </Badge>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
                {animal.name}
              </h1>
              <p className="text-xl text-primary italic mb-6">{animal.scientificName}</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {animal.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Lifespan: {animal.lifespan}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{animal.conservationStatus.split(' - ')[0]}</span>
                </div>
              </div>

              <Button asChild size="lg" className="gap-2 rounded-full px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                <Link href="/get-help">
                  Found a {animal.name}? Get Help
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Habitat */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Habitat</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-15">
                  {animal.habitat}
                </p>
              </div>

              {/* Diet */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Utensils className="h-6 w-6 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Diet</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-15">
                  {animal.diet}
                </p>
              </div>

              {/* Behavior */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Behavior</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-15">
                  {animal.behavior}
                </p>
              </div>

              {/* Found in Wild Tips */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">What To Do If You Find One</h2>
                </div>
                <ul className="space-y-4">
                  {animal.foundWildTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild className="gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/get-help">
                      Get Help Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Fun Facts */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Fun Facts</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {animal.funFacts.map((fact, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-2xl p-5 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <p className="text-foreground">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="bg-white rounded-3xl p-6 border border-border/50 shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-foreground mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium text-foreground capitalize">{animal.category}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Lifespan</span>
                    <span className="font-medium text-foreground">{animal.lifespan}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-medium text-foreground">{animal.conservationStatus.split(' - ')[0]}</span>
                  </div>
                </div>

                {/* Common Injuries */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Common Reasons We See Them</h4>
                  <div className="flex flex-wrap gap-2">
                    {animal.commonInjuries.map((injury) => (
                      <Badge key={injury} variant="secondary" className="text-xs">
                        {injury}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-border">
                  <Button asChild className="w-full gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/support">
                      <Heart className="h-4 w-4" />
                      Support Our Work
                    </Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {prevSpecies ? (
              <Link 
                href={`/wildlife/${prevSpecies.id}`}
                className="group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm text-muted-foreground">Previous</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{prevSpecies.name}</p>
                </div>
              </Link>
            ) : <div />}

            <Link 
              href="/wildlife"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View All Species
            </Link>

            {nextSpecies ? (
              <Link 
                href={`/wildlife/${nextSpecies.id}`}
                className="group flex items-center gap-4"
              >
                <div className="hidden sm:block text-right">
                  <p className="text-sm text-muted-foreground">Next</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{nextSpecies.name}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  )
}
