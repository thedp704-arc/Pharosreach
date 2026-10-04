import React from 'react'

interface ServiceCard { title: string; description: React.ReactNode; icon: string }

const services: ServiceCard[] = [
  { title: 'Website Creation', description: 'High-trust websites with sharp visual direction, responsive engineering, and clear paths from first impression to enquiry.', icon: '◻' },
  { title: 'Website Care', description: 'Ongoing updates, fixes, performance improvements, and dependable support so your site stays useful after launch.', icon: '↺' },
  { title: 'CRM & Lead Flow', description: 'Lead capture, qualification, follow-up, and pipeline setup so enquiries do not disappear into inboxes and spreadsheets.', icon: '✦' },
  { title: 'E-Commerce Systems', description: 'Conversion-focused storefronts with product journeys, checkout, payments, analytics, and the integrations your operation actually needs.', icon: '◆' },
  { title: 'Data & Analytics', description: 'Clean data flows and practical reporting that make performance visible, so decisions come from evidence instead of guesswork.', icon: '→' },
  { title: 'Payments & Integrations', description: 'Secure payment and platform integrations that connect the customer journey to the systems running behind the scenes.', icon: '◈' },
]

export function ServicesGrid({ showBorder = true }: { showBorder?: boolean }) {
  return (
    <section id="services" className={`relative py-40 md:py-48 px-4 md:px-8 scroll-mt-24 overflow-hidden ${showBorder ? 'border-t border-[#C6A85A]/20' : ''}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,90,0.10)_0%,transparent_52%),linear-gradient(135deg,transparent 0%,rgba(198,168,90,0.025) 50%,transparent 100%)]" />
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#C6A85A]/45" />
            <span className="text-[#C6A85A]/70 text-[9px]">◆</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tighter">What we build</h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <p className="text-[#91A39B] text-lg max-w-2xl font-light leading-relaxed">The parts of your digital operation customers see, and the systems that keep them moving behind the scenes.</p>
            <div className="lg:max-w-md p-7 bg-[#C6A85A]/[0.035] border border-[#C6A85A]/20 backdrop-blur-sm relative">
              <div className="absolute top-0 left-0 w-8 h-px bg-[#C6A85A]/60" />
              <div className="absolute top-0 left-0 w-px h-8 bg-[#C6A85A]/60" />
              <p className="text-[#F3EFE3] text-sm leading-relaxed font-light italic">We use the right tools for the job, then shape the experience around your business. The result should feel custom, because your business is not a template.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 relative z-10">
          {services.map((service, index) => (
            <div key={service.title} className="border border-[#C6A85A]/20 p-8 relative overflow-hidden bg-gradient-to-b from-[#17332C]/72 to-[#091512]/96 shadow-[0_0_0_1px_rgba(198,168,90,0.045),0_24px_60px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C6A85A]/40 hover:shadow-[0_0_0_1px_rgba(198,168,90,0.12),0_32px_80px_rgba(198,168,90,0.10)] group animate-[royalFadeUp_900ms_ease-out_both]" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="absolute top-0 right-0 w-12 h-px bg-gradient-to-l from-[#C6A85A]/55 to-transparent" />
              <div className="absolute bottom-0 left-0 w-12 h-px bg-gradient-to-r from-[#C6A85A]/35 to-transparent" />
              <div className="relative z-10 mb-6 transition-transform duration-500 group-hover:scale-105"><span className="text-[#C6A85A] text-3xl drop-shadow-[0_0_14px_rgba(198,168,90,0.25)]">{service.icon}</span></div>
              <h3 className="relative z-10 font-serif text-[#F3EFE3] text-xl font-medium mb-4 tracking-tighter">{service.title}</h3>
              <p className="relative z-10 text-[#91A39B] text-base leading-relaxed font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
