import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { faqs } from '@/lib/content'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about wildlife rehabilitation, what to do if you find an injured animal, and how to support Geaux Wild Rehab.',
}

export default function FAQPage() {
  // Group FAQs by category
  const categories = Array.from(new Set(faqs.map(f => f.category)))
  const faqsByCategory = categories.map(category => ({
    category,
    items: faqs.filter(f => f.category === category)
  }))

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about wildlife rehabilitation, 
              what to do if you find an injured animal, and how to support our mission.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqsByCategory.map(({ category, items }) => (
              <div key={category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-foreground">
                    {category}
                  </h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-3">
                  {items.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="bg-card rounded-xl border border-border px-5 data-[state=open]:bg-secondary/50 transition-colors"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4 hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-3">
                Still Have Questions?
              </h2>
              <p className="text-white/80">
                Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
      <Button asChild size="lg" className="bg-white text-[#3B468E] hover:bg-white/90 gap-2 rounded-full px-8 h-14 font-semibold">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 gap-2 rounded-full px-8 h-14 font-semibold">
                <a href="tel:5044918036" aria-label="Call Geaux Wild Rehab at 504-491-8036">
                  <Phone className="h-4 w-4" />
                  504-491-8036
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
