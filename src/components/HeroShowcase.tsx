import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Terminal, CornerDownLeft, ArrowUpRight, Brain, Cpu, Zap, Code2 } from 'lucide-react'
import { SkillsNote } from './SkillsNote'
import { FloatingBrowser } from './FloatingBrowser'
import { BlueGlobeSketch, FourPointStar } from './DecorativeDoodles'

interface HeroShowcaseProps {
  onNavigate?: (sectionId: string) => void
}

const quickCommands = ['help', 'projects', 'skills', 'contact']

const techBadges = [
  { name: 'PyTorch', icon: FlameIcon, color: '#EE4C2C', bg: 'rgba(238, 76, 44, 0.08)' },
  { name: 'LangChain', icon: Brain, color: '#0755F5', bg: 'rgba(7, 85, 245, 0.08)' },
  { name: 'TypeScript', icon: Code2, color: '#3178C6', bg: 'rgba(49, 120, 198, 0.08)' },
  { name: 'FastAPI', icon: Zap, color: '#009688', bg: 'rgba(0, 150, 136, 0.08)' },
  { name: 'React 19', icon: Cpu, color: '#00D8FF', bg: 'rgba(0, 216, 255, 0.08)' },
]

function FlameIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}

export const HeroShowcase: React.FC<HeroShowcaseProps> = ({ onNavigate }) => {
  const [command, setCommand] = useState('')
  const [output, setOutput] = useState('Agent pipeline active. Type "help" to explore.')

  const handleNavigate = (id: string) => {
    if (onNavigate) {
      onNavigate(id)
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      })
    }
  }

  const runCommand = (rawCommand: string) => {
    const normalized = rawCommand.trim().toLowerCase().replace(/^\$\s*/, '')
    if (!normalized) return

    setCommand('')

    switch (normalized) {
      case 'help':
        setOutput('Available: projects · skills · contact · github · resume · clear')
        break
      case 'projects':
      case 'work':
        setOutput('Navigating to engineering case studies…')
        handleNavigate('projects')
        break
      case 'skills':
      case 'stack':
        setOutput('Navigating to technical skills matrix…')
        handleNavigate('skills')
        break
      case 'contact':
        setOutput('Opening contact section…')
        handleNavigate('contact')
        break
      case 'github':
        setOutput('Opening GitHub profile…')
        window.open('https://github.com/MokuLakshithReddy', '_blank', 'noopener,noreferrer')
        break
      case 'resume':
      case 'cv':
        setOutput('Downloading latest CV…')
        window.open('/Lakshith_Reddy_CV.pdf', '_blank', 'noopener,noreferrer')
        break
      case 'clear':
        setOutput('Terminal ready. Type help to explore.')
        break
      default:
        setOutput(`Command not found: "${normalized}". Type "help" for options.`)
    }
  }

  return (
    <div className="relative w-full h-full min-h-[540px] flex items-center justify-center select-none">
      {/* 1. Background Sketches & Doodles */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible">
        {/* Wireframe Blue Globe */}
        <div className="absolute right-[-20px] top-[10%] opacity-65 scale-90 xl:scale-105">
          <BlueGlobeSketch />
        </div>

        {/* Decorative Sketched Stars */}
        <div className="absolute left-[8%] top-[12%] opacity-70">
          <FourPointStar color="#0755F5" size={22} />
        </div>
        <div className="absolute right-[12%] bottom-[14%] opacity-50">
          <FourPointStar color="#111111" size={18} />
        </div>
        <div className="absolute right-[4%] top-[5%] opacity-40">
          <FourPointStar color="#FFB600" size={16} />
        </div>

        {/* Ambient Subtle Radial Glow */}
        <div className="absolute w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(7,85,245,0.07)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* 2. Top-Right Sketched Note */}
      <motion.div
        initial={{ opacity: 0, y: -16, rotate: 6 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-3 right-0 xl:right-4 z-20 hidden sm:block"
      >
        <SkillsNote />
      </motion.div>

      {/* 3. Main Centerpiece: Interactive Developer Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.68, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -3, transition: { duration: 0.2 } }}
        className="relative z-30 w-full max-w-[440px] xl:max-w-[460px] rounded-[20px] border border-[#222222]/80 bg-[#12161F] text-white p-5 shadow-[0_22px_60px_rgba(15,20,35,0.22),0_4px_16px_rgba(7,85,245,0.08)] backdrop-blur-md"
        role="group"
        aria-label="Interactive portfolio terminal"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-3.5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56] border border-black/20" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E] border border-black/20" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F] border border-black/20" />
            <span className="ml-2 font-mono-tech text-[11px] font-semibold text-[#94A3B8] tracking-wider">
              lakshith@ai-agent: ~
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-[#0755F5]/30 bg-[#0755F5]/10 px-2.5 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0755F5] animate-pulse" />
            <Terminal className="h-3 w-3 text-[#79A0FF]" />
            <span className="font-mono-tech text-[9px] font-bold uppercase tracking-wider text-[#9CB8FF]">
              Live
            </span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="space-y-3 font-mono-tech text-[12px]">
          {/* Simulated Code / Agent Status */}
          <div className="rounded-lg bg-black/40 border border-white/5 p-2.5 space-y-1 text-[11px]">
            <div className="flex items-center justify-between text-[#64748B] text-[10px] pb-1 border-b border-white/5">
              <span>orchestrator.py</span>
              <span className="text-emerald-400">● RUNNING</span>
            </div>
            <div className="text-[#38BDF8]">
              <span className="text-[#F43F5E]">&gt;</span> model = Agent(role="AI Architect", autonomous=True)
            </div>
            <div className="text-[#94A3B8]">
              [OK] Verified 5 case studies · 0 vulnerabilities detected
            </div>
          </div>

          {/* Prompt line */}
          <div className="text-[#93C5FD]">
            lakshith.dev <span className="text-[#64748B]">%</span>
          </div>

          {/* Interactive Output */}
          <div
            className="min-h-[28px] break-words text-[11.5px] leading-relaxed text-[#E2E8F0] font-sans"
            aria-live="polite"
          >
            {output}
          </div>

          {/* Input Box */}
          <form
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 focus-within:border-[#0755F5] transition-colors"
            onSubmit={(event) => {
              event.preventDefault()
              runCommand(command)
            }}
          >
            <span className="shrink-0 font-bold text-[#60A5FA]">$</span>
            <input
              aria-label="Portfolio terminal command"
              autoComplete="off"
              spellCheck={false}
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              placeholder="type 'help' or click pills below…"
              className="min-w-0 flex-1 bg-transparent text-[11.5px] text-white outline-none placeholder:text-[#64748B]"
            />
            <button
              type="submit"
              aria-label="Run command"
              className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[#93C5FD] transition-colors hover:bg-[#0755F5] hover:text-white"
            >
              <CornerDownLeft className="h-3.5 w-3.5" />
            </button>
          </form>

          {/* Quick Pill Suggestions */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[10px] text-[#64748B] mr-1">Quick:</span>
            {quickCommands.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => runCommand(item)}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] text-[#CBD5E1] transition-all hover:border-[#0755F5] hover:bg-[#0755F5]/20 hover:text-white active:scale-95"
              >
                {item}
              </button>
            ))}
            <a
              href="https://github.com/MokuLakshithReddy"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1 text-[10px] font-semibold text-[#93C5FD] hover:text-white transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* 4. Bottom-Left Floating Mini Browser Note */}
      <motion.div
        initial={{ opacity: 0, y: 16, rotate: -8 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-8 -left-4 xl:-left-8 z-40 hidden sm:block"
      >
        <FloatingBrowser />
      </motion.div>

      {/* 5. Floating Interactive Skill Pills Around the Composition */}
      <div className="absolute -bottom-4 right-2 xl:right-8 z-30 hidden xl:flex flex-wrap gap-2 max-w-[280px]">
        {techBadges.slice(0, 3).map((badge, idx) => {
          const Icon = badge.icon
          return (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
              whileHover={{ y: -2, scale: 1.05 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#222222]/70 bg-[#FAF5EC] px-3 py-1 shadow-sm font-mono-tech text-[10.5px] font-bold text-[#111111]"
            >
              <Icon className="h-3 w-3" style={{ color: badge.color }} />
              <span>{badge.name}</span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
