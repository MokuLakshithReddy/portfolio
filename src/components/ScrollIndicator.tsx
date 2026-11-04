import React from 'react'
import { ArrowDown } from 'lucide-react'

interface ScrollIndicatorProps {
  targetId?: string
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ 
  targetId = 'projects' 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="inline-flex items-center gap-2.5 group cursor-pointer select-none"
    >
      {/* Black circular outlined icon with downward arrow */}
      <div className="w-[26px] h-[26px] rounded-full border border-[#111111] flex items-center justify-center transition-transform group-hover:translate-y-0.5">
        <ArrowDown className="w-3.5 h-3.5 stroke-[2.2] text-[#111111]" />
      </div>

      {/* Text with blue hand-drawn underline */}
      <div className="relative">
        <span className="font-sans font-medium text-[13.5px] text-[#111111]">
          Scroll to explore
        </span>
        <svg
          className="absolute -bottom-1 left-0 w-full h-[5px] pointer-events-none overflow-visible"
          viewBox="0 0 100 6"
          preserveAspectRatio="none"
        >
          <path
            d="M 1 3 C 25 1, 65 4, 98 2"
            stroke="#0755F5"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </a>
  )
}

