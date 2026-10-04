import React from 'react'

export function HeroSection() {
  return (
    <section className="pt-40 pb-40 md:pt-56 md:pb-48 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,168,90,0.10)_0%,_transparent_62%)] pointer-events-none" />
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-[#C6A85A]/8 rounded-full blur-[150px] pointer-events-none animate-[royalGlowPulse_10s_ease-in-out_infinite]" />
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[65%] max-w-4xl h-px bg-gradient-to-r from-transparent via-[#C6A85A]/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8 animate-royal-fade-up">
          <div className="space-y-5 relative">
            <div className="absolute inset-0 bg-[#C6A85A]/4 blur-3xl rounded-full -z-10 scale-150" />

            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#C6A85A]/5 border border-[#C6A85A]/20 rounded-none backdrop-blur-sm shadow-[0_0_18px_rgba(198,168,90,0.06)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A85A] shadow-[0_0_10px_rgba(198,168,90,0.7)] animate-royal-shimmer" />
              <span className="text-[#C6A85A] text-[10px] uppercase tracking-[0.32em] font-bold">Digital systems, built around your business</span>
            </div>

            <div className="relative overflow-hidden max-w-5xl mx-auto">
              <div className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-[#F3EFE3]/10 to-transparent skew-x-[-18deg] animate-royal-sweep pointer-events-none" />
              <h1 className="relative font-serif text-[#F3EFE3] text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.045em] leading-[1.02] drop-shadow-[0_10px_40px_rgba(0,0,0,0.32)]">
                Websites that make people <span className="text-[#E0C878]">trust you</span> in seconds.
              </h1>
            </div>

            <p className="text-[#91A39B] text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              We build fast, clean websites and systems that turn visitors into enquiries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <a href="/contact" className="bg-[#E0C878] text-[#091512] px-10 py-4 rounded-none text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#F0D98E] transition-all duration-500 w-full sm:w-auto text-center shadow-[0_0_25px_rgba(198,168,90,0.2)] hover:shadow-[0_0_40px_rgba(198,168,90,0.32)] relative group overflow-hidden">
              <span className="relative z-10">Get Your Website</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/18 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
            <a href="/services" className="border border-[#C6A85A]/35 text-[#F3EFE3] px-10 py-4 rounded-none text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#C6A85A]/8 transition-all duration-500 w-full sm:w-auto text-center backdrop-blur-sm">
              Explore Capabilities
            </a>
          </div>

          <div className="pt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C6A85A]/35" />
              <span className="text-[#C6A85A]/75 text-[10px]">◆</span>
              <span className="h-px w-10 bg-[#C6A85A]/35" />
            </div>
            <p className="text-[#91A39B]/60 text-xs uppercase tracking-[0.2em] font-medium">Built for ambitious businesses across markets</p>
          </div>
        </div>
      </div>
    </section>
  )
}
