import React, { useState, useEffect } from 'react'
import { StatusBar } from '../components/StatusBar'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { AchievementsSection } from '../components/AchievementsSection'
import { SkillsSection } from '../components/SkillsSection'
import { BlogSection } from '../components/BlogSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { ImageModal } from '../components/ImageModal'

export const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  useEffect(() => {
    // If there is a hash like #projects, scroll to it
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }

    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'achievements', 'skills', 'blog', 'contact']
      const scrollPos = window.scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigate = (id: string) => {
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#F5EFEB] text-[#111111] flex flex-col paper-texture font-sans antialiased">
      {/* Top macOS-style Status Bar */}
      <StatusBar />

      {/* Main Navigation Bar with clickable Folder Icon */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        onOpenFolder={() => setIsImageModalOpen(true)}
      />

      {/* Primary Hero Section (1650x930 Desktop Reference Target) */}
      <main className="flex-1">
        <HeroSection onExploreClick={() => handleNavigate('projects')} />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Image Preview Modal triggered by clicking the Folder Icon */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageSrc="/images/folder_preview.jpg"
        title="portfolio_illustration.png — Quick Look"
      />
    </div>
  )
}
