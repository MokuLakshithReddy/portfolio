import React from 'react'

export const EyebrowBadge: React.FC = () => {
  return (
    <div className="relative inline-flex items-center -rotate-[1.5deg] select-none">
      {/* Hand-drawn double oval SVG container */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox="0 0 350 48"
        preserveAspectRatio="none"
      >
        {/* Charcoal primary sketchy path */}
        <path
          d="M 24 24 C 24 10, 70 3, 175 4 C 280 5, 326 11, 326 24 C 326 37, 280 44, 175 44 C 70 44, 24 38, 24 24"
          fill="none"
          stroke="#222222"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Blue secondary offset sketchy path */}
        <path
          d="M 22 25 C 22 8, 75 5, 175 3 C 275 1, 328 8, 328 25 C 328 41, 275 46, 175 45 C 75 44, 22 41, 22 25"
          fill="none"
          stroke="#0755F5"
          strokeWidth="1.2"
          strokeDasharray="120 6"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>

      <span className="relative z-10 px-6 sm:px-8 py-1.5 sm:py-2 text-[12.5px] sm:text-[14.5px] font-mono-tech font-bold text-[#111111] tracking-tight whitespace-nowrap">
        AI &amp; ML Student · Software Developer
      </span>

      {/* Curved hand-drawn arrow pointing down toward headline with clean safe clearance */}
      <div className="absolute -right-6 -bottom-5 w-10 h-10 pointer-events-none">
        <svg viewBox="0 0 44 44" fill="none" className="w-full h-full overflow-visible">
          {/* Arc sweeping down */}
          <path
            d="M 8 4 C 28 12, 30 26, 16 32"
            stroke="#111111"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Arrowhead */}
          <path
            d="M 22 26 L 15 32 L 20 38"
            stroke="#111111"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

export const BlueHeadlineUnderline: React.FC = () => {
  return (
    <div className="relative w-full max-w-[430px] h-[16px] sm:h-[18px] -mt-1 mb-2 select-none pointer-events-none">
      <svg
        viewBox="0 0 420 20"
        fill="none"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="none"
      >
        <path
          d="M 2 8 C 80 4, 180 12, 280 6 C 350 2, 395 10, 418 7 C 390 15, 310 18, 220 14 C 130 10, 50 16, 2 8 Z"
          fill="#0755F5"
        />
        <path
          d="M 15 12 C 90 8, 220 15, 330 9 C 380 6, 410 12, 415 11"
          stroke="#0755F5"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
    </div>
  )
}

export const YellowMarkerUnderline: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute left-0 -bottom-1.5 w-full h-[8px] pointer-events-none overflow-visible"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
      >
        <path
          d="M 2 6 C 25 3, 60 9, 98 4 C 75 11, 40 8, 4 9 Z"
          fill="#FFB600"
          opacity="0.95"
        />
      </svg>
    </span>
  )
}

