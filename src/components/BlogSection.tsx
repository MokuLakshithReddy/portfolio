import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { FileText, ArrowRight, Layers } from 'lucide-react'

export const BlogSection: React.FC = () => {
  const posts = [
    {
      articleNo: 'Case Study 01',
      title: 'Beyond AI Responses: Building Agents That Prove Their Work',
      snippet: "Why an AI agent claiming task completion isn't enough, and how independent verification, isolated execution, and machine-readable evidence can make autonomous systems more trustworthy.",
      caseStudySlug: 'local-ai-execution-agent',
      cardLabel: 'Execution & verification',
      tag: 'AI Agents',
    },
    {
      articleNo: 'Case Study 02',
      title: 'Fail-Closed Security: Designing Systems That Refuse to Guess',
      snippet: 'Exploring how secret detection, Git hook enforcement, staged-diff analysis, and safe failure handling help prevent sensitive credentials from entering version control.',
      caseStudySlug: 'secret-leak-detector',
      cardLabel: 'Security engineering',
      tag: 'Security Engineering',
    },
    {
      articleNo: 'Case Study 03',
      title: 'The Architecture Behind a Reliable Autonomous Coding Agent',
      snippet: 'A technical breakdown of connecting an LLM planner, coding agent, and independent verifier through controlled execution, persistent state, and iterative repair workflows.',
      caseStudySlug: 'autonomous-ai-coding-orchestrator',
      cardLabel: 'System architecture',
      tag: 'System Architecture',
    },
  ]

  return (
    <section id="blog" className="w-full py-20 px-6 md:px-12 lg:px-16 border-t border-[#D8CEBD] bg-[#F1E9DC]/40 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="font-mono-tech text-[13px] text-[#0755F5] font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>// 04. Engineering Notes &amp; Case Studies</span>
            </div>
            <h2 className="font-anton text-[42px] md:text-[56px] text-[#111111] uppercase tracking-tight leading-none">
              Notes &amp; Articles
            </h2>
          </div>
          <p className="font-mono-tech text-[14px] text-[#555555] max-w-md mt-4 md:mt-0">
            Selected engineering questions and the detailed project case studies behind the systems I build.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <motion.article
              key={post.caseStudySlug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.52, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6 flex flex-col justify-between transition-shadow shadow-sm hover:shadow-md group relative"
            >
              <div>
                {/* Meta Row: Article No + Category Tag + Read Time */}
                <div className="flex items-center justify-between text-[11px] sm:text-[12px] font-mono-tech text-[#666666] mb-3.5 gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-bold text-[#111111] bg-[#111111]/5 px-2 py-0.5 rounded-[4px] whitespace-nowrap">
                      {post.articleNo}
                    </span>
                    <span className="text-[#0755F5] font-bold bg-[#0755F5]/10 px-2 py-0.5 rounded-[4px] whitespace-nowrap">
                      {post.tag}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 shrink-0 text-[11px] sm:text-[12px]">
                    <Layers className="w-3.5 h-3.5 text-[#0755F5]" />
                    {post.cardLabel}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-[19px] text-[#111111] mb-3 leading-snug group-hover:text-[#0755F5] transition-colors">
                  {post.title}
                </h3>

                <p className="font-sans text-[14px] text-[#555555] leading-relaxed mb-6">
                  {post.snippet}
                </p>
              </div>

              {/* Bottom Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#D5C9B7]/60 text-[13px] font-mono-tech">
                <span className="text-[#777777] text-[11.5px] italic">Detailed project breakdown</span>
                <Link to={`/projects/${post.caseStudySlug}`}
                  className="text-[#0755F5] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0755F5]">
                  Read case study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
