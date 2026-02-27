import Link from 'next/link'
import { ArrowRight, HelpCircle } from 'lucide-react'
import { faqs } from '@/lib/content'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQTeaser() {
  // Get first 4 FAQs from "Found Wildlife" category
  const featuredFAQs = faqs.filter((faq) => faq.category === 'Found Wildlife').slice(0, 4)

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-6">
              Found injured wildlife? Not sure what to do? We&apos;ve compiled answers to the most 
              common questions we receive. If you don&apos;t find what you&apos;re looking for, 
              don&apos;t hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="gap-2 gradient-brand text-white border-0 hover:opacity-90">
                <Link href="/get-help">
                  I Found Wildlife
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link href="/faq">
                  View All FAQs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {featuredFAQs.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="text-left font-medium text-card-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
