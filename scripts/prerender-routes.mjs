import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const siteUrl = 'https://portfolio-beta-roan-97.vercel.app'
const root = process.cwd()
const distDirectory = resolve(root, 'dist')
const template = readFileSync(join(distDirectory, 'index.html'), 'utf8')
const routes = JSON.parse(readFileSync(join(root, 'src', 'data', 'seoMetadata.json'), 'utf8'))

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function upsertTag(html, marker, tag) {
  const start = html.indexOf(marker)
  if (start >= 0) {
    const end = html.indexOf('>', start)
    if (end >= 0) return html.slice(0, start) + tag + html.slice(end + 1)
  }
  return html.replace('</head>', `  ${tag}\n  </head>`)
}

function setMeta(html, attribute, key, content) {
  const marker = `<meta ${attribute}="${key}"`
  const tag = `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(content)}" />`
  return upsertTag(html, marker, tag)
}

for (const route of routes) {
  const canonicalUrl = `${siteUrl}/projects/${route.slug}`
  const socialImage = `${siteUrl}/images/character.png`
  const titleStart = template.indexOf('<title>')
  const titleEnd = template.indexOf('</title>', titleStart)
  let html = template.slice(0, titleStart)
    + `<title>${escapeHtml(route.title)}</title>`
    + template.slice(titleEnd + '</title>'.length)

  html = setMeta(html, 'name', 'description', route.description)
  html = setMeta(html, 'property', 'og:type', 'website')
  html = setMeta(html, 'property', 'og:title', route.title)
  html = setMeta(html, 'property', 'og:description', route.description)
  html = setMeta(html, 'property', 'og:url', canonicalUrl)
  html = setMeta(html, 'property', 'og:image', socialImage)
  html = setMeta(html, 'property', 'og:image:alt', 'Lakshith Reddy portfolio character illustration')
  html = setMeta(html, 'name', 'twitter:card', 'summary_large_image')
  html = setMeta(html, 'name', 'twitter:title', route.title)
  html = setMeta(html, 'name', 'twitter:description', route.description)
  html = setMeta(html, 'name', 'twitter:image', socialImage)

  const canonicalTag = `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`
  html = upsertTag(html, '<link rel="canonical"', canonicalTag)

  const routeDirectory = join(distDirectory, 'projects', route.slug)
  mkdirSync(routeDirectory, { recursive: true })
  writeFileSync(join(routeDirectory, 'index.html'), html)
}

console.log(`Prerendered metadata for ${routes.length} project routes.`)
