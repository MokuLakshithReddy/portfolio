import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { buildRouteHtml } from './prerender-utils.mjs'

const siteUrl = 'https://portfolio-beta-roan-97.vercel.app'
const socialImage = `${siteUrl}/images/character.png`
const root = process.cwd()
const distDirectory = resolve(root, 'dist')
const template = readFileSync(join(distDirectory, 'index.html'), 'utf8')
const routes = JSON.parse(readFileSync(join(root, 'src', 'data', 'seoMetadata.json'), 'utf8'))

for (const route of routes) {
  const html = buildRouteHtml(template, route, siteUrl, socialImage)
  const routeDirectory = join(distDirectory, 'projects', route.slug)
  mkdirSync(routeDirectory, { recursive: true })
  writeFileSync(join(routeDirectory, 'index.html'), html)
}

console.log(`Prerendered metadata for ${routes.length} project routes.`)
