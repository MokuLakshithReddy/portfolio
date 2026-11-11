import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Command,
  FileText,
  FolderGit2,
  Github,
  Mail,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type CommandItem = {
  id: string
  label: string
  description: string
  group: string
  keywords: string
  icon: LucideIcon
  action: 'section' | 'route' | 'external' | 'resume'
  target: string
}

const commandItems: CommandItem[] = [
  { id: 'section-projects', label: 'Explore featured projects', description: 'Six engineering case studies', group: 'Navigate', keywords: 'projects work portfolio case studies', icon: FolderGit2, action: 'section', target: 'projects' },
  { id: 'section-experience', label: 'Experience & education', description: 'Roles, leadership and education', group: 'Navigate', keywords: 'experience education career about', icon: BriefcaseBusiness, action: 'section', target: 'experience' },
  { id: 'section-achievements', label: 'Achievements', description: 'Awards and open-source contributions', group: 'Navigate', keywords: 'achievements awards contributions github', icon: Trophy, action: 'section', target: 'achievements' },
  { id: 'section-skills', label: 'Technical skills', description: 'AI, web development and tools', group: 'Navigate', keywords: 'skills technologies stack tools', icon: Sparkles, action: 'section', target: 'skills' },
  { id: 'section-contact', label: 'Get in touch', description: 'Open the contact section', group: 'Navigate', keywords: 'contact email message hire', icon: Mail, action: 'section', target: 'contact' },
  { id: 'project-secret-leak-detector', label: 'Secret Leak Detector', description: 'Developer security · secret scanning', group: 'Projects', keywords: 'security secrets git detector', icon: ShieldCheck, action: 'route', target: '/projects/secret-leak-detector' },
  { id: 'project-thinkmate', label: 'ThinkMate', description: 'AI thinking partner', group: 'Projects', keywords: 'ai reasoning thinking partner', icon: Sparkles, action: 'route', target: '/projects/thinkmate' },
  { id: 'project-cluely-copilot', label: 'Cluely Copilot', description: 'Multimodal desktop AI assistant', group: 'Projects', keywords: 'desktop ai assistant audio screen', icon: Command, action: 'route', target: '/projects/cluely-copilot' },
  { id: 'project-coding-orchestrator', label: 'Autonomous AI Coding Orchestrator', description: 'Planner, coding agent and verifier', group: 'Projects', keywords: 'agent coding automation orchestration', icon: FolderGit2, action: 'route', target: '/projects/autonomous-ai-coding-orchestrator' },
  { id: 'resume', label: 'Download my resume', description: 'Open the latest CV PDF', group: 'More', keywords: 'cv resume pdf download', icon: FileText, action: 'resume', target: '/Lakshith_Reddy_CV.pdf' },
  { id: 'github', label: 'GitHub profile', description: 'Explore repositories and contributions', group: 'More', keywords: 'github source code open source', icon: Github, action: 'external', target: 'https://github.com/MokuLakshithReddy' },
]

