import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

/**
 * A restrained motion-graphics layer: soft light, one orbit and a slow-moving
 * accent. It supports the character instead of becoming another focal point.
 */
export const HeroCinematicLayer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-[-3%] z-0 w-[74%] overflow-hidden opacity-75">
      <svg viewBox="0 0 960 720" preserveAspectRatio="xMidYMid slice" className="h-full w-full" fill="none">
        <defs>
          <radialGradient id="hero-blue-wash" cx="67%" cy="50%" r="58%">
            <stop offset="0%" stopColor="#D5E2FF" stopOpacity="0.7" />
            <stop offset="58%" stopColor="#D5E2FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#F5EFEB" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="960" height="720" fill="url(#hero-blue-wash)" />
        <ellipse cx="670" cy="354" rx="325" ry="248" stroke="#0755F5" strokeOpacity="0.11" strokeWidth="1.4" />
        <ellipse cx="670" cy="354" rx="278" ry="204" stroke="#0755F5" strokeOpacity="0.12" strokeWidth="1" />
        <motion.g
          style={{ transformOrigin: '670px 354px' }}
          animate={shouldReduceMotion ? undefined : { rotate: [0, 360] }}
          transition={{ duration: 110, repeat: Infinity, ease: 'linear' }}
        >
          <ellipse cx="670" cy="354" rx="305" ry="112" transform="rotate(-24 670 354)" stroke="#0755F5" strokeOpacity="0.22" strokeWidth="1.2" strokeDasharray="4 12" />
          <circle cx="963" cy="235" r="4" fill="#0755F5" />
        </motion.g>
        <motion.path
          d="M475 556C585 494 684 460 811 467"
          stroke="#0755F5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.55"
          initial={shouldReduceMotion ? false : { pathLength: 0 }}
          animate={shouldReduceMotion ? undefined : { pathLength: [0, 1, 1], opacity: [0.25, 0.65, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <g fill="#FFB600">
          <path d="M540 165V183M531 174H549" stroke="#FFB600" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M862 528V546M853 537H871" stroke="#FFB600" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  )
}
