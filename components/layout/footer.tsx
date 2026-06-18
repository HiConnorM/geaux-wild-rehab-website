import Image from 'next/image'
import { Instagram, Facebook, ArrowRight } from 'lucide-react'
import { TransitionLink } from '@/components/page-transition/transition-link'

const footerLinks = {
  help: [
    { href: '/get-help', label: 'Found Wildlife?' },
    { href: '/wildlife', label: 'Wildlife We Help' },
    { href: '/faq', label: 'FAQ' },
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
  { href: 'https://www.instagram.com/geauxwildrehab/', label: 'Instagram', icon: Instagram },
  { href: 'https://www.facebook.com/p/Geaux-Wild-Rehab-100087779529674/', label: 'Facebook', icon: Facebook },
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
    <footer className="bg-[#1a1f3d] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <TransitionLink href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.svg"
                alt="Geaux Wild Rehab"
                width={140}
                height={44}
                className="h-10 w-auto"
              />
            </TransitionLink>
            <p className="text-white/60 mb-3 max-w-sm leading-relaxed">
              A 501(c)(3) nonprofit dedicated to the rescue, rehabilitation, and release of injured and orphaned native Louisiana wildlife. Based in Hammond, Louisiana.
            </p>
            <a
              href="tel:5044918036"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6 text-sm"
              aria-label="Call Geaux Wild Rehab"
            >
              <span>504-491-8036</span>
            </a>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#26C9AA] hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 text-[#26C9AA]">Get Help</h3>
            <ul className="space-y-4">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 text-[#26C9AA]">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 text-[#26C9AA]">About</h3>
            <ul className="space-y-4">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>&copy; {currentYear} Geaux Wild Rehab. All rights reserved.</p>
            <nav aria-label="Legal links" className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2">
              <TransitionLink href="/privacy" className="hover:text-white/70 transition-colors">
                Privacy Policy
              </TransitionLink>
              <TransitionLink href="/terms" className="hover:text-white/70 transition-colors">
                Terms &amp; Conditions
              </TransitionLink>
              <TransitionLink href="/accessibility" className="hover:text-white/70 transition-colors">
                Accessibility
              </TransitionLink>
              <TransitionLink href="/transparency" className="hover:text-white/70 transition-colors">
                Transparency
              </TransitionLink>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
