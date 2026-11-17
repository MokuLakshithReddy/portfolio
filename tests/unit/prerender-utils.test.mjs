import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'
import { buildRouteHtml, escapeHtml, upsertTag } from '../../scripts/prerender-utils.mjs'

const projectRoot = process.cwd()
const metadata = JSON.parse(
  readFileSync(join(projectRoot, 'src/data/seoMetadata.json'), 'utf8'),
)

test('HTML metadata values are escaped before insertion', () => {
  assert.equal(escapeHtml('<title "unsafe" & value>'), '&lt;title &quot;unsafe&quot; &amp; value&gt;')
})

test('upsertTag replaces an existing head tag instead of duplicating it', () => {
  const html = '<html><head><meta name="description" content="old"></head><body></body></html>'
  const updated = upsertTag(
    html,
    '<meta name="description"',
    '<meta name="description" content="new">',
  )

  assert.equal((updated.match(/name="description"/g) ?? []).length, 1)
  assert.match(updated, /content="new"/)
})

test('case-study prerendering creates route-specific title, description, social tags, and canonical URL', () => {
  const template = '<html><head><title>Home</title><meta name="description" content="Home description"><link rel="canonical" href="https://example.test/"></head><body></body></html>'
  const route = {
    slug: 'sample-project',
    title: 'Sample Project & Research',
    description: 'A project description for social previews.',
  }

  const html = buildRouteHtml(template, route, 'https://example.test', 'https://example.test/preview.png')

  assert.match(html, /<title>Sample Project &amp; Research<\/title>/)
  assert.match(html, /name="description" content="A project description for social previews\."/)
  assert.match(html, /property="og:title" content="Sample Project &amp; Research"/)
  assert.match(html, /name="twitter:card" content="summary_large_image"/)
  assert.match(html, /rel="canonical" href="https:\/\/example\.test\/projects\/sample-project"/)
  assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1)
})

test('metadata includes one complete entry for every featured project slug', () => {
  const slugs = metadata.map((entry) => entry.slug)

  assert.equal(new Set(slugs).size, slugs.length, 'Project metadata slugs must be unique')
  assert.equal(slugs.length, 6)
  for (const entry of metadata) {
    assert.ok(entry.title.trim().length > 0, `Missing title for ${entry.slug}`)
    assert.ok(entry.description.trim().length > 0, `Missing description for ${entry.slug}`)
    assert.ok(entry.description.length <= 160, `Description is too long for ${entry.slug}`)
  }
})
