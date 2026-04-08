'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/wildlife', label: 'Wildlife' },
  { href: '/get-help', label: 'Found Wildlife' },
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
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-6xl",
        "hidden lg:block"
      )}
    >
      {/* Centered pill container */}
      <div className={cn(
        "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
        isScrolled 
          ? "bg-white/98 backdrop-blur-lg shadow-lg shadow-black/10 border border-gray-200" 
          : "bg-white/95 backdrop-blur-md shadow-md shadow-black/5 border border-gray-100"
      )}>
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Geaux Wild Rehab"
            width={140}
            height={44}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Center Navigation */}
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[#1a1f3d] hover:text-[#26C9AA] transition-colors rounded-lg hover:bg-[#F8F4F4]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-2 shrink-0">
          <Button 
            asChild 
            size="sm" 
            className="rounded-full bg-[#26C9AA] text-white hover:bg-[#1eb89a] font-semibold px-5 h-9 shadow-sm"
          >
            <Link href="/support">
              Donate
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline"
            size="sm" 
            className="rounded-full border-2 border-[#3B468E] text-[#3B468E] hover:bg-[#3B468E] hover:text-white font-semibold px-5 h-9"
          >
            <Link href="/get-help">
              Get Help
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

// Mobile header - full width, separate from desktop pill
export function MobileHeader() {
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
        "lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-100" 
          : "bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Geaux Wild Rehab"
              width={140}
              height={44}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 -mr-2 text-[#1a1f3d]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-16 bg-white z-40 transition-all duration-300",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        <div className="flex flex-col h-full">
          {/* Mobile nav links */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 py-4 text-base font-medium text-[#1a1f3d] hover:text-[#26C9AA] border-b border-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile CTAs */}
          <div className="px-4 py-6 border-t border-gray-100 flex flex-col gap-3 bg-[#F8F4F4]">
            <Button asChild size="lg" className="w-full justify-center rounded-full bg-[#26C9AA] text-white hover:bg-[#1eb89a] h-12 font-semibold">
              <Link href="/support" onClick={() => setIsOpen(false)}>
                Donate Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full justify-center rounded-full border-2 border-[#3B468E] text-[#3B468E] hover:bg-[#3B468E] hover:text-white h-12 font-semibold">
              <Link href="/get-help" onClick={() => setIsOpen(false)}>
                Get Help
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
