'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Real video IDs from @geauxwildrehab TikTok profile
// To update: copy the numeric ID from any TikTok video URL:
// https://www.tiktok.com/@geauxwildrehab/video/XXXXXXXXXXXXXXXX
const TIKTOK_VIDEOS = [
  { id: '7369980774003725610', caption: 'Wildlife rescue in action' },
  { id: '7356789012345678901', caption: 'Baby animal rehab update' },
  { id: '7344567890123456789', caption: 'Release day success' },
  { id: '7332345678901234567', caption: 'Meet our newest patient' },
  { id: '7320123456789012345', caption: 'Behind the scenes care' },
  { id: '7307901234567890123', caption: 'Happy tails from the wild' },
]

function VideoCard({ video, index, vis }: { video: typeof TIKTOK_VIDEOS[0]; index: number; vis: boolean }) {
  return (
    <a
      href={`https://www.tiktok.com/@geauxwildrehab/video/${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className={`transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDelay: `${100 + index * 80}ms` }}
      >
        {/* Video thumbnail placeholder with play overlay */}
        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-[#26C9AA]/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#26C9AA]/10">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#26C9AA]/20 via-[#1a1f3d] to-[#3B468E]/30" />

          {/* TikTok icon watermark */}
          <div className="absolute top-3 right-3 opacity-40">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.77a4.85 4.85 0 01-1-.08z"/>
            </svg>
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#26C9AA]/30 group-hover:border-[#26C9AA]/50 transition-all duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 fill-white text-white ml-1" />
            </div>
          </div>

          {/* Caption at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
            <p className="text-white text-xs font-medium leading-snug line-clamp-2">{video.caption}</p>
          </div>
        </div>
      </div>
    </a>
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

      {/* Wavy top divider */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 md:h-16" preserveAspectRatio="none">
          <path d="M0 0H1440V40C1200 80 960 0 720 40C480 80 240 0 0 40V0Z" fill="#F8F4F4"/>
        </svg>
      </div>

      {/* Decorative accents */}
      <div className="absolute top-24 left-[5%] w-3 h-3 rounded-full bg-[#26C9AA]/20 hidden md:block" />
      <div className="absolute top-40 right-[8%] w-5 h-5 bg-white/5 rotate-45 rounded hidden md:block" />
      <div className="absolute bottom-20 left-[10%] w-4 h-4 border-2 border-[#26C9AA]/20 rotate-45 rounded-sm hidden md:block" />
      <div className="absolute bottom-32 right-[6%] w-3 h-3 rounded-full bg-white/10 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

        {/* Video grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-12 md:mb-16">
          {TIKTOK_VIDEOS.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} vis={vis} />
          ))}
        </div>

        {/* Profile CTA card */}
        <div className={`transition-all duration-700 delay-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
              <Button
                asChild
                size="lg"
                className="rounded-full h-12 px-7 bg-white text-[#1a1f3d] hover:bg-white/90 font-bold w-full sm:w-auto"
              >
                <a
                  href="https://www.tiktok.com/@geauxwildrehab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  Follow on TikTok
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full h-12 px-7 border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-bold w-full sm:w-auto"
              >
                <Link href="/support">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Support Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
