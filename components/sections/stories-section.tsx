'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { stories } from '@/lib/content'

export function StoriesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.08 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const latest = stories.slice(0, 2)

  return (
    <div ref={ref} className="relative min-h-screen bg-white overflow-hidden">

      {/* Section label */}
      <div className={`absolute top-14 right-8 sm:right-14 md:right-20 z-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
        <span className="text-[11px] tracking-[0.25em] uppercase text-primary font-semibold">From the Field</span>
      </div>

      {/* Giant heading - upper right */}
      <div className={`absolute top-24 sm:top-28 right-8 sm:right-14 md:right-20 z-20 text-right transition-all duration-900 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <h2 className="text-[3.8rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[11rem] font-serif font-bold text-foreground leading-[0.88] tracking-tight">
          Stories &amp;<br />Updates
        </h2>
      </div>

      {/* Short copy - upper left */}
      <div className={`absolute top-28 sm:top-36 left-8 sm:left-14 md:left-20 max-w-[160px] sm:max-w-[210px] z-20 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Real stories of rescue, recovery, and release. Follow along as we share life from inside the rehab.
        </p>
      </div>

      {/* Latest story titles - left, mid */}
      <div className={`absolute top-[40%] sm:top-[38%] left-8 sm:left-14 md:left-20 max-w-[220px] sm:max-w-xs z-20 space-y-4 transition-all duration-700 delay-280 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        {latest.map((story, i) => (
          <Link key={story.id} href={`/stories/${story.slug}`} className="block group">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-0.5">{new Date(story.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
            <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
              {story.title}
            </p>
          </Link>
        ))}
      </div>

      {/* Blog icon + label - right mid */}
      <div className={`absolute top-[48%] right-8 sm:right-14 md:right-20 z-20 flex items-center gap-2 transition-all duration-700 delay-320 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <BookOpen className="h-4 w-4 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">Updated regularly</span>
      </div>

      {/* View all stories CTA - bottom right */}
      <div className={`absolute bottom-32 sm:bottom-36 right-8 sm:right-14 md:right-20 z-20 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Button asChild className="rounded-full gap-2 h-12 px-7 bg-primary text-white hover:bg-primary/90 font-semibold text-sm shadow-lg shadow-primary/20">
          <Link href="/stories">
            Read All Stories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Coyote - large, bottom center */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[78%] sm:w-[64%] md:w-[54%] lg:w-[44%] max-w-2xl z-10 transition-all duration-1000 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
          <Image src="/images/animals/coyote.svg" alt="Coyote" fill className="object-contain object-bottom" sizes="(max-width: 768px) 78vw, 54vw" />
        </div>
      </div>
    </div>
  )
}
