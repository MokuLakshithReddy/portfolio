import React from 'react'
import { Folder, Users, Trophy, Zap } from 'lucide-react'
import { BlueArrowDoodle, BlueCheckerPattern } from './DecorativeDoodles'

export const PortfolioStats: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      {/* 1. Hand-drawn Blue Arrow Doodle pointing horizontally at the left edge of the stats bar */}
      <div className="absolute -left-10 sm:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none">
        <BlueArrowDoodle />
      </div>

      {/* 2. Main Achievement Bar Container (Single row of 4 items on tablet and desktop) */}
      <div className="w-full bg-[#FAF5EC]/95 backdrop-blur-xs border border-[#222222] rounded-[24px] sm:rounded-[28px] px-5 sm:px-6 lg:px-8 py-3.5 sm:py-4 shadow-[2px_3px_0px_rgba(0,0,0,0.15)] select-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-3 sm:gap-x-4 lg:gap-x-6 items-center">
          
          {/* Stat 1: Featured Projects Built */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl bg-[#0755F5]/10 flex items-center justify-center shrink-0">
              <Folder className="w-4 h-4 sm:w-5 sm:h-5 text-[#0755F5] fill-[#0755F5]" />
            </div>
            <div className="min-w-0">
              <div className="font-anton text-[19px] sm:text-[21px] lg:text-[23px] text-[#111111] leading-none mb-1 tracking-tight">
                06+
              </div>
              <div className="text-[10.5px] sm:text-[11.5px] lg:text-[12px] font-mono-tech text-[#555555] font-medium leading-tight whitespace-nowrap">
                Projects Built
              </div>
            </div>
          </div>

          {/* Stat 2: Merged Open Source Contributions */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 md:border-l md:border-[#222222]/20 md:pl-4 lg:pl-6 xl:pl-8">
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl bg-[#0755F5]/10 flex items-center justify-center shrink-0">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#0755F5] fill-[#0755F5]" />
            </div>
            <div className="min-w-0">
              <div className="font-anton text-[19px] sm:text-[21px] lg:text-[23px] text-[#111111] leading-none mb-1 tracking-tight">
                04+
              </div>
              <div className="text-[10.5px] sm:text-[11.5px] lg:text-[12px] font-mono-tech text-[#555555] font-medium leading-tight whitespace-nowrap">
                Open Source Contributions
              </div>
            </div>
          </div>

          {/* Stat 3: Hackathon Winner (VNR Convergence) */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 md:border-l md:border-[#222222]/20 md:pl-4 lg:pl-6 xl:pl-8">
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl bg-[#0755F5]/10 flex items-center justify-center shrink-0">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#0755F5] fill-[#0755F5]" />
            </div>
            <div className="min-w-0">
              <div className="font-sans font-bold text-[13px] sm:text-[14px] lg:text-[15px] text-[#111111] leading-tight mb-0.5 whitespace-nowrap">
                Hackathon Winner
              </div>
              <div className="text-[10.5px] sm:text-[11.5px] lg:text-[12px] font-mono-tech text-[#555555] font-medium leading-tight whitespace-nowrap">
                VNR Convergence
              </div>
            </div>
          </div>

          {/* Stat 4: AI/ML Engineering Focus */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 md:border-l md:border-[#222222]/20 md:pl-4 lg:pl-6 xl:pl-8">
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl bg-[#0755F5]/10 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#0755F5] fill-[#0755F5]" />
            </div>
            <div className="min-w-0">
              <div className="font-anton text-[17px] sm:text-[19px] lg:text-[20px] text-[#111111] leading-none mb-1 tracking-wide">
                AI / ML
              </div>
              <div className="text-[10.5px] sm:text-[11.5px] lg:text-[12px] font-mono-tech text-[#555555] font-medium leading-tight whitespace-nowrap">
                My Core Focus
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Decorative Blue Checkerboard at the bottom right */}
      <div className="absolute -right-8 sm:-right-10 lg:-right-12 -bottom-2 hidden md:block pointer-events-none">
        <BlueCheckerPattern />
      </div>
    </div>
  )
}
