import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, ExternalLink, Instagram, Facebook, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/forms/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Geaux Wild Rehab. We are here to help with wildlife emergencies and answer your questions.',
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '504-491-8036',
    description: 'Call or text for wildlife guidance',
    href: 'tel:5044918036',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@geauxwildrehab.org',
    description: 'General inquiries',
    href: 'mailto:info@geauxwildrehab.org',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hammond, Louisiana',
    description: 'Serving native wildlife across Louisiana',
  },
  {
    icon: Clock,
    label: 'Response Times',
    value: 'Response times may vary',
    description: 'Depending on current animal care needs',
  },
]

// TikTok icon (not in lucide-react)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.78a8.16 8.16 0 0 0 4.77 1.52V6.85a4.85 4.85 0 0 1-1-.16z" />
    </svg>
  )
}

const socialLinks = [
  { href: 'https://www.youtube.com/@geauxwildrehab', label: 'YouTube', icon: Youtube },
  { href: 'https://www.facebook.com/p/Geaux-Wild-Rehab-100087779529674/', label: 'Facebook', icon: Facebook },
  { href: 'https://www.instagram.com/geauxwildrehab/', label: 'Instagram', icon: Instagram },
  { href: 'https://www.tiktok.com/@geauxwildrehab', label: 'TikTok', icon: TikTokIcon },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about wildlife in your area? Need help with an injured animal?
              We are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{item.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Wildlife Guidance Banner */}
              <div className="p-6 rounded-xl gradient-brand text-white">
                <h3 className="font-semibold mb-2">Found Wildlife?</h3>
                <p className="text-sm text-white/80 mb-4">
                  If you have found injured or orphaned wildlife, visit our Get Help page for next steps 
                  or call/text 504-491-8036 for the fastest response.
                </p>
                <Button asChild variant="secondary" size="sm" className="gap-2">
                  <Link href="/get-help">
                    Get Help Now
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <h2 className="text-2xl font-serif font-bold text-card-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
