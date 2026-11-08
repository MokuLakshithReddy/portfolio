import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import { updatePageMetadata } from '../utils/seo'
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  Cpu, 
  Terminal, 
  GitBranch, 
  FileText, 
  Lock, 
  Globe, 
  Sparkles,
  ChevronRight,
  ChevronLeft
} from 'lucide-react'

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug)
  const caseStudy = caseStudies[currentIndex]

  useEffect(() => {
    const title = caseStudy
      ? `${caseStudy.title} — Lakshith Reddy`
      : 'Project Not Found — Lakshith Reddy'
    const description = caseStudy
      ? `${caseStudy.subtitle} ${caseStudy.problemStatement.overview}`.slice(0, 155)
      : 'The requested portfolio project case study could not be found.'

    updatePageMetadata({
      title,
      description,
      canonicalPath: slug ? `/projects/${slug}` : '/projects',
    })
  }, [caseStudy, slug])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-anton text-[48px] text-[#111111] mb-4">Case Study Not Found</h1>
        <p className="font-mono-tech text-[14px] text-[#666666] mb-8">
          The requested project engineering case study could not be located.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#0755F5] text-white px-6 py-3 rounded-full font-semibold text-[14px] hover:bg-[#0043D6] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    )
  }

  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null

  return (
    <div className="min-h-screen w-full bg-[#F5EFEB] text-[#111111] flex flex-col paper-texture font-sans antialiased selection:bg-[#0755F5] selection:text-white pb-24">
      {/* Top Sticky Header */}
      <div className="sticky top-0 z-40 bg-[#FAF5EC]/95 backdrop-blur-md border-b border-[#D8CEBD] px-6 md:px-12 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-[13px] font-mono-tech font-bold text-[#111111] hover:text-[#0755F5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Projects</span>
          </Link>
          <span className="text-[#888888]">/</span>
          <span className="font-mono-tech text-[12.5px] text-[#555555] truncate max-w-[200px] sm:max-w-none">
            Case Study {caseStudy.number} — {caseStudy.title}
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono-tech text-[12px]">
          <span className="hidden sm:inline text-[#777777]">
            {caseStudy.sourceVisibility === 'Public Repository' ? (
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" /> Public Repo
              </span>
            ) : (
              <span className="text-amber-800 font-semibold flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" /> Private Source
              </span>
            )}
          </span>
          <a
            href={caseStudy.links[0]?.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0755F5] hover:bg-[#0043D6] text-white px-3.5 py-1.5 rounded-full font-semibold text-[12px] flex items-center gap-1.5 transition-all shadow-xs"
          >
            <span>{caseStudy.links[0]?.label || 'Primary Link'}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto w-full px-6 md:px-10 pt-10 sm:pt-14">
        {/* Header Metadata */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="font-mono-tech text-[12px] font-bold text-[#0755F5] bg-[#0755F5]/10 border border-[#0755F5]/30 px-3 py-1 rounded-full uppercase">
              Case Study · {caseStudy.number}
            </span>
            <span className="font-mono-tech text-[12px] font-semibold text-[#111111] bg-[#111111]/5 border border-[#111111]/20 px-3 py-1 rounded-full">
              {caseStudy.category}
            </span>
            <span className="font-mono-tech text-[12px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full">
              {caseStudy.badgeStatus}
            </span>
          </div>

          <h1 className="font-anton text-[46px] sm:text-[64px] text-[#111111] uppercase tracking-tight leading-[0.98] mb-4">
            {caseStudy.title}
          </h1>

          <p className="font-sans text-[18px] sm:text-[21px] text-[#444444] leading-relaxed font-medium mb-6">
            {caseStudy.subtitle}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#D5C9B7]/60">
            {caseStudy.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="font-mono-tech text-[12px] bg-[#FAF5EC] text-[#222222] px-3 py-1 rounded-[6px] border border-[#222222]/80 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Evidence Transparency Disclaimer Box */}
        <div className="mb-12 p-5 bg-[#FAF5EC] border-2 border-[#0755F5]/30 rounded-[18px] relative shadow-sm">
          <div className="flex items-center gap-2 font-mono-tech text-[12px] text-[#0755F5] font-bold uppercase mb-2">
            <ShieldAlert className="w-4 h-4 text-[#0755F5]" />
            <span>Engineering Evidence Standards &amp; Verification Model</span>
          </div>
          <p className="font-sans text-[13.5px] text-[#444444] leading-relaxed">
            Following defensible software engineering standards, each case study distinguishes strictly between{' '}
            <strong className="text-[#111111]">Executed Evidence</strong> (verified GitHub Actions CI pipelines and test exit codes),{' '}
            <strong className="text-[#111111]">Project-Reported Results</strong> (internal benchmark scripts), and{' '}
            <strong className="text-[#111111]">Outstanding Validation</strong> (constraints awaiting third-party or live production testing).
          </p>
        </div>

        {/* 1. Problem Statement */}
        <section className="mb-14">
          <div className="font-mono-tech text-[12.5px] text-[#0755F5] font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>01. Problem Statement</span>
          </div>
          <h2 className="font-anton text-[32px] sm:text-[40px] text-[#111111] uppercase tracking-tight leading-none mb-4">
            Why This System Exists
          </h2>
          <p className="font-sans text-[16px] text-[#333333] leading-relaxed mb-4">
            {caseStudy.problemStatement.overview}
          </p>
          <ul className="space-y-2 mb-6">
            {caseStudy.problemStatement.challenges.map((ch, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-[14.5px] text-[#444444]">
                <span className="text-[#0755F5] font-bold mt-0.5">›</span>
                <span>{ch}</span>
              </li>
            ))}
          </ul>
          <div className="p-4 bg-[#FFB600]/15 border-l-4 border-[#FFB600] rounded-r-[12px] text-[14.5px] font-sans text-[#3A2F08] font-medium leading-relaxed">
            <strong>Core Principle:</strong> {caseStudy.problemStatement.corePrinciple}
          </div>
        </section>

        {/* 2. Engineering Approach & Cognitive Workflow */}
        <section className="mb-14">
          <div className="font-mono-tech text-[12.5px] text-[#0755F5] font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span>02. Engineering Approach</span>
          </div>
          <h2 className="font-anton text-[32px] sm:text-[40px] text-[#111111] uppercase tracking-tight leading-none mb-6">
            Multi-Stage Operational Architecture
          </h2>

          <div className="space-y-4">
            {caseStudy.workflow.map((w, idx) => (
              <div
                key={idx}
                className="bg-[#FAF5EC] border border-[#222222]/80 rounded-[16px] p-5 flex items-start gap-4 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0755F5]/10 text-[#0755F5] font-mono-tech font-bold text-[14px] flex items-center justify-center shrink-0 border border-[#0755F5]/20">
                  {w.step}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[17px] text-[#111111] mb-1">
                    {w.title}
                  </h3>
                  <p className="font-sans text-[14px] text-[#555555] leading-relaxed">
                    {w.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. System Architecture */}
        <section className="mb-14">
          <div className="font-mono-tech text-[12.5px] text-[#0755F5] font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
            <GitBranch className="w-4 h-4" />
            <span>03. System Architecture</span>
          </div>
          <h2 className="font-anton text-[32px] sm:text-[40px] text-[#111111] uppercase tracking-tight leading-none mb-6">
            Component Topology &amp; Data Flow
          </h2>

          {/* ASCII / Diagram Canvas */}
          <div className="bg-[#111111] text-[#EFE8DC] p-5 sm:p-6 rounded-[18px] border border-[#222222] overflow-x-auto shadow-md mb-6">
            <pre className="font-mono-tech text-[11.5px] sm:text-[12.5px] leading-relaxed select-all">
              {caseStudy.architectureDiagram}
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.architectureDetails.map((detail, idx) => (
              <div
                key={idx}
                className="bg-[#FAF5EC] border border-[#222222]/80 rounded-[16px] p-5 shadow-xs"
              >
                <h4 className="font-sans font-bold text-[16px] text-[#111111] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0755F5]" />
                  {detail.title}
                </h4>
                <p className="font-sans text-[13.5px] text-[#555555] leading-relaxed">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Technical Implementation Matrix */}
        <section className="mb-14">
          <div className="font-mono-tech text-[12.5px] text-[#0755F5] font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>04. Implementation Details</span>
          </div>
          <h2 className="font-anton text-[32px] sm:text-[40px] text-[#111111] uppercase tracking-tight leading-none mb-6">
            Engineering Matrix
          </h2>

          <div className="border border-[#222222]/80 rounded-[18px] overflow-hidden bg-[#FAF5EC] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#EAE1D3] border-b border-[#222222]/80 font-mono-tech text-[12px] uppercase text-[#111111]">
                  <th className="py-3 px-5 font-bold">Engineering Area</th>
                  <th className="py-3 px-5 font-bold">Implementation Strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D5C9B7]/60 text-[13.5px] font-sans">
                {caseStudy.implementationTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F2EBDE] transition-colors">
                    <td className="py-3 px-5 font-semibold text-[#111111] whitespace-nowrap">
                      {row.area}
                    </td>
                    <td className="py-3 px-5 text-[#444444]">
                      {row.implementation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Evidence & Verification */}
        <section className="mb-14">
          <div className="font-mono-tech text-[12.5px] text-[#0755F5] font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>05. Measurable Evidence &amp; Verification</span>
          </div>
          <h2 className="font-anton text-[32px] sm:text-[40px] text-[#111111] uppercase tracking-tight leading-none mb-2">
            Benchmark &amp; CI Verification
          </h2>
          <p className="font-mono-tech text-[12.5px] text-[#666666] mb-6">
            Recorded verification snapshot: <strong className="text-[#111111]">{caseStudy.evidence.ciDate}</strong> — Status: <span className="text-[#0755F5] font-semibold">{caseStudy.evidence.ciStatus}</span>
            <span className="block mt-1 text-[11px] text-[#777777]">Historical evidence snapshot; newer workflow runs may exist.</span>
          </p>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {caseStudy.evidence.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#FAF5EC] border border-[#222222]/80 rounded-[16px] p-4 flex flex-col justify-between shadow-xs"
              >
                <div className="font-mono-tech text-[26px] font-bold text-[#111111] leading-none mb-1.5">
                  {m.value}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#111111] leading-tight">
                    {m.label}
                  </div>
                  {m.sublabel && (
                    <div className="font-mono-tech text-[11px] text-[#777777] mt-0.5">
                      {m.sublabel}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Test Table if present */}
          {caseStudy.evidence.testTable && (
            <div className="mb-8 border border-[#222222]/80 rounded-[16px] overflow-hidden bg-[#FAF5EC]">
              <table className="w-full text-left border-collapse text-[13px]">
                <thead>
                  <tr className="bg-[#EAE1D3] border-b border-[#222222]/80 font-mono-tech text-[11.5px] uppercase text-[#111111]">
                    <th className="py-2.5 px-4 font-bold">Evaluation Scenario</th>
                    <th className="py-2.5 px-4 font-bold">Recorded Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D5C9B7]/60">
                  {caseStudy.evidence.testTable.map((t, idx) => (
                    <tr key={idx} className="hover:bg-[#F2EBDE]">
                      <td className="py-2.5 px-4 font-medium text-[#111111]">{t.test}</td>
                      <td className="py-2.5 px-4 font-mono-tech font-semibold text-[#0755F5]">{t.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Three Categorized Proof Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {/* Executed Evidence */}
            <div className="bg-[#FAF5EC] border border-emerald-500/40 rounded-[16px] p-4.5">
              <div className="flex items-center gap-1.5 font-mono-tech text-[12px] font-bold text-emerald-800 uppercase mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Executed Evidence</span>
              </div>
              <ul className="space-y-2 text-[12.5px] text-[#444444]">
                {caseStudy.evidence.executedEvidence.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Reported */}
            <div className="bg-[#FAF5EC] border border-[#0755F5]/40 rounded-[16px] p-4.5">
              <div className="flex items-center gap-1.5 font-mono-tech text-[12px] font-bold text-[#0755F5] uppercase mb-3">
                <Sparkles className="w-4 h-4 text-[#0755F5]" />
                <span>Project-Reported</span>
              </div>
              <ul className="space-y-2 text-[12.5px] text-[#444444]">
                {caseStudy.evidence.projectReportedResults.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#0755F5] font-bold">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outstanding Validation */}
            <div className="bg-[#FAF5EC] border border-amber-500/40 rounded-[16px] p-4.5">
              <div className="flex items-center gap-1.5 font-mono-tech text-[12px] font-bold text-amber-800 uppercase mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Outstanding Proof</span>
              </div>
              <ul className="space-y-2 text-[12.5px] text-[#444444]">
                {caseStudy.evidence.outstandingValidation.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Direct Evidence Links */}
          <div className="p-4 bg-[#FAF5EC] border border-[#222222]/80 rounded-[16px]">
            <div className="font-mono-tech text-[12px] font-bold text-[#111111] uppercase mb-2">
              Direct Verification Artifacts:
            </div>
            <div className="flex flex-wrap gap-2.5">
              {caseStudy.evidence.evidenceLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-mono-tech text-[#0755F5] hover:text-[#0043D6] bg-[#0755F5]/10 px-3 py-1 rounded-[6px] border border-[#0755F5]/20 hover:border-[#0755F5]/40 transition-colors"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Honest Limitations & Future Work */}
        <section className="mb-14">
          <div className="font-mono-tech text-[12.5px] text-[#0755F5] font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>06. Honest Limitations &amp; Future Work</span>
          </div>
          <h2 className="font-anton text-[32px] sm:text-[40px] text-[#111111] uppercase tracking-tight leading-none mb-4">
            Known Constraints &amp; Next Priorities
          </h2>
          <div className="bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6 shadow-sm space-y-3">
            {caseStudy.limitations.map((lim, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-[14.5px] text-[#444444]">
                <span className="text-[#0755F5] font-bold mt-0.5">›</span>
                <span>{lim}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Outcome */}
        <section className="mb-16">
          <div className="p-6 sm:p-8 bg-[#FAF5EC] border-2 border-[#111111] rounded-[20px] shadow-sm">
            <div className="font-mono-tech text-[12px] text-[#0755F5] font-bold uppercase mb-2">
              // Project Outcome
            </div>
            <p className="font-sans text-[17px] sm:text-[19px] text-[#111111] font-semibold leading-relaxed">
              &ldquo;{caseStudy.projectOutcome}&rdquo;
            </p>
          </div>
        </section>

        {/* Next / Previous Project Navigation */}
        <div className="pt-8 border-t border-[#D5C9B7] flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevStudy ? (
            <button
              onClick={() => navigate(`/projects/${prevStudy.slug}`)}
              className="w-full sm:w-auto inline-flex items-center gap-2 p-3 bg-[#FAF5EC] hover:bg-[#111111] hover:text-white text-[#111111] border border-[#222222]/80 rounded-[12px] font-mono-tech text-[13px] font-semibold transition-all group cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-[10px] text-[#777777] uppercase">Previous Case Study</div>
                <div className="truncate max-w-[200px]">{prevStudy.title}</div>
              </div>
            </button>
          ) : <div />}

          <Link
            to="/#projects"
            className="text-[13px] font-mono-tech font-bold text-[#0755F5] hover:underline"
          >
            ← View All 6 Projects
          </Link>

          {nextStudy ? (
            <button
              onClick={() => navigate(`/projects/${nextStudy.slug}`)}
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-end gap-2 p-3 bg-[#FAF5EC] hover:bg-[#111111] hover:text-white text-[#111111] border border-[#222222]/80 rounded-[12px] font-mono-tech text-[13px] font-semibold transition-all group cursor-pointer text-right"
            >
              <div>
                <div className="text-[10px] text-[#777777] uppercase">Next Case Study</div>
                <div className="truncate max-w-[200px]">{nextStudy.title}</div>
              </div>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : <div />}
        </div>
      </main>
    </div>
  )
}

