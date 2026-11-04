import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const token = process.env.CONTRIBUTIONS_PAT || process.env.GITHUB_TOKEN

if (!token) {
  console.error('Error: CONTRIBUTIONS_PAT or GITHUB_TOKEN environment variable is required.')
  process.exit(1)
}

const query = `
{
  user(login: "MokuLakshithReddy") {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
            color
            weekday
          }
        }
      }
    }
  }
}
`

async function syncContributions() {
  console.log('Fetching latest GitHub contribution calendar for MokuLakshithReddy...')

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'Antigravity-Portfolio-Sync'
    },
    body: JSON.stringify({ query })
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`GitHub API error (${response.status}):`, errorText)
    process.exit(1)
  }

  const json = await response.json()
  if (json.errors) {
    console.error('GraphQL errors:', json.errors)
    process.exit(1)
  }

  const calendar = json.data?.user?.contributionsCollection?.contributionCalendar
  if (!calendar) {
    console.error('No calendar returned:', json)
    process.exit(1)
  }

  const totalContributions = calendar.totalContributions
  const weeks = calendar.weeks

  console.log(`Successfully fetched calendar: ${totalContributions} contributions across ${weeks.length} weeks.`)

  const fileContent = `export interface ContributionDay {
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

export const githubContributionData: GitHubContributionData = {
  totalContributions: ${totalContributions},
  lastSyncedAt: '${new Date().toISOString()}',
  weeks: ${JSON.stringify(weeks, null, 2)}
}
`

  const targetPath = resolve(__dirname, '../src/data/githubData.ts')
  writeFileSync(targetPath, fileContent, 'utf-8')
  console.log(`Updated ${targetPath} successfully!`)
}

syncContributions().catch(err => {
  console.error('Unhandled error:', err)
  process.exit(1)
})

