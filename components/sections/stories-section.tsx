'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { stories } from '@/lib/content'

export function StoriesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.07, rootMargin: '0px 0px -80px 0px' })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const b = 'transition-all duration-700'
  const h = 'opacity-0 translate-y-6'
  const s = 'opacity-100 translate-y-0'

  const latest = stories.slice(0, 3)

  return (
    <div ref={ref} className="relative min-h-screen bg-white overflow-hidden">

      {/* ── Top content ── */}
      <div className="relative z-20 grid grid-cols-2 gap-x-8 px-6 sm:px-12 md:px-20 pt-20">

        {/* LEFT: section label + heading */}
        <div className="flex flex-col gap-4">
          <span className={`text-[11px] tracking-[0.22em] uppercase text-primary font-semibold ${b} delay-75 ${vis ? s : h}`}>
            From the Field
          </span>
          <h2 className={`font-serif font-bold leading-[0.85] tracking-tight text-[3.2rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10.5rem] text-foreground ${b} delay-100 ${vis ? s : h}`}>
            Stories &amp;<br />Updates
          </h2>
        </div>

        {/* RIGHT: short copy + updated badge */}
        <div className="flex flex-col items-end gap-4 text-right pt-4">
          <p className={`text-sm text-muted-foreground leading-relaxed max-w-xs ${b} delay-150 ${vis ? s : h}`}>
            Real stories of rescue, recovery, and release. Follow along as we share life from inside the rehab.
          </p>
          <div className={`inline-flex items-center gap-1.5 text-xs text-muted-foreground ${b} delay-200 ${vis ? s : h}`}>
            <BookOpen className="h-3.5 w-3.5" />
            Updated regularly
          </div>
        </div>
      </div>

      {/* ── Story cards — left column, positioned above animal ── */}
      <div className={`relative z-20 px-6 sm:px-12 md:px-20 mt-10 w-full max-w-sm ${b} delay-250 ${vis ? s : h}`}>
        <div className="flex flex-col gap-3">
          {latest.map((story, i) => (
            <Link
              key={story.id}
              href={`/stories/${story.slug}`}
              className="group flex gap-3 items-start p-3 rounded-xl bg-[#F8F4F4] border border-border/40 hover:border-primary/30 hover:bg-secondary/40 transition-all"
              style={{ transitionDelay: vis ? `${i * 60}ms` : '0ms' }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-lg font-serif">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {new Date(story.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                  {story.title}
                </p>
                <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">{story.excerpt}</p>
              </div>
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ))}
        </div>
      </div>

      {/* ── Read all CTA — above animal, left ── */}
      <div className={`absolute bottom-[44%] sm:bottom-[42%] left-6 sm:left-12 md:left-20 z-20 ${b} delay-400 ${vis ? s : h}`}>
        <Button asChild className="rounded-full h-11 px-6 bg-primary text-white hover:bg-primary/90 font-semibold text-sm shadow-lg shadow-primary/20">
          <Link href="/stories">Read All Stories <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
        </Button>
      </div>

      {/* Coyote — large, pushed to the RIGHT side bottom */}
      <div className={`absolute bottom-0 right-0 w-[55%] sm:w-[46%] md:w-[38%] lg:w-[32%] max-w-lg z-10 ${b} delay-120 ${vis ? s : h}`}>
        <div className="relative w-full aspect-[3/4]">
          <Image src="/images/animals/coyote.svg" alt="Coyote" fill className="object-contain object-bottom" sizes="(max-width:768px) 55vw, 38vw" />
        </div>
      </div>
    </div>
  )
}