export const YellowCrown: React.FC = () => {
  return (
    <div className="relative select-none pointer-events-none w-11 sm:w-14 h-9 sm:h-12 rotate-[12deg]">
      <svg viewBox="0 0 60 48" fill="none" className="w-full h-full overflow-visible">
        <path
          d="M 8 36 L 4 14 L 20 22 L 30 6 L 40 22 L 56 14 L 52 36 Z"
          stroke="#FFB600"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Base stroke */}
        <path
          d="M 6 38 C 22 41, 38 41, 54 38"
          stroke="#FFB600"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export const BlueGlobeSketch: React.FC = () => {
  return (
    <div className="relative w-52 sm:w-64 h-52 sm:h-64 pointer-events-none select-none opacity-85">
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full overflow-visible">
        {/* Outer sphere */}
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="#0755F5"
          strokeWidth="1.6"
          strokeDasharray="4 2"
        />
        {/* Longitude ellipses */}
        <ellipse
          cx="100"
          cy="100"
          rx="55"
          ry="90"
          stroke="#0755F5"
          strokeWidth="1.4"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="25"
          ry="90"
          stroke="#0755F5"
          strokeWidth="1.2"
        />
        {/* Latitude lines */}
        <path
          d="M 12 80 C 40 95, 160 95, 188 80"
          stroke="#0755F5"
          strokeWidth="1.4"
        />
        <path
          d="M 10 100 C 40 115, 160 115, 190 100"
          stroke="#0755F5"
          strokeWidth="1.4"
        />
        <path
          d="M 22 130 C 50 145, 150 145, 178 130"
          stroke="#0755F5"
          strokeWidth="1.2"
        />
        {/* Continent sketch marks */}
        <path
          d="M 70 70 Q 85 60, 95 75 Q 110 85, 95 105 Q 85 100, 70 70 Z"
          fill="#0755F5"
          fillOpacity="0.12"
          stroke="#0755F5"
          strokeWidth="1"
        />
        <path
          d="M 115 110 Q 135 115, 140 135 Q 120 150, 110 130 Z"
          fill="#0755F5"
          fillOpacity="0.12"
          stroke="#0755F5"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

export const YellowZigzag: React.FC = () => {
  return (
    <div className="relative w-7 sm:w-8 h-12 sm:h-14 pointer-events-none select-none">
      <svg viewBox="0 0 30 50" fill="none" className="w-full h-full overflow-visible">
        <path
          d="M 18 4 L 6 22 L 24 24 L 10 46"
          stroke="#FFB600"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export const FourPointStar: React.FC<{ color?: string; size?: number; className?: string }> = ({
  color = '#111111',
  size = 24,
  className = ''
}) => {
  return (
    <div
      className={`pointer-events-none select-none inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full overflow-visible">
        <path
          d="M 12 0 Q 12 12, 0 12 Q 12 12, 12 24 Q 12 12, 24 12 Q 12 12, 12 0 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export const CompassSketch: React.FC = () => {
  return (
    <div className="relative w-32 sm:w-36 h-32 sm:h-36 pointer-events-none select-none opacity-20">
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full overflow-visible">
        <circle cx="50" cy="50" r="42" stroke="#444444" strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="34" stroke="#444444" strokeWidth="0.6" />
        <line x1="50" y1="4" x2="50" y2="96" stroke="#444444" strokeWidth="0.8" />
        <line x1="4" y1="50" x2="96" y2="50" stroke="#444444" strokeWidth="0.8" />
        <polygon points="50,20 54,46 50,50 46,46" fill="#444444" opacity="0.6" />
        <polygon points="50,80 54,54 50,50 46,54" fill="#888888" opacity="0.4" />
      </svg>
    </div>
  )
}

export const BottomBlueSplash: React.FC = () => {
  return (
    <div className="relative w-56 sm:w-72 h-24 sm:h-32 pointer-events-none select-none">
      <svg viewBox="0 0 300 120" fill="none" className="w-full h-full overflow-visible">
        {/* Dynamic painterly electric blue stroke */}
        <path
          d="M 10 90 C 60 70, 110 110, 170 80 C 220 50, 260 90, 290 85 C 270 105, 210 115, 150 105 C 80 95, 40 115, 10 90 Z"
          fill="#0755F5"
        />
        <circle cx="210" cy="40" r="4" fill="#0755F5" />
        <circle cx="240" cy="55" r="3" fill="#0755F5" />
        <circle cx="160" cy="60" r="5" fill="#0755F5" />
        <path
          d="M 40 85 C 80 50, 120 70, 140 40"
          stroke="#0755F5"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export const SkylineDoodle: React.FC<{ side: 'left' | 'right' }> = ({ side }) => {
  if (side === 'left') {
    return (
      <div className="w-36 sm:w-48 h-24 sm:h-32 pointer-events-none select-none opacity-45">
        <svg viewBox="0 0 200 120" fill="none" className="w-full h-full overflow-visible">
          {/* Hand sketched buildings */}
          <rect x="10" y="50" width="22" height="70" stroke="#333333" strokeWidth="1.2" fill="none" />
          <line x1="16" y1="60" x2="26" y2="60" stroke="#333333" strokeWidth="1" />
          <line x1="16" y1="75" x2="26" y2="75" stroke="#333333" strokeWidth="1" />
          <line x1="16" y1="90" x2="26" y2="90" stroke="#333333" strokeWidth="1" />
          
          <rect x="36" y="25" width="28" height="95" stroke="#333333" strokeWidth="1.2" fill="none" />
          <polygon points="36,25 50,8 64,25" stroke="#333333" strokeWidth="1.2" fill="none" />
          <line x1="50" y1="8" x2="50" y2="0" stroke="#333333" strokeWidth="1.5" />
          
          <rect x="68" y="45" width="20" height="75" stroke="#333333" strokeWidth="1.2" fill="none" />
          <rect x="92" y="65" width="25" height="55" stroke="#333333" strokeWidth="1.2" fill="none" />
          <rect x="122" y="35" width="30" height="85" stroke="#333333" strokeWidth="1.2" fill="none" />
        </svg>
      </div>
    )
  }

  return (
    <div className="w-44 sm:w-56 h-28 sm:h-36 pointer-events-none select-none opacity-45">
      <svg viewBox="0 0 220 140" fill="none" className="w-full h-full overflow-visible">
        {/* Buildings on the right */}
        <rect x="20" y="40" width="30" height="100" stroke="#333333" strokeWidth="1.2" fill="none" />
        <rect x="56" y="20" width="36" height="120" stroke="#333333" strokeWidth="1.2" fill="none" />
        <line x1="74" y1="20" x2="74" y2="8" stroke="#333333" strokeWidth="1.5" />
        
        <rect x="98" y="55" width="24" height="85" stroke="#333333" strokeWidth="1.2" fill="none" />
        <rect x="128" y="15" width="40" height="125" stroke="#333333" strokeWidth="1.2" fill="none" />
        <polygon points="128,15 148,0 168,15" stroke="#333333" strokeWidth="1.2" fill="none" />
        
        <rect x="174" y="50" width="30" height="90" stroke="#333333" strokeWidth="1.2" fill="none" />
      </svg>
    </div>
  )
}
