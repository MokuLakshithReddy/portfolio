import React from 'react'
import { motion } from 'motion/react'
import { ArrowDownRight, ArrowUpRight, Code2, Download } from 'lucide-react'
import { lakshithCharacterSrc } from '../assets/lakshithCharacter'
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
      className="relative isolate min-h-[860px] w-full overflow-hidden bg-[#F5EFEB] select-none md:min-h-[760px] md:h-[calc(100svh-96px)] md:max-h-[960px]"
    >
      {/* Warm editorial paper, with a restrained blue field behind the character. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_54%,rgba(7,85,245,0.12)_0%,rgba(7,85,245,0.055)_27%,transparent_60%)]" />
        <div className="absolute -right-[9%] top-[17%] h-[68%] w-[42%] rounded-[48%] bg-[#0755F5]/[0.045] blur-3xl md:right-[3%] md:w-[31%]" />
        <div className="absolute right-[4%] top-[22%] h-[66%] w-[32%] rotate-[-8deg] rounded-[48%] border border-[#0755F5]/20 md:right-[7%] md:w-[26%]" />
        <div className="absolute left-0 right-0 top-[13%] h-px bg-[#D9D0C3]/80" />
        <div className="absolute bottom-[7%] left-[4.5%] right-[4.5%] h-px bg-[#D9D0C3]/70" />
      </div>

      <CursorSpotlight />

      <div className="relative mx-auto flex min-h-[860px] w-full max-w-[1840px] flex-col px-5 pb-9 pt-5 sm:px-8 md:h-full md:min-h-0 md:px-[clamp(32px,5.2vw,88px)] md:pb-8 md:pt-4">
        {/* Slim editorial metadata strip. */}
        <header className="relative z-40 flex min-h-8 flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b border-[#BDB4A7] pb-3 font-mono-tech text-[8px] font-bold uppercase tracking-[0.16em] text-[#71695F] sm:text-[9px] md:pb-4 md:text-[10px] md:tracking-[0.19em]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span>AI &amp; ML STUDENT</span>
            <span className="text-[#B6AA99]">/</span>
            <span>CREATIVE DEVELOPER</span>
            <span className="text-[#B6AA99]">/</span>
            <span>INDIA</span>
          </div>
          <div className="flex items-center gap-x-4 gap-y-1.5">
            <span>SELECTED WORK</span>
            <span className="hidden text-[#B6AA99] sm:inline">/</span>
            <span className="text-[#0755F5]">OPEN TO COLLABORATIONS</span>
          </div>
        </header>

        <div className="relative flex-1">
          {/* Oversized name acts as the graphic backdrop, not a conventional heading block. */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 18, clipPath: 'inset(12% 0 0 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 0.85, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-[7%] z-10 m-0 w-full font-anton text-[clamp(68px,15.7vw,268px)] uppercase leading-[0.76] tracking-[-0.035em] text-[#151412] sm:text-[clamp(92px,15.8vw,268px)]"
          >
            <span className="block whitespace-nowrap">LAKSHITH</span>
            <span className="mt-[0.07em] block whitespace-nowrap">REDDY<span className="text-[#0755F5]">.</span></span>
          </motion.h1>

          {/* Real transparent cutout; positioned in front of the type like the reference. */}
          <motion.img
            src={lakshithCharacterSrc}
            alt="Illustrated full-body character portrait of Lakshith Reddy"
            width="220"
            height="738"
            loading="eager"
            fetchPriority="high"
            draggable={false}
            initial={{ opacity: 0, y: 34, rotate: -1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.95, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute bottom-[-1%] right-[-7%] z-20 h-[51%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_18px_24px_rgba(31,24,18,0.14)] sm:right-[-2%] sm:h-[58%] md:bottom-[-5%] md:right-[6%] md:h-[112%] md:max-h-[920px]"
          />

          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute bottom-[9%] right-[2%] z-[5] hidden h-[66%] w-[28%] rounded-[48%] bg-[radial-gradient(ellipse_at_center,rgba(7,85,245,0.14)_0%,rgba(7,85,245,0.055)_44%,transparent_72%)] md:block"
          />

          <div className="absolute right-[2%] top-[5%] z-30 hidden text-right font-mono-tech text-[9px] font-bold uppercase leading-[1.8] tracking-[0.17em] text-[#837B70] md:block">
            <span className="block text-[#0755F5]">01 / INTRODUCTION</span>
            <span>IDEAS INTO SYSTEMS</span>
          </div>

          {/* Copy remains the readable foreground; the character and lettering stay behind it. */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-30 mt-[clamp(250px,49vw,390px)] max-w-[620px] sm:mt-[clamp(300px,43vw,430px)] md:absolute md:left-0 md:top-[55%] md:mt-0 md:w-[58%] md:max-w-[650px] md:-translate-y-[3%]"
          >
            <div className="mb-4 flex items-center gap-3 font-mono-tech text-[9px] font-bold uppercase tracking-[0.18em] text-[#746C60] sm:mb-5 sm:text-[10px]">
              <span className="h-[2px] w-8 bg-[#0755F5]" />
              <span>Think disruptive. Build relentlessly.</span>
            </div>

            <p className="max-w-[590px] font-sans text-[clamp(18px,2.05vw,29px)] font-extrabold leading-[1.12] tracking-[-0.045em] text-[#151515]">
              I build practical AI systems, autonomous agents, developer tools, and thoughtful software.
            </p>

            <div aria-label="Areas of focus" className="mt-5 flex max-w-[570px] flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 rounded-full border border-[#CFC4B3] bg-[#FAF5EC]/90 px-3 py-1.5 font-mono-tech text-[8px] font-bold uppercase tracking-[0.04em] text-[#514B42] shadow-[0_2px_8px_rgba(30,25,15,0.035)] sm:text-[9px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0755F5]" />
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 sm:mt-7 sm:gap-x-5">
              <a
                href="#projects"
                onClick={handleExplore}
                className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-[#0755F5] px-5 py-3 text-[12px] font-bold text-white shadow-[0_10px_28px_rgba(7,85,245,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0043D6] hover:shadow-[0_14px_34px_rgba(7,85,245,0.28)] active:translate-y-0 active:scale-[0.98] sm:px-6 sm:text-[13px]"
              >
                Explore selected work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://github.com/MokuLakshithReddy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#BDB2A2] bg-[#FAF5EC]/85 px-4 py-2.5 text-[12px] font-semibold text-[#25221D] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0755F5] hover:bg-[#0755F5]/5 hover:text-[#0755F5] active:translate-y-0 active:scale-[0.98] sm:text-[13px]"
              >
                <Code2 className="h-4 w-4" />
                GitHub
              </a>

              <a
                href="/Lakshith_Reddy_CV.pdf"
                download="Lakshith_Reddy_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 px-1 py-2 text-[11px] font-semibold text-[#625B50] transition-colors hover:text-[#0755F5] sm:text-[12px]"
              >
                <Download className="h-4 w-4 text-[#0755F5]" />
                Download CV
              </a>
            </div>

            <div className="mt-7 max-w-[560px] sm:mt-8">
              <PortfolioStats />
            </div>
          </motion.div>
        </div>

        <footer className="relative z-40 mt-3 flex items-center justify-between gap-4 font-mono-tech text-[8px] font-bold uppercase tracking-[0.16em] text-[#82796D] sm:text-[9px] md:mt-0">
          <span>AI SYSTEMS&nbsp; · &nbsp;ENGINEERING&nbsp; · &nbsp;PRODUCT BUILDING</span>
          <span className="hidden items-center gap-2 md:flex">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDownRight className="h-4 w-4 text-[#0755F5]" />
          </span>
        </footer>
      </div>

      <div className="absolute bottom-5 left-[clamp(24px,5.2vw,88px)] z-40 hidden md:block">
        <ScrollIndicator targetId="projects" />
      </div>
    </section>
  )
}
