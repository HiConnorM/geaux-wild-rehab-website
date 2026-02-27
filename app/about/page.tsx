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
      <section className="relative pt-32 pb-24 lg:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                About Us
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                Dedicated to Louisiana&apos;s Wildlife
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Geaux Wild Rehab is a licensed wildlife rehabilitation facility dedicated to the 
                rescue, rehabilitation, and release of injured and orphaned native Louisiana wildlife.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Founded by passionate wildlife advocates, we&apos;ve grown from a small operation 
                into a vital resource for our community. Our mission is simple: give every animal 
                the best possible chance to return to the wild where they belong.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 font-semibold">
                  <Link href="/support">
                    Support Our Mission
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-8 h-14">
                  <Link href="/get-help">
                    Found Wildlife?
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="Wildlife rehabilitator caring for animals"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl gradient-brand opacity-20" />
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Our Mission
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 text-balance">
              Why We Do What We Do
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              To provide compassionate, professional care for injured and orphaned Louisiana 
              native wildlife, with the ultimate goal of returning each animal to its natural 
              habitat. Through rehabilitation, education, and community outreach, we strive to 
              foster a deeper appreciation for our local wildlife and promote peaceful coexistence.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group bg-white rounded-3xl p-8 border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-500"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <value.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Our Services
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8">
                What We Do
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: 'Wildlife Rescue',
                    description: 'We respond to calls about injured, orphaned, or distressed wildlife throughout our service area, providing guidance and coordinating intake.'
                  },
                  {
                    title: 'Medical Care',
                    description: 'Each animal receives a thorough examination and appropriate medical treatment, from wound care to medication administration.'
                  },
                  {
                    title: 'Rehabilitation',
                    description: 'We provide species-specific care, nutrition, and opportunities to develop natural behaviors necessary for survival in the wild.'
                  },
                  {
                    title: 'Release',
                    description: 'Once animals meet health and behavioral criteria, they are released into carefully selected habitats suited to their species.'
                  }
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-wildlife.jpg"
                  alt="Wildlife rehabilitation in action"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-border/50">
                <p className="text-4xl font-bold text-primary mb-1">847+</p>
                <p className="text-muted-foreground text-sm">Animals rescued this year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-brand opacity-5" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Get Involved
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Whether you&apos;ve found an injured animal, want to volunteer, or would like to 
            support our work, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 font-semibold">
              <Link href="/support">
                <Heart className="h-5 w-5" />
                Support Us
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-10 h-14">
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
