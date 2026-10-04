import React from 'react'

interface ServiceCard {
  title: string
  description: React.ReactNode
  icon: string
}

const services: ServiceCard[] = [
  {
    title: 'Website Creation',
    description:
      'High-trust websites with sharp visual direction, responsive engineering, and clear paths from first impression to enquiry.',
    icon: '◻',
  },
  {
    title: 'Website Care',
    description:
      'Ongoing updates, fixes, performance improvements, and dependable support so your site stays useful after launch.',
    icon: '↺',
  },
  {
    title: 'CRM & Lead Flow',
    description:
      'Lead capture, qualification, follow-up, and pipeline setup so enquiries do not disappear into inboxes and spreadsheets.',
    icon: '✦',
  },
  {
    title: 'E-Commerce Systems',
    description:
      'Conversion-focused storefronts with product journeys, checkout, payments, analytics, and the integrations your operation actually needs.',
    icon: '◆',
  },
  {
    title: 'Data & Analytics',
    description:
      'Clean data flows and practical reporting that make performance visible, so decisions come from evidence instead of guesswork.',
    icon: '→',
  },
  {
    title: 'Payments & Integrations',
    description:
      'Secure payment and platform integrations that connect the customer journey to the systems running behind the scenes.',
    icon: '◈',
  },
]

export function ServicesGrid({ showBorder = true }: { showBorder?: boolean }) {
  return (
    <section
      id="services"
      className={`relative py-40 md:py-48 px-4 md:px-8 scroll-mt-24 overflow-hidden ${showBorder ? 'border-t-[0.5px] border-[#C6A85A]/20' : ''}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,90,0.14)_0%,transparent_55%),radial-gradient(circle_at_0%_55%,rgba(15,26,23,0)_0%,rgba(198,168,90,0.06)_45%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-[1px] w-16 bg-[#C6A85A]/40" />
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tighter">What we build</h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <p className="text-[#8FA39B] text-lg max-w-2xl font-light leading-relaxed">
              The parts of your digital operation customers see, and the systems that keep them moving behind the scenes.
            </p>
            <div className="lg:max-w-md p-6 bg-[#C6A85A]/5 border border-[#C6A85A]/15 backdrop-blur-sm">
              <p className="text-foreground text-sm leading-relaxed font-light italic">
                We use the right tools for the job, then shape the experience around your business. The result should feel custom, because your business is not a template.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="border-[0.5px] border-[#C6A85A]/25 p-8 relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(198,168,90,0.11)_0%,_transparent_55%),linear-gradient(to_bottom,rgba(31,58,52,0.72),rgba(15,26,23,0.96))] shadow-[0_0_0_1px_rgba(198,168,90,0.06),0_18px_50px_rgba(0,0,0,0.24)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_0_1px_rgba(198,168,90,0.18),0_40px_100px_rgba(198,168,90,0.12)] group animate-[royalFadeUp_900ms_ease-out_both]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10 mb-6 transition-transform duration-500 group-hover:scale-110">
                <span className="text-accent text-3xl drop-shadow-[0_0_14px_rgba(198,168,90,0.3)]">{service.icon}</span>
              </div>
              <h3 className="relative z-10 font-serif text-foreground text-xl font-medium mb-4 tracking-tighter">
                {service.title}
              </h3>
              <p className="relative z-10 text-[#8FA39B] text-base leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
