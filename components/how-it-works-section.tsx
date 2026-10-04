import React from 'react'

export function HowItWorksSection({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section id="how-it-works" className="relative py-40 md:py-48 px-4 md:px-8 border-t border-[#C6A85A]/20 scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,90,0.08)_0%,transparent_55%)]" />
      <div className="max-w-7xl mx-auto">
        {showTitle && (
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="h-px w-16 bg-[#C6A85A]/45" />
                  <span className="text-[#C6A85A]/70 text-[9px]">◆</span>
                  <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tighter">How we work</h2>
                </div>
                <p className="text-[#91A39B] text-lg leading-relaxed font-light">A clear process that keeps the work moving and the next step obvious.</p>
              </div>
            </div>
            <div className="relative z-10 text-[#91A39B] max-w-xl text-sm lg:text-base font-light">Start with the business problem, define the scope, then build only what earns its place.</div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-7 mt-16">
          <Step number="01" title="Discover" description="We understand your offer, audience, goals, and the friction blocking growth." />
          <Step number="02" title="Plan" description="We define the structure, customer journey, integrations, and what success should look like." />
          <Step number="03" title="Build & integrate" description="Design, development, CRM, payments, analytics, and automations come together in focused milestones." />
          <Step number="04" title="Launch & improve" description="We test, launch, hand over, and keep improving the system as your business evolves." />
        </div>
      </div>
    </section>
  )
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative group border border-[#C6A85A]/20 p-8 bg-gradient-to-b from-[#17332C]/65 to-[#091512]/96 shadow-[0_0_0_1px_rgba(198,168,90,0.04),0_20px_60px_rgba(0,0,0,0.24)] transition-all duration-500 hover:-translate-y-1 hover:border-[#C6A85A]/35">
      <div className="absolute top-0 right-0 w-14 h-px bg-gradient-to-l from-[#C6A85A]/55 to-transparent" />
      <div className="relative z-10 flex items-center gap-4 mb-5">
        <div className="w-12 h-12 border border-[#C6A85A]/35 bg-[#C6A85A]/[0.06] flex items-center justify-center text-[#C6A85A] font-serif text-lg tracking-tighter">
          {number}
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-[#C6A85A]/30 via-[#C6A85A]/12 to-transparent" />
      </div>
      <h3 className="relative z-10 font-serif text-[#F3EFE3] text-xl font-medium tracking-tighter mb-2">{title}</h3>
      <p className="relative z-10 text-[#91A39B] text-base leading-relaxed font-light">{description}</p>
    </div>
  )
}
