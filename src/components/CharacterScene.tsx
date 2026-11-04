import React from 'react'
import { FloatingBrowser } from './FloatingBrowser'
import {
  YellowCrown,
  YellowZigzag,
  FourPointStar,
  BottomBlueSplash
} from './DecorativeDoodles'

export const CharacterScene: React.FC = () => {
  return (
    <div className="relative h-full aspect-[664/516] max-h-[820px] flex items-end justify-end pointer-events-none select-none">
      {/* 1. Blue Orbital Brush Stroke (z-5, sweeping behind head and character) */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-visible">
        <svg viewBox="0 0 664 516" fill="none" className="w-full h-full overflow-visible">
          <path
            d="M 110 270 C 85 145, 230 60, 385 58 C 495 55, 555 115, 550 200 C 545 285, 475 340, 365 350 C 240 365, 120 290, 150 400 C 170 450, 230 480, 330 480"
            stroke="#0755F5"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.92"
          />
        </svg>
      </div>

      {/* 2. Floating Browser Window Doodle (z-10, sits right by his hair with zero drift) */}
      <div className="absolute left-[8%] top-[12%] z-10 pointer-events-auto">
        <FloatingBrowser />
      </div>

      {/* 3. Yellow 4-Point Star (z-12, positioned right between the browser and the hair) */}
      <div className="absolute left-[33%] top-[8%] z-12">
        <FourPointStar color="#FFB600" size={28} />
      </div>

      {/* 4. Small Black Sparkle (z-12, above the laptop) */}
      <div className="absolute left-[20%] top-[48%] z-12 hidden sm:block">
        <FourPointStar color="#111111" size={14} />
      </div>

      {/* 5. Blue Brush Splash (z-12, under the laptop) */}
      <div className="absolute left-[0%] bottom-[0%] z-12 hidden sm:block">
        <BottomBlueSplash />
      </div>

      {/* 6. The Character Illustration (z-15, foreground artwork) */}
      <img
        src="/images/character.png"
        alt="Lakshith Reddy - Developer Character Illustration"
        className="relative z-15 w-full h-full object-contain object-bottom drop-shadow-sm"
      />

      {/* 7. Yellow Crown (z-25, locked directly above the character's head) */}
      <div className="absolute left-[54%] top-[-3%] z-25 pointer-events-none">
        <YellowCrown />
      </div>

      {/* 8. Yellow Zigzag (z-25, locked next to the character's arm) */}
      <div className="absolute right-[13%] top-[42%] z-25 pointer-events-none hidden sm:block">
        <YellowZigzag />
      </div>
    </div>
  )
}

