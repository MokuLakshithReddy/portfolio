import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

/**
 * The portfolio character is deliberately kept as the one hero illustration.
 * Supporting doodles and floating windows live elsewhere so they cannot compete
 * with the headline or cover the artwork.
 */
export const CharacterScene: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative h-full w-full select-none">
      <div
        aria-hidden="true"
        className="absolute left-[14%] top-[9%] h-[78%] w-[78%] rounded-full bg-[radial-gradient(circle,rgba(7,85,245,0.14)_0%,rgba(7,85,245,0.065)_46%,transparent_72%)] blur-[2px]"
      />

      <svg
        aria-hidden="true"
        viewBox="0 0 700 680"
        fill="none"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <motion.ellipse
          cx="382"
          cy="352"
          rx="286"
          ry="224"
          stroke="#0755F5"
          strokeOpacity="0.24"
          strokeWidth="1.4"
          strokeDasharray="3 11"
          animate={shouldReduceMotion ? undefined : { rotate: [0, 360] }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '382px 352px' }}
        />
        <ellipse
          cx="382"
          cy="352"
          rx="246"
          ry="190"
          stroke="#0755F5"
          strokeOpacity="0.16"
          strokeWidth="1"
        />
        <path
          d="M106 399C120 221 244 93 404 88C512 84 596 130 640 207"
          stroke="#0755F5"
          strokeOpacity="0.7"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="640" cy="207" r="5" fill="#0755F5" />
        <circle cx="110" cy="399" r="4" fill="#FFB600" />
      </svg>

      <motion.img
        src="/images/character.png"
        alt="Lakshith Reddy illustrated as a developer with a laptop"
        draggable={false}
        className="absolute inset-0 z-10 h-full w-full object-contain object-bottom drop-shadow-[0_22px_32px_rgba(38,30,20,0.14)]"
        animate={shouldReduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
