import React from 'react'

export function RoyalDivider() {
  return (
    <section aria-hidden className="relative -mt-10 mb-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center justify-center py-10">
          <div className="absolute left-1/2 -translate-x-1/2 top-1 w-[300px] h-[180px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(198,168,90,0.12)_0%,transparent_65%)] blur-[16px] animate-[royalGlowPulse_6s_ease-in-out_infinite]" />
          <div className="relative z-10 flex items-center w-full gap-5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C6A85A]/35 to-transparent" />
            <div className="relative flex items-center justify-center w-14 h-14 border border-[#C6A85A]/30 bg-[#0D211C]/80 shadow-[0_12px_45px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-1.5 border border-[#C6A85A]/15" />
              <span className="text-[#C6A85A]/80 text-xs">◆</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C6A85A]/35 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
