import Link from 'next/link'
import Image from 'next/image'
import { Heart, ExternalLink, Instagram, Facebook, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const footerLinks = {
  help: [
    { href: '/get-help', label: 'Found Wildlife?' },
    { href: '/wildlife', label: 'Wildlife We Help' },
    { href: '/faq', label: 'FAQ' },
    { href: '/stories', label: 'Success Stories' },
  ],
  support: [
    { href: '/support', label: 'Donate' },
    { href: '/support#wishlist', label: 'Amazon Wishlist' },
  ],
  about: [
    { href: '/about', label: 'Our Mission' },
    { href: '/contact', label: 'Contact Us' },
  ],
}

const socialLinks = [
  { href: 'https://instagram.com/geauxwildrehab', label: 'Instagram', icon: Instagram },
  { href: 'https://facebook.com/geauxwildrehab', label: 'Facebook', icon: Facebook },
  { href: 'https://tiktok.com/@geauxwildrehab', label: 'TikTok', icon: TikTokIcon },
]

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Band */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-brand" />
        <div className="absolute inset-0 bg-[url('/images/hero-wildlife.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-balance">
                Help Us Save Louisiana Wildlife
              </h2>
              <p className="text-white/90 text-lg max-w-xl mb-8">
                Every donation helps us provide critical care for injured and orphaned animals. 
                Join our community of wildlife advocates today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90 gap-2 rounded-full px-8 h-14 font-semibold shadow-lg">
                  <Link href="/support">
                    <Heart className="h-5 w-5" />
                    Donate Now
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 gap-2 rounded-full px-8 h-14 font-medium"
                >
                  <a href="https://www.amazon.com/hz/wishlist/ls/example" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                    Amazon Wishlist
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Newsletter signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">Stay Connected</h3>
              <p className="text-white/80 mb-6">Get updates on our rescues and ways to help.</p>
              <form className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="pl-12 h-12 rounded-full bg-white border-0 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button type="submit" size="lg" className="rounded-full px-6 h-12 bg-foreground text-background hover:bg-foreground/90">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.svg"
                alt="Geaux Wild Rehab"
                width={220}
                height={81}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              Dedicated to the rescue, rehabilitation, and release of injured and orphaned native Louisiana wildlife.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-background/20 hover:text-background transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6">Get Help</h3>
            <ul className="space-y-4">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6">About</h3>
            <ul className="space-y-4">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>&copy; {currentYear} Geaux Wild Rehab. All rights reserved.</p>
            <p>
              Serving Louisiana&apos;s native wildlife with love and care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
