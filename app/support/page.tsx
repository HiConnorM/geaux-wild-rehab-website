import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Gift, Package, Briefcase, ArrowRight, ExternalLink, Check, Star, TrendingUp, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Support Our Mission',
  description: 'Help Geaux Wild Rehab save Louisiana wildlife. Donate via Venmo or PayPal, or shop our Amazon Wishlist.',
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

const wishlistCategories = [
  {
    title: 'Feeding Supplies',
    items: ['Esbilac Puppy Milk', 'Miracle Nipples', 'Feeding syringes (1ml, 3ml, 5ml)', 'Feeding tubes'],
    priority: 'high',
  },
  {
    title: 'Heating & Bedding',
    items: ['Heating pads (no auto shut-off)', 'Fleece blankets', 'Puppy pads', 'Paper towels'],
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
      <section className="relative pt-32 pb-20 lg:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #3B468E 0%, #26C9AA 100%)' }}>
        {/* Decorative diamonds */}
        <div className="absolute top-24 right-[15%] w-5 h-5 bg-white/10 rotate-45 rounded hidden md:block" />
        <div className="absolute top-48 left-[10%] w-3 h-3 bg-white/15 rotate-45 rounded-sm hidden md:block" />
        <div className="absolute bottom-16 left-[20%] w-8 h-8 border-2 border-white/10 rotate-45 rounded hidden md:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-bold text-white/70 uppercase tracking-wider mb-4">Make a Difference</span>
          <h1 className="font-serif font-black text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-6 text-balance">
            Help Us Save Louisiana Wildlife
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every donation and wishlist purchase makes a direct impact
            on the animals in our care. Choose how you would like to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-[#3B468E] hover:bg-white/90 gap-2 rounded-full px-8 h-14 font-bold shadow-lg border-0">
              <a href="#donate">
                <Heart className="h-5 w-5" />
                Donate Now
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white/15 border-2 border-white text-white hover:bg-white/25 gap-2 rounded-full px-8 h-14 font-semibold">
              <a href="#wishlist">
                <Gift className="h-5 w-5" />
                Shop Wishlist
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats Band */}
      <section className="py-6 bg-[#3B468E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-serif font-black text-white">100%</p>
              <p className="text-sm text-white/60">Goes to Animal Care</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-black text-white">2,146+</p>
              <p className="text-sm text-white/60">Animals Rescued</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-black text-white">82%</p>
              <p className="text-sm text-white/60">Release Rate</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-black text-white">501(c)(3)</p>
              <p className="text-sm text-white/60">Tax Deductible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amazon Wishlist Section */}
      <section id="wishlist" className="py-20 lg:py-28 bg-[#F8F4F4] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-4">Most Popular Way to Help</span>
            <h2 className="font-serif font-black text-3xl lg:text-5xl text-[#1a1f3d] leading-[1.1] mb-6 text-balance">
              Shop Our Amazon Wishlist
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Purchase items we need and have them shipped directly to our facility.
              It&apos;s easy, convenient, and makes an immediate impact on the animals in our care.
            </p>
          </div>

          {/* Featured Wishlist Button */}
          <div className="flex justify-center mb-16">
            <Button asChild size="lg" className="gap-3 rounded-full px-12 h-16 bg-[#26C9AA] text-white hover:bg-[#1ea88e] font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 border-0">
              <a href="https://amazon.com/hz/wishlist/ls/1U43EOQ2AS8LA?ref_=wl_share" target="_blank" rel="noopener noreferrer" aria-label="View our full Amazon Wishlist (opens in new tab)">
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
                className="bg-white rounded-[2rem] p-6 lg:p-8 border border-border/50 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden"
              >
                {category.priority === 'high' && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#26C9AA]/10 text-[#26C9AA] text-xs font-semibold">
                    Urgently Needed
                  </div>
                )}
            <h3 className="font-serif font-bold text-xl text-[#1a1f3d] mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="h-4 w-4 text-[#26C9AA] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-4">
                Monetary Donations
              </span>
              <h2 className="font-serif font-black text-3xl lg:text-4xl text-[#1a1f3d] leading-[1.1] mb-6">
                Make a Tax-Deductible Donation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Your donation goes directly to animal care, including food,
                medicine, veterinary visits, and facility maintenance. As an all-volunteer
                organization, 100% of your gift supports our animals.
              </p>

              {/* Impact Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {impactCards.map((card) => (
                  <div
                    key={card.amount}
                    className="bg-[#F8F4F4] rounded-2xl p-5 hover:bg-[#e8faf6] transition-colors group border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <card.icon className="h-5 w-5 text-[#26C9AA]" />
                    </div>
                    <p className="text-2xl font-black text-[#1a1f3d] font-serif mb-1">{card.amount}</p>
                    <p className="text-sm text-gray-500">{card.impact}</p>
                  </div>
                ))}
              </div>

              {/* Donation buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="gap-2 rounded-full px-8 h-14 bg-[#3D95CE] text-white hover:bg-[#2e7ab0] font-semibold border-0">
                  <a
                    href="https://paypal.com/biz/profile/geauxwild#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Donate with PayPal (opens in new tab)"
                  >
                    <Heart className="h-5 w-5" />
                    Donate with PayPal
                  </a>
                </Button>
                <Button asChild size="lg" className="gap-2 rounded-full px-8 h-14 bg-[#008CFF] text-white hover:bg-[#006dd1] font-semibold border-0">
                  <a
                    href="https://venmo.com/u/GeauxWildRehab"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Donate with Venmo (opens in new tab)"
                  >
                    <Heart className="h-5 w-5" />
                    Donate with Venmo
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                Geaux Wild Rehab is a registered 501(c)(3) nonprofit. All donations are tax-deductible.
              </p>
            </div>

            {/* Other Ways to Give */}
            <div className="bg-[#F8F4F4] rounded-[2rem] p-8 lg:p-10 border border-border/50">
              <h3 className="font-serif font-black text-2xl text-[#1a1f3d] mb-6">Other Ways to Give</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-border/30">
                  <div className="w-12 h-12 rounded-xl bg-[#26C9AA]/10 flex items-center justify-center shrink-0">
                    <Heart className="h-5 w-5 text-[#26C9AA]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1f3d] mb-1">Monthly Giving</p>
                    <p className="text-sm text-gray-500">
                      Become a Wildlife Guardian with automatic monthly donations for sustained support.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-border/30">
                  <div className="w-12 h-12 rounded-xl bg-[#26C9AA]/10 flex items-center justify-center shrink-0">
                    <Gift className="h-5 w-5 text-[#26C9AA]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1f3d] mb-1">In-Kind Donations</p>
                    <p className="text-sm text-gray-500">
                      We accept gently used cages, carriers, heating pads, blankets, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-border/30">
                  <div className="w-12 h-12 rounded-xl bg-[#26C9AA]/10 flex items-center justify-center shrink-0">
                    <Briefcase className="h-5 w-5 text-[#26C9AA]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1f3d] mb-1">Corporate Sponsorship</p>
                    <p className="text-sm text-gray-500">
                      Partner with us for meaningful community impact and employee engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-border/30">
                  <div className="w-12 h-12 rounded-xl bg-[#26C9AA]/10 flex items-center justify-center shrink-0">
                    <Star className="h-5 w-5 text-[#26C9AA]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1f3d] mb-1">Shop Our Wishlist</p>
                    <p className="text-sm text-gray-500">
                      Purchase supplies directly from our Amazon Wishlist and have them shipped right to us.
                    </p>
                    <a
                      href="https://amazon.com/hz/wishlist/ls/1U43EOQ2AS8LA?ref_=wl_share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[#26C9AA] font-medium hover:underline mt-2"
                      aria-label="Shop Our Amazon Wishlist (opens in new tab)"
                    >
                      Shop Our Wishlist
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#3B468E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-4">Every Action Counts</span>
          <h2 className="font-serif font-black text-3xl lg:text-4xl text-white leading-[1.1] mb-6">
            Every Contribution Makes a Difference
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you donate or shop our wishlist, you are helping
            give Louisiana wildlife a second chance at life in the wild.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-[#26C9AA] text-white hover:bg-[#1ea88e] gap-2 rounded-full px-8 h-14 font-bold border-0">
              <Link href="/wildlife">
                Meet Our Wildlife
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white/10 border-2 border-white text-white hover:bg-white/20 gap-2 rounded-full px-8 h-14">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
