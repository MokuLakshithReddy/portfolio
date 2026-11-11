import React from 'react'
import { HeroCinematicLayer } from './HeroCinematicLayer'
import { motion } from 'motion/react'
import { ArrowUpRight, Download, Github } from 'lucide-react'
import {
  EyebrowBadge,
  BlueHeadlineUnderline,
  YellowMarkerUnderline,
  BlueGlobeSketch,
  FourPointStar,
  CompassSketch,
  SkylineDoodle
} from './DecorativeDoodles'
import { CharacterScene } from './CharacterScene'
import { SkillsNote } from './SkillsNote'
import { PortfolioStats } from './PortfolioStats'
import { ScrollIndicator } from './ScrollIndicator'
import { CursorSpotlight } from './CursorSpotlight'
import { HeroTerminal } from './HeroTerminal'

interface HeroSectionProps {
  onExploreClick?: () => void
  onNavigate?: (sectionId: string) => void
}

const focusAreas = ['AI agents', 'RAG systems', 'Developer tools', 'Full-stack builds']

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onNavigate }) => {
  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onExploreClick) {
      onExploreClick()
    } else {
      const el = document.getElementById('projects')
      if (el) {
        el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
      }
    }
  }

  const handleTerminalNavigate = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId)
      return
    }

    const section = document.getElementById(sectionId)
    section?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <section
      id="home"
      className="relative flex h-[calc(100vh-96px)] min-h-[660px] max-h-[900px] w-full flex-col justify-between overflow-hidden bg-[#F5EFEB] select-none"
    >
      {/* 1. Background Layer */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <HeroCinematicLayer />
        <div className="absolute left-[clamp(200px,24vw,340px)] top-[135px] hidden opacity-25 sm:block">
          <CompassSketch />
        </div>
        <div className="absolute left-[clamp(14px,2.2vw,44px)] top-[85px]">
          <FourPointStar color="#111111" size={26} />
        </div>
        <div className="absolute right-[-40px] top-[clamp(180px,22vh,230px)] z-2 hidden opacity-75 sm:block">
          <BlueGlobeSketch />
        </div>
        <div className="absolute bottom-[20px] left-[10px] z-1 hidden sm:block">
          <SkylineDoodle side="left" />
        </div>
        <div className="absolute bottom-[10px] right-[0px] z-1 hidden lg:block">
          <SkylineDoodle side="right" />
        </div>
        <div className="absolute bottom-[8%] right-[12%] h-[min(54vw,660px)] w-[min(54vw,660px)] rounded-full border border-[#0755F5]/10 bg-[radial-gradient(circle,rgba(7,85,245,0.09)_0%,rgba(7,85,245,0.035)_45%,transparent_70%)] shadow-[0_0_90px_rgba(7,85,245,0.07)]" />
      </div>

      <CursorSpotlight />

      {/* 2. Character Scene */}
      <div className="pointer-events-none absolute bottom-0 right-[-22%] z-15 flex h-[50%] select-none items-end justify-end opacity-25 sm:right-0 sm:h-[76%] sm:opacity-100 lg:h-[96%] lg:max-h-[850px]">
        <CharacterScene />
      </div>

      {/* 3. Skills Note */}
      <div className="absolute right-[clamp(12px,2vw,30px)] top-[clamp(15px,3vh,35px)] z-25">
        <SkillsNote />
      </div>

      {/* 4. Interactive Terminal */}
      <HeroTerminal onNavigate={handleTerminalNavigate} />

      {/* 5. Left Content Column */}
      <motion.div
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.72, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-25 flex w-full flex-col justify-start px-6 pt-3 lg:absolute lg:left-[clamp(28px,4.2vw,72px)] lg:top-[24px] lg:w-[min(570px,46vw)] lg:px-0 lg:pt-0 md:max-w-[min(570px,54vw)]"
      >
        <div className="mb-5 sm:mb-7">
          <div className="mb-3 flex items-center gap-2 font-mono-tech text-[9px] font-bold uppercase tracking-[0.22em] text-[#777064] sm:text-[10px]">
            <span className="h-[2px] w-7 bg-[#0755F5]" />
            <span>Independent builder · Portfolio 2026</span>
          </div>
          <EyebrowBadge />
        </div>

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 24, clipPath: 'inset(18% 0 0 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 0.82, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="m-0 select-none font-anton text-[clamp(58px,8vw,138px)] uppercase leading-[0.88] text-[#111111]"
            style={{ letterSpacing: '-0.012em', transform: 'scaleX(1.035)', transformOrigin: 'left center' }}
          >
            <div className="pb-2 sm:pb-3">LAKSHITH</div>
            <div className="relative inline-flex items-start">
              REDDY<span className="text-[#0755F5]">.</span>
            </div>
          </motion.h1>
          <div className="mt-1">
            <BlueHeadlineUnderline />
          </div>
          <span className="pointer-events-none absolute -right-2 -top-5 hidden font-mono-tech text-[10px] font-bold tracking-[0.2em] text-[#0755F5]/70 xl:block">
            LR / 01
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.54, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          className="mb-2 mt-1 text-[clamp(17px,1.55vw,26px)] font-sans font-bold tracking-tight text-[#111111] sm:mb-2 sm:mt-2"
        >
          I build systems that{' '}
          <YellowMarkerUnderline>prove</YellowMarkerUnderline> they work.
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3 max-w-[490px] font-sans text-[clamp(13px,0.96vw,15.5px)] leading-[1.65] text-[#514B42] sm:mb-4"
        >
          Turning ambitious ideas into practical AI systems, developer tools, and thoughtful software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Areas of focus"
          className="mb-4 flex max-w-[510px] flex-wrap items-center gap-1.5 sm:mb-5 sm:gap-2"
        >
          {focusAreas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#CFC4B3] bg-[#FAF5EC]/75 px-2.5 py-1 font-mono-tech text-[9px] font-bold uppercase tracking-[0.045em] text-[#4C473F] shadow-[0_2px_8px_rgba(30,25,15,0.035)] sm:px-3 sm:py-1.5 sm:text-[9.5px]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#0755F5]" />
              {area}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, delay: 0.76, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 flex flex-wrap items-center gap-2.5 sm:mb-5 sm:gap-3"
        >
          <a
            href="#projects"
            onClick={handleExplore}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0755F5] px-5 py-2.5 text-[13.5px] font-bold text-white shadow-[0_8px_22px_rgba(7,85,245,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0043D6] hover:shadow-[0_12px_28px_rgba(7,85,245,0.28)] active:translate-y-0 active:scale-[0.98] sm:gap-2.5 sm:px-5.5 sm:py-3 sm:text-[14px]"
          >
            <span>Explore my work</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="https://github.com/MokuLakshithReddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#333333]/75 bg-[#FAF5EC]/45 px-4 py-2.5 text-[13px] font-semibold text-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0755F5] hover:bg-[#0755F5]/5 hover:text-[#0755F5] active:translate-y-0 active:scale-[0.98] sm:px-4.5 sm:py-3 sm:text-[13.5px]"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          <a
            href="/Lakshith_Reddy_CV.pdf"
            download="Lakshith_Reddy_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex cursor-pointer items-center gap-1.5 rounded-full px-2 py-2.5 text-[12.5px] font-semibold text-[#575148] transition-colors duration-200 hover:text-[#0755F5] active:scale-[0.98] sm:px-2.5 sm:py-3 sm:text-[13px]"
          >
            <Download className="h-4 w-4 text-[#0755F5] transition-transform group-hover:translate-y-0.5" strokeWidth={2} />
            <span>Download CV</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.86, ease: [0.22, 1, 0.36, 1] }}
          className="mt-0.5"
        >
          <PortfolioStats />
        </motion.div>
      </motion.div>

      {/* 6. Bottom Scroll Indicator */}
      <div className="relative z-25 mb-3 ml-6 mt-4 lg:absolute lg:bottom-[16px] lg:left-[32px] lg:mb-0 lg:ml-0 lg:mt-0">
        <ScrollIndicator targetId="projects" />
      </div>
    </section>
  )
}
