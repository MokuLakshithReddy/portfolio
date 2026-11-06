import React from 'react'
import { ScrollReveal } from './MotionSystem'
import { Briefcase, Calendar, GraduationCap, Code2, Sparkles, Building2 } from 'lucide-react'

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="w-full py-20 px-6 md:px-12 lg:px-16 border-t border-[#D8CEBD] bg-[#F1E9DC]/40 relative">
      <ScrollReveal className="max-w-4xl mx-auto" amount={0.05}>
        {/* Section Header */}
        <div className="mb-14">
          <div className="font-mono-tech text-[13px] text-[#0755F5] font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>// 02. Career &amp; Education</span>
          </div>
          <h2 className="font-anton text-[42px] md:text-[56px] text-[#111111] uppercase tracking-tight leading-none mb-3">
            Experience &amp; Journey
          </h2>
          <p className="font-mono-tech text-[14px] text-[#555555]">
            Professional leadership, business development, independent software creation, and academic background.
          </p>
        </div>

        <div className="space-y-12">
          {/* Part 1: Formal Employment */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-4 h-4 text-[#0755F5]" />
              <h3 className="font-mono-tech text-[13px] uppercase font-bold text-[#111111] tracking-wider">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 md:before:left-4 before:w-[2px] before:bg-[#D0C4B0]">
              {/* Fly Axis Overseas */}
              <div className="relative flex items-start gap-6 md:gap-8 group">
                <div className="relative z-10 w-7 h-7 rounded-full bg-[#FAF5EC] border-2 border-[#0755F5] flex items-center justify-center shrink-0 shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0755F5]" />
                </div>

                <div className="flex-1 bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="font-sans font-bold text-[20px] text-[#111111]">
                      Managing Director
                    </h4>
                    <div className="font-mono-tech text-[12px] font-semibold text-[#0755F5] bg-[#0755F5]/10 px-2.5 py-0.5 rounded-full w-fit flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Current Professional Role</span>
                    </div>
                  </div>

                  <div className="text-[14px] text-[#333333] font-semibold mb-3">
                    Fly Axis Overseas
                  </div>

                  <ul className="space-y-2 text-[14px] text-[#444444] font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0755F5] font-bold mt-0.5">›</span>
                      <span>Contributing to organizational direction, business operations and growth initiatives.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* AvlokAI */}
              <div className="relative flex items-start gap-6 md:gap-8 group">
                <div className="relative z-10 w-7 h-7 rounded-full bg-[#FAF5EC] border-2 border-[#0755F5] flex items-center justify-center shrink-0 shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0755F5]" />
                </div>

                <div className="flex-1 bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="font-sans font-bold text-[20px] text-[#111111]">
                      Business Development &amp; Social Media
                    </h4>
                    <div className="font-mono-tech text-[12px] font-semibold text-[#555555] bg-[#111111]/5 px-2.5 py-0.5 rounded-full w-fit flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Professional Role</span>
                    </div>
                  </div>

                  <div className="text-[14px] text-[#333333] font-semibold mb-3">
                    AvlokAI
                  </div>

                  <ul className="space-y-2 text-[14px] text-[#444444] font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0755F5] font-bold mt-0.5">›</span>
                      <span>Supported business development, lead generation, client outreach and social media content operations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0755F5] font-bold mt-0.5">›</span>
                      <span>Worked across business development activities and digital content management.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Part 2: Independent Software Development (Separate from formal employment) */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-4 h-4 text-[#0755F5]" />
              <h3 className="font-mono-tech text-[13px] uppercase font-bold text-[#111111] tracking-wider">
                Independent Software Development
              </h3>
            </div>

            <div className="bg-[#FAF5EC] border-2 border-dashed border-[#0755F5]/60 rounded-[18px] p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-sans font-bold text-[20px] text-[#111111]">
                    Independent Software Development
                  </h4>
                </div>
                <div className="font-mono-tech text-[12px] font-semibold text-[#0755F5] bg-[#0755F5]/10 px-2.5 py-0.5 rounded-full w-fit flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#0755F5]" />
                  <span>Ongoing</span>
                </div>
              </div>

              <div className="text-[14px] text-[#0755F5] font-semibold mb-3">
                Personal Projects
              </div>

              <ul className="space-y-2.5 text-[14px] text-[#444444] font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-[#0755F5] font-bold mt-0.5">›</span>
                  <span>Designing and developing practical software applications across AI/ML, full-stack development, intelligent automation and developer tools.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0755F5] font-bold mt-0.5">›</span>
                  <span>Working on projects involving application architecture, AI integrations, workflow automation and user experience.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Part 3: Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-4 h-4 text-[#0755F5]" />
              <h3 className="font-mono-tech text-[13px] uppercase font-bold text-[#111111] tracking-wider">
                Education
              </h3>
            </div>

            <div className="bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="font-sans font-bold text-[20px] text-[#111111]">
                    Bachelor of Technology — Artificial Intelligence &amp; Machine Learning
                  </h4>
                  <div className="text-[15px] font-semibold text-[#0755F5] mt-0.5">
                    Malla Reddy Vishwavidyapeeth
                  </div>
                </div>
                <div className="font-mono-tech text-[12px] font-semibold text-[#111111] bg-[#EFE8DC] border border-[#D5CAB7] px-3 py-1 rounded-full shrink-0">
                  Expected graduation: 2029
                </div>
              </div>

              <div className="font-mono-tech text-[13px] text-[#555555] mb-4">
                Second-year undergraduate student
              </div>

              <div className="pt-3 border-t border-[#EFE8DC] text-[13.5px] text-[#333333]">
                <span className="font-semibold text-[#111111]">Focus:</span> Artificial Intelligence, Machine Learning, Software Development and Applied Computing.
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
