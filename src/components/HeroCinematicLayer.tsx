import React, { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

/**
 * A cinematic, continuously animated motion-graphics layer built natively in SVG.
 * It stays crisp at any viewport, has no remote media dependency, and respects
 * the visitor's reduced-motion preference.
 */
export const HeroCinematicLayer: React.FC = () => {
  const layerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: layerRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 34])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.035])

  const idle = shouldReduceMotion ? undefined : {
    rotate: [0, 360],
  }
  const orbitTransition = { duration: 88, repeat: Infinity, ease: 'linear' as const }
  const pulseTransition = { duration: 3.8, repeat: Infinity, ease: 'easeInOut' as const }

  return (
    <motion.div
      ref={layerRef}
      aria-hidden="true"
      style={shouldReduceMotion ? undefined : { y, scale }}
      className="absolute inset-y-0 right-[-3%] z-0 w-[82%] overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-0 opacity-[0.8] mix-blend-multiply [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.12)_18%,#000_48%)]">
        <svg
          viewBox="0 0 960 720"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
          fill="none"
        >
          <defs>
            <radialGradient id="hero-blue-wash" cx="71%" cy="49%" r="62%">
              <stop offset="0%" stopColor="#D9E5FF" stopOpacity="0.85" />
              <stop offset="62%" stopColor="#D9E5FF" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#F5EFEB" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="hero-sweep" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0755F5" stopOpacity="0" />
              <stop offset="48%" stopColor="#0755F5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0755F5" stopOpacity="0" />
            </linearGradient>
            <pattern id="hero-grid" width="42" height="42" patternUnits="userSpaceOnUse">
              <path d="M42 0H0V42" stroke="#0755F5" strokeOpacity="0.14" strokeWidth="1" />
            </pattern>
            <filter id="hero-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <rect width="960" height="720" fill="url(#hero-blue-wash)" />
          <rect x="330" width="630" height="720" fill="url(#hero-grid)" opacity="0.72" />

          <motion.g
            style={{ transformOrigin: '690px 350px' }}
            animate={idle}
            transition={orbitTransition}
          >
            <ellipse cx="690" cy="350" rx="285" ry="190" stroke="#0755F5" strokeOpacity="0.35" strokeWidth="1.6" transform="rotate(-13 690 350)" />
            <ellipse cx="690" cy="350" rx="235" ry="142" stroke="#0755F5" strokeOpacity="0.23" strokeWidth="1.2" transform="rotate(22 690 350)" />
            <ellipse cx="690" cy="350" rx="330" ry="218" stroke="#0755F5" strokeOpacity="0.14" strokeWidth="1" />
            <path d="M404 308C452 166 579 103 713 125C831 144 912 221 926 312" stroke="#0755F5" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="220 980" opacity="0.9" />
          </motion.g>

          <motion.path
            d="M420 480C530 385 592 266 735 248C820 236 866 282 910 342"
            stroke="url(#hero-sweep)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { pathLength: [0, 1, 1], opacity: [0, 0.8, 0.12] }}
            transition={{ duration: 7.5, repeat: Infinity, repeatDelay: 1.2, ease: 'easeInOut' }}
          />

          <motion.g
            animate={shouldReduceMotion ? undefined : { x: [0, 9, 0], y: [0, -12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx="480" cy="204" r="3.5" fill="#0755F5" />
            <circle cx="520" cy="500" r="4" fill="#0755F5" />
            <circle cx="846" cy="198" r="3" fill="#0755F5" />
            <circle cx="888" cy="424" r="4" fill="#0755F5" />
          </motion.g>

          {[
            { x: 548, y: 262, r: 5, delay: 0 },
            { x: 806, y: 316, r: 4, delay: 0.6 },
            { x: 640, y: 470, r: 4, delay: 1.2 },
            { x: 900, y: 250, r: 3, delay: 1.8 },
          ].map((dot) => (
            <motion.circle
              key={dot.x}
              cx={dot.x}
              cy={dot.y}
              r={dot.r}
              fill="#0755F5"
              filter="url(#hero-glow)"
              animate={shouldReduceMotion ? undefined : { opacity: [0.3, 1, 0.3], scale: [0.75, 1.25, 0.75] }}
              transition={{ ...pulseTransition, delay: dot.delay }}
            />
          ))}

          <motion.g
            animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 1.4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <rect x="674" y="168" width="164" height="92" rx="10" fill="#FAF5EC" fillOpacity="0.64" stroke="#0755F5" strokeOpacity="0.42" />
            <path d="M674 192H838" stroke="#0755F5" strokeOpacity="0.25" />
            <circle cx="690" cy="181" r="3" fill="#FFB600" />
            <circle cx="701" cy="181" r="3" fill="#0755F5" fillOpacity="0.65" />
            <path d="M696 214H772M696 228H810M696 242H753" stroke="#0755F5" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
            <path d="M780 214L790 224L780 234" stroke="#0755F5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.g>

          <g stroke="#FFB600" strokeWidth="3" strokeLinecap="round" opacity="0.86">
            <path d="M588 140V158M579 149H597" />
            <path d="M866 500V518M857 509H875" />
            <path d="M760 548V564M752 556H768" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F5EFEB]/5 to-[#F5EFEB]/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5EFEB]/10 via-transparent to-[#F5EFEB]/25" />
    </motion.div>
  )
}
