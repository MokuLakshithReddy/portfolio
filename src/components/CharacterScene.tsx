import React, { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { FloatingBrowser } from './FloatingBrowser'
import {
  YellowCrown,
  YellowZigzag,
  FourPointStar,
  BottomBlueSplash
} from './DecorativeDoodles'

export const CharacterScene: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [22, -28])
  const parallaxRotate = useTransform(scrollYProgress, [0, 1], [1.1, -1.1])

  return (
    <motion.div
      ref={sceneRef}
      style={shouldReduceMotion ? undefined : { y: parallaxY, rotate: parallaxRotate }}
      className="relative h-full aspect-[664/516] max-h-[820px] flex items-end justify-end pointer-events-none select-none"
    >
      {/* 1. Blue Orbital Brush Stroke (z-5, sweeping behind head and character) */}
      <motion.div className="absolute inset-0 z-5 pointer-events-none overflow-visible">
        <svg viewBox="0 0 664 516" fill="none" className="w-full h-full overflow-visible">
          <motion.path
            initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0.35 }}
            animate={{ pathLength: 1, opacity: 0.92 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.35, delay: shouldReduceMotion ? 0 : 0.55, ease: 'easeInOut' }}
            d="M 110 270 C 85 145, 230 60, 385 58 C 495 55, 555 115, 550 200 C 545 285, 475 340, 365 350 C 240 365, 120 290, 150 400 C 170 450, 230 480, 330 480"
            stroke="#0755F5"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.92"
          />
        </svg>
      </motion.div>

      {/* 2. Floating Browser Window Doodle (z-10, sits right by his hair with zero drift) */}
      <motion.div
        className="absolute left-[8%] top-[12%] z-10 pointer-events-auto"
        animate={shouldReduceMotion ? undefined : { y: [0, -7, 0], rotate: [-6, -4, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FloatingBrowser />
      </motion.div>

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
      <motion.img
        src="/images/character.png"
        alt="Lakshith Reddy - Developer Character Illustration"
        className="relative z-15 w-full h-full object-contain object-bottom drop-shadow-sm"
        animate={shouldReduceMotion ? undefined : { y: [0, -4, 0], rotate: [0, 0.25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 7. Yellow Crown (z-25, locked directly above the character's head) */}
      <motion.div
        className="absolute left-[54%] top-[-3%] z-25 pointer-events-none"
        animate={shouldReduceMotion ? undefined : { y: [0, -5, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <YellowCrown />
      </motion.div>

      {/* 8. Yellow Zigzag (z-25, locked next to the character's arm) */}
      <div className="absolute right-[13%] top-[42%] z-25 pointer-events-none hidden sm:block">
        <YellowZigzag />
      </div>
    </motion.div>
  )
}
