import React from 'react'

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-40 md:py-48 px-4 md:px-8 border-t border-[#C6A85A]/20 scroll-mt-24 bg-[#07130F] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(198,168,90,0.07)_0%,transparent_52%)] pointer-events-none" />
      <div className="absolute right-[-10rem] top-[15%] w-[28rem] h-[28rem] rounded-full border border-[#C6A85A]/[0.04] pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-4 mb-12">
          <div className="h-px w-12 bg-[#C6A85A]/45" />
          <span className="text-[#C6A85A]/70 text-[9px]">◆</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tighter">Our approach</h2>
        </div>

        <div className="space-y-16">
          <div className="space-y-6">
            <p className="text-[#F3EFE3] text-xl md:text-2xl leading-relaxed font-light italic border-l border-[#C6A85A]/45 pl-8">
              We believe good digital work should remove friction, not add another layer of it.
            </p>
            <p className="text-[#91A39B] text-lg leading-relaxed font-light">
              Pharos Reach helps ambitious businesses turn scattered digital tools into a clearer, more useful system. That can mean a better website, a cleaner lead journey, a connected CRM, or the infrastructure behind an e-commerce operation.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="font-serif text-[#E0C878] text-2xl md:text-3xl font-medium tracking-tight">Precision over packages</h3>
            <p className="text-[#91A39B] text-lg leading-relaxed font-light">
              You should not have to buy a giant bundle to solve one important problem. We scope around what your business actually needs, then build a system that can evolve without becoming a maze.
            </p>

            <div className="grid gap-8 mt-8">
              <div className="space-y-3 border-t border-[#C6A85A]/10 pt-6">
                <h4 className="text-[#F3EFE3] text-sm uppercase tracking-widest font-semibold">Business-first</h4>
                <p className="text-[#91A39B] text-base leading-relaxed font-light">The work starts with the customer journey and the operational problem, not the tool.</p>
              </div>
              <div className="space-y-3 border-t border-[#C6A85A]/10 pt-6">
                <h4 className="text-[#F3EFE3] text-sm uppercase tracking-widest font-semibold">Useful by design</h4>
                <p className="text-[#91A39B] text-base leading-relaxed font-light">Every page, integration, and automation should have a job and a measurable reason to exist.</p>
              </div>
              <div className="space-y-3 border-t border-[#C6A85A]/10 pt-6">
                <h4 className="text-[#F3EFE3] text-sm uppercase tracking-widest font-semibold">Built to evolve</h4>
                <p className="text-[#91A39B] text-base leading-relaxed font-light">We leave room for the next stage instead of locking you into a brittle setup from day one.</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#C6A85A]/15">
            <p className="text-[#F3EFE3] text-xl leading-relaxed font-light">Better digital systems are quieter. Customers move through them without noticing the machinery.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
