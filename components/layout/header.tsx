'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/wildlife', label: 'Wildlife' },
  { href: '/support', label: 'Support' },
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 md:py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - left */}
          <Link href="/" className="shrink-0 z-10">
            <div className={cn(
              "relative transition-all duration-300",
              isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
            )}>
              <Image
                src="/images/logo.svg"
                alt="Geaux Wild Rehab"
                width={180}
                height={65}
                className="h-full w-auto drop-shadow-lg"
                priority
              />
            </div>
          </Link>

          {/* Center Navigation Pill - desktop only */}
          <nav className={cn(
            "hidden lg:flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500",
            isScrolled 
              ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/10" 
              : "bg-white/80 backdrop-blur-md shadow-md"
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#1a1f3d] hover:text-[#26C9AA] transition-colors rounded-full hover:bg-[#26C9AA]/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 z-10">
            <Button 
              asChild 
              size="sm" 
              className={cn(
                "hidden sm:inline-flex gap-2 rounded-full font-semibold shadow-lg transition-all",
                isScrolled 
                  ? "bg-[#26C9AA] text-white hover:bg-[#1eb89a]" 
                  : "bg-white text-[#1a1f3d] hover:bg-white/90"
              )}
            >
              <Link href="/get-help">
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">Found Wildlife?</span>
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "lg:hidden p-2.5 rounded-full transition-all",
                isScrolled 
                  ? "bg-white shadow-md text-[#1a1f3d]" 
                  : "bg-white/80 backdrop-blur-sm text-[#1a1f3d]"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-0 bg-white z-40 transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <div className="flex flex-col h-full">
          {/* Mobile header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/images/logo.svg"
                alt="Geaux Wild Rehab"
                width={150}
                height={55}
                className="h-10 w-auto"
              />
            </Link>
            <button
              className="p-2.5 rounded-full bg-[#F8F4F4] text-[#1a1f3d]"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile nav links */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3.5 text-lg font-medium text-[#1a1f3d] hover:bg-[#F8F4F4] rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile CTAs */}
          <div className="px-4 py-6 border-t border-gray-100 flex flex-col gap-3">
            <Button asChild size="lg" className="w-full justify-center gap-2 rounded-full bg-[#26C9AA] text-white hover:bg-[#1eb89a] h-14">
              <Link href="/get-help" onClick={() => setIsOpen(false)}>
                <Phone className="h-5 w-5" />
                Found Wildlife?
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full justify-center gap-2 rounded-full border-2 border-[#3B468E] text-[#3B468E] h-14">
              <Link href="/support" onClick={() => setIsOpen(false)}>
                <Heart className="h-5 w-5" />
                Support Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
