import React from 'react'

export const FloatingBrowser: React.FC = () => {
  return (
    <div 
      className="relative z-15 select-none pointer-events-none transform -rotate-6 transition-transform hover:rotate-0 duration-300 pointer-events-auto"
      style={{
        filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.08))'
      }}
    >
      <div className="w-[172px] bg-[#F7F2E8] border-[1.5px] border-[#222222] rounded-[10px] p-2.5 relative">
        {/* Window header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#222222]/30 border-dashed">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#222222] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#222222] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#222222] inline-block" />
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-[1.5px] bg-[#222222]/60 inline-block" />
            <span className="w-2 h-2 border border-[#222222]/60 inline-block rounded-[1px]" />
            <span className="text-[10px] text-[#222222]/60 leading-none">×</span>
          </div>
        </div>

        {/* Code lines */}
        <div className="font-mono-tech text-[13px] font-bold text-[#111111] space-y-1 tracking-tight pl-1">
          <div>// Dream</div>
          <div>// Build</div>
          <div>
            // Innovate<span className="text-[#0755F5] font-extrabold text-[15px]">!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

