import React from 'react'
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

interface HeroSectionProps {
  onExploreClick?: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onExploreClick) {
      onExploreClick()
    } else {
      const el = document.getElementById('projects')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section 
      id="home"
      className="relative w-full h-[calc(100vh-96px)] min-h-[660px] max-h-[850px] overflow-hidden select-none bg-[#F5EFEB] flex flex-col justify-between"
    >
      {/* 1. Background Layer (z-0 to z-5) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Compass sketch behind heading */}
        <div className="absolute left-[clamp(200px,24vw,340px)] top-[135px] opacity-25 hidden sm:block">
          <CompassSketch />
        </div>

        {/* Black 4-point star to the left of LAKSHITH */}
        <div className="absolute left-[clamp(14px,2.2vw,44px)] top-[85px]">
          <FourPointStar color="#111111" size={26} />
        </div>

        {/* Blue wireframe globe - background layer z-2, positioned on the right */}
        <div className="absolute right-[-40px] top-[clamp(180px,22vh,230px)] z-2 opacity-75 hidden sm:block">
          <BlueGlobeSketch />
        </div>

        {/* Hand-drawn skyline doodles at bottom */}
        <div className="absolute left-[10px] bottom-[20px] z-1 hidden sm:block">
          <SkylineDoodle side="left" />
        </div>
        <div className="absolute right-[0px] bottom-[10px] z-1 hidden lg:block">
          <SkylineDoodle side="right" />
        </div>
      </div>

      {/* 2. Character Scene Composition (z-15): Unified Character + Floating Browser + Crown + Orbit + Splash */}
      <div className="absolute right-0 bottom-0 h-[88%] sm:h-[92%] lg:h-[96%] max-h-[820px] flex items-end justify-end pointer-events-none select-none z-15">
        <CharacterScene />
      </div>

      {/* 3. Skills Note in Top Right Corner (z-25, solid paper background in front of globe) */}
      <div className="absolute right-[clamp(12px,2vw,30px)] top-[clamp(15px,3vh,35px)] z-25">
        <SkillsNote />
      </div>

      {/* 4. Left Content Column (z-25) */}
      <div className="relative lg:absolute left-0 lg:left-[clamp(28px,4.2vw,72px)] top-0 lg:top-[20px] z-25 flex flex-col justify-start max-w-[min(540px,44vw)] px-6 lg:px-0 pt-3 lg:pt-0">
        {/* Eyebrow Label with generous bottom margin to completely eliminate any touch with 'LAKSHITH' */}
        <div className="mb-5 sm:mb-7">
          <EyebrowBadge />
        </div>

        {/* Main Headline */}
        <div>
          <h1 
            className="font-anton uppercase text-[#111111] text-[clamp(64px,8.2vw,148px)] leading-[0.96] select-none m-0"
            style={{
              letterSpacing: '0.01em',
              transform: 'scaleX(1.04)',
              transformOrigin: 'left center'
            }}
          >
            <div className="pb-1.5 sm:pb-2">LAKSHITH</div>
            <div>REDDY.</div>
          </h1>
          <BlueHeadlineUnderline />
        </div>

        {/* Main Tagline */}
        <div className="text-[clamp(16px,1.5vw,25px)] font-sans font-bold text-[#111111] tracking-tight mt-2 sm:mt-3 mb-2">
          I build systems that{' '}
          <YellowMarkerUnderline>prove</YellowMarkerUnderline> they work.
        </div>

        {/* Supporting Description */}
        <p className="font-mono-tech text-[clamp(13px,0.98vw,16px)] text-[#333333] leading-[1.46] max-w-[500px] mb-4 sm:mb-6">
          Exploring intelligent systems, autonomous agents<br className="hidden sm:inline" />
          {' '}and software engineering through practical projects.
        </p>

        {/* Hero Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-5">
          {/* Primary Button */}
          <a
            href="#projects"
            onClick={handleExplore}
            className="bg-[#0755F5] hover:bg-[#0043D6] text-white px-4.5 sm:px-5.5 py-2 sm:py-2.5 rounded-full font-semibold text-[13.5px] sm:text-[14.5px] flex items-center gap-2 sm:gap-2.5 shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer active:scale-[0.98]"
          >
            <span className="text-[15px] sm:text-[16px] font-bold transition-transform group-hover:-translate-x-0.5">
              &gt;
            </span>
            <span>Explore My Work</span>
            <span className="text-[16px] sm:text-[17px] font-bold transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>

          {/* Secondary Button */}
          <a
            href="https://github.com/MokuLakshithReddy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-black/5 border border-[#333333] text-[#111111] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full font-semibold text-[13px] sm:text-[14px] flex items-center gap-1.5 sm:gap-2 transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>

          {/* Download CV Button */}
          <a
            href="/Lakshith_Reddy_CV.pdf"
            download="Lakshith_Reddy_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-black/5 border border-[#333333] text-[#111111] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full font-semibold text-[13px] sm:text-[14px] flex items-center gap-1.5 sm:gap-2 transition-all duration-200 cursor-pointer active:scale-[0.98] group"
          >
            <Download className="w-4 h-4 stroke-[2] text-[#0755F5] group-hover:translate-y-0.5 transition-transform" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Portfolio Statistics */}
        <div className="mt-1">
          <PortfolioStats />
        </div>
      </div>

      {/* 5. Bottom Scroll Indicator */}
      <div className="relative lg:absolute left-6 lg:left-[32px] bottom-3 lg:bottom-[16px] z-25 mt-4 lg:mt-0">
        <ScrollIndicator targetId="projects" />
      </div>
    </section>
  )
}
