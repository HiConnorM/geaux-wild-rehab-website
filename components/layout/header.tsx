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
  {
    label: 'Get Involved',
    children: [
      { href: '/support', label: 'Support Us', description: 'Donate, volunteer, or shop our wishlist' },
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
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="Geaux Wild Rehab"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) =>
                  link.children ? (
                    <NavigationMenuItem key={link.label}>
                      <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-foreground">
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-2 p-4">
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{child.label}</div>
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
                        className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
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
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link href="/support">
                <Heart className="h-4 w-4" />
                Support
              </Link>
            </Button>
            <Button asChild size="sm" className="gap-2 gradient-brand text-white border-0 hover:opacity-90">
              <Link href="/get-help">
                <Phone className="h-4 w-4" />
                Found Wildlife?
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="py-2">
                  <div className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="pl-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md"
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
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 flex flex-col gap-2">
              <Button asChild variant="outline" className="w-full justify-center gap-2">
                <Link href="/support" onClick={() => setIsOpen(false)}>
                  <Heart className="h-4 w-4" />
                  Support Us
                </Link>
              </Button>
              <Button asChild className="w-full justify-center gap-2 gradient-brand text-white border-0">
                <Link href="/get-help" onClick={() => setIsOpen(false)}>
                  <Phone className="h-4 w-4" />
                  Found Wildlife?
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
