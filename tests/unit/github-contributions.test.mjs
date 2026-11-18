import assert from 'node:assert/strict'
import { test } from 'node:test'
import { buildContributionData } from '../../scripts/sync-github-contributions.mjs'

const fixture = {
  total: { lastYear: 5 },
  contributions: [
    { date: '2026-01-04', count: 2, level: 2 },
    { date: '2026-01-05', count: 3, level: 3 },
  ],
}

test('normalizes validated contribution days into Sunday-first weeks', () => {
  const data = buildContributionData(fixture, '2026-01-06T00:00:00.000Z')

  assert.equal(data.totalContributions, 5)
  assert.equal(data.lastSyncedAt, '2026-01-06T00:00:00.000Z')
  assert.equal(data.weeks.length, 1)
  assert.deepEqual(data.weeks[0].contributionDays.map((day) => day.weekday), [0, 1])
  assert.deepEqual(data.weeks[0].contributionDays.map((day) => day.color), ['#40c463', '#30a14e'])
})

test('rejects a provider total that does not match the daily data', () => {
  assert.throws(
    () => buildContributionData({ ...fixture, total: { lastYear: 4 } }),
    /total mismatch/,
  )
})

test('rejects missing dates instead of silently building an incomplete heatmap', () => {
  assert.throws(
    () => buildContributionData({
      total: { lastYear: 5 },
      contributions: [
        { date: '2026-01-04', count: 2, level: 2 },
        { date: '2026-01-06', count: 3, level: 3 },
      ],
    }),
    /missing or duplicate dates/,
  )
})

test('rejects invalid contribution levels', () => {
  assert.throws(
    () => buildContributionData({
      total: { lastYear: 5 },
      contributions: [
        { date: '2026-01-04', count: 2, level: 2 },
        { date: '2026-01-05', count: 3, level: 5 },
      ],
    }),
    /Invalid contribution count or level/,
  )
})
