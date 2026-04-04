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
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.07, rootMargin: '0px 0px -80px 0px' })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const b = 'transition-all duration-700'
  const h = 'opacity-0 translate-y-6'
  const s = 'opacity-100 translate-y-0'

  const topFaqs = faqs.filter(f => f.category === 'Found Wildlife').slice(0, 3)

  return (
    <div ref={ref} className="relative min-h-screen bg-[#F8F4F4] overflow-hidden">

      {/* ── Top content grid ── */}
      <div className="relative z-20 grid grid-cols-2 gap-x-8 px-6 sm:px-12 md:px-20 pt-20">

        {/* LEFT: heading */}
        <div className="flex flex-col gap-4">
          <span className={`text-[11px] tracking-[0.22em] uppercase text-primary font-semibold ${b} delay-75 ${vis ? s : h}`}>
            Quick Answers
          </span>
          <h2 className={`font-serif font-bold leading-[0.85] tracking-tight text-[3.2rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[10rem] text-foreground ${b} delay-100 ${vis ? s : h}`}>
            Got<br />Questions?
          </h2>
        </div>

        {/* RIGHT: short copy */}
        <div className="flex flex-col items-end gap-4 text-right pt-4">
          <p className={`text-sm text-muted-foreground leading-relaxed max-w-xs ${b} delay-150 ${vis ? s : h}`}>
            Found an injured animal? Not sure what to do? Here are answers to our most common questions.
          </p>
        </div>
      </div>

      {/* ── FAQ accordion — right side, clear of the bobcat ── */}
      <div className={`relative z-20 px-6 sm:px-12 md:px-20 mt-8 flex justify-end ${b} delay-200 ${vis ? s : h}`}>
        <div className="w-full max-w-sm sm:max-w-md">
          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {topFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-xl border border-border/50 px-4 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-xs sm:text-sm font-semibold text-foreground hover:no-underline py-4 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* ── CTAs above animal ── */}
      <div className={`absolute bottom-[44%] sm:bottom-[42%] left-6 sm:left-12 md:left-20 z-20 flex gap-3 ${b} delay-350 ${vis ? s : h}`}>
        <Button asChild className="rounded-full h-11 px-6 bg-primary text-white hover:bg-primary/90 font-semibold text-sm shadow-lg shadow-primary/20">
          <Link href="/get-help"><HelpCircle className="mr-2 h-4 w-4" />I Found Wildlife</Link>
        </Button>
      </div>

      <div className={`absolute bottom-[47%] sm:bottom-[44%] right-6 sm:right-12 md:right-20 z-20 ${b} delay-400 ${vis ? s : h}`}>
        <Link href="/faq" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors group">
          View all FAQs <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Bobcat — bottom center */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[88%] sm:w-[72%] md:w-[58%] lg:w-[46%] max-w-xl z-10 ${b} delay-120 ${vis ? s : h}`}>
        <div className="relative w-full aspect-square">
          <Image src="/images/animals/bobcat.svg" alt="Bobcat" fill className="object-contain object-bottom" sizes="(max-width:768px) 88vw, 58vw" />
        </div>
      </div>
    </div>
  )
}
