import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Gift, Users, DollarSign, Package, Truck, Briefcase, ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { VolunteerForm } from '@/components/forms/volunteer-form'

export const metadata: Metadata = {
  title: 'Support Our Mission',
  description: 'Help Geaux Wild Rehab save Louisiana wildlife. Donate, shop our Amazon Wishlist, or volunteer your time.',
}

const impactCards = [
  {
    amount: '$25',
    impact: 'Feeds a baby squirrel for 2 weeks',
    icon: Package,
  },
  {
    amount: '$50',
    impact: 'Covers veterinary supplies for one animal',
    icon: Heart,
  },
  {
    amount: '$100',
    impact: 'Sponsors a full rehabilitation journey',
    icon: Gift,
  },
]

const volunteerRoles = [
  {
    title: 'Animal Care',
    description: 'Help with feeding, cleaning, and monitoring animals in care.',
    icon: Heart,
  },
  {
    title: 'Transport',
    description: 'Pick up and deliver animals, supplies, or donations.',
    icon: Truck,
  },
  {
    title: 'Administrative',
    description: 'Help with data entry, phone calls, and social media.',
    icon: Briefcase,
  },
]

const wishlistItems = [
  'Heating pads & heat lamps',
  'Puppy pads & paper towels',
  'Kitten milk replacer (KMR)',
  'Syringes & feeding supplies',
  'Cages & carriers',
  'Cleaning supplies',
  'Fresh fruits & vegetables',
  'Nuts & seeds',
]

export default function SupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-20 gradient-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-3">
            Support Us
          </p>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Help Us Save Louisiana Wildlife
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Every donation, wishlist purchase, and volunteer hour makes a direct impact 
            on the animals in our care. Choose how you would like to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
              <a href="#donate">
                <Heart className="h-5 w-5" />
                Donate Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
              <a href="#wishlist">
                <Gift className="h-5 w-5" />
                Shop Wishlist
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
                Make a Donation
              </h2>
              <p className="text-muted-foreground mb-6">
                Your tax-deductible donation goes directly to animal care, including food, 
                medicine, veterinary visits, and facility maintenance. We are an all-volunteer 
                organization, which means 100% of donations support our animals.
              </p>
              <div className="bg-secondary rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-4">Your Impact</h3>
                <div className="space-y-4">
                  {impactCards.map((card) => (
                    <div key={card.amount} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center shrink-0">
                        <card.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">{card.amount}</span>
                        <span className="text-muted-foreground"> — {card.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Donation buttons - placeholder for payment integration */}
              <div className="space-y-3">
                <Button size="lg" className="w-full sm:w-auto gap-2 gradient-brand text-white border-0 hover:opacity-90">
                  <Heart className="h-5 w-5" />
                  Donate via PayPal
                  {/* TODO: Integrate with PayPal Giving Fund or similar */}
                </Button>
                <p className="text-sm text-muted-foreground">
                  Or mail a check to: Geaux Wild Rehab, P.O. Box 12345, Louisiana
                </p>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Other Ways to Give</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center shrink-0 mt-0.5">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Monthly Giving</p>
                    <p className="text-sm text-muted-foreground">
                      Become a monthly donor and provide consistent support for our animals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">In-Kind Donations</p>
                    <p className="text-sm text-muted-foreground">
                      We accept gently used cages, carriers, heating pads, and more.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center shrink-0 mt-0.5">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Corporate Sponsorship</p>
                    <p className="text-sm text-muted-foreground">
                      Partner with us to support wildlife rehabilitation in Louisiana.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wishlist Section */}
      <section id="wishlist" className="py-16 lg:py-24 bg-secondary scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-amber-100 mb-4">
              <Gift className="h-6 w-6 text-amber-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Shop Our Amazon Wishlist
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Purchase items we need and have them shipped directly to us. 
              Every item helps us provide better care for wildlife in need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-card-foreground mb-4">Commonly Needed Items</h3>
              <ul className="grid grid-cols-2 gap-3">
                {wishlistItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-muted-foreground mb-6">
                Our Amazon Wishlist is always up to date with our current needs. 
                Items are shipped directly to our facility.
              </p>
              <Button asChild size="lg" className="gap-2">
                <a
                  href="https://www.amazon.com/hz/wishlist/ls/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Amazon Wishlist
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-emerald-100 mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
                Become a Volunteer
              </h2>
              <p className="text-muted-foreground mb-6">
                Join our team of dedicated volunteers! Whether you have a few hours a week 
                or can help with occasional tasks, we have opportunities for everyone.
              </p>

              <div className="space-y-4 mb-8">
                {volunteerRoles.map((role) => (
                  <div
                    key={role.title}
                    className="flex items-start gap-4 p-4 bg-secondary rounded-lg"
                  >
                    <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center shrink-0">
                      <role.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{role.title}</h4>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Volunteers working with animals must be 18+ and 
                  complete our training program. We also welcome remote volunteers for 
                  administrative and social media tasks.
                </p>
              </div>
            </div>

            {/* Volunteer Form */}
            <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                Volunteer Interest Form
              </h3>
              <p className="text-muted-foreground mb-6">
                Tell us about yourself and how you would like to help.
              </p>
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 gradient-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-4">
            Every Contribution Makes a Difference
          </h2>
          <p className="text-white/80 mb-6">
            Whether you donate, shop our wishlist, or volunteer your time, you are helping 
            give Louisiana wildlife a second chance at life.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
            <Link href="/stories">
              Read Success Stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
