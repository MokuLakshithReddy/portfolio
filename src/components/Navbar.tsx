import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { 
  Home, 
  Folder, 
  Briefcase, 
  Award,
  Code2, 
  FileText, 
  Mail,
  Download,
  Menu,
  X
} from 'lucide-react'

interface NavbarProps {
  activeSection?: string
  onNavigate?: (id: string) => void
  onOpenFolder?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection = 'home',
  onNavigate,
  onOpenFolder
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (onNavigate) {
      onNavigate(id)
    } else {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleFolderClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (onOpenFolder) {
      onOpenFolder()
    }
  }

  return (
    <nav aria-label="Primary navigation" className="sticky top-0 w-full h-[58px] px-6 sm:px-8 lg:px-[48px] flex items-center justify-between text-[#111111] z-40 relative select-none bg-[#F5EFEB]/90 backdrop-blur-sm border-b border-[#D8CEBD]/80 shadow-[0_2px_10px_rgba(17,17,17,0.035)]">
      {/* Brand on the left */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Interactive Blue and Yellow Folder Icon: Click opens image modal */}
        <button
          type="button"
          onClick={handleFolderClick}
          className="relative w-8 h-7 flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 focus:outline-none group border-none bg-transparent p-0"
          title="Click to open portfolio image preview"
        >
          <svg className="w-8 h-7 drop-shadow-xs" viewBox="0 0 32 26" fill="none">
            {/* Back yellow tab */}
            <path 
              d="M3 5C3 3.89543 3.89543 3 5 3H12L15 6H27C28.1046 6 29 6.89543 29 8V20C29 21.1046 28.1046 22 27 22H5C3.89543 22 3 21.1046 3 20V5Z" 
              fill="#FFB600"
              stroke="#111111"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            {/* Front electric blue pocket */}
            <path 
              d="M3 10.5C3 9.39543 3.89543 8.5 5 8.5H28C29.1046 8.5 30 9.39543 30 10.5V21C30 22.1046 29.1046 23 28 23H5C3.89543 23 3 22.1046 3 21V10.5Z" 
              fill="#0755F5"
              stroke="#111111"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <a 
          href="#home" 
          onClick={(e) => handleNavClick('home', e)}
          className="font-bold text-[18px] sm:text-[19px] tracking-tight text-[#111111] cursor-pointer outline-none focus:outline-none ring-0 border-none no-underline flex items-center"
        >
          <span>Lakshith Reddy</span>
          <span className="text-[#888888] font-normal text-[22px] ml-0.5 -top-[1px] relative select-none animate-pulse">
            |
          </span>
        </a>
      </div>

      {/* Navigation items: fluid, responsive spacing that avoids collision on all screen widths */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-7 text-[14px] xl:text-[14.5px]">
        {/* 1. Home - Prominent Electric-Blue Pill */}
        <a
          href="#home"
          onClick={(e) => handleNavClick('home', e)}
          className={`flex items-center gap-2 px-4 xl:px-5 py-1.5 xl:py-2 rounded-full font-semibold transition-all duration-200 cursor-pointer shadow-sm outline-none ${activeSection === 'home' ? 'bg-[#0755F5] text-white hover:bg-[#0043D6]' : 'text-[#111111] hover:text-[#0755F5]'}`}
        >
          <Home className={`w-4 h-4 stroke-[2.2] ${activeSection === 'home' ? 'text-white' : 'text-[#0755F5]'}`} />
          <span>Home</span>
        </a>

        {/* 2. Projects */}
        <a
          href="#projects"
          onClick={(e) => handleNavClick('projects', e)}
          className={`relative flex items-center gap-2 px-1 font-medium transition-colors cursor-pointer outline-none ${
            activeSection === 'projects' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Folder className="w-4 h-4 stroke-[2]" />
          <span>Projects</span>
          {activeSection === 'projects' && (
            <motion.span
              layoutId="active-nav-underline"
              aria-hidden="true"
              transition={{ type: 'spring', stiffness: 520, damping: 36 }}
              className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-[#0755F5]"
            />
          )}
        </a>

        {/* 3. Experience */}
        <a
          href="#experience"
          onClick={(e) => handleNavClick('experience', e)}
          className={`relative flex items-center gap-1.5 xl:gap-2 px-1 font-medium transition-colors cursor-pointer outline-none ${
            activeSection === 'experience' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Briefcase className="w-4 h-4 stroke-[2]" />
          <span>Experience</span>
          {activeSection === 'experience' && (
            <motion.span
              layoutId="active-nav-underline"
              aria-hidden="true"
              transition={{ type: 'spring', stiffness: 520, damping: 36 }}
              className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-[#0755F5]"
            />
          )}
        </a>

        {/* 4. Achievements */}
        <a
          href="#achievements"
          onClick={(e) => handleNavClick('achievements', e)}
          className={`relative flex items-center gap-1.5 xl:gap-2 px-1 font-medium transition-colors cursor-pointer outline-none ${
            activeSection === 'achievements' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Award className="w-4 h-4 stroke-[2]" />
          <span>Achievements</span>
          {activeSection === 'achievements' && (
            <motion.span
              layoutId="active-nav-underline"
              aria-hidden="true"
              transition={{ type: 'spring', stiffness: 520, damping: 36 }}
              className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-[#0755F5]"
            />
          )}
        </a>

        {/* 5. Skills */}
        <a
          href="#skills"
          onClick={(e) => handleNavClick('skills', e)}
          className={`relative flex items-center gap-2 px-1 font-medium transition-colors cursor-pointer outline-none ${
            activeSection === 'skills' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Code2 className="w-4 h-4 stroke-[2]" />
          <span>Skills</span>
          {activeSection === 'skills' && (
            <motion.span
              layoutId="active-nav-underline"
              aria-hidden="true"
              transition={{ type: 'spring', stiffness: 520, damping: 36 }}
              className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-[#0755F5]"
            />
          )}
        </a>

        {/* 6. Blog */}
        <a
          href="#blog"
          onClick={(e) => handleNavClick('blog', e)}
          className={`relative flex items-center gap-2 px-1 font-medium transition-colors cursor-pointer outline-none ${
            activeSection === 'blog' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <FileText className="w-4 h-4 stroke-[2]" />
          <span>Blog</span>
          {activeSection === 'blog' && (
            <motion.span
              layoutId="active-nav-underline"
              aria-hidden="true"
              transition={{ type: 'spring', stiffness: 520, damping: 36 }}
              className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-[#0755F5]"
            />
          )}
        </a>

        {/* 7. Contact */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick('contact', e)}
          className={`relative flex items-center gap-2 px-1 font-medium transition-colors cursor-pointer outline-none ${
            activeSection === 'contact' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Mail className="w-4 h-4 stroke-[2]" />
          <span>Contact</span>
          {activeSection === 'contact' && (
            <motion.span
              layoutId="active-nav-underline"
              aria-hidden="true"
              transition={{ type: 'spring', stiffness: 520, damping: 36 }}
              className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-[#0755F5]"
            />
          )}
        </a>

        {/* 8. Download CV Pill */}
        <a
          href="/Lakshith_Reddy_CV.pdf"
          download="Lakshith_Reddy_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#222222]/80 bg-[#FAF5EC] hover:bg-[#111111] hover:text-white text-[#111111] font-semibold text-[13px] transition-all shadow-xs ml-1 cursor-pointer"
          title="Download Curriculum Vitae (PDF)"
        >
          <Download className="w-3.5 h-3.5 text-[#0755F5]" />
          <span>CV</span>
        </a>
      </div>

      {/* Accessible mobile navigation */}
      <div className="lg:hidden flex items-center gap-2">
        <a href="/Lakshith_Reddy_CV.pdf" download="Lakshith_Reddy_CV.pdf"
          className="hidden min-[360px]:flex border border-[#222222]/80 bg-[#FAF5EC] text-[#111111] text-xs px-3 py-1.5 rounded-full font-semibold items-center gap-1">
          <Download className="w-3 h-3 text-[#0755F5]" />
          <span>CV</span>
        </a>
        <button type="button" aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="bg-[#0755F5] text-white text-xs px-3.5 py-1.5 rounded-full font-semibold inline-flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0755F5]">
          {isMobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          <span>{isMobileMenuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.985 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+8px)] left-4 right-4 z-50 lg:hidden rounded-2xl border border-[#222222]/80 bg-[#FAF5EC] p-3 shadow-xl"
          >
          <div className="grid grid-cols-2 gap-2">
            {[
              ["home", "Home"], ["projects", "Projects"], ["experience", "Experience"],
              ["achievements", "Achievements"], ["skills", "Skills"], ["blog", "Engineering Notes"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}
                onClick={(e) => handleNavClick(id, e)}
                className={`rounded-xl border px-3 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0755F5] ${
                  activeSection === id
                    ? "border-[#0755F5] bg-[#0755F5]/10 text-[#0755F5]"
                    : "border-[#D8CEBD] text-[#222222] hover:border-[#0755F5] hover:text-[#0755F5]"
                }`}>
                {label}
              </a>
            ))}
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
