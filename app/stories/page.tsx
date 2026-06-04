import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight, Heart } from 'lucide-react'
import { getStories, formatDate } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Success Stories',
  description: 'Read heartwarming stories about the animals we have rehabilitated and released back into the wild.',
  robots: { index: false, follow: false },
}

export default async function StoriesPage() {
  const stories = await getStories()

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Success Stories
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Every Animal Has a Story
            </h1>
            <p className="text-lg text-muted-foreground">
              From tiny orphaned babies to injured adults, each animal that comes through 
              our doors has a unique journey. These are some of their stories.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {stories.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story) => (
                <article
                  key={story.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                >
                  <Link href={`/stories/${story.slug}`}>
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={story.heroImage}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {story.species.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-white/90 text-foreground text-xs capitalize"
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
                        {formatDate(story.date, { month: 'long', day: 'numeric', year: 'numeric' })}
                      </div>
                      <h2 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                        {story.title}
                      </h2>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {story.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                        Read Story
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No stories available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-4">
            Help Us Write More Happy Endings
          </h2>
          <p className="text-white/80 mb-6">
            Every donation helps us save more animals and create more success stories.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
            <Link href="/support">
              <Heart className="h-5 w-5" />
              Support Our Mission
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
