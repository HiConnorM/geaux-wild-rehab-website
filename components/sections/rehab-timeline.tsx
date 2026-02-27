'use client'

import { Stethoscope, Shield, Activity, TreeDeciduous } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  {
    icon: Stethoscope,
    title: 'Intake & Assessment',
    description: 'Every animal receives a thorough examination upon arrival to assess injuries, health status, and immediate needs.',
    number: '01',
  },
  {
    icon: Shield,
    title: 'Stabilization',
    description: 'Critical care to address injuries, dehydration, malnutrition, and other immediate health concerns.',
    number: '02',
  },
  {
    icon: Activity,
    title: 'Rehabilitation',
    description: 'Species-specific care, proper nutrition, and natural skill-building to prepare for life in the wild.',
    number: '03',
  },
  {
    icon: TreeDeciduous,
    title: 'Release',
    description: 'Return to carefully selected habitats that provide the best chance for long-term survival.',
    number: '04',
  },
]

export function RehabTimeline() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Our Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            The Journey to Recovery
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From rescue to release, every animal in our care follows a careful rehabilitation journey 
            designed to give them the best chance at a healthy life in the wild.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-[60px] left-[12.5%] right-[12.5%] h-1 bg-secondary rounded-full" />
          
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group">
                {/* Step Circle */}
                <div className="relative z-10 flex justify-center mb-8">
                  <div className="relative">
                    <div className={cn(
                      'w-[120px] h-[120px] rounded-full flex items-center justify-center transition-all duration-500',
                      'bg-white border-4 border-secondary shadow-lg group-hover:shadow-xl group-hover:scale-105',
                      'group-hover:border-primary/30'
                    )}>
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md">
                      {step.number}
                    </div>
                  </div>
                </div>

                <div className="text-center px-2">
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow connector (except last) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-[60px] -right-3 w-6 h-6 text-secondary z-20 hidden xl:block">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="flex gap-5 bg-secondary/30 rounded-2xl p-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 border border-border">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border mt-4" />
                )}
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
