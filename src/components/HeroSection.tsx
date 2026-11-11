import React from 'react'
import { HeroCinematicLayer } from './HeroCinematicLayer'
import { motion } from 'motion/react'
import { Download } from 'lucide-react'
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
      className="relative flex h-[calc(100vh-96px)] min-h-[660px] max-h-[850px] w-full flex-col justify-between overflow-hidden bg-[#F5EFEB] select-none"
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
      </div>

      <CursorSpotlight />

      {/* 2. Character Scene */}
      <div className="pointer-events-none absolute bottom-0 right-[-22%] z-15 flex h-[50%] select-none items-end justify-end opacity-25 sm:right-0 sm:h-[76%] sm:opacity-100 lg:h-[96%] lg:max-h-[820px]">
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
        transition={{ duration: 0.68, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-25 flex w-full flex-col justify-start px-6 pt-3 lg:absolute lg:left-[clamp(28px,4.2vw,72px)] lg:top-[20px] lg:w-[min(540px,44vw)] lg:px-0 lg:pt-0 md:max-w-[min(540px,52vw)]"
      >
        <div className="mb-5 sm:mb-7">
          <EyebrowBadge />
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.64, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="m-0 select-none font-anton text-[clamp(64px,8.2vw,148px)] uppercase leading-[0.96] text-[#111111]"
            style={{ letterSpacing: '0.01em', transform: 'scaleX(1.04)', transformOrigin: 'left center' }}
          >
            <div className="pb-1.5 sm:pb-2">LAKSHITH</div>
            <div>REDDY.</div>
          </motion.h1>
          <BlueHeadlineUnderline />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.52, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          className="mb-2 mt-2 text-[clamp(16px,1.5vw,25px)] font-sans font-bold tracking-tight text-[#111111] sm:mb-2 sm:mt-3"
        >
          I build systems that{' '}
          <YellowMarkerUnderline>prove</YellowMarkerUnderline> they work.
        </motion.div>

        <p className="mb-4 max-w-[500px] font-mono-tech text-[clamp(13px,0.98vw,16px)] leading-[1.46] text-[#333333] sm:mb-6">
          Exploring intelligent systems, autonomous agents<br className="hidden sm:inline" />
          {' '}and software engineering through practical projects.
        </p>

        <div className="mb-3.5 flex flex-wrap items-center gap-2.5 sm:mb-5 sm:gap-3">
          <a
            href="#projects"
            onClick={handleExplore}
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-[#0755F5] px-4.5 py-2 text-[13.5px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#0043D6] hover:shadow-lg active:scale-[0.98] sm:gap-2.5 sm:px-5.5 sm:py-2.5 sm:text-[14.5px]"
          >
            <span className="text-[15px] font-bold transition-transform group-hover:-translate-x-0.5 sm:text-[16px]">&gt;</span>
            <span>Explore My Work</span>
            <span className="text-[16px] font-bold transition-transform group-hover:translate-x-1 sm:text-[17px]">&rarr;</span>
          </a>

          <a
            href="https://github.com/MokuLakshithReddy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center gap-1.5 rounded-full border border-[#333333] bg-transparent px-3.5 py-2 text-[13px] font-semibold text-[#111111] transition-all duration-200 hover:bg-black/5 active:scale-[0.98] sm:gap-2 sm:px-4 sm:py-2.5 sm:text-[14px]"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href="/Lakshith_Reddy_CV.pdf"
            download="Lakshith_Reddy_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex cursor-pointer items-center gap-1.5 rounded-full border border-[#333333] bg-transparent px-3.5 py-2 text-[13px] font-semibold text-[#111111] transition-all duration-200 hover:bg-black/5 active:scale-[0.98] sm:gap-2 sm:px-4 sm:py-2.5 sm:text-[14px]"
          >
            <Download className="h-4 w-4 text-[#0755F5] transition-transform group-hover:translate-y-0.5" strokeWidth={2} />
            <span>Download CV</span>
          </a>
        </div>

        <div className="mt-1">
          <PortfolioStats />
        </div>
      </motion.div>

      {/* 6. Bottom Scroll Indicator */}
      <div className="relative z-25 mb-3 ml-6 mt-4 lg:absolute lg:bottom-[16px] lg:left-[32px] lg:mb-0 lg:ml-0 lg:mt-0">
        <ScrollIndicator targetId="projects" />
      </div>
    </section>
  )
}
