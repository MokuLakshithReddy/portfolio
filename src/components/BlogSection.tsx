import React from 'react'
import { FileText, ArrowRight, Clock } from 'lucide-react'

export const BlogSection: React.FC = () => {
  const posts = [
    {
      title: 'Designing Resilient Tool-Use Protocols for Autonomous Agents',
      snippet: 'Why simple JSON-schema tool calling fails in edge cases and how deterministic state validation solves agent drift.',
      date: 'Oct 28, 2025',
      readTime: '6 min read',
      tag: 'AI Architecture',
    },
    {
      title: 'Lessons from Merging Code into Distributed Runtimes',
      snippet: 'Key takeaways from navigating concurrency races, edge case benchmarks, and strict review standards in open source systems.',
      date: 'Sep 15, 2025',
      readTime: '8 min read',
      tag: 'System Design',
    },
    {
      title: 'Graph-Augmented RAG: When Vector Search Falls Short',
      snippet: 'A deep dive into combining entity graphs with dense vector representations for multi-hop enterprise reasoning.',
      date: 'Aug 04, 2025',
      readTime: '5 min read',
      tag: 'Machine Learning',
    },
  ]

  return (
    <section id="blog" className="w-full py-20 px-6 md:px-12 lg:px-16 border-t border-[#D8CEBD] bg-[#F1E9DC]/40 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="font-mono-tech text-[13px] text-[#0755F5] font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>// 04. Technical Writings &amp; Insights</span>
            </div>
            <h2 className="font-anton text-[42px] md:text-[56px] text-[#111111] uppercase tracking-tight leading-none">
              Notes &amp; Articles
            </h2>
          </div>
          <p className="font-mono-tech text-[14px] text-[#555555] max-w-md mt-4 md:mt-0">
            Documenting engineering challenges, system architectural tradeoffs, and experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform shadow-sm hover:shadow-md cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between text-[12px] font-mono-tech text-[#666666] mb-3">
                  <span className="text-[#0755F5] font-bold bg-[#0755F5]/10 px-2 py-0.5 rounded-[4px]">
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-[19px] text-[#111111] mb-3 leading-snug group-hover:text-[#0755F5] transition-colors">
                  {post.title}
                </h3>

                <p className="font-sans text-[14px] text-[#555555] leading-relaxed mb-6">
                  {post.snippet}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#D5C9B7]/60 text-[13px] font-mono-tech">
                <span className="text-[#777777]">{post.date}</span>
                <span className="text-[#0755F5] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

