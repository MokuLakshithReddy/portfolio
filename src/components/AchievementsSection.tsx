import React from 'react'
import { Trophy, GitPullRequest, Rocket, ExternalLink, Award, CheckCircle2 } from 'lucide-react'

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="w-full py-20 px-6 md:px-12 lg:px-16 border-t border-[#D8CEBD] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="font-mono-tech text-[13px] text-[#0755F5] font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>// 02.5. Honors &amp; Milestones</span>
            </div>
            <h2 className="font-anton text-[42px] md:text-[56px] text-[#111111] uppercase tracking-tight leading-none">
              Achievements
            </h2>
          </div>
          <p className="font-mono-tech text-[14px] text-[#555555] max-w-md mt-4 md:mt-0">
            Verifiable hackathon podium finishes, upstream open-source contributions, and production developer tooling.
          </p>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 01. Award */}
          <div className="bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6.5 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-md relative group">
            {/* Top Badge & Number */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 font-mono-tech text-[11.5px] font-bold text-[#8F6500] bg-[#FFB600]/20 border border-[#FFB600]/40 px-2.5 py-1 rounded-full">
                  <Trophy className="w-3.5 h-3.5 text-[#B8860B]" />
                  Award
                </span>
                <span className="font-mono-tech text-[12px] font-bold text-[#888888]">
                  01
                </span>
              </div>

              <h3 className="font-sans font-bold text-[20px] text-[#111111] mb-2.5 leading-snug">
                Second Place — VNR Convergence Software Hackathon
              </h3>

              <p className="font-sans text-[14px] text-[#555555] leading-relaxed mb-6">
                Secured second place with your team in a competitive software development hackathon, engineering innovative solutions under strict time constraints.
              </p>
            </div>

            {/* Proof footer */}
            <div className="pt-4 border-t border-[#D5C9B7]/60">
              <div className="text-[12px] font-mono-tech text-[#666666] mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-semibold text-[#111111]">Proof:</span>
                <span>LinkedIn announcement &amp; certificate</span>
              </div>
              <a
                href="https://linkedin.com/in/lakshith-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-mono-tech font-bold text-[#0755F5] hover:text-[#0043D6] group-hover:translate-x-1 transition-transform"
              >
                <span>View LinkedIn Announcement</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 02. Verified contributions */}
          <div className="bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6.5 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-md relative group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 font-mono-tech text-[11.5px] font-bold text-[#0755F5] bg-[#0755F5]/10 border border-[#0755F5]/20 px-2.5 py-1 rounded-full">
                  <GitPullRequest className="w-3.5 h-3.5 text-[#0755F5]" />
                  Verified Contributions
                </span>
                <span className="font-mono-tech text-[12px] font-bold text-[#888888]">
                  02
                </span>
              </div>

              <h3 className="font-sans font-bold text-[20px] text-[#111111] mb-2.5 leading-snug">
                Four Merged Open-Source Contributions
              </h3>

              <p className="font-sans text-[14px] text-[#555555] leading-relaxed mb-4">
                Successfully contributed changes to four established open-source projects:
              </p>

              {/* 4 Merged Projects Sublist */}
              <ul className="space-y-2 mb-6 font-mono-tech text-[12.5px] text-[#333333]">
                <li className="flex items-start gap-2 bg-[#F2EBDE] p-2 rounded-[8px] border border-[#D5C9B7]/50">
                  <span className="text-[#0755F5] font-bold mt-0.5">›</span>
                  <span><strong className="text-[#111111]">Apache Fineract</strong> — correlation ID support</span>
                </li>
                <li className="flex items-start gap-2 bg-[#F2EBDE] p-2 rounded-[8px] border border-[#D5C9B7]/50">
                  <span className="text-[#0755F5] font-bold mt-0.5">›</span>
                  <span><strong className="text-[#111111]">Photocraft</strong> — nearest-neighbor image sampling</span>
                </li>
                <li className="flex items-start gap-2 bg-[#F2EBDE] p-2 rounded-[8px] border border-[#D5C9B7]/50">
                  <span className="text-[#0755F5] font-bold mt-0.5">›</span>
                  <span><strong className="text-[#111111]">XERJ</strong> — query operator parsing</span>
                </li>
                <li className="flex items-start gap-2 bg-[#F2EBDE] p-2 rounded-[8px] border border-[#D5C9B7]/50">
                  <span className="text-[#0755F5] font-bold mt-0.5">›</span>
                  <span><strong className="text-[#111111]">Libreswan</strong> — automatic page titles</span>
                </li>
              </ul>
            </div>

            {/* Proof footer */}
            <div className="pt-4 border-t border-[#D5C9B7]/60">
              <div className="text-[12px] font-mono-tech text-[#666666] mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-semibold text-[#111111]">Proof:</span>
                <span>Four merged pull requests</span>
              </div>
              <a
                href="https://github.com/MokuLakshithReddy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-mono-tech font-bold text-[#0755F5] hover:text-[#0043D6] group-hover:translate-x-1 transition-transform"
              >
                <span>View GitHub Merged PRs</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 03. Product launch */}
          <div className="bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6.5 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-md relative group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 font-mono-tech text-[11.5px] font-bold text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  <Rocket className="w-3.5 h-3.5 text-emerald-600" />
                  Product Launch
                </span>
                <span className="font-mono-tech text-[12px] font-bold text-[#888888]">
                  03
                </span>
              </div>

              <h3 className="font-sans font-bold text-[20px] text-[#111111] mb-2.5 leading-snug">
                Published Developer Tool — Secret Leak Detector
              </h3>

              <p className="font-sans text-[14px] text-[#555555] leading-relaxed mb-6">
                Developed and published a developer security extension for detecting exposed credentials, analyzing risk, and protecting Git workflows against sensitive token leaks.
              </p>
            </div>

            {/* Proof footer */}
            <div className="pt-4 border-t border-[#D5C9B7]/60">
              <div className="text-[12px] font-mono-tech text-[#666666] mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-semibold text-[#111111]">Proof:</span>
                <span>Open VSX Registry publication</span>
              </div>
              <a
                href="https://open-vsx.org/extension/MokuLakshithReddy/secret-leak-detector"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-mono-tech font-bold text-[#0755F5] hover:text-[#0043D6] group-hover:translate-x-1 transition-transform"
              >
                <span>View on Open VSX Registry</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

