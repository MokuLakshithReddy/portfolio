import React from 'react'
import { ScrollReveal } from './MotionSystem'
import { ExternalLink, Github, Linkedin, Sparkles } from 'lucide-react'

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full py-20 px-6 md:px-12 lg:px-16 border-t border-[#D8CEBD] relative">
      <ScrollReveal className="max-w-4xl mx-auto" amount={0.06}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 font-mono-tech text-[13px] text-[#0755F5] font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>// 05. Get In Touch</span>
          </div>
          <h2 className="font-anton text-[42px] md:text-[56px] text-[#111111] uppercase tracking-tight leading-none">
            Let&apos;s Build Together
          </h2>
          <p className="font-mono-tech text-[14px] text-[#555555] max-w-md mx-auto mt-3">
            Open to AI engineering internships, software projects and thoughtful collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-2 bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6 shadow-sm">
            <h3 className="font-sans font-bold text-[18px] text-[#111111] mb-3">
              Current Availability
            </h3>
            <p className="font-sans text-[14px] text-[#555555] leading-relaxed mb-4">
              I&apos;m looking for remote, part-time opportunities where I can contribute to AI, software engineering and developer-tool projects.
            </p>
            <div className="inline-flex rounded-full bg-[#0755F5]/10 border border-[#0755F5]/20 px-3 py-1.5 font-mono-tech text-[11px] font-semibold text-[#0755F5]">
              Remote · Part-time · 15–20 hrs/week
            </div>
          </div>

          <div className="md:col-span-3 bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6 sm:p-8 shadow-sm flex flex-col justify-center gap-4">
            <div>
              <h3 className="font-sans font-bold text-[20px] text-[#111111] mb-1">
                Best way to reach me
              </h3>
              <p className="font-sans text-[14px] text-[#555555] leading-relaxed">
                Send me a message on LinkedIn. You can also explore my repositories and project work on GitHub.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/lakshith-reddy/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0755F5] px-5 py-3 text-[14px] font-semibold text-white shadow-md transition-colors hover:bg-[#0043D6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0755F5]">
                <Linkedin className="w-4 h-4" />
                <span>Contact on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href="https://github.com/MokuLakshithReddy" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#222222]/70 bg-[#F4ECE1] px-5 py-3 text-[14px] font-semibold text-[#111111] transition-colors hover:border-[#0755F5] hover:text-[#0755F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0755F5]">
                <Github className="w-4 h-4" />
                <span>Explore GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="font-mono-tech text-[11px] text-[#777777]">
              A direct email address will be added once I choose the inbox to publish.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
