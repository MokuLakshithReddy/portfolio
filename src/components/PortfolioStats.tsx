import React from 'react'
import { Code2, Lightbulb, Laptop } from 'lucide-react'

export const PortfolioStats: React.FC = () => {
  return (
    <div
      role="group"
      aria-label="Selected portfolio proof points"
      className="grid w-full max-w-[540px] grid-cols-[0.82fr_1.18fr_1.05fr] gap-1.5 rounded-[20px] border border-[#CFC4B3] bg-[#FAF5EC]/75 p-1.5 shadow-[0_8px_28px_rgba(30,25,15,0.055)] backdrop-blur-sm sm:gap-2 sm:p-2"
    >
      <div className="flex min-w-0 flex-col justify-center rounded-[14px] bg-[#0755F5] px-2.5 py-2.5 text-white sm:px-3.5 sm:py-3">
        <div className="font-mono-tech text-[24px] font-bold leading-none tracking-tight sm:text-[27px]">6</div>
        <div className="mt-1.5 text-[9px] font-semibold leading-tight text-white/85 sm:text-[10px]">Featured projects</div>
      </div>

      <div className="flex min-w-0 items-center gap-2 rounded-[14px] border border-[#E1D8CB] bg-white/45 px-2.5 py-2.5 sm:gap-2.5 sm:px-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0755F5]/8 text-[#0755F5] sm:h-9 sm:w-9">
          <Code2 className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={1.8} />
        </div>
        <div className="min-w-0">
          <div className="font-mono-tech text-[21px] font-bold leading-none text-[#111111] sm:text-[24px]">4</div>
          <div className="mt-1 text-[9px] font-medium leading-tight text-[#6A6257] sm:text-[10px]">Merged contributions</div>
        </div>
      </div>

      <div className="flex min-w-0 items-center gap-2 rounded-[14px] border border-[#E1D8CB] bg-white/45 px-2.5 py-2.5 sm:gap-2.5 sm:px-3">
        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFB600]/20 text-[#111111] sm:h-9 sm:w-9">
          <Lightbulb className="relative z-10 h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={1.8} />
        </div>
        <div className="min-w-0">
          <div className="font-mono-tech text-[10px] font-bold uppercase leading-tight tracking-[0.08em] text-[#111111] sm:text-[11px]">AI / ML</div>
          <div className="mt-1 text-[9px] font-medium leading-tight text-[#6A6257] sm:text-[10px]">Engineering focus</div>
        </div>
      </div>
    </div>
  )
}
