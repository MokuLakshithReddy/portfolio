import React from 'react'
import { ArrowUpRight, Download } from 'lucide-react'
import {
  HeroEyebrowPill,
  BlueTaglineUnderline,
  FourPointStar
} from './DecorativeDoodles'
import { HeroOrbitVisual } from './HeroOrbitVisual'
import { PortfolioStats } from './PortfolioStats'

interface HeroSectionProps {
  onExploreClick?: () => void
  onNavigate?: (sectionId: string) => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onNavigate }) => {
  const handleExplore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (onExploreClick) {
      onExploreClick()
    } else if (onNavigate) {
      onNavigate('projects')
    } else {
      const el = document.getElementById('projects')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const focusTags = [
    'AI Agents',
    'RAG Systems',
    'Developer Tools',
    'Open Source'
  ]

  return (
    <section 
      id="home"
      className="relative w-full min-h-[calc(100vh-96px)] bg-[#F5EFEB] flex flex-col justify-between py-6 sm:py-8 lg:py-10 px-5 sm:px-8 md:px-12 lg:px-16 overflow-x-hidden select-none paper-texture"
    >
      {/* 1. Subtle Background Accents */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Soft 4-point star to the left of heading */}
        <div className="absolute left-[clamp(12px,2vw,36px)] top-[90px]">
          <FourPointStar color="#111111" size={24} />
        </div>
      </div>

      {/* 2. Main Two-Column Hero Composition */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-between flex-1">
        
        {/* Upper Grid: Left Identity + Right Globe Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center pt-2 sm:pt-4">
          
          {/* Left Column: Identity & Typography */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center max-w-[620px]">
            {/* Eyebrow Badge */}
            <div className="mb-4 sm:mb-6">
              <HeroEyebrowPill />
            </div>

            {/* Main Headline */}
            <div>
              <h1 
                className="font-anton uppercase text-[#111111] text-[clamp(58px,7.8vw,132px)] leading-[0.92] tracking-tight select-none m-0"
              >
                <div>LAKSHITH</div>
                <div>REDDY.</div>
              </h1>
            </div>

            {/* Tagline */}
            <div className="mt-3 sm:mt-4 mb-2">
              <div className="text-[clamp(26px,3.2vw,48px)] font-sans font-black text-[#0755F5] tracking-tight leading-[1.05]">
                <div>Think disruptive.</div>
                <div>Build relentlessly.</div>
              </div>
              <BlueTaglineUnderline />
            </div>

            {/* Supporting Description */}
            <p className="font-mono-tech text-[clamp(13.5px,1.05vw,16px)] text-[#333333] leading-[1.5] max-w-[500px] mb-4 sm:mb-5">
              I build practical AI products — from RAG systems, agent workflows to developer tools and full-stack apps.
            </p>

            {/* Focus Tags */}
            <div aria-label="Areas of focus" className="flex flex-wrap items-center gap-2 mb-5 sm:mb-6">
              {focusTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center text-[11.5px] sm:text-[12.5px] font-mono-tech font-semibold text-[#222222] bg-[#FAF5EC] border border-[#222222]/30 px-3 py-1 rounded-full shadow-[1px_1px_0px_rgba(0,0,0,0.12)] transition-colors hover:border-[#0755F5] hover:text-[#0755F5]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0755F5] mr-1.5" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
              {/* Primary Action Button */}
              <a
                href="#projects"
                onClick={handleExplore}
                className="bg-[#0755F5] hover:bg-[#0043D6] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-[14px] sm:text-[15px] flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* GitHub Button */}
              <a
                href="https://github.com/MokuLakshithReddy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FAF5EC] hover:bg-black/5 border border-[#222222] text-[#111111] px-4.5 sm:px-5 py-2.5 sm:py-3 rounded-full font-semibold text-[13.5px] sm:text-[14.5px] flex items-center gap-2 transition-all duration-200 cursor-pointer active:scale-[0.98]"
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
                className="bg-[#FAF5EC] hover:bg-black/5 border border-[#222222] text-[#111111] px-4.5 sm:px-5 py-2.5 sm:py-3 rounded-full font-semibold text-[13.5px] sm:text-[14.5px] flex items-center gap-2 transition-all duration-200 cursor-pointer active:scale-[0.98] group"
              >
                <Download className="w-4 h-4 stroke-[2] text-[#111111] group-hover:translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Orbit Globe Visual */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <HeroOrbitVisual />
          </div>

        </div>

        {/* Lower Achievement Strip */}
        <div className="mt-8 sm:mt-12 lg:mt-14 w-full">
          <PortfolioStats />
        </div>

      </div>
    </section>
  )
}
