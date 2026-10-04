'use client'

import React from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

const signals = [
  {
    label: 'Clarity',
    title: 'One system, fewer loose ends.',
    body: 'Your website, lead capture, customer data, payments, and analytics should work together instead of becoming another pile of tabs.',
  },
  {
    label: 'Conversion',
    title: 'Every important click has a job.',
    body: 'We design journeys around the action you need next, whether that is an enquiry, a booking, a purchase, or a qualified lead.',
  },
  {
    label: 'Speed',
    title: 'Fast enough to feel effortless.',
    body: 'Lean implementation, sensible tooling, and focused interfaces keep the experience quick for customers and manageable for your team.',
  },
  {
    label: 'Continuity',
    title: 'Built for the next stage.',
    body: 'The system should be useful today without making tomorrow harder. We leave room for new channels, integrations, and growth.',
  },
]

export function TestimonialsSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 md:px-8 bg-[#091818] border-t-[0.5px] border-[#C6A85A]/20">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="h-[0.5px] w-12 bg-[#C6A85A]/40" />
            <h2 className="font-serif text-3xl md:text-4xl tracking-tighter">What the system should do</h2>
          </div>
          <p className="text-[#8FA39B] text-lg leading-relaxed font-light">
            The goal is not to collect more software. It is to make the important parts of your digital operation feel obvious.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal, i) => (
            <div
              key={signal.label}
              className="group border-[0.5px] border-[#C6A85A]/15 p-8 bg-[#0F1A17] hover:border-[#C6A85A]/40 transition-all duration-500 h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(198,168,90,0.06)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <p className="text-[#C6A85A] text-[10px] uppercase tracking-[0.25em] font-semibold mb-6">{signal.label}</p>
                <h3 className="font-serif text-foreground text-xl font-medium tracking-tighter mb-4">{signal.title}</h3>
                <p className="text-[#8FA39B] text-base font-light leading-relaxed">{signal.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
