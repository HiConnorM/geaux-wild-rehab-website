import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Award, Users, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Geaux Wild Rehab, our mission to rescue, rehabilitate, and release injured and orphaned Louisiana native wildlife.',
}

const values = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Every animal receives individualized attention and species-appropriate care from trained rehabilitators.',
  },
  {
    icon: Award,
    title: 'Professional Standards',
    description: 'We maintain the highest standards of wildlife rehabilitation, following state and federal guidelines.',
  },
  {
    icon: Users,
    title: 'Community Education',
    description: 'We believe in empowering our community with knowledge about coexisting with local wildlife.',
  },
  {
    icon: MapPin,
    title: 'Louisiana Focused',
    description: 'We specialize in the native wildlife species of Louisiana, understanding their unique needs and habitats.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pb-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                About Us
              </p>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Dedicated to Louisiana&apos;s Wildlife
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Geaux Wild Rehab is a licensed wildlife rehabilitation facility dedicated to the 
                rescue, rehabilitation, and release of injured and orphaned native Louisiana wildlife.
              </p>
              <p className="text-muted-foreground mb-8">
                Founded by passionate wildlife advocates, we&apos;ve grown from a small operation 
                into a vital resource for our community. Our mission is simple: give every animal 
                the best possible chance to return to the wild where they belong.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="gap-2 gradient-brand text-white border-0 hover:opacity-90">
                  <Link href="/support">
                    Support Our Mission
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <Link href="/get-help">
                    Found Wildlife?
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="Wildlife rehabilitator caring for animals"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To provide compassionate, professional care for injured and orphaned Louisiana 
              native wildlife, with the ultimate goal of returning each animal to its natural 
              habitat. Through rehabilitation, education, and community outreach, we strive to 
              foster a deeper appreciation for our local wildlife and promote peaceful coexistence.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
                What We Do
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Wildlife Rescue</h3>
                  <p className="text-muted-foreground">
                    We respond to calls about injured, orphaned, or distressed wildlife throughout 
                    our service area, providing guidance and coordinating intake.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Medical Care</h3>
                  <p className="text-muted-foreground">
                    Each animal receives a thorough examination and appropriate medical treatment, 
                    from wound care to medication administration.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Rehabilitation</h3>
                  <p className="text-muted-foreground">
                    We provide species-specific care, nutrition, and opportunities to develop 
                    natural behaviors necessary for survival in the wild.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Release</h3>
                  <p className="text-muted-foreground">
                    Once animals meet health and behavioral criteria, they are released into 
                    carefully selected habitats suited to their species.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/images/hero-wildlife.jpg"
                alt="Wildlife rehabilitation in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you&apos;ve found an injured animal, want to volunteer, or would like to 
            support our work, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 gradient-brand text-white border-0 hover:opacity-90">
              <Link href="/support">
                <Heart className="h-5 w-5" />
                Support Us
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
