import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

interface WorkflowStep {
  step: string
  title: string
  description: string
}

interface ProjectWorkflowPreviewProps {
  steps: WorkflowStep[]
  number: string
}

/** Animated preview of the real workflow recorded in each project case study. */
export const ProjectWorkflowPreview: React.FC<ProjectWorkflowPreviewProps> = ({ steps, number }) => {
  const shouldReduceMotion = useReducedMotion()
  const visibleSteps = steps.slice(0, 5)

  if (!visibleSteps.length) return null

  return (
    <div
      aria-label={`Project ${number} workflow: ${visibleSteps.map((item) => item.title).join(', ')}`}
      className="relative -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-[17px] border-b border-[#D5C9B7]/80 bg-[#F0E9DD] px-4 pb-3 pt-3"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(#0755F5_0.6px,transparent_0.6px)] [background-size:13px_13px]" />
      <div className="relative flex items-center justify-between font-mono-tech text-[9px] font-bold tracking-[0.16em] text-[#0755F5]/80">
        <span>WORKFLOW TRACE</span>
        <span>SYS_{number}</span>
      </div>
      <div className="relative mt-4 grid grid-cols-5 gap-1">
        <div className="absolute left-[9%] right-[9%] top-[5px] h-px bg-[#0755F5]/25" />
        {!shouldReduceMotion && (
          <motion.span
            aria-hidden="true"
            className="absolute top-[2px] z-20 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#0755F5] shadow-[0_0_10px_rgba(7,85,245,0.65)]"
            animate={{ left: ['9%', '91%'] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        {visibleSteps.map((item, index) => (
          <div key={item.step} className="relative z-10 flex min-w-0 flex-col items-center">
            <motion.span
              className="mb-2 h-[11px] w-[11px] rounded-full border-2 border-[#0755F5] bg-[#F0E9DD]"
              animate={shouldReduceMotion ? undefined : { scale: [1, 1.18, 1], backgroundColor: ['#F0E9DD', '#0755F5', '#F0E9DD'] }}
              transition={{ duration: 2.1, delay: index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span title={item.title} className="max-w-full truncate font-mono-tech text-[8px] font-bold tracking-[-0.03em] text-[#222222]">
              {item.title}
            </span>
            <span className="mt-0.5 font-mono-tech text-[8px] text-[#0755F5]/70">{item.step}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
