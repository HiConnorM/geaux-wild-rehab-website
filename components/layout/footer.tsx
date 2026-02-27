import Link from 'next/link'
import Image from 'next/image'
import { Heart, ExternalLink, Instagram, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'

const footerLinks = {
  help: [
    { href: '/get-help', label: 'Found Wildlife?' },
    { href: '/faq', label: 'FAQ' },
    { href: '/stories', label: 'Success Stories' },
  ],
  support: [
    { href: '/support', label: 'Donate' },
    { href: '/support#wishlist', label: 'Amazon Wishlist' },
    { href: '/support#volunteer', label: 'Volunteer' },
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
      <div className="gradient-brand py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            Help Us Save Louisiana Wildlife
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Every donation helps us provide critical care for injured and orphaned animals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
              <Link href="/support">
                <Heart className="h-5 w-5" />
                Donate Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 gap-2"
            >
              <a href="https://www.amazon.com/hz/wishlist/ls/example" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
                Amazon Wishlist
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Geaux Wild Rehab"
                width={200}
                height={67}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-sm mb-4 max-w-sm">
              Dedicated to the rescue, rehabilitation, and release of injured and orphaned native Louisiana wildlife.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-background transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Get Help</h3>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
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
