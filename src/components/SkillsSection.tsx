import React from 'react'
import { motion } from 'motion/react'
import { Brain, Layout, Database, Wrench, Palette, Sparkles } from 'lucide-react'

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-5 h-5 text-[#0755F5]" />,
      description: 'Foundations & applied intelligent systems',
      skills: [
        'Artificial Intelligence Fundamentals',
        'Machine Learning Fundamentals',
        'LLM Application Development',
        'AI-Powered Applications',
        'AI Agent Concepts',
        'Workflow Automation'
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Layout className="w-5 h-5 text-[#0755F5]" />,
      description: 'Modern, responsive client interfaces',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'TypeScript',
        'Tailwind CSS'
      ]
    },
    {
      title: 'Backend & Data',
      icon: <Database className="w-5 h-5 text-[#0755F5]" />,
      description: 'API services & data persistence',
      skills: [
        'Python (Beginner)',
        'FastAPI (Project Experience)',
        'REST API Integration',
        'PostgreSQL (Project Experience)',
        'Supabase',
        'SQLite'
      ]
    },
    {
      title: 'Developer Tools',
      icon: <Wrench className="w-5 h-5 text-[#0755F5]" />,
      description: 'Toolchain & productive environments',
      skills: [
        'Git & GitHub',
        'Vite',
        'Visual Studio Code',
        'AI-Assisted Development Tools'
      ]
    },
    {
      title: 'Design & Product Development',
      icon: <Palette className="w-5 h-5 text-[#0755F5]" />,
      description: 'Interface design & end-to-end craft',
      skills: [
        'UI/UX Design',
        'Responsive Web Design',
        'Interface Prototyping',
        'Content Creation',
        'Product Development'
      ]
    }
  ]

  return (
    <section id="skills" className="w-full py-20 px-6 md:px-12 lg:px-16 border-t border-[#D8CEBD] relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="font-mono-tech text-[13px] text-[#0755F5] font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>// 03. Technical Competencies</span>
            </div>
            <h2 className="font-anton text-[42px] md:text-[56px] text-[#111111] uppercase tracking-tight leading-none">
              Technical Skills
            </h2>
          </div>
          <p className="font-mono-tech text-[14px] text-[#555555] max-w-md mt-4 md:mt-0">
            Defensible, practical engineering foundation spanning AI applications, modern web development, and product design.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.07, 0.28), ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0755F5]/10 flex items-center justify-center border border-[#0755F5]/20 shrink-0">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[18px] text-[#111111] leading-snug">
                      {cat.title}
                    </h3>
                    <p className="font-mono-tech text-[11px] text-[#777777]">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => {
                    const isAnnotated = skill.includes('(')
                    return (
                      <span
                        key={sIdx}
                        className={`font-mono-tech text-[12.5px] px-3 py-1.5 rounded-[8px] border transition-colors ${
                          isAnnotated
                            ? 'bg-[#E7EFFE] text-[#0755F5] border-[#0755F5]/30 font-medium'
                            : 'bg-[#EFE8DC] text-[#222222] border-[#D5CAB7] hover:border-[#111111]/40'
                        }`}
                      >
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#EFE8DC] flex items-center justify-between font-mono-tech text-[11px] text-[#777777]">
                <span>{cat.skills.length} competencies</span>
                <span className="text-[#0755F5]">● Active Practice</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
