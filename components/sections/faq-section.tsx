'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, HelpCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { faqs } from '@/lib/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function FAQSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.1, rootMargin: '50px' })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const topFaqs = faqs.filter(f => f.category === 'Found Wildlife').slice(0, 4)

  return (
    <section ref={ref} className="relative bg-white overflow-hidden py-20 lg:py-28">
      {/* Decorative diamonds */}
      <div className="absolute top-28 right-[8%] w-5 h-5 bg-[#26C9AA]/15 rotate-45 rounded hidden md:block" />
      <div className="absolute top-48 left-[12%] w-4 h-4 bg-[#3B468E]/15 rotate-45 rounded-sm hidden md:block" />
      <div className="absolute bottom-32 right-[15%] w-6 h-6 border-2 border-[#26C9AA]/15 rotate-45 rounded hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Bento grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Bobcat + CTA card - 5 cols, positioned at bottom left edge */}
          <div className={`lg:col-span-5 relative order-2 lg:order-1 transition-all duration-700 delay-200 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-full min-h-[350px]">
              <Image 
                src="/images/animals/bobcat.svg" 
                alt="Bobcat" 
                fill 
                className="object-contain object-left-bottom drop-shadow-2xl mt-[83px] mr-[9px] ml-[-25px]" 
                sizes="(max-width:768px) 100vw, 40vw" 
              />
            </div>

            {/* Floating CTA card */}
            <div className={`absolute bottom-4 right-0 md:right-4 bg-[#26C9AA] rounded-xl md:rounded-[1.5rem] p-4 md:p-5 shadow-xl transition-all duration-700 delay-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-white/90 text-xs md:text-sm mb-2 md:mb-3">Need immediate help?</p>
              <Button asChild size="sm" className="rounded-full bg-white text-[#26C9AA] hover:bg-white/90 font-bold text-xs md:text-sm h-9 md:h-10">
                <Link href="/get-help">
                  <HelpCircle className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                  I Found Wildlife
                </Link>
              </Button>
            </div>

            {/* Hotline badge */}
            <div className={`absolute top-4 left-0 bg-white rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 shadow-lg border border-gray-100 transition-all duration-700 delay-400 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 md:h-4 md:w-4 text-[#26C9AA]" />
                <span className="font-bold text-[#1a1f3d] text-xs md:text-sm">(225) 505-5050</span>
              </div>
            </div>
          </div>

          {/* FAQ content - 7 cols */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className={`mb-6 md:mb-8 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-3">Quick Answers</span>
              <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#1a1f3d] leading-[1.1] mb-4">
                Got Questions?
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-lg">
                Found an injured animal? Not sure what to do? Here are answers to our most common questions.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className={`mb-6 transition-all duration-700 delay-200 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Accordion type="single" collapsible className="flex flex-col gap-2 md:gap-3">
                {topFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="bg-[#F8F4F4] rounded-xl md:rounded-2xl border-0 px-4 md:px-5 data-[state=open]:bg-[#26C9AA]/10 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-bold text-sm md:text-base text-[#1a1f3d] hover:no-underline py-3 md:py-4 hover:text-[#26C9AA] transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-3 md:pb-4 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <Link 
              href="/faq" 
              className={`inline-flex items-center gap-2 font-bold text-[#3B468E] hover:text-[#26C9AA] transition-colors text-sm md:text-base ${vis ? 'opacity-100' : 'opacity-0'}`}
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
