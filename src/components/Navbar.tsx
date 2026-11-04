import React from 'react'
import { 
  Home, 
  Folder, 
  Briefcase, 
  Award,
  Code2, 
  FileText, 
  Mail,
  Download 
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
  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
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
    <nav className="w-full h-[58px] px-6 sm:px-8 lg:px-[48px] flex items-center justify-between text-[#111111] z-30 relative select-none">
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
          className="flex items-center gap-2 px-4 xl:px-5 py-1.5 xl:py-2 rounded-full font-semibold transition-all duration-200 cursor-pointer shadow-sm outline-none bg-[#0755F5] text-white hover:bg-[#0043D6]"
        >
          <Home className="w-4 h-4 stroke-[2.2] text-white" />
          <span>Home</span>
        </a>

        {/* 2. Projects */}
        <a
          href="#projects"
          onClick={(e) => handleNavClick('projects', e)}
          className={`flex items-center gap-2 px-1 font-medium transition-colors cursor-pointer outline-none ${
            activeSection === 'projects' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Folder className="w-4 h-4 stroke-[2]" />
          <span>Projects</span>
        </a>

        {/* 3. Experience */}
        <a
          href="#experience"
          onClick={(e) => handleNavClick('experience', e)}
          className={`flex items-center gap-1.5 xl:gap-2 px-1 font-medium transition-colors cursor-pointer outline-none ${
            activeSection === 'experience' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Briefcase className="w-4 h-4 stroke-[2]" />
          <span>Experience</span>
        </a>

        {/* 4. Achievements */}
        <a
          href="#achievements"
          onClick={(e) => handleNavClick('achievements', e)}
          className={`flex items-center gap-1.5 xl:gap-2 px-1 font-medium transition-colors cursor-pointer outline-none ${
            activeSection === 'achievements' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Award className="w-4 h-4 stroke-[2]" />
          <span>Achievements</span>
        </a>

        {/* 5. Skills */}
        <a
          href="#skills"
          onClick={(e) => handleNavClick('skills', e)}
          className={`flex items-center gap-2 px-1 font-medium transition-colors cursor-pointer outline-none ${
            activeSection === 'skills' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Code2 className="w-4 h-4 stroke-[2]" />
          <span>Skills</span>
        </a>

        {/* 6. Blog */}
        <a
          href="#blog"
          onClick={(e) => handleNavClick('blog', e)}
          className={`flex items-center gap-2 px-1 font-medium transition-colors cursor-pointer outline-none ${
            activeSection === 'blog' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <FileText className="w-4 h-4 stroke-[2]" />
          <span>Blog</span>
        </a>

        {/* 7. Contact */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick('contact', e)}
          className={`flex items-center gap-2 px-1 font-medium transition-colors cursor-pointer outline-none ${
            activeSection === 'contact' ? 'text-[#0755F5]' : 'text-[#111111] hover:text-[#0755F5]'
          }`}
        >
          <Mail className="w-4 h-4 stroke-[2]" />
          <span>Contact</span>
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

      {/* Mobile nav pill */}
      <div className="lg:hidden flex items-center gap-2">
        <a
          href="/Lakshith_Reddy_CV.pdf"
          download="Lakshith_Reddy_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#222222]/80 bg-[#FAF5EC] text-[#111111] text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1"
        >
          <Download className="w-3 h-3 text-[#0755F5]" />
          <span>CV</span>
        </a>
        <a
          href="#projects"
          className="bg-[#0755F5] text-white text-xs px-3.5 py-1.5 rounded-full font-medium"
        >
          Menu
        </a>
      </div>
    </nav>
  )
}
