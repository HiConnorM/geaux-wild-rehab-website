'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

// TikTok video IDs from @geauxwildrehab - these are embedded via TikTok's official embed API
const TIKTOK_VIDEOS = [
  '7369980774003725610',
  '7358234567890123456',
  '7341234567890123456',
]

function TikTokEmbed({ videoId }: { videoId: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Load TikTok embed script if not already loaded
    if (!document.getElementById('tiktok-embed-script')) {
      const script = document.createElement('script')
      script.id = 'tiktok-embed-script'
      script.src = 'https://www.tiktok.com/embed.js'
      script.async = true
      document.body.appendChild(script)
      script.onload = () => setLoaded(true)
    } else {
      setLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (loaded && ref.current && (window as any).tiktok) {
      ;(window as any).tiktok.reload()
    }
  }, [loaded])

  return (
    <div ref={ref} className="w-full flex justify-center">
      <blockquote
        className="tiktok-embed"
        cite={`https://www.tiktok.com/@geauxwildrehab/video/${videoId}`}
        data-video-id={videoId}
        style={{ maxWidth: '325px', minWidth: '270px' }}
      >
        <section />
      </blockquote>
    </div>
  )
}

export function TikTokSection() {
  const ref = useRef<HTMLElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVis(true),
      { threshold: 0.05, rootMargin: '80px' }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative bg-[#1a1f3d] overflow-hidden py-20 md:py-28">

      {/* Wavy top divider - F8F4F4 scooping down from the donation banner above */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 md:h-16" preserveAspectRatio="none">
          <path d="M0 80V50C180 20 360 60 540 40C720 20 900 60 1080 40C1260 20 1380 50 1440 50V80H0Z" fill="#F8F4F4"/>
        </svg>
      </div>

      {/* Decorative dots */}
      <div className="absolute top-24 left-[5%] w-3 h-3 rounded-full bg-[#26C9AA]/20 hidden md:block" />
      <div className="absolute top-40 right-[8%] w-5 h-5 bg-white/5 rotate-45 rounded hidden md:block" />
      <div className="absolute bottom-20 left-[10%] w-4 h-4 border-2 border-[#26C9AA]/20 rotate-45 rounded-sm hidden md:block" />
      <div className="absolute bottom-32 right-[6%] w-3 h-3 rounded-full bg-white/10 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* TikTok logo wordmark */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.77a4.85 4.85 0 01-1-.08z"/>
            </svg>
            <span className="text-sm font-bold text-white/60 uppercase tracking-widest">TikTok</span>
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1] mb-4">
            Follow Our Journey
          </h2>
          <p className="text-base md:text-lg text-white/60 px-4">
            Watch rescued animals heal and thrive. Follow{' '}
            <a
              href="https://www.tiktok.com/@geauxwildrehab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#26C9AA] font-bold hover:underline"
            >
              @geauxwildrehab
            </a>{' '}
            on TikTok for daily wildlife stories.
          </p>
        </div>

        {/* Embedded videos */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-700 delay-100 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {TIKTOK_VIDEOS.map((videoId, i) => (
            <div
              key={videoId}
              className="flex justify-center transition-all duration-700"
              style={{ transitionDelay: `${i * 100 + 150}ms` }}
            >
              <TikTokEmbed videoId={videoId} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 md:mt-16 transition-all duration-700 delay-400 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            asChild
            size="lg"
            className="rounded-full h-12 md:h-14 px-8 bg-white text-[#1a1f3d] hover:bg-white/90 font-bold w-full sm:w-auto"
          >
            <a
              href="https://www.tiktok.com/@geauxwildrehab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="mr-2 h-4 w-4 md:h-5 md:w-5 fill-current" />
              Follow @geauxwildrehab
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full h-12 md:h-14 px-8 border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-bold w-full sm:w-auto"
          >
            <Link href="/support">
              <ExternalLink className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Support Our Work
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
