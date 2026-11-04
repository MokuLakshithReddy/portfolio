import React from 'react'
import { Laptop, Code2, Lightbulb } from 'lucide-react'

export const PortfolioStats: React.FC = () => {
  return (
    <div className="w-full max-w-[530px] border border-[#A89F90] rounded-[22px] px-5 py-3.5 flex items-center justify-between bg-transparent select-none">
      {/* Section 1 */}
      <div className="flex items-center gap-3">
        <Laptop className="w-7 h-7 stroke-[1.8] text-[#111111]" />
        <div>
          <div className="font-mono-tech text-[22px] font-bold text-[#111111] leading-none mb-1">
            6
          </div>
          <div className="text-[11px] text-[#555555] font-medium leading-tight whitespace-nowrap">
            Featured Projects
          </div>
        </div>
      </div>

      {/* Divider 1 */}
      <div className="w-[1px] h-8 bg-[#C2B7A6]" />

      {/* Section 2 */}
      <div className="flex items-center gap-3">
        <Code2 className="w-7 h-7 stroke-[1.8] text-[#111111]" />
        <div>
          <div className="font-mono-tech text-[22px] font-bold text-[#111111] leading-none mb-1">
            4
          </div>
          <div className="text-[11px] text-[#555555] font-medium leading-tight max-w-[100px]">
            Merged External Contributions
          </div>
        </div>
      </div>

      {/* Divider 2 */}
      <div className="w-[1px] h-8 bg-[#C2B7A6]" />

      {/* Section 3 */}
      <div className="flex items-center gap-2.5">
        <div className="relative flex items-center justify-center">
          {/* Yellow sketch glow behind bulb */}
          <div className="absolute w-6 h-6 bg-[#FFB600]/40 rounded-full blur-[2px] pointer-events-none" />
          <Lightbulb className="w-7 h-7 stroke-[1.8] text-[#111111] relative z-10" />
        </div>
        <div className="text-[12.5px] font-bold text-[#111111] leading-snug max-w-[95px]">
          AI Engineering Focus
        </div>
      </div>
    </div>
  )
}

