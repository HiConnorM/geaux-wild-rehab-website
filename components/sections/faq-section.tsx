'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, HelpCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { faqs } from '@/lib/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { prefersReducedMotion, ST_DEFAULTS, EASE_OUT } from '@/lib/gsap-utils'

export function FAQSection() {
  const ref = useRef<HTMLElement>(null)
  const animalColRef = useRef<HTMLDivElement>(null)
  const faqHeaderRef = useRef<HTMLDivElement>(null)
  const accordionRef = useRef<HTMLDivElement>(null)
  const faqLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    let ctx: import('gsap').Context | undefined
    ;(async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (prefersReducedMotion()) return

      ctx = gsap.context(() => {
        gsap.set([animalColRef.current, faqHeaderRef.current, accordionRef.current, faqLinkRef.current], { opacity: 0, y: 32 })

        gsap.to(animalColRef.current, {
          opacity: 1, y: 0,
          duration: 0.8, ease: EASE_OUT,
          scrollTrigger: { trigger: animalColRef.current, ...ST_DEFAULTS },
        })

        gsap.to(faqHeaderRef.current, {
          opacity: 1, y: 0,
          duration: 0.7, ease: EASE_OUT,
          scrollTrigger: { trigger: faqHeaderRef.current, ...ST_DEFAULTS },
        })

        gsap.to(accordionRef.current, {
          opacity: 1, y: 0,
          duration: 0.7, ease: EASE_OUT,
          delay: 0.1,
          scrollTrigger: { trigger: accordionRef.current, ...ST_DEFAULTS },
        })

        gsap.to(faqLinkRef.current, {
          opacity: 1, y: 0,
          duration: 0.6, ease: EASE_OUT,
          delay: 0.15,
          scrollTrigger: { trigger: faqLinkRef.current, ...ST_DEFAULTS },
        })
      }, ref)
    })()

    return () => ctx?.revert()
  }, [])

  const topFaqs = faqs.filter(f => f.category === 'Found Wildlife').slice(0, 4)

  return (
    <section ref={ref} className="relative z-10 bg-white overflow-visible -mt-[3px]">

      {/* Decorative diamonds */}
      <div className="absolute top-8 right-[8%] w-5 h-5 bg-[#26C9AA]/15 rotate-45 rounded hidden md:block" />
      <div className="absolute top-24 left-[12%] w-4 h-4 bg-[#3B468E]/15 rotate-45 rounded-sm hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">

          {/* FAQ content */}
          <div className="lg:col-span-7 order-last lg:order-last pb-28 md:pb-36">
            <div ref={faqHeaderRef} className="mb-6 md:mb-8" style={{ opacity: 0 }}>
              <span className="inline-block text-sm font-bold text-[#26C9AA] uppercase tracking-wider mb-3">Quick Answers</span>
              <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#1a1f3d] leading-[1.1] mb-4">
                Got Questions?
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-lg">
                Found an injured animal? Not sure what to do? Here are answers to our most common questions.
              </p>
            </div>

            <div ref={accordionRef} className="mb-6" style={{ opacity: 0 }}>
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
              ref={faqLinkRef}
              href="/faq"
              className="inline-flex items-center gap-2 font-bold text-[#3B468E] hover:text-[#26C9AA] transition-colors text-sm md:text-base"
              style={{ opacity: 0 }}
            >
              View All FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Coyote col */}
          <div ref={animalColRef} className="lg:col-span-5 relative order-first lg:order-first" style={{ opacity: 0 }}>

            {/* Hotline badge */}
            <div className="absolute top-0 right-0 bg-white rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 shadow-lg border border-gray-100 z-10">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 md:h-4 md:w-4 text-[#26C9AA]" />
                <span className="font-bold text-[#1a1f3d] text-xs md:text-sm">504-491-8036</span>
              </div>
            </div>

            {/* Floating CTA */}
            <div className="absolute top-12 right-0 bg-[#26C9AA] rounded-xl md:rounded-[1.5rem] p-4 md:p-5 shadow-xl z-10">
              <p className="text-white/90 text-xs md:text-sm mb-2 md:mb-3">Need wildlife guidance?</p>
              <Button asChild size="sm" className="rounded-full bg-white text-[#26C9AA] hover:bg-white/90 font-bold text-xs md:text-sm h-9 md:h-10">
                <Link href="/get-help">
                  <HelpCircle className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                  I Found Wildlife
                </Link>
              </Button>
            </div>

            {/* Coyote image */}
            <div className="relative h-[360px] sm:h-[420px] md:h-[500px] lg:h-full min-h-[460px] z-0">
              <Image
                src="https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Coyote/transparent-coyote.png"
                alt="Coyote"
                fill
                className="object-contain object-bottom drop-shadow-2xl scale-120 origin-bottom"
                sizes="(max-width:768px) 100vw, 40vw"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute left-0 right-0 z-20 pointer-events-none" style={{ lineHeight: 0, bottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 'clamp(48px, 6vw, 80px)', display: 'block' }} preserveAspectRatio="none">
          <path d="M0 80V40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0Z" fill="#26C9AA"/>
        </svg>
      </div>
    </section>
  )
}
