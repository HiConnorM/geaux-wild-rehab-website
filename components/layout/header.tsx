'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Heart, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/wildlife', label: 'Wildlife' },
  {
    label: 'Get Involved',
    children: [
      { href: '/support', label: 'Support Us', description: 'Donate or shop our wishlist' },
      { href: '/support#wishlist', label: 'Amazon Wishlist', description: 'Purchase supplies we need' },
      { href: '/stories', label: 'Success Stories', description: 'Read about the animals we have helped' },
    ],
  },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/98 backdrop-blur-xl shadow-lg shadow-black/5 py-2'
          : 'bg-white/80 backdrop-blur-sm py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <div className={cn(
              "relative transition-all duration-300",
              isScrolled ? "h-12" : "h-14"
            )}>
              <Image
                src="/images/logo.svg"
                alt="Geaux Wild Rehab"
                width={200}
                height={73}
                className={cn(
                  "h-full w-auto transition-all duration-300",
                  !isScrolled && "drop-shadow-lg"
                )}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) =>
                  link.children ? (
                    <NavigationMenuItem key={link.label}>
                      <NavigationMenuTrigger className="bg-transparent font-medium transition-colors text-foreground/80 hover:text-foreground">
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[320px] gap-1 p-3">
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-secondary"
                                >
                                  <div className="text-sm font-semibold leading-none mb-1">{child.label}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {child.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.href}>
                      <Link
                        href={link.href}
                        className="px-4 py-2 text-sm font-medium transition-colors text-foreground/80 hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              asChild 
              variant="outline" 
              size="sm" 
              className="gap-2 rounded-full font-medium transition-all border-border hover:bg-secondary"
            >
              <Link href="/support">
                <Heart className="h-4 w-4" />
                Donate
              </Link>
            </Button>
            <Button 
              asChild 
              size="sm" 
              className="gap-2 rounded-full font-semibold shadow-lg transition-all bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/get-help">
                <Phone className="h-4 w-4" />
                Found Wildlife?
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full transition-colors text-foreground hover:bg-secondary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-[72px] bg-white z-40 transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-2 h-full overflow-y-auto">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="py-2">
                <div className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-xl transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-6 flex flex-col gap-3 border-t border-border mt-6">
            <Button asChild variant="outline" size="lg" className="w-full justify-center gap-2 rounded-full">
              <Link href="/support" onClick={() => setIsOpen(false)}>
                <Heart className="h-5 w-5" />
                Support Us
              </Link>
            </Button>
            <Button asChild size="lg" className="w-full justify-center gap-2 rounded-full bg-primary text-primary-foreground">
              <Link href="/get-help" onClick={() => setIsOpen(false)}>
                <Phone className="h-5 w-5" />
                Found Wildlife?
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
