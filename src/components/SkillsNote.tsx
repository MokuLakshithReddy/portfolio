import React from 'react'

export const SkillsNote: React.FC = () => {
  return (
    <div 
      className="relative z-15 select-none pointer-events-none transform rotate-[4deg] transition-transform hover:rotate-1 duration-300 pointer-events-auto"
      style={{
        filter: 'drop-shadow(3px 4px 8px rgba(0, 0, 0, 0.06))'
      }}
    >
      {/* Hand-drawn note outline */}
      <div className="relative w-[190px] bg-[#FAF5EC] border-[1.5px] border-[#222222] rounded-[18px] p-4 pt-4 pb-6">
        {/* Blue decorative curved accent on the right border */}
        <div className="absolute -right-3 top-2 w-8 h-12 pointer-events-none">
          <svg viewBox="0 0 40 60" fill="none" className="w-full h-full">
            <path
              d="M5 5 C 25 15, 35 35, 20 55"
              stroke="#0755F5"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Handwritten text items */}
        <div className="font-handwriting text-[23px] font-bold text-[#111111] leading-[1.3] tracking-wide">
          <div>AI Agents</div>
          <div>RAG</div>
          <div>System Design</div>
          <div>Cybersecurity</div>
        </div>

        {/* Hand-drawn arrow at bottom pointing right */}
        <div className="mt-2 pl-2">
          <svg viewBox="0 0 100 24" fill="none" className="w-24 h-6">
            <path
              d="M 5 12 Q 45 6, 85 14"
              stroke="#111111"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 76 6 L 87 14 L 78 20"
              stroke="#111111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

