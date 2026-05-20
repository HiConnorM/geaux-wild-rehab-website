'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { stories, formatDate } from '@/lib/content'

export function StoriesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(true)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1, rootMargin: '50px' })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const latest = stories.slice(0, 3)

  return (
    <section ref={ref} className="relative bg-[#F8F4F4] overflow-hidden -mt-px">

      {/* Decorative diamonds */}
      <div className="absolute top-12 left-[5%] w-5 h-5 bg-[#3B468E]/15 rotate-45 rounded hidden md:block" />
      <div className="absolute top-28 right-[15%] w-4 h-4 bg-[#26C9AA]/20 rotate-45 rounded-sm hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-0 md:pt-20">

        {/* Bento layout */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-8">

          {/* Header + story cards — 7 cols */}
          <div className="lg:col-span-7 pb-20 md:pb-28">
            <div className={`mb-6 md:mb-8 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-3">From the Field</span>
              <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#1a1f3d] leading-[1.1] mb-4">
                Stories &amp; Updates
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-md">
                Real stories of rescue, recovery, and release from our rehabilitation center.
              </p>
            </div>

            {/* Story cards */}
            <div className="flex flex-col gap-3 md:gap-4">
              {latest.map((story, i) => (
                <Link
                  key={story.id}
                  href={`/stories/${story.slug}`}
                  className={`group flex gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-xl md:rounded-[1.5rem] shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#26C9AA]/30 transition-all duration-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-[#26C9AA]/10 flex items-center justify-center shrink-0 overflow-hidden">
                    {story.heroImage ? (
                      <Image src={story.heroImage} alt={story.title} width={96} height={96} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-2xl md:text-3xl font-black text-[#26C9AA] font-serif">{String(i + 1).padStart(2, '0')}</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0 py-1">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1 md:mb-2">
                      <Calendar className="h-3 w-3" />
                      {formatDate(story.date, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h3 className="font-bold text-base md:text-lg text-[#1a1f3d] group-hover:text-[#26C9AA] transition-colors line-clamp-1 mb-1">
                      {story.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 line-clamp-2">{story.excerpt}</p>
                  </div>

                  <div className="hidden sm:flex items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#F8F4F4] flex items-center justify-center group-hover:bg-[#26C9AA] transition-colors">
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className={`mt-6 md:mt-8 transition-all duration-700 delay-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button asChild size="lg" className="rounded-full h-11 md:h-12 px-5 md:px-6 bg-[#3B468E] hover:bg-[#2d366d] text-white font-bold w-full sm:w-auto">
                <Link href="/stories">
                  All Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Coyote — 5 cols, z-0 so bottom wave covers its feet */}
          <div className={`lg:col-span-5 relative z-0 transition-all duration-700 delay-300 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Floating badge */}
            <div className={`absolute top-0 right-0 bg-white rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 shadow-xl border border-gray-100 z-10 transition-all duration-700 delay-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xs md:text-sm text-gray-500">Updated</p>
              <p className="text-xl md:text-2xl font-black text-[#26C9AA]">Weekly</p>
            </div>

            <div className="relative h-[320px] sm:h-[400px] md:h-[500px] lg:h-full min-h-[400px]">
              <Image
                src="/images/animals/coyote.svg"
                alt="Coyote"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                style={{ marginLeft: '24px' }}
                sizes="(max-width:768px) 100vw, 45vw"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Wave at bottom — white bites up; z-20 sits IN FRONT of coyote (z-0) */}
      <div className="absolute left-0 right-0 z-20 pointer-events-none" style={{ lineHeight: 0, bottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 'clamp(48px, 6vw, 80px)', display: 'block' }} preserveAspectRatio="none">
          <path d="M0 80V40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
