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
    // Honor direct section links after the first layout pass.
    let hashTimer: number | undefined
    if (window.location.hash) {
      hashTimer = window.setTimeout(() => {
        const id = window.location.hash.slice(1)
        document.getElementById(id)?.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          block: 'start',
        })
      }, 120)
    }

    // Observe sections instead of reading every section's layout on every scroll event.
    const sectionIds = ['home', 'projects', 'experience', 'achievements', 'skills', 'blog', 'contact']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        rootMargin: '-22% 0px -62% 0px',
        threshold: [0, 0.15, 0.35],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      if (hashTimer !== undefined) window.clearTimeout(hashTimer)
      observer.disconnect()
    }
  }, [])

  const handleNavigate = (id: string) => {
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
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

