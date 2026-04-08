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
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const anim = (delay: number) =>
    `transition-all duration-700 ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`

  const latest = stories.slice(0, 3)

  return (
    <section ref={ref} className="relative bg-[#F8F4F4] overflow-hidden py-24 lg:py-32">
      {/* Decorative blob */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#3B468E]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Story cards */}
          <div>
            <span className={`inline-block text-sm font-semibold text-[#26C9AA] uppercase tracking-wider mb-4 ${anim(100)}`} style={{ transitionDelay: '100ms' }}>
              From the Field
            </span>
            <h2 className={`font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1a1f3d] leading-tight mb-6 ${anim(150)}`} style={{ transitionDelay: '150ms' }}>
              Stories &amp; Updates
            </h2>
            <p className={`text-lg text-gray-600 mb-10 max-w-md ${anim(200)}`} style={{ transitionDelay: '200ms' }}>
              Real stories of rescue, recovery, and release. Follow along as we share life inside the rehab.
            </p>

            {/* Story cards */}
            <div className="flex flex-col gap-4 mb-8">
              {latest.map((story, i) => (
                <Link
                  key={story.id}
                  href={`/stories/${story.slug}`}
                  className={`group flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#26C9AA]/30 transition-all ${anim(250 + i * 80)}`}
                  style={{ transitionDelay: `${250 + i * 80}ms` }}
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-xl bg-[#26C9AA]/10 flex items-center justify-center shrink-0 overflow-hidden">
                    {story.image ? (
                      <Image src={story.image} alt={story.title} width={80} height={80} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-2xl font-bold text-[#26C9AA] font-serif">{String(i + 1).padStart(2, '0')}</span>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h3 className="font-bold text-[#1a1f3d] group-hover:text-[#26C9AA] transition-colors line-clamp-1 mb-1">
                      {story.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{story.excerpt}</p>
                  </div>
                  
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#26C9AA] shrink-0 mt-2 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>

            <Button asChild size="lg" className={`rounded-full h-14 px-8 bg-[#26C9AA] hover:bg-[#1eb89a] text-white font-semibold ${anim(500)}`} style={{ transitionDelay: '500ms' }}>
              <Link href="/stories">
                Read All Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Right - Coyote image */}
          <div className={`relative ${anim(300)}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative w-full max-w-lg ml-auto">
              <div className="aspect-[3/4] relative">
                <Image 
                  src="/images/animals/coyote.svg" 
                  alt="Coyote" 
                  fill 
                  className="object-contain drop-shadow-2xl" 
                  sizes="(max-width:768px) 100vw, 50vw" 
                />
              </div>
            </div>

            {/* Floating update badge */}
            <div className={`absolute top-10 left-0 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100 ${anim(450)}`} style={{ transitionDelay: '450ms' }}>
              <p className="text-sm text-gray-500">Updated</p>
              <p className="text-lg font-bold text-[#3B468E]">Weekly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
