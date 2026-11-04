import React, { useState } from 'react'
import { githubContributionData, type ContributionDay } from '../data/githubData'
import { ExternalLink, CheckCircle2, Flame, GitCommit, GitBranch } from 'lucide-react'

// Calculate month label positions based on first week where month changes
const getMonthPositions = () => {
  const positions: { month: string; weekIndex: number }[] = []
  let lastMonth = -1

  githubContributionData.weeks.forEach((week, index) => {
    if (week.contributionDays.length > 0) {
      const firstDay = new Date(week.contributionDays[0].date)
      const month = firstDay.getMonth()
      if (month !== lastMonth) {
        // Map 0-11 to string
        const monthShort = firstDay.toLocaleDateString('en-US', { month: 'short' })
        positions.push({ month: monthShort, weekIndex: index })
        lastMonth = month
      }
    }
  })
  return positions
}

export const GitHubContributions: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'paper'>('dark')
  const [hoveredDay, setHoveredDay] = useState<{
    day: ContributionDay
    x: number
    y: number
  } | null>(null)

  const monthPositions = getMonthPositions()

  // Format date helper for tooltip
  const formatTooltipDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  // Get color for day based on theme and count
  const getCellColor = (count: number) => {
    if (theme === 'dark') {
      if (count === 0) return 'bg-[#161B22] border-[#21262D]'
      if (count < 3) return 'bg-[#0E4429] border-[#0E4429]'
      if (count < 6) return 'bg-[#006D32] border-[#006D32]'
      if (count < 10) return 'bg-[#26A641] border-[#26A641]'
      return 'bg-[#39D353] border-[#39D353]'
    } else {
      if (count === 0) return 'bg-[#E5DBC7] border-[#D8CEBA]'
      if (count < 3) return 'bg-[#9BE9A8] border-[#89D396]'
      if (count < 6) return 'bg-[#40C463] border-[#37AB56]'
      if (count < 10) return 'bg-[#30A14E] border-[#288E44]'
      return 'bg-[#216E39] border-[#1C5D30]'
    }
  }

  const isDark = theme === 'dark'

  return (
    <div className={`w-full rounded-[20px] transition-colors duration-300 p-6 md:p-8 border select-none relative overflow-hidden ${
      isDark 
        ? 'bg-[#0D1117] border-[#30363D] text-[#C9D1D9] shadow-xl' 
        : 'bg-[#FAF5EC] border-[#222222]/80 text-[#111111] shadow-sm'
    }`}>
      {/* Background Glow in dark mode */}
      {isDark && (
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      )}

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b ${isDark ? 'border-[#21262D]' : 'border-[#D5C9B7]/60'}">
        <div className="flex items-center gap-3.5">
          {/* GitHub Icon with pulsing active status */}
          <div className="relative">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
              isDark ? 'bg-[#161B22] border-[#30363D]' : 'bg-[#EFE8DA] border-[#D0C4B0]'
            }`}>
              <svg className={`w-5 h-5 ${isDark ? 'fill-[#F0F6FC]' : 'fill-[#111111]'}`} viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 rounded-full animate-pulse" 
              style={{ borderColor: isDark ? '#0D1117' : '#FAF5EC' }} 
              title="Active Contributor"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-[19px] md:text-[21px] font-bold tracking-tight ${isDark ? 'text-[#F0F6FC]' : 'text-[#111111]'}`}>
                {githubContributionData.totalContributions.toLocaleString()} contributions in the last year
              </h3>
            </div>
            <p className={`text-[12.5px] font-mono-tech ${isDark ? 'text-[#8B949E]' : 'text-[#666666]'}`}>
              Verified activity recorded on GitHub account <strong className={isDark ? 'text-[#58A6FF]' : 'text-[#0755F5]'}>@MokuLakshithReddy</strong>
            </p>
          </div>
        </div>

        {/* Action Controls & Theme Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Theme switcher */}
          <div className={`flex items-center p-0.5 rounded-full border text-[11px] font-mono-tech ${
            isDark ? 'bg-[#161B22] border-[#30363D] text-[#8B949E]' : 'bg-[#EAE2D2] border-[#D0C4B0] text-[#555555]'
          }`}>
            <button
              onClick={() => setTheme('dark')}
              className={`px-2.5 py-1 rounded-full font-semibold transition-all ${
                isDark ? 'bg-[#21262D] text-[#58A6FF] shadow-xs' : 'hover:text-[#111111]'
              }`}
            >
              GitHub Dark
            </button>
            <button
              onClick={() => setTheme('paper')}
              className={`px-2.5 py-1 rounded-full font-semibold transition-all ${
                !isDark ? 'bg-[#FAF5EC] text-[#0755F5] shadow-xs' : 'hover:text-[#F0F6FC]'
              }`}
            >
              Paper Theme
            </button>
          </div>

          {/* External GitHub Profile Link */}
          <a
            href="https://github.com/MokuLakshithReddy"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-mono-tech font-bold transition-all ${
              isDark 
                ? 'bg-[#21262D] hover:bg-[#30363D] text-[#F0F6FC] border border-[#30363D]' 
                : 'bg-[#111111] hover:bg-[#333333] text-[#FAF5EC]'
            }`}
          >
            <span>View Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Heatmap Container */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
        <div className="min-w-[760px]">
          {/* Month Labels */}
          <div className="grid grid-cols-[30px_repeat(53,minmax(0,1fr))] text-[11px] font-mono-tech mb-1.5"
            style={{ color: isDark ? '#8B949E' : '#777777' }}
          >
            <div /> {/* Day label spacer */}
            {githubContributionData.weeks.map((_, weekIdx) => {
              const matchedMonth = monthPositions.find(m => m.weekIndex === weekIdx)
              return (
                <div key={weekIdx} className="text-left overflow-visible whitespace-nowrap">
                  {matchedMonth ? matchedMonth.month : ''}
                </div>
              )
            })}
          </div>

          {/* Grid Rows (Sun=0 to Sat=6) */}
          <div className="grid grid-cols-[30px_repeat(53,minmax(0,1fr))] gap-1">
            {/* Day of Week Labels on the left */}
            <div className="flex flex-col justify-between py-1 text-[9.5px] font-mono-tech"
              style={{ color: isDark ? '#8B949E' : '#777777', height: '106px' }}
            >
              <span className="opacity-0">Sun</span>
              <span>Mon</span>
              <span className="opacity-0">Tue</span>
              <span>Wed</span>
              <span className="opacity-0">Thu</span>
              <span>Fri</span>
              <span className="opacity-0">Sat</span>
            </div>

            {/* 53 Columns */}
            {githubContributionData.weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-1">
                {[0, 1, 2, 3, 4, 5, 6].map(dayIdx => {
                  const day = week.contributionDays.find(d => d.weekday === dayIdx)
                  if (!day) {
                    return (
                      <div 
                        key={dayIdx} 
                        className="w-[11px] h-[11px] rounded-[2px] opacity-0" 
                      />
                    )
                  }

                  const colorClass = getCellColor(day.contributionCount)

                  return (
                    <div
                      key={dayIdx}
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect()
                        setHoveredDay({
                          day,
                          x: rect.left + rect.width / 2,
                          y: rect.top
                        })
                      }}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`w-[11px] h-[11px] rounded-[2px] border-[0.5px] cursor-pointer transition-transform duration-100 hover:scale-135 hover:z-10 ${colorClass}`}
                    />
                  )
                })}
              </div>
            ))}
          </div>

          {/* Heatmap Footer: Learn how we count contributions + Less/More Legend */}
          <div className="flex items-center justify-between text-[11px] font-mono-tech mt-4 pt-3 border-t"
            style={{ 
              borderColor: isDark ? '#21262D' : '#D5C9B7]/60',
              color: isDark ? '#8B949E' : '#666666'
            }}
          >
            <a
              href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:underline flex items-center gap-1 ${isDark ? 'text-[#58A6FF]' : 'text-[#0755F5]'}`}
            >
              <span>Learn how we count contributions</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <span className={`w-[11px] h-[11px] rounded-[2px] border-[0.5px] ${getCellColor(0)}`} />
                <span className={`w-[11px] h-[11px] rounded-[2px] border-[0.5px] ${getCellColor(2)}`} />
                <span className={`w-[11px] h-[11px] rounded-[2px] border-[0.5px] ${getCellColor(5)}`} />
                <span className={`w-[11px] h-[11px] rounded-[2px] border-[0.5px] ${getCellColor(8)}`} />
                <span className={`w-[11px] h-[11px] rounded-[2px] border-[0.5px] ${getCellColor(12)}`} />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Hover Tooltip */}
      {hoveredDay && (
        <div 
          className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2 bg-[#1F242C] text-[#F0F6FC] border border-[#30363D] text-[11px] font-mono-tech px-2.5 py-1.5 rounded-md shadow-xl whitespace-nowrap animate-fade-in"
          style={{ 
            left: `${hoveredDay.x}px`, 
            top: `${hoveredDay.y - 8}px` 
          }}
        >
          <div className="font-semibold text-white">
            {hoveredDay.day.contributionCount === 0 
              ? 'No contributions' 
              : `${hoveredDay.day.contributionCount} contribution${hoveredDay.day.contributionCount > 1 ? 's' : ''}`}
          </div>
          <div className="text-[10px] text-[#8B949E]">
            {formatTooltipDate(hoveredDay.day.date)}
          </div>
        </div>
      )}

      {/* Verified Developer Activity Highlights */}
      <div className={`mt-6 pt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t text-[12px] font-mono-tech ${
        isDark ? 'border-[#21262D]' : 'border-[#D5C9B7]/60'
      }`}>
        <div className={`p-3 rounded-[12px] border flex items-center gap-2.5 ${
          isDark ? 'bg-[#161B22]/70 border-[#30363D]' : 'bg-[#F2EBDE] border-[#D5C9B7]/50'
        }`}>
          <Flame className="w-4 h-4 text-amber-500 shrink-0" />
          <div>
            <div className={`text-[13px] font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>
              1,088+
            </div>
            <div className={`text-[10.5px] ${isDark ? 'text-[#8B949E]' : 'text-[#666666]'}`}>
              Yearly Contributions
            </div>
          </div>
        </div>

        <div className={`p-3 rounded-[12px] border flex items-center gap-2.5 ${
          isDark ? 'bg-[#161B22]/70 border-[#30363D]' : 'bg-[#F2EBDE] border-[#D5C9B7]/50'
        }`}>
          <GitCommit className="w-4 h-4 text-emerald-500 shrink-0" />
          <div>
            <div className={`text-[13px] font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>
              53 Weeks
            </div>
            <div className={`text-[10.5px] ${isDark ? 'text-[#8B949E]' : 'text-[#666666]'}`}>
              Continuous Activity
            </div>
          </div>
        </div>

        <div className={`p-3 rounded-[12px] border flex items-center gap-2.5 ${
          isDark ? 'bg-[#161B22]/70 border-[#30363D]' : 'bg-[#F2EBDE] border-[#D5C9B7]/50'
        }`}>
          <GitBranch className="w-4 h-4 text-[#58A6FF] shrink-0" />
          <div>
            <div className={`text-[13px] font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>
              4 Upstream PRs
            </div>
            <div className={`text-[10.5px] ${isDark ? 'text-[#8B949E]' : 'text-[#666666]'}`}>
              Merged in Apache/OSS
            </div>
          </div>
        </div>

        <div className={`p-3 rounded-[12px] border flex items-center gap-2.5 ${
          isDark ? 'bg-[#161B22]/70 border-[#30363D]' : 'bg-[#F2EBDE] border-[#D5C9B7]/50'
        }`}>
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <div>
            <div className={`text-[13px] font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>
              Verified Evidence
            </div>
            <div className={`text-[10.5px] ${isDark ? 'text-[#8B949E]' : 'text-[#666666]'}`}>
              CI Runs &amp; Public PRs
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
