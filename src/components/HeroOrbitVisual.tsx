import React from 'react'
import { FourPointStar } from './DecorativeDoodles'

export const HeroOrbitVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[560px] md:max-w-[600px] lg:max-w-[680px] aspect-[605/470] flex items-center justify-center select-none pointer-events-auto group">
      {/* 1. Ambient Electric Blue Glow in the background */}
      <div 
        className="absolute w-[60%] h-[60%] rounded-full bg-[#0755F5]/8 blur-[60px] pointer-events-none transform -translate-y-4"
        aria-hidden="true" 
      />

      {/* 2. Core High-Fidelity Globe & Orbital Composition */}
      <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.015]">
        <img
          src="/images/hero-orbit-globe.png"
          alt="Lakshith Reddy - Connected Intelligent Systems & AI Engineering Globe"
          className="w-full h-full object-contain filter drop-shadow-[0_12px_32px_rgba(7,85,245,0.08)]"
          loading="eager"
          decoding="async"
        />

        {/* 3. Interactive Floating Hotspot: Taped Handwritten Note (Top-Left) */}
        <div
          className="absolute left-[3%] top-[3%] w-[28%] h-[28%] cursor-default rounded-lg transition-transform duration-300 hover:-rotate-2 hover:scale-105"
          title="Building Smarter Solutions with AI"
          aria-label="Annotation: Building Smarter Solutions with AI"
        />

        {/* 4. Interactive Floating Hotspot: Code Symbol Card (Top-Right) */}
        <div
          className="absolute right-[4%] top-[10%] w-[25%] h-[26%] cursor-default rounded-xl transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_16px_rgba(7,85,245,0.4)]"
          title="Clean, Scalable Software Engineering"
          aria-label="Code symbol panel"
        />

        {/* 5. Interactive Floating Hotspot: Neural Network / Brain Card (Center-Right) */}
        <div
          className="absolute right-[10%] top-[34%] w-[32%] h-[34%] cursor-default rounded-xl transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(7,85,245,0.5)]"
          title="Deep Learning & Neural Network Architectures"
          aria-label="Neural Network Brain Architecture"
        />

        {/* 6. Interactive Floating Hotspot: Action Panel (Bottom-Right) */}
        <div
          className="absolute right-[2%] bottom-[12%] w-[26%] h-[28%] cursor-default rounded-xl transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_16px_rgba(7,85,245,0.35)]"
          title="Automate · Innovate · Scale"
          aria-label="Core Principles: Automate, Innovate, Scale"
        />

        {/* 7. Extra Dynamic Twinkle Stars with CSS animations */}
        {/* Top Right Star */}
        <div className="absolute right-[22%] top-[4%] pointer-events-none animate-pulse" style={{ animationDuration: '3.2s' }}>
          <FourPointStar color="#0755F5" size={26} />
        </div>

        {/* Far Right Star */}
        <div className="absolute -right-[1%] top-[12%] pointer-events-none animate-pulse hidden sm:block" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <FourPointStar color="#0755F5" size={20} />
        </div>

        {/* Mid-Left Star */}
        <div className="absolute left-[47%] top-[54%] pointer-events-none animate-pulse" style={{ animationDuration: '3.6s', animationDelay: '1.5s' }}>
          <FourPointStar color="#0755F5" size={24} />
        </div>

        {/* Bottom Star */}
        <div className="absolute left-[62%] bottom-[16%] pointer-events-none animate-pulse hidden sm:block" style={{ animationDuration: '2.8s', animationDelay: '0.8s' }}>
          <FourPointStar color="#0755F5" size={16} />
        </div>
      </div>
    </div>
  )
}
