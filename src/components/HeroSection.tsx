import React from 'react'
import { motion } from 'motion/react'
import { ArrowDownRight, ArrowUpRight, Code2, Download } from 'lucide-react'
import { HeroCinematicLayer } from './HeroCinematicLayer'
import { CharacterScene } from './CharacterScene'
import { PortfolioStats } from './PortfolioStats'
import { ScrollIndicator } from './ScrollIndicator'
import { CursorSpotlight } from './CursorSpotlight'

interface HeroSectionProps {
  onExploreClick?: () => void
  onNavigate?: (sectionId: string) => void
}

const focusAreas = ['AI agents', 'RAG systems', 'Developer tools', 'Full-stack engineering']

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const handleExplore = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    if (onExploreClick) {
      onExploreClick()
      return
    }

    document.getElementById('projects')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[740px] h-[calc(100svh-96px)] max-h-[920px] w-full items-center overflow-hidden bg-[#F5EFEB] select-none"
    >
      {/* Quiet paper texture and a single, deliberate blue focal field. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_48%,rgba(7,85,245,0.11)_0%,rgba(7,85,245,0.045)_28%,transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.2] [background-image:linear-gradient(rgba(35,48,77,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(35,48,77,0.1)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(90deg,transparent_0%,#000_45%,#000_100%)]" />
        <div className="absolute -right-[12%] top-[9%] h-[min(74vw,900px)] w-[min(74vw,900px)] rounded-full border border-[#0755F5]/10" />
        <div className="absolute -right-[7%] top-[15%] h-[min(62vw,760px)] w-[min(62vw,760px)] rounded-full border border-[#0755F5]/[0.14]" />
        <HeroCinematicLayer />
      </div>

      <CursorSpotlight />

      {/* Character is the single hero visual — no floating widgets over the artwork. */}
      <div className="pointer-events-none absolute bottom-0 right-[-5%] z-10 hidden h-[98%] w-[66%] items-end justify-end lg:flex">
        <CharacterScene />
      </div>
      <div className="pointer-events-none absolute bottom-[-2%] right-[-34%] z-10 flex h-[53%] w-[108%] items-end justify-end opacity-[0.22] sm:right-[-22%] sm:h-[63%] sm:opacity-[0.26] lg:hidden">
        <CharacterScene />
      </div>

      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1720px] items-center px-[clamp(24px,5.2vw,88px)] py-12 sm:px-[clamp(32px,5.2vw,88px)] lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[700px] lg:w-[57%] xl:w-[55%]"
        >
          <div className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono-tech text-[9px] font-bold uppercase tracking-[0.2em] text-[#756D60] sm:mb-8 sm:text-[10px]">
            <span className="inline-block h-[2px] w-8 bg-[#0755F5]" />
            <span>AI / ML student</span>
            <span className="text-[#B2A897]">/</span>
            <span>Software engineering</span>
            <span className="text-[#B2A897]">/</span>
            <span>Portfolio 2026</span>
          </div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20, clipPath: 'inset(15% 0 0 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="m-0 font-anton text-[clamp(66px,9.1vw,150px)] uppercase leading-[0.82] tracking-[-0.018em] text-[#111111]"
          >
            <span className="block">LAKSHITH</span>
            <span className="mt-2 block">REDDY<span className="text-[#0755F5]">.</span></span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-[570px] border-l-[3px] border-[#0755F5] pl-4 sm:mt-8 sm:pl-5"
          >
            <p className="font-sans text-[clamp(20px,2.1vw,30px)] font-extrabold leading-[1.12] tracking-[-0.045em] text-[#151515]">
              Think disruptive.
              <br />
              <span className="text-[#0755F5]">Build relentlessly.</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.43, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-[520px] font-sans text-[clamp(13px,1.02vw,15.5px)] leading-[1.7] text-[#514B42] sm:mt-6"
          >
            I turn ambitious ideas into practical AI systems, autonomous agents, developer tools, and thoughtful software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Areas of focus"
            className="mt-5 flex max-w-[570px] flex-wrap gap-2 sm:mt-6"
          >
            {focusAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-[#CFC4B3] bg-[#FAF5EC]/80 px-3 py-1.5 font-mono-tech text-[9px] font-bold uppercase tracking-[0.045em] text-[#514B42] shadow-[0_2px_8px_rgba(30,25,15,0.035)] sm:text-[9.5px]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#0755F5]" />
                {area}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-8"
          >
            <a
              href="#projects"
              onClick={handleExplore}
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#0755F5] px-6 py-3 text-[13.5px] font-bold text-white shadow-[0_10px_28px_rgba(7,85,245,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0043D6] hover:shadow-[0_14px_34px_rgba(7,85,245,0.28)] active:translate-y-0 active:scale-[0.98]"
            >
              Explore selected work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://github.com/MokuLakshithReddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#BDB2A2] bg-[#FAF5EC]/55 px-4 py-2.5 text-[13px] font-semibold text-[#25221D] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0755F5] hover:bg-[#0755F5]/5 hover:text-[#0755F5] active:translate-y-0 active:scale-[0.98]"
            >
              <Code2 className="h-4 w-4" />
              GitHub
            </a>

            <a
              href="/Lakshith_Reddy_CV.pdf"
              download="Lakshith_Reddy_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 px-1 py-2 text-[12.5px] font-semibold text-[#625B50] transition-colors hover:text-[#0755F5]"
            >
              <Download className="h-4 w-4 text-[#0755F5]" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-[560px] sm:mt-9"
          >
            <PortfolioStats />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-[clamp(24px,5.2vw,88px)] z-30 hidden lg:block">
        <ScrollIndicator targetId="projects" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute bottom-7 right-[clamp(28px,5vw,82px)] z-20 hidden items-center gap-3 font-mono-tech text-[9px] font-bold uppercase tracking-[0.2em] text-[#7A746A] lg:flex">
        <span>Scroll to explore</span>
        <ArrowDownRight className="h-4 w-4 text-[#0755F5]" />
      </div>
    </section>
  )
}
