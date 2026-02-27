import Link from 'next/link'
import { Heart, Gift, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const supportOptions = [
  {
    icon: Heart,
    title: 'Make a Donation',
    description: 'Your contribution directly funds medical care, food, and supplies for animals in need.',
    href: '/support#donate',
    cta: 'Donate Now',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Gift,
    title: 'Shop Our Wishlist',
    description: 'Purchase much-needed supplies from our Amazon Wishlist and have them delivered directly to us.',
    href: 'https://www.amazon.com/hz/wishlist/ls/example',
    cta: 'View Wishlist',
    external: true,
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Users,
    title: 'Become a Volunteer',
    description: 'Join our team of dedicated volunteers helping with animal care, transport, and more.',
    href: '/support#volunteer',
    cta: 'Get Involved',
    color: 'from-emerald-500 to-teal-600',
  },
]

export function SupportTiles() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Ways to Help
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Support Our Mission
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            There are many ways to help us save Louisiana wildlife. Choose the option that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {supportOptions.map((option) => (
            <div
              key={option.title}
              className="group relative bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${option.color} mb-4`}
              >
                <option.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {option.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {option.description}
              </p>

              {option.external ? (
                <Button asChild variant="outline" className="gap-2 group-hover:gap-3 transition-all">
                  <a href={option.href} target="_blank" rel="noopener noreferrer">
                    {option.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <Button asChild variant="outline" className="gap-2 group-hover:gap-3 transition-all">
                  <Link href={option.href}>
                    {option.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
