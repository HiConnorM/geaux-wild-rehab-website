'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { stories } from '@/lib/content'

export function StoriesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1, rootMargin: '50px' })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const latest = stories.slice(0, 3)

  return (
    <section ref={ref} className="relative bg-[#F8F4F4] overflow-hidden py-20 lg:py-28">
      {/* Wavy top divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 60V30C480 60 960 0 1440 30V60H0Z" fill="white"/>
        </svg>
      </div>

      {/* Decorative diamonds */}
      <div className="absolute top-32 left-[5%] w-5 h-5 bg-[#3B468E]/15 rotate-45 rounded" />
      <div className="absolute top-48 right-[15%] w-4 h-4 bg-[#26C9AA]/20 rotate-45 rounded-sm" />
      <div className="absolute bottom-40 left-[12%] w-6 h-6 border-2 border-[#3B468E]/10 rotate-45 rounded" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
        {/* Bento layout */}
        <div className="grid lg:grid-cols-12 gap-5">
          
          {/* Header + story cards - 7 cols */}
          <div className="lg:col-span-7">
            <div className={`mb-8 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-3">From the Field</span>
              <h2 className="font-serif font-black text-4xl sm:text-5xl text-[#1a1f3d] leading-[1.1] mb-4">
                Stories &amp; Updates
              </h2>
              <p className="text-lg text-gray-600 max-w-md">
                Real stories of rescue, recovery, and release from our rehabilitation center.
              </p>
            </div>

            {/* Story cards */}
            <div className="flex flex-col gap-4">
              {latest.map((story, i) => (
                <Link
                  key={story.id}
                  href={`/stories/${story.slug}`}
                  className={`group flex gap-4 p-4 bg-white rounded-[1.5rem] shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#26C9AA]/30 transition-all duration-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-24 rounded-2xl bg-[#26C9AA]/10 flex items-center justify-center shrink-0 overflow-hidden">
                    {story.image ? (
                      <Image src={story.image} alt={story.title} width={96} height={96} className="w-full h-full object-cover rounded-xl" />
                    ) : (
                      <span className="text-3xl font-black text-[#26C9AA] font-serif">{String(i + 1).padStart(2, '0')}</span>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0 py-1">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Calendar className="h-3 w-3" />
                      {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h3 className="font-bold text-lg text-[#1a1f3d] group-hover:text-[#26C9AA] transition-colors line-clamp-1 mb-1">
                      {story.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{story.excerpt}</p>
                  </div>
                  
                  <div className="flex items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#F8F4F4] flex items-center justify-center group-hover:bg-[#26C9AA] transition-colors">
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className={`mt-8 transition-all duration-700 delay-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
              <Button asChild size="lg" className="rounded-full h-12 px-6 bg-[#3B468E] hover:bg-[#2d366d] text-white font-bold">
                <Link href="/stories">
                  All Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Coyote - 5 cols, pushed right */}
          <div className={`lg:col-span-5 relative transition-all duration-700 delay-300 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative w-full max-w-md ml-auto">
              <div className="aspect-[3/4] relative">
                <Image 
                  src="/images/animals/coyote.svg" 
                  alt="Coyote" 
                  fill 
                  className="object-contain drop-shadow-2xl" 
                  sizes="(max-width:768px) 100vw, 40vw" 
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className={`absolute top-8 left-0 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100 transition-all duration-700 delay-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
              <p className="text-sm text-gray-500">Updated</p>
              <p className="text-2xl font-black text-[#26C9AA]">Weekly</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
