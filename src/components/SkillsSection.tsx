import React from 'react'
import { Code2, Brain, Cpu, ShieldCheck, Terminal, Layers } from 'lucide-react'

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'AI & Autonomous Agents',
      icon: <Brain className="w-5 h-5 text-[#0755F5]" />,
      skills: ['Multi-Agent Systems', 'Tool Calling', 'LangGraph / AutoGen', 'ReAct Pattern', 'Context Window Management', 'Model Distillation']
    },
    {
      title: 'RAG & Vector Search',
      icon: <Layers className="w-5 h-5 text-[#0755F5]" />,
      skills: ['Vector Databases (Qdrant, Pinecone)', 'Hybrid Dense/Sparse Search', 'Graph RAG', 'Hierarchical Chunking', 'ColBERT & Cross-Encoders']
    },
    {
      title: 'System Design & Backend',
      icon: <Cpu className="w-5 h-5 text-[#0755F5]" />,
      skills: ['Distributed Consensus (Raft)', 'High-Throughput APIs (FastAPI, Go)', 'gRPC / Protocol Buffers', 'PostgreSQL / Redis Caching', 'Event-Driven Architectures']
    },
    {
      title: 'Cybersecurity & Runtime',
      icon: <ShieldCheck className="w-5 h-5 text-[#0755F5]" />,
      skills: ['eBPF Sandboxing', 'Container Isolation', 'Zero-Trust Architecture', 'Secure Prompt Execution', 'Vulnerability Assessment']
    },
    {
      title: 'Core Programming Languages',
      icon: <Terminal className="w-5 h-5 text-[#0755F5]" />,
      skills: ['Python', 'Go (Golang)', 'TypeScript / JavaScript', 'C / C++', 'SQL']
    },
    {
      title: 'Engineering & DevOps',
      icon: <Code2 className="w-5 h-5 text-[#0755F5]" />,
      skills: ['Docker / Kubernetes', 'Git / GitHub CI/CD', 'Linux Internals', 'Prometheus / Grafana', 'Automated Testing']
    }
  ]

  return (
    <section id="skills" className="w-full py-20 px-6 md:px-12 lg:px-16 border-t border-[#D8CEBD] relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="font-mono-tech text-[13px] text-[#0755F5] font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>// 03. Technical Competencies</span>
            </div>
            <h2 className="font-anton text-[42px] md:text-[56px] text-[#111111] uppercase tracking-tight leading-none">
              Skills &amp; Architecture
            </h2>
          </div>
          <p className="font-mono-tech text-[14px] text-[#555555] max-w-md mt-4 md:mt-0">
            Disciplined software engineering combined with bleeding-edge AI system architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0755F5]/10 flex items-center justify-center border border-[#0755F5]/20">
                  {cat.icon}
                </div>
                <h3 className="font-sans font-bold text-[18px] text-[#111111]">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono-tech text-[12px] bg-[#EFE8DC] text-[#222222] px-2.5 py-1 rounded-[6px] border border-[#D5CAB7]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

