import { TransitionLink } from '@/components/page-transition/transition-link'
import { ArrowRight, HelpCircle, MessageCircle } from 'lucide-react'
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
    <section className="py-24 lg:py-32 bg-gradient-to-b from-secondary/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Common Questions
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Found Wildlife? We&apos;re Here to Help
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Not sure what to do? We&apos;ve compiled answers to the most 
              common questions we receive. If you don&apos;t find what you&apos;re looking for, 
              don&apos;t hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 font-semibold">
                <TransitionLink href="/get-help">
                  I Found Wildlife
                  <ArrowRight className="h-4 w-4" />
                </TransitionLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-8 h-14">
                <TransitionLink href="/faq">
                  View All FAQs
                  <ArrowRight className="h-4 w-4" />
                </TransitionLink>
              </Button>
            </div>

            {/* Contact card */}
            <div className="mt-10 bg-white rounded-2xl p-6 border border-border/50 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Still have questions?</h3>
                  <p className="text-muted-foreground text-sm mb-3">Our team is here to help 7 days a week.</p>
                  <TransitionLink href="/contact" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
                    Contact us <ArrowRight className="h-3 w-3" />
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {featuredFAQs.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-white rounded-2xl border border-border/50 px-6 data-[state=open]:shadow-lg data-[state=open]:border-primary/20 transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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
