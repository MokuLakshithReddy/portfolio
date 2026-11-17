import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, CornerDownLeft, Terminal } from 'lucide-react'

interface HeroTerminalProps {
  onNavigate: (sectionId: string) => void
}

const quickCommands = ['help', 'projects', 'skills', 'contact']

export const HeroTerminal: React.FC<HeroTerminalProps> = ({ onNavigate }) => {
  const [command, setCommand] = useState('')
  const [output, setOutput] = useState('Ready. Type help to explore this portfolio.')

  const runCommand = (rawCommand: string) => {
    const normalized = rawCommand.trim().toLowerCase().replace(/^\$\s*/, '')
    if (!normalized) return

    setCommand('')

    switch (normalized) {
      case 'help':
        setOutput('Available: projects · skills · contact · github · resume')
        break
      case 'projects':
      case 'work':
        setOutput('Opening the engineering case studies…')
        onNavigate('projects')
        break
      case 'skills':
      case 'stack':
        setOutput('Jumping to the tools and technologies…')
        onNavigate('skills')
        break
      case 'contact':
        setOutput('Opening the contact channel…')
        onNavigate('contact')
        break
      case 'github':
        setOutput('Opening GitHub in a new tab…')
        window.open('https://github.com/MokuLakshithReddy', '_blank', 'noopener,noreferrer')
        break
      case 'resume':
      case 'cv':
        setOutput('Opening the latest available CV…')
        window.open('/Lakshith_Reddy_CV.pdf', '_blank', 'noopener,noreferrer')
        break
      default:
        setOutput(`Command not found: ${normalized}. Type help to see available commands.`)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.58, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, rotate: -0.35 }}
      className="absolute right-[clamp(18px,4vw,68px)] top-[clamp(205px,31vh,315px)] z-30 hidden w-[min(342px,32vw)] overflow-hidden rounded-[18px] border border-[#6C8CFF]/40 bg-[#101722]/95 p-4 text-white shadow-[0_24px_70px_rgba(7,25,66,0.25),0_0_34px_rgba(7,85,245,0.1)] backdrop-blur-xl lg:block"
      role="group"
      aria-label="Interactive portfolio terminal"
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#4F83FF] to-transparent" />
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] shadow-[0_0_10px_rgba(255,95,86,0.35)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] shadow-[0_0_10px_rgba(255,189,46,0.3)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] shadow-[0_0_10px_rgba(39,201,63,0.3)]" />
          <span className="ml-1.5 font-mono-tech text-[10px] font-semibold tracking-wide text-[#A8B5CA]">lakshith — zsh</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-[#6C8CFF]/25 bg-[#0755F5]/10 px-2 py-1">
          <Terminal className="h-3 w-3 text-[#81A5FF]" />
          <span className="font-mono-tech text-[8px] uppercase tracking-[0.14em] text-[#AFC4FF]">Interactive</span>
        </div>
      </div>

      <div className="space-y-2.5 font-mono-tech text-[11px]">
        <div className="text-[#8FB0FF]">visitor@lakshith.dev <span className="text-[#708098]">~ %</span></div>
        <div className="min-h-[34px] break-words leading-relaxed text-[#D2D9E5]" aria-live="polite">
          {output}
        </div>
        <form
          className="flex items-center gap-2 rounded-[10px] border border-white/10 bg-white/[0.045] px-2.5 py-2"
          onSubmit={(event) => {
            event.preventDefault()
            runCommand(command)
          }}
        >
          <span className="shrink-0 font-bold text-[#79A0FF]">$</span>
          <input
            aria-label="Portfolio terminal command"
            autoComplete="off"
            spellCheck={false}
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            placeholder="try projects"
            className="min-w-0 flex-1 bg-transparent text-[11px] text-white outline-none placeholder:text-[#78869B]"
          />
          <button
            type="submit"
            aria-label="Run terminal command"
            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[#8FB0FF] transition-colors hover:bg-[#0755F5]/25 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FB0FF]"
          >
            <CornerDownLeft className="h-3.5 w-3.5" />
          </button>
        </form>
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {quickCommands.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => runCommand(item)}
              className="rounded-full border border-[#9CB6F4]/20 bg-[#FFFFFF]/[0.035] px-2.5 py-1 text-[9px] text-[#C4D0E3] transition-all hover:border-[#83A6FF]/65 hover:bg-[#0755F5]/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8FB0FF]"
            >
              {item}
            </button>
          ))}
          <a
            href="https://github.com/MokuLakshithReddy"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-0.5 px-1 text-[9px] font-semibold text-[#8FB0FF] transition-colors hover:text-white hover:underline"
          >
            source <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
