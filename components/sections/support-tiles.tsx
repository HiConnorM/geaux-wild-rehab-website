import Link from 'next/link'
import { Heart, Gift, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const supportOptions = [
  {
    icon: Heart,
    title: 'Make a Donation',
    description: 'Your contribution directly funds medical care, food, and supplies for animals in need.',
    href: '/support#donate',
    cta: 'Donate Now',
    accent: 'bg-rose-500',
    hoverBg: 'group-hover:bg-rose-50',
  },
  {
    icon: Gift,
    title: 'Shop Our Wishlist',
    description: 'Purchase much-needed supplies from our Amazon Wishlist and have them delivered directly to us.',
    href: 'https://www.amazon.com/hz/wishlist/ls/example',
    cta: 'View Wishlist',
    external: true,
    accent: 'bg-amber-500',
    hoverBg: 'group-hover:bg-amber-50',
  },
]

export function SupportTiles() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Ways to Help
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Support Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            There are many ways to help us save Louisiana wildlife. Choose the option that works best for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {supportOptions.map((option) => (
            <div
              key={option.title}
              className={`group relative bg-white rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-xl hover:border-transparent transition-all duration-500 ${option.hoverBg}`}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl ${option.accent} mb-6 shadow-lg`}>
                <option.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">
                {option.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {option.description}
              </p>

              {option.external ? (
                <Button 
                  asChild 
                  className="gap-2 rounded-full px-6 h-12 font-semibold bg-foreground text-background hover:bg-foreground/90"
                >
                  <a href={option.href} target="_blank" rel="noopener noreferrer">
                    {option.cta}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              ) : (
                <Button 
                  asChild 
                  className="gap-2 rounded-full px-6 h-12 font-semibold bg-foreground text-background hover:bg-foreground/90"
                >
                  <Link href={option.href}>
                    {option.cta}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              )}

              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${option.accent} opacity-5 rounded-bl-full rounded-tr-3xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
