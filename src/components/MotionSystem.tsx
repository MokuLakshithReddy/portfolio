import React, { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { ArrowUp } from 'lucide-react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  distance?: number
  amount?: number
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  delay = 0,
  distance = 22,
  amount = 0.12,
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: distance }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount }}
    transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

export const ScrollProgress: React.FC = () => {
  const { scrollY, scrollYProgress } = useScroll()
  const [showBackToTop, setShowBackToTop] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShowBackToTop(latest > 520)
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-[#0755F5]"
        style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
      />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            aria-label="Back to top"
            title="Back to top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 12, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.94 }}
            className="fixed bottom-5 right-5 z-[90] inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#111111]/20 bg-[#FAF5EC] text-[#0755F5] shadow-lg transition-colors hover:bg-[#0755F5] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0755F5]"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
