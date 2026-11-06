import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { FolderGit2, ArrowRight } from 'lucide-react'
import { caseStudies } from '../data/caseStudies'
import { ProjectWorkflowPreview } from './ProjectWorkflowPreview'

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="w-full py-20 px-6 md:px-12 lg:px-16 border-t border-[#D8CEBD] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="font-mono-tech text-[13px] text-[#0755F5] font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4" />
              <span>// 01. Engineering Case Studies</span>
            </div>
            <h2 className="font-anton text-[42px] md:text-[56px] text-[#111111] uppercase tracking-tight leading-none">
              Featured Projects
            </h2>
          </div>
          <p className="font-mono-tech text-[14px] text-[#555555] max-w-md mt-4 md:mt-0">
            Deep-dive case studies covering problem framing, multi-stage architectures, reproducible CI evidence, and verified benchmarks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((proj, idx) => (
            <motion.div
              key={proj.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.14 }}
              transition={{ duration: 0.54, delay: Math.min(idx * 0.07, 0.28), ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              className="bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6 flex flex-col justify-between transition-shadow duration-200 shadow-sm hover:shadow-md relative group"
            >
              {/* Corner fold doodle on published / featured */}
              {proj.number === '01' && (
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                  <svg viewBox="0 0 32 32" className="w-full h-full fill-[#0755F5]/10 stroke-[#222222]/40">
                    <polygon points="0,0 32,32 32,0" />
                  </svg>
                </div>
              )}

              <div>
                <ProjectWorkflowPreview steps={proj.workflow} number={proj.number} />
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-tech text-[12px] font-bold text-[#0755F5] bg-[#0755F5]/10 px-2.5 py-0.5 rounded-full">
                    Project {proj.number}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono-tech text-[#666666] bg-[#111111]/5 px-2 py-0.5 rounded-full">
                      {proj.sourceVisibility}
                    </span>
                    <a 
                      href={proj.links[0]?.url || 'https://github.com/MokuLakshithReddy'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#333333] hover:text-[#0755F5] transition-colors"
                      title={proj.links[0]?.label || 'Primary Link'}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <Link to={`/projects/${proj.slug}`}>
                  <h3 className="font-sans font-bold text-[20px] text-[#111111] mb-2 leading-snug hover:text-[#0755F5] transition-colors cursor-pointer">
                    {proj.title}
                  </h3>
                </Link>

                <p className="font-sans text-[14px] text-[#555555] leading-relaxed mb-6 line-clamp-3">
                  {proj.problemStatement.overview}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#D5C9B7]/60 mb-4">
                  {proj.technologies.slice(0, 5).map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="font-mono-tech text-[11px] bg-[#EFE8DC] text-[#333333] px-2 py-0.5 rounded-[4px] border border-[#CFC5B2]"
                    >
                      {tag}
                    </span>
                  ))}
                  {proj.technologies.length > 5 && (
                    <span className="font-mono-tech text-[11px] text-[#666666] px-1 py-0.5">
                      +{proj.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Read Case Study Button */}
                <Link
                  to={`/projects/${proj.slug}`}
                  className="w-full inline-flex items-center justify-between p-2.5 bg-[#FAF5EC] hover:bg-[#0755F5] hover:text-white text-[#111111] border border-[#222222]/80 rounded-[10px] font-mono-tech text-[12.5px] font-bold transition-all shadow-xs group/btn cursor-pointer"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4 text-[#0755F5] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
