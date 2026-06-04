import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Award, Users, MapPin, ArrowRight, Shield, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Geaux Wild Rehab',
  description: 'Learn about Geaux Wild Rehab, a 501(c)(3) nonprofit wildlife rehabilitation center in Hammond, Louisiana, licensed to care for all native mammal species.',
}

const values = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Every animal receives individualized attention and species-appropriate care from trained rehabilitators.',
  },
  {
    icon: Award,
    title: 'Licensed & Certified',
    description: 'Licensed by the Louisiana Department of Wildlife and Fisheries to care for all native mammal species.',
  },
  {
    icon: Users,
    title: 'Community Education',
    description: 'We believe in empowering our community with knowledge about coexisting with local wildlife.',
  },
  {
    icon: MapPin,
    title: 'Louisiana Focused',
    description: 'Based in Hammond, Louisiana, we specialize in the native wildlife species of our state.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                About Us
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                About Geaux Wild Rehab
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Geaux Wild Rehab is a 501(c)(3) nonprofit wildlife rehabilitation center dedicated to giving
                Louisiana&apos;s native wildlife a second chance. We are licensed by the Louisiana Department
                of Wildlife and Fisheries to care for all native mammal species.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Based in Hammond, Louisiana, Geaux Wild Rehab serves native wildlife across the state through
                licensed rehabilitation, compassionate care, and release back into the wild whenever possible.
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scale-vP3hV6R2UU9YDb6yKt2nTv2vq9Qltz.jpg"
                  alt="Tisha Raiford releasing a coyote back into the wild"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl gradient-brand opacity-20" />
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Tisha Bio Section */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Our Founder
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8">
                A Lifelong Calling
              </h2>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  My name is Tisha Raiford, and for the past eight years I have dedicated my life to rehabilitating
                  wildlife, with nearly four of those years serving as a licensed rehabilitator through the Louisiana
                  Department of Wildlife and Fisheries.
                </p>
                <p>
                  I am licensed to rehabilitate all native mammal species in Louisiana, including beavers, otters,
                  opossums, squirrels, foxes, rabbits, skunks, coyotes, and bobcats. I also currently have five
                  sub-permittees working under my license who assist in the care of squirrels, opossums, and rabbits,
                  helping ensure each animal receives the time and attention it needs to recover and return to the wild.
                </p>
                <p>
                  For 30 years, I was a stay-at-home mom, devoting my time fully to raising my family. I homeschooled
                  my two younger children for 10 years, and now my youngest is in college. My husband and I have been
                  married for almost 32 years, and together we raised three children. We are proud grandparents to two
                  grandchildren.
                </p>
                <p>
                  When our children were younger, we also opened our home as a foster family and cared for 78 babies
                  over the years. Caring for vulnerable lives has always been a part of who I am, and wildlife
                  rehabilitation has become a continuation of that calling.
                </p>
              </div>
            </div>

            {/* Licensing callout */}
            <div className="space-y-6 lg:pt-16">
              <div className="bg-white rounded-3xl p-8 border border-border/50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Licensed Rehabilitator</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Licensed by the Louisiana Department of Wildlife and Fisheries to care for all native mammal
                      species in Louisiana.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-border/50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">501(c)(3) Nonprofit</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Geaux Wild Rehab is a registered 501(c)(3) nonprofit. All donations are tax-deductible and go
                      directly to animal care.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-border/50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Sub-Permittee Network</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Five sub-permittees work under Tisha&apos;s license, specializing in squirrels, opossums, and
                      rabbits to ensure every animal gets the focused care it needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
                <h3 className="text-lg font-bold mb-2">Hammond, Louisiana</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Based in Hammond, Louisiana, Geaux Wild Rehab serves native wildlife across the state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Our Values
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 text-balance">
              What Guides Our Work
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value) => (
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
            <div className="relative flex flex-col gap-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0312-P7UiODJukVXZZRs46JeY0vSdv7zYuG.jpg"
                  alt="Tisha Raiford with staff at the wildlife rehabilitation center"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/tisha-and-doctor-ledet.jpeg"
                  alt="Tisha Raiford and Dr. Ledet providing veterinary care to a wildlife patient"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-border/50">
                <p className="text-4xl font-bold text-primary mb-1">6+</p>
                <p className="text-muted-foreground text-sm">Years of wildlife rehabilitation</p>
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
            Whether you&apos;ve found an injured animal or would like to
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
