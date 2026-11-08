export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

export function upsertTag(html, marker, tag) {
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

export function buildRouteHtml(template, route, siteUrl, socialImage) {
  const titleStart = template.indexOf('<title>')
  const titleEnd = template.indexOf('</title>', titleStart)

  if (titleStart < 0 || titleEnd < 0) {
    throw new Error('HTML template must contain a title element')
  }

  const canonicalUrl = `${siteUrl}/projects/${route.slug}`
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
  return upsertTag(html, '<link rel="canonical"', canonicalTag)
}
