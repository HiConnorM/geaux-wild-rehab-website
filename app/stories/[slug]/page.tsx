import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, ArrowLeft, Share2, Heart, ArrowRight } from 'lucide-react'
import { getStoryBySlug, getStories, formatDate } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArticleSchema } from '@/lib/seo'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const stories = await getStories()
  return stories.map((story) => ({
    slug: story.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const story = await getStoryBySlug(slug)

  if (!story) {
    return {
      title: 'Story Not Found',
    }
  }

  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      type: 'article',
      publishedTime: story.date,
      images: [story.heroImage],
    },
  }
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params
  const story = await getStoryBySlug(slug)

  if (!story) {
    notFound()
  }

  const allStories = await getStories()
  const relatedStories = allStories
    .filter((s) => s.id !== story.id)
    .slice(0, 2)

  return (
    <>
      <ArticleSchema
        title={story.title}
        description={story.excerpt}
        image={story.heroImage}
        datePublished={story.date}
      />

      {/* Back Navigation */}
      <div className="pt-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link href="/stories">
              <ArrowLeft className="h-4 w-4" />
              All Stories
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <article className="pb-16 lg:pb-24">
        <header className="bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {story.species.map((tag) => (
                <Badge key={tag} variant="secondary" className="capitalize">
                  {tag}
                </Badge>
              ))}
              {story.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="capitalize">
                  {tag.replace('-', ' ')}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              {story.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {formatDate(story.date, { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src={story.heroImage}
              alt={story.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-serif prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: story.content }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Share This Story</h3>
                <p className="text-sm text-muted-foreground">
                  Help us spread the word about wildlife rehabilitation
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Support CTA */}
          <div className="mt-12 p-6 lg:p-8 rounded-2xl gradient-brand">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                Help Us Save More Animals
              </h3>
              <p className="text-white/80 mb-4">
                Your support makes stories like this possible. Every donation helps us 
                provide critical care for wildlife in need.
              </p>
              <Button asChild className="bg-white text-primary hover:bg-white/90 gap-2">
                <Link href="/support">
                  <Heart className="h-4 w-4" />
                  Donate Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Stories */}
      {relatedStories.length > 0 && (
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
              More Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedStories.map((relatedStory) => (
                <Link
                  key={relatedStory.id}
                  href={`/stories/${relatedStory.slug}`}
                  className="group flex gap-4 bg-card rounded-xl p-4 border border-border hover:shadow-md transition-all"
                >
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={relatedStory.heroImage}
                      alt={relatedStory.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">
                      {formatDate(relatedStory.date, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                    <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedStory.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedStory.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="gap-2">
                <Link href="/stories">
                  View All Stories
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
