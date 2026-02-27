import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, Check, X, Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HelpRequestForm } from '@/components/forms/help-request-form'
import { FAQPageSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Found Wildlife? Get Help',
  description: 'Found injured or orphaned wildlife in Louisiana? Learn what to do and submit a help request to Geaux Wild Rehab.',
}

const steps = [
  {
    number: '1',
    title: 'Assess the Situation',
    description: 'Observe from a distance. Is the animal truly in distress, or is a parent nearby?',
  },
  {
    number: '2',
    title: 'Secure the Animal',
    description: 'If help is needed, gently place the animal in a ventilated box with soft cloth.',
  },
  {
    number: '3',
    title: 'Keep Warm & Quiet',
    description: 'Place the box in a warm, dark, quiet area away from children and pets.',
  },
  {
    number: '4',
    title: 'Contact Us',
    description: 'Fill out our form below or call/text our hotline for immediate guidance.',
  },
]

const doList = [
  'Keep the animal warm and in a quiet, dark place',
  'Wear gloves when handling wildlife',
  'Note where you found the animal',
  'Keep pets and children away',
  'Contact a licensed rehabilitator',
]

const dontList = [
  'Feed or give water (unless instructed)',
  'Keep the animal as a pet',
  'Post on social media asking for advice',
  'Release the animal elsewhere',
  'Handle bats, raccoons, or foxes without protection',
]

const scenarios = [
  {
    title: 'Baby Squirrel',
    description: 'Hairless or eyes closed: needs immediate help. Furred with eyes open: may be learning to climb.',
    urgent: true,
  },
  {
    title: 'Baby Rabbit',
    description: 'Cottontails are independent at just 4-5 inches. If eyes open and hopping, likely fine.',
    urgent: false,
  },
  {
    title: 'Baby Opossum',
    description: 'Under 7 inches (not including tail): needs help. Check nearby for deceased mother.',
    urgent: true,
  },
  {
    title: 'Injured Bird',
    description: 'Any bird with visible injury, blood, or that cannot fly needs immediate care.',
    urgent: true,
  },
]

const faqSchemaData = [
  { question: 'What should I do if I find injured wildlife?', answer: 'Assess the situation from a distance, then secure the animal in a ventilated box if help is needed. Keep it warm and quiet, and contact a licensed rehabilitator immediately.' },
  { question: 'Should I feed the animal I found?', answer: 'No. Do not feed or give water to wildlife unless specifically instructed by a licensed rehabilitator. Incorrect food can cause serious harm.' },
]

export default function GetHelpPage() {
  return (
    <>
      <FAQPageSchema faqs={faqSchemaData} />

      {/* Emergency Banner */}
      <section className="pt-24 bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-4">
            <div className="shrink-0 p-2 rounded-lg bg-amber-100">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h2 className="font-semibold text-amber-900">Before You Act</h2>
              <p className="text-sm text-amber-800">
                Many baby animals are NOT orphaned. Parents often leave babies while foraging. 
                Observe from a distance before intervening. When in doubt, contact us first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Found Wildlife?
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              We Are Here to Help
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              If you have found injured or orphaned wildlife in Louisiana, follow the steps below 
              and contact us for guidance. Our team is ready to help give wildlife a second chance.
            </p>
            <Button asChild size="lg" className="gap-2 gradient-brand text-white border-0 hover:opacity-90">
              <a href="#help-form">
                Submit Help Request
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-8 text-center">
            What to Do Right Now
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative bg-card rounded-xl p-6 border border-border"
              >
                <div className="w-10 h-10 rounded-full gradient-brand text-white font-bold flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do / Don't Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-8 text-center">
            Important Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Do */}
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <Check className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-900">Do</h3>
              </div>
              <ul className="space-y-3">
                {doList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-emerald-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don't */}
            <div className="bg-rose-50 rounded-xl p-6 border border-rose-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-rose-100">
                  <X className="h-5 w-5 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-rose-900">Don&apos;t</h3>
              </div>
              <ul className="space-y-3">
                {dontList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-rose-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4 text-center">
            Common Scenarios
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Not sure if the animal needs help? Here are some common situations.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="bg-card rounded-xl p-5 border border-border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-card-foreground">{scenario.title}</h3>
                  {scenario.urgent && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                      Often urgent
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{scenario.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href="/faq" className="text-primary hover:underline">
              View more FAQs about specific species
            </Link>
          </p>
        </div>
      </section>

      {/* Help Request Form */}
      <section id="help-form" className="py-16 lg:py-24 bg-secondary scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-card-foreground mb-2">
              Submit a Help Request
            </h2>
            <p className="text-muted-foreground mb-8">
              Fill out this form and we will contact you as soon as possible with guidance.
            </p>
            <HelpRequestForm />
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 gradient-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-1">Need Immediate Assistance?</h3>
              <p className="text-white/80">Call or text our wildlife hotline for urgent situations.</p>
            </div>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a href="tel:+15551234567">
                <Phone className="h-5 w-5" />
                Call Hotline
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
