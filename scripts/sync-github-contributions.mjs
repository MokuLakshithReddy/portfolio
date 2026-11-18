import { writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const USERNAME = 'MokuLakshithReddy'
const API_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`
const OUTPUT_FILE = fileURLToPath(new URL('../src/data/githubData.ts', import.meta.url))
const COLORS = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']

function utcDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error(`Invalid contribution date: ${value}`)
  }
  const date = new Date(`${value}T00:00:00.000Z`)
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) {
    throw new Error(`Invalid contribution date: ${value}`)
  }
  return date
}

export function buildContributionData(payload, syncedAt = new Date().toISOString()) {
  if (!Array.isArray(payload?.contributions) || payload.contributions.length === 0) {
    throw new Error('Contribution provider returned an empty or invalid calendar.')
  }

  const contributions = [...payload.contributions].sort((a, b) => a.date.localeCompare(b.date))
  const total = Number(payload.total?.lastYear ?? payload.lastYear)
  if (!Number.isSafeInteger(total) || total < 0) {
    throw new Error('Contribution provider did not return a valid rolling-year total.')
  }

  let previousDate = null
  const normalized = contributions.map((day) => {
    const date = utcDate(day.date)
    const count = Number(day.count)
    const level = Number(day.level)
    if (!Number.isSafeInteger(count) || count < 0 || !Number.isInteger(level) || level < 0 || level > 4) {
      throw new Error(`Invalid contribution count or level for ${day.date}`)
    }
    if (previousDate && date.getTime() - previousDate.getTime() !== 86_400_000) {
      throw new Error('Contribution calendar contains missing or duplicate dates.')
    }
    previousDate = date
    return {
      contributionCount: count,
      date: day.date,
      color: COLORS[level],
      weekday: date.getUTCDay(),
      timestamp: date.getTime(),
    }
  })

  const calculatedTotal = normalized.reduce((sum, day) => sum + day.contributionCount, 0)
  if (calculatedTotal !== total) {
    throw new Error(`Contribution total mismatch: provider reported ${total}, calendar sums to ${calculatedTotal}.`)
  }

  const firstDate = new Date(normalized[0].timestamp)
  firstDate.setUTCDate(firstDate.getUTCDate() - firstDate.getUTCDay())
  const weeks = []
  for (const day of normalized) {
    const weekIndex = Math.floor((day.timestamp - firstDate.getTime()) / (7 * 86_400_000))
    weeks[weekIndex] ??= { contributionDays: [] }
    const { timestamp: _timestamp, ...contributionDay } = day
    weeks[weekIndex].contributionDays.push(contributionDay)
  }

  return {
    totalContributions: total,
    lastSyncedAt: new Date(syncedAt).toISOString(),
    weeks,
  }
}

export async function syncGitHubContributionData() {
  const response = await fetch(API_URL, {
    headers: { Accept: 'application/json', 'User-Agent': 'LakshithReddyPortfolio/1.0' },
    signal: AbortSignal.timeout(20_000),
  })
  if (!response.ok) {
    throw new Error(`Contribution provider returned HTTP ${response.status}.`)
  }

  const payload = await response.json()
  const data = buildContributionData(payload)
  const contents = `export interface ContributionDay {
  contributionCount: number
  date: string
  color: string
  weekday: number
}

export interface ContributionWeek {
  contributionDays: ContributionDay[]
}

export interface GitHubContributionData {
  totalContributions: number
  weeks: ContributionWeek[]
  lastSyncedAt: string
}

export const githubContributionData: GitHubContributionData = ${JSON.stringify(data, null, 2)}
`
  await writeFile(OUTPUT_FILE, contents, 'utf8')
  console.log(`Updated ${data.totalContributions.toLocaleString()} contributions across ${data.weeks.length} weeks (${data.weeks[0].contributionDays[0].date}–${data.weeks.at(-1).contributionDays.at(-1).date}).`)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  syncGitHubContributionData().catch((error) => {
    console.error('Unable to refresh GitHub contribution data:', error)
    process.exitCode = 1
  })
}
