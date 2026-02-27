import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { stories } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function FeaturedStories() {
  const featuredStories = stories.slice(0, 3)

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Success Stories
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Every Animal Has a Story
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              These are just a few of the hundreds of animals we&apos;ve helped. 
              Each one represents a life saved and a success made possible by our community.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 gap-2">
            <Link href="/stories">
              View All Stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStories.map((story) => (
            <Link
              key={story.id}
              href={`/stories/${story.slug}`}
              className="group block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={story.heroImage}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {story.species.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-white/90 text-foreground text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  {new Date(story.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
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
