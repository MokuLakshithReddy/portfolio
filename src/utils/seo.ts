const SITE_URL = 'https://portfolio-beta-roan-97.vercel.app'
const SOCIAL_IMAGE = `${SITE_URL}/images/portfolio-social-card.svg`

interface PageMetadata {
  title: string
  description: string
  canonicalPath: string
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

export function updatePageMetadata({ title, description, canonicalPath }: PageMetadata) {
  const canonicalUrl = new URL(canonicalPath, SITE_URL).toString()

  document.title = title
  setMeta('name', 'description', description)
  setMeta('property', 'og:type', 'website')
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:url', canonicalUrl)
  setMeta('property', 'og:image', SOCIAL_IMAGE)
  setMeta('property', 'og:image:alt', 'Lakshith Reddy portfolio identity card')
  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', description)
  setMeta('name', 'twitter:image', SOCIAL_IMAGE)

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = canonicalUrl
}
