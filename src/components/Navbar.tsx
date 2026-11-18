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
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection = 'home',
  onNavigate,
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

  return (
    <nav aria-label="Primary navigation" className="sticky top-0 w-full h-[68px] md:h-[72px] px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-4 text-[#111111] z-40 relative select-none bg-transparent backdrop-blur-sm border-b border-[#D8CEBD]/55 shadow-[0_2px_12px_rgba(17,17,17,0.025)]">
      {/* Brand: a quiet LR monogram and clear name */}
      <a
        href="#home"
        onClick={(e) => handleNavClick('home', e)}
        aria-label="Lakshith Reddy — go to homepage"
        className="group flex items-center gap-2.5 shrink-0 rounded-xl no-underline text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0755F5]"
      >
        <span
          data-testid="brand-monogram"
          aria-hidden="true"
          className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border border-[#DED3C5] bg-[#EFE7DD] text-[#111111] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-colors group-hover:border-[#C4B6A4]"
        >
          <span className="pr-1 font-serif text-[21px] sm:text-[23px] font-semibold tracking-[-0.14em]">LR</span>
        </span>
        <span className="whitespace-nowrap text-[16px] sm:text-[18px] font-bold tracking-[-0.035em]">Lakshith Reddy</span>
      </a>

      {/* Navigation items: fluid, responsive spacing that avoids collision on all screen widths */}
      <div className="hidden xl:flex items-center gap-4 2xl:gap-6 text-[13.5px] 2xl:text-[14px]">
        {/* 1. Home - Prominent Electric-Blue Pill */}
        <a
          href="#home"
          onClick={(e) => handleNavClick('home', e)}
          className={`flex items-center gap-2 px-4 2xl:px-5 py-2 rounded-full font-semibold transition-all duration-200 cursor-pointer shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0755F5] ${activeSection === 'home' ? 'bg-[#0755F5] text-white hover:bg-[#0043D6]' : 'text-[#111111] hover:text-[#0755F5]'}`}
        >
          <Home className={`w-4 h-4 stroke-[2.2] ${activeSection === 'home' ? 'text-white' : 'text-[#0755F5]'}`} />
          <span>Home</span>
        </a>

        {/* 2. Projects */}
        <a
          href="#projects"
          onClick={(e) => handleNavClick('projects', e)}
          className={`relative flex items-center gap-2 px-1 font-medium transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0755F5] ${
            activeSection === 'projects' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Folder className="w-[17px] h-[17px] stroke-[1.9]" />
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
          className={`relative flex items-center gap-1.5 xl:gap-2 px-1 font-medium transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0755F5] ${
            activeSection === 'experience' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Briefcase className="w-[17px] h-[17px] stroke-[1.9]" />
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
          className={`relative flex items-center gap-1.5 xl:gap-2 px-1 font-medium transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0755F5] ${
            activeSection === 'achievements' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Award className="w-[17px] h-[17px] stroke-[1.9]" />
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
          className={`relative flex items-center gap-2 px-1 font-medium transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0755F5] ${
            activeSection === 'skills' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Code2 className="w-[17px] h-[17px] stroke-[1.9]" />
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
          className={`relative flex items-center gap-2 px-1 font-medium transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0755F5] ${
            activeSection === 'blog' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <FileText className="w-[17px] h-[17px] stroke-[1.9]" />
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
          className={`relative flex items-center gap-2 px-1 font-medium transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0755F5] ${
            activeSection === 'contact' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Mail className="w-[17px] h-[17px] stroke-[1.9]" />
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
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#CFC3B4] bg-[#FBF7F1] hover:border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] font-semibold text-[13px] transition-all shadow-[0_1px_2px_rgba(17,17,17,0.05)] ml-1 cursor-pointer"
          title="Download Curriculum Vitae (PDF)"
        >
          <Download className="w-3.5 h-3.5 text-[#0755F5]" />
          <span>CV</span>
        </a>
      </div>

      {/* Accessible mobile navigation */}
      <div className="xl:hidden flex items-center gap-2 shrink-0">
        <a href="/Lakshith_Reddy_CV.pdf" download="Lakshith_Reddy_CV.pdf"
          className="hidden min-[360px]:flex border border-[#CFC3B4] bg-[#FBF7F1] text-[#111111] text-xs px-3 py-2 rounded-full font-semibold items-center gap-1">
          <Download className="w-3 h-3 text-[#0755F5]" />
          <span>CV</span>
        </a>
        <button type="button" aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="border border-[#CFC3B4] bg-[#FBF7F1] text-[#111111] text-xs px-3.5 py-2 rounded-full font-semibold inline-flex items-center gap-1.5 transition-colors hover:border-[#0755F5] hover:text-[#0755F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0755F5]">
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
            className="absolute top-[calc(100%+8px)] left-4 right-4 z-50 xl:hidden rounded-2xl border border-[#D8CEBD] bg-[#FBF7F1]/[0.98] p-3 shadow-[0_16px_40px_rgba(17,17,17,0.14)]"
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
