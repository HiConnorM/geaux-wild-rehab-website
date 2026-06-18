'use client'

import { useEffect, useRef } from 'react'
import { TransitionLink } from '@/components/page-transition/transition-link'
import { ExternalLink, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { prefersReducedMotion, ST_DEFAULTS, EASE_OUT } from '@/lib/gsap-utils'

const TIKTOK_VIDEOS = [
  '7632140781658148126',
  '7631907381949041950',
  '7630840429558123807',
  '7630256481178373406',
  '7629709839790296351',
  '7625471949895978270',
]

export function TikTokSection() {
  const ref = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const ctaCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: import('gsap').Context | undefined
    ;(async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (prefersReducedMotion()) return

      ctx = gsap.context(() => {
        gsap.set([headerRef.current, ctaCardRef.current], { opacity: 0, y: 32 })

        gsap.to(headerRef.current, {
          opacity: 1, y: 0,
          duration: 0.7, ease: EASE_OUT,
          scrollTrigger: { trigger: headerRef.current, ...ST_DEFAULTS },
        })

        if (gridRef.current) {
          const embeds = Array.from(gridRef.current.children)
          gsap.set(embeds, { opacity: 0, y: 28 })
          gsap.to(embeds, {
            opacity: 1, y: 0,
            duration: 0.65, ease: EASE_OUT,
            stagger: 0.08,
            scrollTrigger: { trigger: gridRef.current, ...ST_DEFAULTS },
          })
        }

        gsap.to(ctaCardRef.current, {
          opacity: 1, y: 0,
          duration: 0.65, ease: EASE_OUT,
          scrollTrigger: { trigger: ctaCardRef.current, ...ST_DEFAULTS },
        })
      }, ref)
    })()

    return () => ctx?.revert()
  }, [])

  return (
    <section ref={ref} className="relative bg-[#1a1f3d] overflow-visible -mt-[3px] pt-16 md:pt-20 pb-20 md:pb-28">

      {/* Decorative accents */}
      <div className="absolute top-24 left-[5%] w-3 h-3 rounded-full bg-[#26C9AA]/20 hidden md:block" />
      <div className="absolute top-40 right-[8%] w-5 h-5 bg-white/5 rotate-45 rounded hidden md:block" />
      <div className="absolute bottom-20 left-[10%] w-4 h-4 border-2 border-[#26C9AA]/20 rotate-45 rounded-sm hidden md:block" />
      <div className="absolute bottom-32 right-[6%] w-3 h-3 rounded-full bg-white/10 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-8 md:pt-12">

        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 md:mb-16" style={{ opacity: 0 }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.77a4.85 4.85 0 01-1-.08z"/>
            </svg>
            <span className="text-sm font-bold text-white/60 uppercase tracking-widest">Follow Us on TikTok</span>
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1] mb-4 text-balance">
            Follow Our Journey
          </h2>
          <p className="text-base md:text-lg text-white/60">
            Watch rescued animals heal and thrive. Follow{' '}
            <a
              href="https://www.tiktok.com/@geauxwildrehab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#26C9AA] font-bold hover:underline"
            >
              @geauxwildrehab
            </a>{' '}
            for daily wildlife stories.
          </p>
        </div>

        {/* TikTok embeds grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {TIKTOK_VIDEOS.map((id) => (
            <div key={id} className="mx-auto w-full max-w-[320px]" style={{ opacity: 0 }}>
              <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${id}?lang=en-US`}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="encrypted-media"
                  allowFullScreen
                  title={`TikTok video ${id}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Profile CTA card */}
        <div ref={ctaCardRef} style={{ opacity: 0 }}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#26C9AA]/20 border border-[#26C9AA]/30 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#26C9AA]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.77a4.85 4.85 0 01-1-.08z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-lg">@geauxwildrehab</p>
                <p className="text-white/50 text-sm">Wildlife rescue stories, daily updates, animal releases</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button asChild size="lg" className="rounded-full h-12 px-7 bg-white text-[#1a1f3d] hover:bg-white/90 font-bold w-full sm:w-auto">
                <a href="https://www.tiktok.com/@geauxwildrehab" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  Follow on TikTok
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-7 border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-bold w-full sm:w-auto">
                <TransitionLink href="/support">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Support Our Work
                </TransitionLink>
              </Button>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute left-0 right-0 z-20 pointer-events-none" style={{ lineHeight: 0, bottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 'clamp(48px, 6vw, 80px)', display: 'block' }} preserveAspectRatio="none">
          <path d="M0 80V40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
