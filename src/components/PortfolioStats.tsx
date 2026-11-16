import React from 'react'
import { Folder, Users, Trophy, Zap } from 'lucide-react'
import { BlueArrowDoodle, BlueCheckerPattern } from './DecorativeDoodles'

export const PortfolioStats: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      {/* 1. Hand-drawn Blue Arrow Doodle pointing to the stats bar (hidden on small mobile) */}
      <div className="absolute -left-12 lg:-left-14 bottom-3 hidden sm:block pointer-events-none">
        <BlueArrowDoodle />
      </div>

      {/* 2. Main Achievement Bar Container */}
      <div className="w-full bg-[#FAF5EC]/95 backdrop-blur-xs border border-[#222222] rounded-[24px] sm:rounded-[28px] px-4 sm:px-8 py-3.5 sm:py-4 shadow-[2px_3px_0px_rgba(0,0,0,0.15)] select-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 items-center justify-between">
          
          {/* Stat 1: Featured Projects Built */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0755F5]/10 flex items-center justify-center shrink-0">
              <Folder className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#0755F5] fill-[#0755F5]" />
            </div>
            <div>
              <div className="font-anton text-[20px] sm:text-[23px] text-[#111111] leading-none mb-1 tracking-tight">
                06+
              </div>
              <div className="text-[11px] sm:text-[12px] font-mono-tech text-[#555555] font-medium leading-tight whitespace-nowrap">
                Projects Built
              </div>
            </div>
          </div>

          {/* Divider 1 */}
          <div className="hidden md:flex justify-center">
            <div className="w-[1px] h-8 bg-[#222222]/20" />
          </div>

          {/* Stat 2: Merged Open Source Contributions */}
          <div className="flex items-center gap-3 sm:gap-3.5 md:-ml-8 lg:-ml-12">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0755F5]/10 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#0755F5] fill-[#0755F5]" />
            </div>
            <div>
              <div className="font-anton text-[20px] sm:text-[23px] text-[#111111] leading-none mb-1 tracking-tight">
                04+
              </div>
              <div className="text-[11px] sm:text-[12px] font-mono-tech text-[#555555] font-medium leading-tight">
                Open Source Contributions
              </div>
            </div>
          </div>

          {/* Divider 2 */}
          <div className="hidden md:flex justify-center">
            <div className="w-[1px] h-8 bg-[#222222]/20" />
          </div>

          {/* Stat 3: Hackathon Award (VNR Convergence) */}
          <div className="flex items-center gap-3 sm:gap-3.5 md:-ml-8 lg:-ml-12">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0755F5]/10 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#0755F5] fill-[#0755F5]" />
            </div>
            <div>
              <div className="font-sans font-bold text-[14px] sm:text-[15.5px] text-[#111111] leading-tight mb-0.5">
                Hackathon Winner
              </div>
              <div className="text-[11px] sm:text-[12px] font-mono-tech text-[#555555] font-medium leading-tight">
                VNR Convergence
              </div>
            </div>
          </div>

          {/* Divider 3 */}
          <div className="hidden md:flex justify-center">
            <div className="w-[1px] h-8 bg-[#222222]/20" />
          </div>

          {/* Stat 4: AI/ML Engineering Focus */}
          <div className="flex items-center gap-3 sm:gap-3.5 md:-ml-8 lg:-ml-12">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0755F5]/10 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#0755F5] fill-[#0755F5]" />
            </div>
            <div>
              <div className="font-anton text-[18px] sm:text-[20px] text-[#111111] leading-none mb-1 tracking-wide">
                AI / ML
              </div>
              <div className="text-[11px] sm:text-[12px] font-mono-tech text-[#555555] font-medium leading-tight">
                My Core Focus
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Decorative Blue Checkerboard at the bottom right */}
      <div className="absolute -right-8 sm:-right-12 -bottom-3 hidden md:block pointer-events-none">
        <BlueCheckerPattern />
      </div>
    </div>
  )
}
