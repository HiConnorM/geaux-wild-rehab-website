import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Gift, Users, DollarSign, Package, Truck, Briefcase, ArrowRight, ExternalLink, Check, Star, Sparkles } from 'lucide-react'
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
  {
    amount: '$250',
    impact: 'Provides a month of formula for orphans',
    icon: Star,
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

const wishlistCategories = [
  {
    title: 'Feeding Supplies',
    items: ['Kitten Milk Replacer (KMR)', 'Esbilac Puppy Milk', 'Miracle Nipples', 'Feeding syringes (1ml, 3ml, 5ml)', 'Feeding tubes'],
    priority: 'high',
  },
  {
    title: 'Heating & Bedding',
    items: ['Heating pads (no auto shut-off)', 'Heat lamps & bulbs', 'Fleece blankets', 'Puppy pads', 'Paper towels'],
    priority: 'high',
  },
  {
    title: 'Enclosures',
    items: ['Small animal carriers', 'Wire cages', 'Plastic storage bins', 'Mesh netting', 'Cage locks'],
    priority: 'medium',
  },
  {
    title: 'Food & Nutrition',
    items: ['Mazuri rodent blocks', 'Fresh vegetables', 'Nuts (unsalted)', 'Berries', 'Quality cat/dog food'],
    priority: 'medium',
  },
]

export default function SupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-brand" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-float animation-delay-300" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-white/90 text-sm font-medium">Make a Difference Today</span>
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-6 text-balance">
            Help Us Save Louisiana Wildlife
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every donation, wishlist purchase, and volunteer hour makes a direct impact 
            on the animals in our care. Choose how you would like to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 rounded-full px-8 h-14 font-semibold shadow-lg">
              <a href="#donate">
                <Heart className="h-5 w-5" />
                Donate Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 gap-2 rounded-full px-8 h-14 font-medium">
              <a href="#wishlist">
                <Gift className="h-5 w-5" />
                Shop Wishlist
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats Band */}
      <section className="py-6 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Goes to Animal Care</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">1,247+</p>
              <p className="text-sm text-muted-foreground">Animals Rescued</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">78%</p>
              <p className="text-sm text-muted-foreground">Release Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">501(c)(3)</p>
              <p className="text-sm text-muted-foreground">Tax Deductible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amazon Wishlist Section - Prominent placement */}
      <section id="wishlist" className="py-20 lg:py-28 bg-gradient-to-b from-amber-50 to-background scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 mb-6">
              <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
              <span className="text-sm font-semibold">Most Popular Way to Help</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Shop Our Amazon Wishlist
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Purchase items we need and have them shipped directly to our facility. 
              It&apos;s easy, convenient, and makes an immediate impact on the animals in our care.
            </p>
          </div>

          {/* Featured Wishlist Button */}
          <div className="flex justify-center mb-16">
            <Button asChild size="lg" className="gap-3 rounded-full px-12 h-16 bg-amber-500 text-white hover:bg-amber-600 font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <a href="https://www.amazon.com/hz/wishlist/ls/example" target="_blank" rel="noopener noreferrer">
                <Gift className="h-6 w-6" />
                View Full Amazon Wishlist
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Wishlist Categories */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {wishlistCategories.map((category) => (
              <div 
                key={category.title}
                className="bg-white rounded-3xl p-6 lg:p-8 border border-border/50 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden"
              >
                {category.priority === 'high' && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold">
                    Urgently Needed
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-amber-50 rounded-2xl p-6 lg:p-8 border border-amber-200">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <Truck className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-center lg:text-left">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Items Ship Directly to Us
                </h4>
                <p className="text-muted-foreground">
                  When you purchase from our wishlist, Amazon ships items directly to our facility. 
                  You can choose to include a gift message, and we&apos;ll send you a thank you note!
                </p>
              </div>
              <Button asChild className="shrink-0 gap-2 rounded-full bg-amber-500 text-white hover:bg-amber-600">
                <a href="https://www.amazon.com/hz/wishlist/ls/example" target="_blank" rel="noopener noreferrer">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 lg:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Monetary Donations
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
                Make a Tax-Deductible Donation
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your donation goes directly to animal care, including food, 
                medicine, veterinary visits, and facility maintenance. As an all-volunteer 
                organization, 100% of your gift supports our animals.
              </p>
              
              {/* Impact Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {impactCards.map((card) => (
                  <div 
                    key={card.amount} 
                    className="bg-secondary rounded-2xl p-5 hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <card.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground mb-1">{card.amount}</p>
                    <p className="text-sm text-muted-foreground">{card.impact}</p>
                  </div>
                ))}
              </div>

              {/* Donation buttons */}
              <div className="space-y-4">
                <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full px-8 h-14 gradient-brand text-white border-0 hover:opacity-90 font-semibold">
                  <Heart className="h-5 w-5" />
                  Donate via PayPal
                </Button>
                <p className="text-sm text-muted-foreground">
                  Or mail a check to: Geaux Wild Rehab, P.O. Box 12345, Louisiana 70000
                </p>
              </div>
            </div>

            {/* Other Ways to Give */}
            <div className="bg-secondary/50 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">Other Ways to Give</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Monthly Giving</p>
                    <p className="text-sm text-muted-foreground">
                      Become a Wildlife Guardian with automatic monthly donations for sustained support.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">In-Kind Donations</p>
                    <p className="text-sm text-muted-foreground">
                      We accept gently used cages, carriers, heating pads, blankets, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Corporate Sponsorship</p>
                    <p className="text-sm text-muted-foreground">
                      Partner with us for meaningful community impact and employee engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Legacy Giving</p>
                    <p className="text-sm text-muted-foreground">
                      Include Geaux Wild Rehab in your estate plans to protect wildlife for generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 lg:py-28 bg-secondary/30 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
                Join Our Team
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
                Become a Volunteer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join our team of dedicated volunteers! Whether you have a few hours a week 
                or can help with occasional tasks, we have opportunities for everyone who 
                wants to make a difference.
              </p>

              <div className="space-y-4 mb-8">
                {volunteerRoles.map((role) => (
                  <div
                    key={role.title}
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                      <role.icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{role.title}</h4>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Volunteers working with animals must be 18+ and 
                  complete our training program. We also welcome remote volunteers for 
                  administrative and social media tasks.
                </p>
              </div>
            </div>

            {/* Volunteer Form */}
            <div className="bg-white rounded-3xl border border-border shadow-sm p-6 lg:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Volunteer Interest Form
              </h3>
              <p className="text-muted-foreground mb-8">
                Tell us about yourself and how you would like to help.
              </p>
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            Every Contribution Makes a Difference
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you donate, shop our wishlist, or volunteer your time, you are helping 
            give Louisiana wildlife a second chance at life in the wild.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 rounded-full px-8 h-14 font-semibold">
              <Link href="/stories">
                Read Success Stories
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 gap-2 rounded-full px-8 h-14">
              <Link href="/wildlife">
                Meet Our Wildlife
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
