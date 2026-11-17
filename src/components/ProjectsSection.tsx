import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { FolderGit2, ArrowRight } from 'lucide-react'
import { caseStudies } from '../data/caseStudies'
import { ProjectWorkflowPreview } from './ProjectWorkflowPreview'

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative w-full border-t border-[#D8CEBD] px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono-tech text-[13px] font-bold uppercase tracking-wider text-[#0755F5]">
              <FolderGit2 className="h-4 w-4" />
              <span>// 01. Engineering Case Studies</span>
            </div>
            <h2 className="font-anton text-[42px] uppercase leading-none tracking-tight text-[#111111] md:text-[56px]">
              Featured Projects
            </h2>
          </div>
          <p className="mt-4 max-w-md font-mono-tech text-[14px] text-[#555555] md:mt-0">
            Deep-dive case studies covering problem framing, multi-stage architectures, reproducible CI evidence, and verified benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((proj, idx) => (
            <motion.div
              key={proj.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.14 }}
              transition={{ duration: 0.54, delay: Math.min(idx * 0.07, 0.28), ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -7, scale: 1.008, rotateX: 0.7, rotateY: -0.7 }}
              whileTap={{ scale: 0.99 }}
              style={{ transformPerspective: 1100, transformStyle: 'preserve-3d' }}
              className="group relative flex flex-col justify-between rounded-[18px] border border-[#222222]/80 bg-[#FAF5EC] p-6 shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-[#0755F5]/60 hover:shadow-[0_22px_45px_rgba(7,85,245,0.10)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-px rounded-[17px] bg-gradient-to-br from-[#0755F5]/[0.07] via-transparent to-[#FFB600]/[0.08] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {proj.number === '01' && (
                <div className="pointer-events-none absolute right-0 top-0 h-8 w-8">
                  <svg viewBox="0 0 32 32" className="h-full w-full fill-[#0755F5]/10 stroke-[#222222]/40" aria-hidden="true">
                    <polygon points="0,0 32,32 32,0" />
                  </svg>
                </div>
              )}

              <div className="relative z-10">
                <ProjectWorkflowPreview steps={proj.workflow} number={proj.number} />
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-[#0755F5]/10 px-2.5 py-0.5 font-mono-tech text-[12px] font-bold text-[#0755F5]">
                    Project {proj.number}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#111111]/5 px-2 py-0.5 font-mono-tech text-[11px] text-[#666666]">
                      {proj.sourceVisibility}
                    </span>
                    <a
                      href={proj.links[0]?.url || 'https://github.com/MokuLakshithReddy'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#333333] transition-colors hover:text-[#0755F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0755F5]"
                      title={proj.links[0]?.label || 'Primary Link'}
                      aria-label={`Open ${proj.title} primary link`}
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943-.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <Link to={`/projects/${proj.slug}`}>
                  <h3 className="mb-2 cursor-pointer font-sans text-[20px] font-bold leading-snug text-[#111111] transition-colors hover:text-[#0755F5]">
                    {proj.title}
                  </h3>
                </Link>

                <p className="mb-6 line-clamp-3 font-sans text-[14px] leading-relaxed text-[#555555]">
                  {proj.problemStatement.overview}
                </p>
              </div>

              <div className="relative z-10">
                <div className="mb-4 flex flex-wrap gap-1.5 border-t border-[#D5C9B7]/60 pt-4">
                  {proj.technologies.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[4px] border border-[#CFC5B2] bg-[#EFE8DC] px-2 py-0.5 font-mono-tech text-[11px] text-[#333333]"
                    >
                      {tag}
                    </span>
                  ))}
                  {proj.technologies.length > 5 && (
                    <span className="px-1 py-0.5 font-mono-tech text-[11px] text-[#666666]">
                      +{proj.technologies.length - 5}
                    </span>
                  )}
                </div>

                <Link
                  to={`/projects/${proj.slug}`}
                  className="group/btn inline-flex w-full cursor-pointer items-center justify-between rounded-[10px] border border-[#222222]/80 bg-[#FAF5EC] p-2.5 font-mono-tech text-[12.5px] font-bold text-[#111111] shadow-xs transition-all hover:bg-[#0755F5] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0755F5]"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="h-4 w-4 text-[#0755F5] transition-transform group-hover/btn:translate-x-1 group-hover/btn:text-white" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
