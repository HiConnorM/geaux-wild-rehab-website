'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { faqs } from '@/lib/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function FAQSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.08 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const topFaqs = faqs.filter(f => f.category === 'Found Wildlife').slice(0, 3)

  return (
    <div ref={ref} className="relative min-h-screen bg-white overflow-hidden">

      {/* Section label */}
      <div className={`absolute top-14 left-8 sm:left-14 md:left-20 z-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
        <span className="text-[11px] tracking-[0.25em] uppercase text-primary font-semibold">Quick Answers</span>
      </div>

      {/* Giant heading - upper left */}
      <div className={`absolute top-24 sm:top-28 left-8 sm:left-14 md:left-20 z-20 transition-all duration-900 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <h2 className="text-[3.8rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[11rem] font-serif font-bold text-foreground leading-[0.88] tracking-tight">
          Got<br />Questions?
        </h2>
      </div>

      {/* Short copy - upper right */}
      <div className={`absolute top-28 sm:top-36 right-8 sm:right-14 md:right-20 max-w-[160px] sm:max-w-[210px] z-20 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-right">
          Found an injured animal? Not sure what to do? Here are the answers to our most common questions.
        </p>
      </div>

      {/* FAQ accordion - right side, mid */}
      <div className={`absolute top-[38%] sm:top-[36%] right-8 sm:right-14 md:right-20 w-[55%] sm:w-[48%] md:w-[42%] max-w-md z-20 transition-all duration-700 delay-280 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <Accordion type="single" collapsible className="space-y-2">
          {topFaqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-secondary/60 rounded-xl border-0 px-4"
            >
              <AccordionTrigger className="text-left text-xs sm:text-sm font-semibold text-foreground hover:no-underline py-3.5 hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-3.5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Help icon + "I found wildlife" CTA - bottom left */}
      <div className={`absolute bottom-32 sm:bottom-36 left-8 sm:left-14 md:left-20 z-20 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Button asChild className="rounded-full gap-2 h-12 px-7 bg-primary text-white hover:bg-primary/90 font-semibold text-sm shadow-lg shadow-primary/20">
          <Link href="/get-help">
            <HelpCircle className="h-4 w-4" />
            I Found Wildlife
          </Link>
        </Button>
      </div>

      {/* All FAQs link - bottom right */}
      <div className={`absolute bottom-36 right-8 sm:right-14 md:right-20 z-20 transition-all duration-700 delay-450 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Link href="/faq" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
          View all FAQs
          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Bobcat - large, bottom center */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] sm:w-[62%] md:w-[52%] lg:w-[42%] max-w-xl z-10 transition-all duration-1000 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
          <Image src="/images/animals/bobcat.svg" alt="Bobcat" fill className="object-contain object-bottom" sizes="(max-width: 768px) 75vw, 52vw" />
        </div>
      </div>
    </div>
  )
}
