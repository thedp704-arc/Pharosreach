import React from 'react'

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-40 md:py-48 px-4 md:px-8 border-t-[0.5px] border-[#C6A85A]/20 scroll-mt-24 bg-[#091818] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(198,168,90,0.05)_0%,_transparent_50%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-[#C6A85A]/40" />
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tighter">Our approach</h2>
        </div>

        <div className="space-y-16">
          <div className="space-y-6">
            <p className="text-foreground text-xl md:text-2xl leading-relaxed font-light italic border-l-2 border-[#C6A85A]/30 pl-8">
              We believe good digital work should remove friction, not add another layer of it.
            </p>
            <p className="text-[#8FA39B] text-lg leading-relaxed font-light">
              Pharos Reach helps ambitious businesses turn scattered digital tools into a clearer, more useful system. That can mean a better website, a cleaner lead journey, a connected CRM, or the infrastructure behind an e-commerce operation.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="font-serif text-[#C6A85A] text-2xl md:text-3xl font-medium tracking-tight">Precision over packages</h3>
            <p className="text-[#8FA39B] text-lg leading-relaxed font-light">
              You should not have to buy a giant bundle to solve one important problem. We scope around what your business actually needs, then build a system that can evolve without becoming a maze.
            </p>

            <div className="grid gap-8 mt-8">
              <div className="space-y-3">
                <h4 className="text-foreground text-sm uppercase tracking-widest font-semibold">Business-first</h4>
                <p className="text-[#8FA39B] text-base leading-relaxed font-light">The work starts with the customer journey and the operational problem, not the tool.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-foreground text-sm uppercase tracking-widest font-semibold">Useful by design</h4>
                <p className="text-[#8FA39B] text-base leading-relaxed font-light">Every page, integration, and automation should have a job and a measurable reason to exist.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-foreground text-sm uppercase tracking-widest font-semibold">Built to evolve</h4>
                <p className="text-[#8FA39B] text-base leading-relaxed font-light">We leave room for the next stage instead of locking you into a brittle setup from day one.</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#C6A85A]/10">
            <p className="text-foreground text-xl leading-relaxed font-light">
              Better digital systems are quieter. Customers move through them without noticing the machinery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
