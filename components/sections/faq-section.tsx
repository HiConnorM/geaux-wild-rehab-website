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
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const anim = (delay: number) =>
    `transition-all duration-700 ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`

  const topFaqs = faqs.filter(f => f.category === 'Found Wildlife').slice(0, 4)

  return (
    <section ref={ref} className="relative bg-white overflow-hidden py-24 lg:py-32">
      {/* Decorative blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#26C9AA]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Bobcat image */}
          <div className={`relative order-2 lg:order-1 ${anim(200)}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="aspect-square relative">
                <Image 
                  src="/images/animals/bobcat.svg" 
                  alt="Bobcat" 
                  fill 
                  className="object-contain drop-shadow-2xl" 
                  sizes="(max-width:768px) 100vw, 50vw" 
                />
              </div>
            </div>

            {/* Floating CTA card */}
            <div className={`absolute bottom-10 right-0 lg:right-10 bg-gradient-to-br from-[#26C9AA] to-[#1eb89a] rounded-2xl p-5 shadow-xl ${anim(450)}`} style={{ transitionDelay: '450ms' }}>
              <p className="text-white/90 text-sm mb-2">Need immediate help?</p>
              <Button asChild size="sm" className="rounded-full bg-white text-[#26C9AA] hover:bg-white/90 font-semibold">
                <Link href="/get-help">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  I Found Wildlife
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - FAQ content */}
          <div className="order-1 lg:order-2">
            <span className={`inline-block text-sm font-semibold text-[#26C9AA] uppercase tracking-wider mb-4 ${anim(100)}`} style={{ transitionDelay: '100ms' }}>
              Quick Answers
            </span>
            <h2 className={`font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1a1f3d] leading-tight mb-6 ${anim(150)}`} style={{ transitionDelay: '150ms' }}>
              Got Questions?
            </h2>
            <p className={`text-lg text-gray-600 mb-10 max-w-md ${anim(200)}`} style={{ transitionDelay: '200ms' }}>
              Found an injured animal? Not sure what to do? Here are answers to our most common questions.
            </p>

            {/* FAQ Accordion */}
            <div className={`mb-8 ${anim(250)}`} style={{ transitionDelay: '250ms' }}>
              <Accordion type="single" collapsible className="flex flex-col gap-3">
                {topFaqs.map((faq, i) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="bg-[#F8F4F4] rounded-2xl border-0 px-5 data-[state=open]:bg-[#26C9AA]/5"
                    style={{ transitionDelay: `${280 + i * 60}ms` }}
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold text-[#1a1f3d] hover:no-underline py-4 hover:text-[#26C9AA]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-600 pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <Link 
              href="/faq" 
              className={`inline-flex items-center gap-2 text-sm font-semibold text-[#3B468E] hover:text-[#26C9AA] transition-colors ${anim(500)}`}
              style={{ transitionDelay: '500ms' }}
            >
              View All FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
