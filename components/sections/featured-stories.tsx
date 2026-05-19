'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { stories, formatDate } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function FeaturedStories() {
  const featuredStories = stories.slice(0, 3)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Success Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
              Every Animal Has a Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These are just a few of the hundreds of animals we&apos;ve helped. 
              Each one represents a life saved and a success made possible by our community.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="shrink-0 gap-2 rounded-full px-8">
            <Link href="/stories">
              View All Stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Stories Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate ${isVisible ? 'visible' : ''}`}>
          {featuredStories.map((story, index) => (
            <Link
              key={story.id}
              href={`/stories/${story.slug}`}
              className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:-translate-y-2"
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={story.heroImage}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {story.species.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-white/95 text-foreground text-xs font-medium shadow-sm border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {/* Read more indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white text-foreground text-sm font-medium shadow-lg">
                    Read story
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  {formatDate(story.date, { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                  {story.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
