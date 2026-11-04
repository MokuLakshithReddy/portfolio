import React from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      role: 'Software Engineering & AI Intern',
      company: 'Applied AI Labs',
      location: 'Bangalore, India',
      period: 'Jan 2025 – Present',
      points: [
        'Developed production retrieval pipelines combining vector indexing with semantic reranking for 500k+ docs.',
        'Architected tool-use frameworks enabling LLM agents to execute multi-step database mutations securely.',
        'Reduced hallucination rate by 34% through automated test-driven RAG evaluation suites.'
      ]
    },
    {
      role: 'Open Source Contributor & Maintainer',
      company: 'Distributed Systems & ML Ecosystem',
      location: 'Remote',
      period: '2024 – Present',
      points: [
        'Merged 4 verified external pull requests into core runtime repositories for high-throughput concurrency.',
        'Authored benchmark harnesses evaluating p99 latency in distributed message broker clients.',
        'Collaborated with international open source engineers across GitHub reviews and issue discussions.'
      ]
    },
    {
      role: 'Undergraduate AI & ML Researcher',
      company: 'University Computer Science Department',
      location: 'Campus',
      period: '2023 – 2024',
      points: [
        'Researched transformer attention efficiency and low-rank adaptation fine-tuning techniques.',
        'Built reproducible PyTorch experiment suites and published technical reports on model distillation.'
      ]
    }
  ]

  return (
    <section id="experience" className="w-full py-20 px-6 md:px-12 lg:px-16 border-t border-[#D8CEBD] bg-[#F1E9DC]/40 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="font-mono-tech text-[13px] text-[#0755F5] font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>// 02. Experience &amp; Journey</span>
          </div>
          <h2 className="font-anton text-[42px] md:text-[56px] text-[#111111] uppercase tracking-tight leading-none">
            Where I Have Contributed
          </h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 md:before:left-4 before:w-[2px] before:bg-[#D0C4B0]">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-start gap-6 md:gap-8 group">
              {/* Dot */}
              <div className="relative z-10 w-7 h-7 rounded-full bg-[#FAF5EC] border-2 border-[#0755F5] flex items-center justify-center shrink-0 shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0755F5]" />
              </div>

              {/* Card */}
              <div className="flex-1 bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-sans font-bold text-[19px] text-[#111111]">
                    {exp.role}
                  </h3>
                  <div className="font-mono-tech text-[12px] font-semibold text-[#0755F5] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[13px] text-[#555555] font-medium mb-4">
                  <span className="text-[#111111] font-semibold">{exp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-2 text-[14px] text-[#444444] font-sans">
                  {exp.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-[#0755F5] font-bold mt-0.5">›</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

