import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import sharp from 'sharp'
import { buildRouteHtml, buildSitemap } from './prerender-utils.mjs'

const configuredSiteUrl = process.env.VITE_SITE_URL || process.env.SITE_URL || 'https://lakshith-reddy.vercel.app'
const parsedSiteUrl = new URL(configuredSiteUrl)
if (parsedSiteUrl.protocol !== 'https:') {
  throw new Error('VITE_SITE_URL must be an HTTPS URL.')
}
const siteUrl = parsedSiteUrl.origin
const socialImage = `${siteUrl}/images/portfolio-social-card.png`
const root = process.cwd()
const distDirectory = resolve(root, 'dist')
const imagesDirectory = join(distDirectory, 'images')

mkdirSync(imagesDirectory, { recursive: true })
await Promise.all([
  sharp(join(root, 'public', 'images', 'hero-orbit-globe.png'))
    .webp({ quality: 82, effort: 5, smartSubsample: true })
    .toFile(join(imagesDirectory, 'hero-orbit-globe.webp')),
  sharp(join(root, 'public', 'images', 'portfolio-social-card.svg'), { density: 144 })
    .resize(1200, 630, { fit: 'cover' })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(join(imagesDirectory, 'portfolio-social-card.png')),
])

const indexPath = join(distDirectory, 'index.html')
let template = readFileSync(indexPath, 'utf8')
template = template
  .replace(/<link rel="canonical" href="[^"]+" \/>/, `<link rel="canonical" href="${siteUrl}/" />`)
  .replace(/<meta property="og:url" content="[^"]+" \/>/, `<meta property="og:url" content="${siteUrl}/" />`)
  .replace(/<meta property="og:image" content="[^"]+" \/>/, `<meta property="og:image" content="${socialImage}" />`)
  .replace(/<meta name="twitter:image" content="[^"]+" \/>/, `<meta name="twitter:image" content="${socialImage}" />`)
writeFileSync(indexPath, template, 'utf8')

const routes = JSON.parse(readFileSync(join(root, 'src', 'data', 'seoMetadata.json'), 'utf8'))
for (const route of routes) {
  const html = buildRouteHtml(template, route, siteUrl, socialImage)
  const routeDirectory = join(distDirectory, 'projects', route.slug)
  mkdirSync(routeDirectory, { recursive: true })
  writeFileSync(join(routeDirectory, 'index.html'), html)
}

writeFileSync(join(distDirectory, 'sitemap.xml'), buildSitemap(routes, siteUrl), 'utf8')
writeFileSync(
  join(distDirectory, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
  'utf8',
)

console.log(`Prerendered metadata for ${routes.length} project routes and generated sitemap.xml.`)
