import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

/**
 * Original, image-free hero artwork: an animated isometric build engine.
 * The geometry hints at connected systems, while the orbiting readouts give
 * visitors a quick sense of the work without turning the hero into a dashboard.
 */
export const HeroBuildEngine: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      data-testid="hero-build-engine"
      role="img"
      aria-label="Animated isometric systems sculpture with orbiting engineering layers"
      className="relative h-full w-full select-none"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.05, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-[4%] rounded-full bg-[radial-gradient(circle,rgba(7,85,245,0.16)_0%,rgba(7,85,245,0.06)_38%,transparent_72%)] blur-[10px]"
      />

      <svg
        aria-hidden="true"
        viewBox="0 0 780 720"
        fill="none"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <defs>
          <radialGradient id="build-engine-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#80A8FF" stopOpacity="0.42" />
            <stop offset="62%" stopColor="#0755F5" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0755F5" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="build-engine-top" x1="244" y1="164" x2="534" y2="354" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" stopOpacity="0.92" />
            <stop offset="0.48" stopColor="#C8D8FF" stopOpacity="0.78" />
            <stop offset="1" stopColor="#7199F8" stopOpacity="0.72" />
          </linearGradient>
          <linearGradient id="build-engine-left" x1="222" y1="258" x2="391" y2="568" gradientUnits="userSpaceOnUse">
            <stop stopColor="#263D76" />
            <stop offset="1" stopColor="#101B37" />
          </linearGradient>
          <linearGradient id="build-engine-right" x1="391" y1="336" x2="565" y2="540" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3978FF" />
            <stop offset="1" stopColor="#0755F5" />
          </linearGradient>
          <radialGradient id="build-engine-core" cx="50%" cy="38%" r="65%">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.24" stopColor="#BBD0FF" />
            <stop offset="0.58" stopColor="#4380FF" />
            <stop offset="1" stopColor="#0755F5" />
          </radialGradient>
          <filter id="build-engine-glow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="13" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="build-engine-shadow" x="-50%" y="-50%" width="200%" height="220%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="18" />
            <feOffset dy="18" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="392" cy="356" r="300" fill="url(#build-engine-aura)" />

        {/* Measured orbital rings — slow enough to read as atmosphere, not noise. */}
        <ellipse cx="392" cy="356" rx="318" ry="244" stroke="#0755F5" strokeOpacity="0.18" strokeWidth="1.3" />
        <ellipse cx="392" cy="356" rx="278" ry="210" stroke="#0755F5" strokeOpacity="0.16" strokeWidth="1.1" />
        <motion.g
          style={{ transformOrigin: '392px 356px' }}
          animate={shouldReduceMotion ? undefined : { rotate: [0, 360] }}
          transition={{ duration: 74, repeat: Infinity, ease: 'linear' }}
        >
          <ellipse cx="392" cy="356" rx="340" ry="138" transform="rotate(-27 392 356)" stroke="#0755F5" strokeOpacity="0.42" strokeWidth="2" strokeDasharray="5 13" />
          <circle cx="721" cy="250" r="6" fill="#0755F5" />
          <circle cx="67" cy="486" r="4.5" fill="#FFB600" />
        </motion.g>

        <motion.g
          style={{ transformOrigin: '392px 356px' }}
          animate={shouldReduceMotion ? undefined : { rotate: [0, -360] }}
          transition={{ duration: 112, repeat: Infinity, ease: 'linear' }}
        >
          <ellipse cx="392" cy="356" rx="220" ry="302" transform="rotate(34 392 356)" stroke="#0755F5" strokeOpacity="0.16" strokeWidth="1.2" strokeDasharray="2 9" />
          <path d="M155 231C195 144 287 91 388 92C470 92 542 123 591 179" stroke="#0755F5" strokeOpacity="0.52" strokeWidth="3" strokeLinecap="round" />
        </motion.g>

        {/* Floating architectural object. */}
        <motion.g
          filter="url(#build-engine-shadow)"
          animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M390 151L568 254L390 357L212 254L390 151Z" fill="url(#build-engine-top)" stroke="#537EE0" strokeWidth="2" />
          <path d="M212 254L390 357V568L212 465V254Z" fill="url(#build-engine-left)" stroke="#7DA2FF" strokeOpacity="0.82" strokeWidth="2" />
          <path d="M390 357L568 254V465L390 568V357Z" fill="url(#build-engine-right)" stroke="#8BAEFF" strokeOpacity="0.9" strokeWidth="2" />

          {/* Faceted inner frame. */}
          <path d="M390 194L508 262L390 330L272 262L390 194Z" stroke="#0755F5" strokeOpacity="0.62" strokeWidth="2" />
          <path d="M272 262L390 330V491L272 423V262Z" stroke="#B7CCFF" strokeOpacity="0.42" strokeWidth="1.5" />
          <path d="M390 330L508 262V423L390 491V330Z" stroke="#D8E4FF" strokeOpacity="0.52" strokeWidth="1.5" />

          {/* Fine circuit traces converge into the core. */}
          <path d="M305 258L359 289V322M475 258L421 289V322M390 222V286M272 375L337 412M508 375L443 412" stroke="#FFFFFF" strokeOpacity="0.62" strokeWidth="2" strokeLinecap="round" />
          <path d="M305 258L359 289V322M475 258L421 289V322" stroke="#0755F5" strokeOpacity="0.7" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="305" cy="258" r="4" fill="#FFFFFF" />
          <circle cx="475" cy="258" r="4" fill="#FFFFFF" />
          <circle cx="390" cy="222" r="4" fill="#0755F5" />
          <circle cx="272" cy="375" r="3.5" fill="#FFB600" />
          <circle cx="508" cy="375" r="3.5" fill="#FFFFFF" />

          {/* Luminous system core. */}
          <circle cx="390" cy="357" r="68" fill="#0755F5" fillOpacity="0.15" filter="url(#build-engine-glow)" />
          <circle cx="390" cy="357" r="47" fill="#0B1A3A" stroke="#A9C4FF" strokeOpacity="0.9" strokeWidth="2" />
          <circle cx="390" cy="357" r="36" fill="url(#build-engine-core)" />
          <path d="M390 330V384M363 357H417M371 338L409 376M409 338L371 376" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="390" cy="357" r="10" fill="#FFFFFF" fillOpacity="0.92" filter="url(#build-engine-glow)" />
        </motion.g>

        {/* Small moving signal points make the scene feel active. */}
        <motion.circle
          cx="616"
          cy="330"
          r="5"
          fill="#0755F5"
          animate={shouldReduceMotion ? undefined : { x: [0, -26, 0], y: [0, -18, 0], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="182"
          cy="426"
          r="4"
          fill="#FFB600"
          animate={shouldReduceMotion ? undefined : { x: [0, 20, 0], y: [0, 15, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        <motion.path
          d="M143 566C220 612 316 636 410 624"
          stroke="#0755F5"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="2 9"
          animate={shouldReduceMotion ? undefined : { pathLength: [0.3, 1, 0.3], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {/* Minimal readouts add context while leaving the core uncluttered. */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[1%] top-[15%] w-[190px] rounded-[15px] border border-white/70 bg-[#FAF5EC]/80 p-3.5 shadow-[0_18px_45px_rgba(28,46,87,0.1)] backdrop-blur-xl sm:w-[210px]"
      >
        <div className="flex items-center justify-between font-mono-tech text-[8px] font-bold uppercase tracking-[0.16em] text-[#756D60]">
          <span>System status</span>
          <span className="flex items-center gap-1.5 text-[#0755F5]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0755F5]" />
            Online
          </span>
        </div>
        <div className="mt-3 font-sans text-[15px] font-extrabold tracking-[-0.04em] text-[#171717]">Ideas into systems.</div>
        <div className="mt-2 flex h-7 items-end gap-1.5">
          {[12, 18, 14, 25, 17, 29, 22, 26, 19, 31, 24, 34].map((height, index) => (
            <motion.span
              key={index}
              className="flex-1 rounded-t-[3px] bg-[#0755F5]"
              style={{ height: `${height}px`, opacity: 0.35 + (index / 12) * 0.55 }}
              animate={shouldReduceMotion ? undefined : { scaleY: [0.72, 1, 0.82] }}
              transition={{ duration: 2.4 + index * 0.08, repeat: Infinity, ease: 'easeInOut', delay: index * 0.04 }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[11%] right-[2%] rounded-[14px] border border-[#0755F5]/15 bg-[#111A2C]/95 px-4 py-3 text-white shadow-[0_18px_48px_rgba(10,25,58,0.22)] backdrop-blur-xl"
      >
        <div className="font-mono-tech text-[8px] font-bold uppercase tracking-[0.18em] text-[#9EB8F5]">Build sequence</div>
        <div className="mt-2 flex items-center gap-2 font-mono-tech text-[10px] font-bold">
          <span className="text-white">THINK</span>
          <span className="text-[#7097FF]">/</span>
          <span className="text-white">BUILD</span>
          <span className="text-[#7097FF]">/</span>
          <span className="text-[#AFC6FF]">SHIP</span>
        </div>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.92, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[20%] left-[8%] hidden items-center gap-2 rounded-full border border-[#CFC4B3]/80 bg-[#FAF5EC]/80 px-3 py-2 shadow-[0_8px_25px_rgba(30,25,15,0.07)] backdrop-blur-lg xl:flex"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0755F5] font-mono-tech text-[9px] font-bold text-white">01</span>
        <span className="font-mono-tech text-[9px] font-bold uppercase tracking-[0.1em] text-[#514B42]">Design / Engineer / Iterate</span>
      </motion.div>
    </div>
  )
}
