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
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="absolute right-[clamp(18px,4vw,68px)] top-[clamp(205px,31vh,315px)] z-30 hidden w-[min(318px,30vw)] rounded-[16px] border border-[#222222]/70 bg-[#FAF5EC]/95 p-4 shadow-[0_18px_50px_rgba(30,25,15,0.14)] backdrop-blur-sm lg:block"
      aria-label="Interactive portfolio terminal"
    >
      <div className="mb-3 flex items-center justify-between border-b border-[#D8CEBD] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
          <span className="ml-1 font-mono-tech text-[10px] text-[#666666]">lakshith — zsh</span>
        </div>
        <Terminal className="h-3.5 w-3.5 text-[#0755F5]" />
      </div>

      <div className="space-y-2 font-mono-tech text-[11px]">
        <div className="text-[#0755F5]">visitor@lakshith.dev <span className="text-[#777777]">~ %</span></div>
        <div className="min-h-[32px] break-words leading-relaxed text-[#45413B]" aria-live="polite">
          {output}
        </div>
        <form
          className="flex items-center gap-2 border-t border-[#E5DCCF] pt-2.5"
          onSubmit={(event) => {
            event.preventDefault()
            runCommand(command)
          }}
        >
          <span className="shrink-0 font-bold text-[#0755F5]">$</span>
          <input
            aria-label="Portfolio terminal command"
            autoComplete="off"
            spellCheck={false}
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            placeholder="try projects"
            className="min-w-0 flex-1 bg-transparent text-[11px] text-[#222222] outline-none placeholder:text-[#A59B8D]"
          />
          <button
            type="submit"
            aria-label="Run terminal command"
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[#0755F5] transition-colors hover:bg-[#0755F5]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0755F5]"
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
              className="rounded-full border border-[#D5C9B7] px-2 py-1 text-[9px] text-[#5B554B] transition-colors hover:border-[#0755F5]/50 hover:bg-[#0755F5]/5 hover:text-[#0755F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0755F5]"
            >
              {item}
            </button>
          ))}
          <a
            href="https://github.com/MokuLakshithReddy"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-0.5 text-[9px] font-semibold text-[#0755F5] hover:underline"
          >
            source <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
