import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

const particles = [
  { x: 126, y: 164, r: 2, dx: 18, dy: -28, delay: 0.1 },
  { x: 224, y: 552, r: 3, dx: -24, dy: -18, delay: 0.8 },
  { x: 356, y: 102, r: 2, dx: 20, dy: 24, delay: 1.2 },
  { x: 512, y: 682, r: 2, dx: -12, dy: -34, delay: 0.4 },
  { x: 748, y: 122, r: 3, dx: 16, dy: 22, delay: 1.6 },
  { x: 906, y: 528, r: 2, dx: -18, dy: -20, delay: 0.6 },
  { x: 1018, y: 264, r: 2, dx: -24, dy: 32, delay: 1.9 },
  { x: 846, y: 706, r: 2, dx: 18, dy: -24, delay: 1.1 },
]

/**
 * A cinematic motion-graphics field inspired by title sequences and science-film
 * visuals: light ribbons, volumetric glow, anamorphic flares, drifting particles,
 * and layered orbit paths. No portrait, cube, dashboard, or remote video asset.
 */
export const HeroCinematicVisual: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      data-testid="hero-cinematic-visual"
      role="img"
      aria-label="Cinematic abstract light trails sweeping around a luminous blue portal"
      className="relative h-full w-full overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.035, 1], x: [0, -8, 0], y: [0, 5, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_62%_48%,rgba(26,70,160,0.98)_0%,rgba(10,27,66,0.96)_28%,rgba(5,12,29,0.99)_66%,#030711_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_12%,rgba(71,133,255,0.28)_0%,transparent_42%),radial-gradient(ellipse_at_35%_78%,rgba(0,184,255,0.12)_0%,transparent_44%)]" />

        <svg
          aria-hidden="true"
          viewBox="0 0 1100 800"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <defs>
            <radialGradient id="cinematic-aura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A9C8FF" stopOpacity="0.95" />
              <stop offset="0.17" stopColor="#3986FF" stopOpacity="0.72" />
              <stop offset="0.48" stopColor="#0755F5" stopOpacity="0.2" />
              <stop offset="1" stopColor="#0755F5" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="cinematic-core" cx="42%" cy="36%" r="68%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.96" />
              <stop offset="0.16" stopColor="#BBD9FF" stopOpacity="0.94" />
              <stop offset="0.44" stopColor="#3B8FFF" stopOpacity="0.68" />
              <stop offset="1" stopColor="#0755F5" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="cinematic-ribbon-one" x1="45" y1="660" x2="1050" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00C8FF" stopOpacity="0" />
              <stop offset="0.28" stopColor="#00C8FF" stopOpacity="0.48" />
              <stop offset="0.55" stopColor="#B7D7FF" />
              <stop offset="0.73" stopColor="#287BFF" />
              <stop offset="1" stopColor="#0755F5" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="cinematic-ribbon-two" x1="34" y1="120" x2="1080" y2="650" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0755F5" stopOpacity="0" />
              <stop offset="0.3" stopColor="#4D90FF" />
              <stop offset="0.58" stopColor="#D5E8FF" />
              <stop offset="0.78" stopColor="#00C8FF" stopOpacity="0.68" />
              <stop offset="1" stopColor="#0755F5" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="cinematic-hairline" x1="130" y1="300" x2="1060" y2="490" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0755F5" stopOpacity="0" />
              <stop offset="0.5" stopColor="#B7D7FF" stopOpacity="0.88" />
              <stop offset="1" stopColor="#00C8FF" stopOpacity="0" />
            </linearGradient>
            <filter id="cinematic-bloom" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="cinematic-soft-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="30" />
            </filter>
            <filter id="cinematic-film-grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="2" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>

          <rect width="1100" height="800" fill="#030711" />
          <circle cx="645" cy="392" r="360" fill="url(#cinematic-aura)" opacity="0.82" />
          <circle cx="645" cy="392" r="205" fill="#1B6FFF" opacity="0.12" filter="url(#cinematic-soft-glow)" />

          {/* Deep orbital planes, tilted like a cinematic lens aperture. */}
          <motion.g
            style={{ transformOrigin: '645px 392px' }}
            animate={shouldReduceMotion ? undefined : { rotate: [0, 360] }}
            transition={{ duration: 88, repeat: Infinity, ease: 'linear' }}
          >
            <ellipse cx="645" cy="392" rx="390" ry="250" transform="rotate(-18 645 392)" stroke="#4E8BFF" strokeOpacity="0.22" strokeWidth="1.2" />
            <ellipse cx="645" cy="392" rx="340" ry="195" transform="rotate(31 645 392)" stroke="#80B7FF" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="2 12" />
            <path d="M275 250C400 58 712 20 914 175" stroke="#82B5FF" strokeOpacity="0.48" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="916" cy="176" r="4" fill="#B8D7FF" filter="url(#cinematic-bloom)" />
          </motion.g>

          <motion.g
            style={{ transformOrigin: '645px 392px' }}
            animate={shouldReduceMotion ? undefined : { rotate: [0, -360] }}
            transition={{ duration: 132, repeat: Infinity, ease: 'linear' }}
          >
            <ellipse cx="645" cy="392" rx="455" ry="142" transform="rotate(24 645 392)" stroke="#0755F5" strokeOpacity="0.34" strokeWidth="1.5" strokeDasharray="4 16" />
            <ellipse cx="645" cy="392" rx="300" ry="365" transform="rotate(-22 645 392)" stroke="#2C75FF" strokeOpacity="0.14" strokeWidth="1.2" />
          </motion.g>

          {/* The main luminous ribbon sweeps through the scene like a title-sequence reveal. */}
          <motion.path
            d="M-65 660C106 546 160 263 372 198C568 137 650 386 806 334C927 295 1000 142 1164 65"
            stroke="url(#cinematic-ribbon-one)"
            strokeWidth="26"
            strokeLinecap="round"
            filter="url(#cinematic-bloom)"
            initial={shouldReduceMotion ? false : { pathLength: 0.08, opacity: 0.12 }}
            animate={shouldReduceMotion ? undefined : { pathLength: [0.08, 1, 0.08], opacity: [0.14, 0.96, 0.24] }}
            transition={{ duration: 10.5, repeat: Infinity, repeatDelay: 0.7, ease: 'easeInOut' }}
          />
          <motion.path
            d="M-50 660C122 547 176 267 388 203C577 144 659 386 811 331C933 288 1006 139 1160 65"
            stroke="url(#cinematic-ribbon-one)"
            strokeWidth="2.4"
            strokeLinecap="round"
            initial={shouldReduceMotion ? false : { pathLength: 0.1, opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { pathLength: [0.1, 1, 0.1], opacity: [0, 1, 0.15] }}
            transition={{ duration: 10.5, repeat: Infinity, repeatDelay: 0.7, ease: 'easeInOut' }}
          />

          <motion.path
            d="M-100 140C112 226 193 575 430 594C650 613 685 352 856 285C982 235 1060 350 1190 540"
            stroke="url(#cinematic-ribbon-two)"
            strokeWidth="13"
            strokeLinecap="round"
            filter="url(#cinematic-bloom)"
            initial={shouldReduceMotion ? false : { pathLength: 0.08, opacity: 0.1 }}
            animate={shouldReduceMotion ? undefined : { pathLength: [0.08, 1, 0.08], opacity: [0.12, 0.78, 0.1] }}
            transition={{ duration: 13, repeat: Infinity, repeatDelay: 0.3, ease: 'easeInOut', delay: 1.2 }}
          />

          <motion.path
            d="M20 725C225 614 332 425 520 365C738 294 870 393 1120 282"
            stroke="url(#cinematic-hairline)"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeDasharray="5 14"
            animate={shouldReduceMotion ? undefined : { strokeDashoffset: [0, -240], opacity: [0.18, 0.72, 0.18] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          />

          {/* A luminous lens/aperture, not a literal object or dashboard. */}
          <motion.g
            style={{ transformOrigin: '645px 392px' }}
            animate={shouldReduceMotion ? undefined : { scale: [1, 1.035, 1], rotate: [0, 2, 0] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ellipse cx="645" cy="392" rx="156" ry="112" stroke="#B4D6FF" strokeOpacity="0.18" strokeWidth="1.5" />
            <ellipse cx="645" cy="392" rx="132" ry="88" stroke="#5DA0FF" strokeOpacity="0.42" strokeWidth="2" />
            <ellipse cx="645" cy="392" rx="105" ry="68" fill="#061329" fillOpacity="0.62" stroke="#9CC5FF" strokeOpacity="0.55" strokeWidth="1.6" />
            <circle cx="645" cy="392" r="91" fill="url(#cinematic-core)" opacity="0.74" filter="url(#cinematic-soft-glow)" />
            <circle cx="645" cy="392" r="37" fill="#7CB3FF" fillOpacity="0.3" filter="url(#cinematic-bloom)" />
            <circle cx="645" cy="392" r="8" fill="#FFFFFF" filter="url(#cinematic-bloom)" />
          </motion.g>

          {/* Anamorphic flare: a thin, bright line with soft lateral bloom. */}
          <motion.g
            animate={shouldReduceMotion ? undefined : { opacity: [0.35, 0.95, 0.35], scaleX: [0.78, 1.06, 0.78] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            style={{ transformOrigin: '645px 392px' }}
          >
            <path d="M405 392H885" stroke="#7DB7FF" strokeOpacity="0.2" strokeWidth="16" filter="url(#cinematic-soft-glow)" />
            <path d="M468 392H824" stroke="#D5E9FF" strokeOpacity="0.7" strokeWidth="1.4" />
            <path d="M590 392H700" stroke="#FFFFFF" strokeWidth="2.4" filter="url(#cinematic-bloom)" />
          </motion.g>

          {particles.map((particle, index) => (
            <motion.circle
              key={index}
              cx={particle.x}
              cy={particle.y}
              r={particle.r}
              fill={index % 3 === 0 ? '#D9ECFF' : '#63A5FF'}
              filter="url(#cinematic-bloom)"
              animate={shouldReduceMotion ? undefined : {
                x: [0, particle.dx, -particle.dx * 0.45, 0],
                y: [0, particle.dy, -particle.dy * 0.35, 0],
                opacity: [0.12, 0.95, 0.35, 0.12],
                scale: [0.7, 1.5, 0.9, 0.7],
              }}
              transition={{ duration: 7 + index * 0.5, repeat: Infinity, ease: 'easeInOut', delay: particle.delay }}
            />
          ))}

          <motion.circle
            cx="884"
            cy="552"
            r="2.4"
            fill="#FFFFFF"
            animate={shouldReduceMotion ? undefined : { opacity: [0.1, 1, 0.1], scale: [0.7, 2, 0.7] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="320"
            cy="270"
            r="2"
            fill="#FFCF84"
            animate={shouldReduceMotion ? undefined : { opacity: [0.12, 0.8, 0.12], scale: [0.8, 1.8, 0.8] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
          />

          {/* Fine film grain gives the dark field a photographic finish. */}
          <rect width="1100" height="800" filter="url(#cinematic-film-grain)" opacity="0.045" />
        </svg>

        <motion.div
          className="absolute left-[57%] top-[49%] h-40 w-[2px] bg-gradient-to-b from-transparent via-[#D5E9FF]/70 to-transparent blur-[1px]"
          animate={shouldReduceMotion ? undefined : { opacity: [0.1, 0.65, 0.1], scaleY: [0.75, 1.3, 0.75] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Filmic edge falloff and cool highlight on the far side. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,10,24,0)_0%,rgba(4,10,24,0.06)_22%,rgba(4,10,24,0.18)_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_48%,transparent_25%,rgba(1,5,14,0.34)_100%)]" />
    </div>
  )
}