export function CommandPalette() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return commandItems
    return commandItems.filter((item) =>
      `${item.label} ${item.description} ${item.group} ${item.keywords}`.toLowerCase().includes(normalized),
    )
  }, [query])

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setIsOpen((current) => !current)
      } else if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleGlobalKeyDown)
    return () => window.removeEventListener('keydown', handleGlobalKeyDown)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    setQuery('')
    setActiveIndex(0)
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus())
    return () => window.cancelAnimationFrame(frame)
  }, [isOpen])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  const closePalette = () => {
    setIsOpen(false)
    window.requestAnimationFrame(() => triggerRef.current?.focus())
  }

  const executeCommand = (item: CommandItem) => {
    closePalette()

    if (item.action === 'section') {
      if (window.location.pathname === '/') {
        navigate(`/#${item.target}`)
        window.requestAnimationFrame(() => {
          document.getElementById(item.target)?.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            block: 'start',
          })
        })
      } else {
        navigate(`/#${item.target}`)
      }
      return
    }

    if (item.action === 'route') {
      navigate(item.target)
      return
    }

    if (item.action === 'resume') {
      window.open(item.target, '_blank', 'noopener,noreferrer')
      return
    }

    window.open(item.target, '_blank', 'noopener,noreferrer')
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((current) => Math.min(current + 1, filteredItems.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((current) => Math.max(current - 1, 0))
    } else if (event.key === 'Enter' && filteredItems[activeIndex]) {
      event.preventDefault()
      executeCommand(filteredItems[activeIndex])
    }
  }

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab') return
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('input:not([disabled]), button:not([disabled])')
    if (!focusable?.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <>
      <motion.button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="fixed bottom-5 left-5 z-[80] hidden items-center gap-2 rounded-full border border-[#222222]/20 bg-[#FAF5EC]/95 px-3.5 py-2 font-mono-tech text-[11px] font-semibold text-[#333333] shadow-lg backdrop-blur-sm transition-colors hover:border-[#0755F5]/50 hover:text-[#0755F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0755F5] sm:inline-flex"
        aria-label="Open portfolio command palette (Control or Command K)"
      >
        <Command className="h-3.5 w-3.5 text-[#0755F5]" />
        Explore
        <span className="rounded border border-[#D5C9B7] px-1.5 py-0.5 text-[9px] text-[#777777]">⌘ K</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-start justify-center bg-[#171511]/45 px-4 pt-[12vh] backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closePalette()
            }}
            onKeyDown={handleDialogKeyDown}
          >
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label="Portfolio command palette"
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="w-full max-w-[620px] overflow-hidden rounded-[20px] border border-[#E5D9C8] bg-[#FAF5EC] shadow-[0_30px_100px_rgba(0,0,0,0.28)]"
            >
              <div className="flex items-center gap-3 border-b border-[#DED3C2] px-5 py-4">
                <Search className="h-5 w-5 shrink-0 text-[#0755F5]" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Search projects, skills, pages…"
                  aria-label="Search portfolio commands"
                  aria-controls="portfolio-command-results"
                  aria-activedescendant={filteredItems[activeIndex] ? `command-${filteredItems[activeIndex].id}` : undefined}
                  className="min-w-0 flex-1 bg-transparent font-sans text-[15px] text-[#171511] outline-none placeholder:text-[#958B7D]"
                />
                <button
                  type="button"
                  onClick={closePalette}
                  aria-label="Close command palette"
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#777777] transition-colors hover:bg-[#EDE4D7] hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0755F5]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div id="portfolio-command-results" role="listbox" aria-label="Portfolio destinations" className="max-h-[min(56vh,460px)] overflow-y-auto p-2">
                {filteredItems.length === 0 ? (
                  <div className="px-4 py-10 text-center">
                    <p className="font-sans text-sm font-semibold text-[#333333]">No matching destinations</p>
                    <p className="mt-1 font-mono-tech text-[11px] text-[#777777]">Try a project name, skill or section.</p>
                  </div>
                ) : (
                  filteredItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        id={`command-${item.id}`}
                        type="button"
                        role="option"
                        aria-selected={index === activeIndex}
                        data-command-id={item.id}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => executeCommand(item)}
                        className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0755F5] ${index === activeIndex ? 'bg-[#0755F5]/[0.08]' : 'hover:bg-[#EFE8DC]'}`}
                      >
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#D5C9B7] bg-[#F4ECE1] text-[#0755F5]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-sans text-[13px] font-semibold text-[#222222]">{item.label}</span>
                          <span className="mt-0.5 block truncate font-mono-tech text-[10px] text-[#777777]">{item.description}</span>
                        </span>
                        <span className="hidden shrink-0 items-center gap-1 font-mono-tech text-[9px] uppercase tracking-wide text-[#8B8173] sm:inline-flex">
                          {item.group}
                          <ArrowUpRight className="h-3 w-3" />
                        </span>
                      </button>
                    )
                  })
                )}
              </div>

              <div className="flex items-center justify-between border-t border-[#DED3C2] px-5 py-3 font-mono-tech text-[9px] text-[#8A8072]">
                <span>Navigate your way around</span>
                <span>↑ ↓ select · Enter open · Esc close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
