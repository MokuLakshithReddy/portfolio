import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { after, before, test } from 'node:test'
import puppeteer from 'puppeteer-core'
import { resolve } from 'node:path'

const baseUrl = 'http://127.0.0.1:4173'
let previewProcess
let browser

async function waitForPreview() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (previewProcess.exitCode !== null) {
      throw new Error('Vite preview exited before becoming ready.')
    }

    try {
      const response = await fetch(baseUrl)
      if (response.ok) return
    } catch {
      // Preview server is still starting.
    }

    await new Promise((resolveDelay) => setTimeout(resolveDelay, 250))
  }

  throw new Error('Vite preview did not become ready within 15 seconds.')
}

async function createPage() {
  const page = await browser.newPage()
  page.setDefaultTimeout(10_000)
  return page
}

before(async () => {
  const chromePath = process.env.CHROME_PATH
  if (!chromePath) {
    throw new Error('CHROME_PATH is required. Set it to a Chrome/Chromium executable.')
  }

  previewProcess = spawn(
    process.execPath,
    [
      resolve(process.cwd(), 'node_modules/vite/bin/vite.js'),
      'preview',
      '--host',
      '127.0.0.1',
      '--port',
      '4173',
      '--strictPort',
    ],
    { stdio: 'ignore' },
  )

  await waitForPreview()
  browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
})

after(async () => {
  await browser?.close()
  if (previewProcess && previewProcess.exitCode === null) {
    previewProcess.kill('SIGTERM')
  }
})

test('homepage renders its primary portfolio content', async () => {
  const page = await createPage()
  try {
    const response = await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
    assert.equal(response?.status(), 200)
    await page.waitForSelector('#home h1')
    await page.waitForSelector('#projects')
    const heading = await page.$eval(
      '#home h1',
      (element) => (element.textContent ?? '').replace(/\s+/g, '').toUpperCase(),
    )
    assert.match(heading, /LAKSHITHREDDY/)
  } finally {
    await page.close()
  }
})

test('featured case-study routes load directly', async () => {
  const projects = [
    ['secret-leak-detector', 'Secret Leak Detector'],
    ['local-ai-execution-agent', 'Local AI Execution Agent'],
    ['thinkmate', 'ThinkMate'],
    ['cluely-copilot', 'Cluely Copilot'],
    ['autonomous-ai-coding-orchestrator', 'Autonomous AI Coding Orchestrator'],
    ['bluecarbon-registry', 'BlueCarbon Registry'],
  ]

  const page = await createPage()
  try {
    for (const [slug, expectedTitle] of projects) {
      const response = await page.goto(`${baseUrl}/projects/${slug}`, { waitUntil: 'domcontentloaded' })
      assert.equal(response?.status(), 200, `Expected HTTP 200 for ${slug}`)
      await page.waitForFunction(
        (title) => document.querySelector('main h1')?.textContent?.includes(title),
        {},
        expectedTitle,
      )
    }
  } finally {
    await page.close()
  }
})

test('unknown project slugs show the not-found page', async () => {
  const page = await createPage()
  try {
    await page.goto(`${baseUrl}/projects/not-a-real-project`, { waitUntil: 'domcontentloaded' })
    await page.waitForFunction(() => document.body.innerText.includes('Case Study Not Found'))
  } finally {
    await page.close()
  }
})

test('phone layouts do not allow the document to scroll horizontally', async () => {
  const page = await createPage()
  try {
    for (const width of [320, 360, 375, 390, 430]) {
      await page.setViewport({ width, height: 844 })
      await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
      const result = await page.evaluate(() => {
        window.scrollTo({ left: document.documentElement.scrollWidth, top: 0, behavior: 'instant' })
        return new Promise((resolveResult) => requestAnimationFrame(() => resolveResult({
          viewport: window.innerWidth,
          scrollX: window.scrollX,
          rootOverflowX: getComputedStyle(document.documentElement).overflowX,
        })))
      })

      assert.equal(result.scrollX, 0, `Horizontal document scroll at ${width}px`)
      assert.equal(result.rootOverflowX, 'clip')
    }
  } finally {
    await page.close()
  }
})

test('the contribution heatmap remains independently scrollable', async () => {
  const page = await createPage()
  try {
    await page.setViewport({ width: 320, height: 844 })
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
    const scrollport = await page.evaluate(() => {
      const grid = [...document.querySelectorAll('div')]
        .find((element) => element.classList.contains('min-w-[760px]'))
      const container = grid?.parentElement
      return container
        ? {
            clientWidth: container.clientWidth,
            scrollWidth: container.scrollWidth,
            overflowX: getComputedStyle(container).overflowX,
          }
        : null
    })

    assert.ok(scrollport)
    assert.ok(scrollport.scrollWidth > scrollport.clientWidth)
    assert.equal(scrollport.overflowX, 'auto')
  } finally {
    await page.close()
  }
})

test('responsive status bar displays a compact clock on phones and full date on desktop', async () => {
  const page = await createPage()
  try {
    await page.setViewport({ width: 320, height: 844 })
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })

    const visibleClocks = async () => page.evaluate(() => {
      const clocks = [...document.querySelectorAll('header span')]
        .filter((element) => /\d{1,2}:\d{2}\s[AP]M/.test(element.textContent ?? ''))
      return clocks
        .filter((element) => element.getBoundingClientRect().width > 0)
        .map((element) => element.textContent?.trim() ?? '')
    })

    const mobileClock = await visibleClocks()
    assert.equal(mobileClock.length, 1)
    assert.match(mobileClock[0], /^\d{1,2}:\d{2}\s[AP]M$/)

    await page.setViewport({ width: 1280, height: 900 })
    await page.reload({ waitUntil: 'domcontentloaded' })
    const desktopClock = await visibleClocks()
    assert.equal(desktopClock.length, 1)
    assert.match(desktopClock[0], /,\s[A-Z][a-z]{2}\s\d{1,2},\s\d{4}/)
  } finally {
    await page.close()
  }
})

test('mobile navigation opens and closes through keyboard and pointer controls', async () => {
  const page = await createPage()
  try {
    await page.setViewport({ width: 390, height: 844 })
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
    const menuButton = await page.$('button[aria-controls="mobile-navigation"]')
    assert.ok(menuButton)
    await menuButton.click()
    await page.waitForSelector('#mobile-navigation')
    assert.ok(await page.$('#mobile-navigation a[href="#contact"]'))
    await page.keyboard.press('Escape')
    await page.waitForFunction(() => !document.querySelector('#mobile-navigation'))
  } finally {
    await page.close()
  }
})

test('image preview closes with Escape', async () => {
  const page = await createPage()
  try {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
    const trigger = await page.$('nav button[title="Click to open portfolio image preview"]')
    assert.ok(trigger)
    await trigger.click()
    await page.waitForSelector('.max-w-4xl img')
    await page.keyboard.press('Escape')
    await page.waitForFunction(() => !document.querySelector('.max-w-4xl img'))
  } finally {
    await page.close()
  }
})

async function submitContactForm({ responseBody = '{"success":"true"}', responseStatus = 200, networkError = false } = {}) {
  const page = await createPage()
  await page.evaluateOnNewDocument((config) => {
    const originalFetch = window.fetch.bind(window)
    window.fetch = async (input, init) => {
      const requestUrl = typeof input === 'string'
        ? input
        : input instanceof URL
          ? input.href
          : input.url

      if (requestUrl.startsWith('https://api.github.com/users/MokuLakshithReddy/events')) {
        return new Response('[]', { status: 200, headers: { 'Content-Type': 'application/json' } })
      }

      if (requestUrl.startsWith('https://formsubmit.co/ajax/')) {
        if (config.networkError) throw new TypeError('Simulated network failure')
        return new Response(config.responseBody, {
          status: config.responseStatus,
          headers: { 'Content-Type': 'application/json' },
        })
      }

      return originalFetch(input, init)
    }
  }, { responseBody, responseStatus, networkError })

  try {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
    await page.waitForSelector('#contact input[type="text"]')
    await page.$eval('#contact', (element) => element.scrollIntoView())
    await page.type('#contact input[type="text"]', 'Test Visitor')
    await page.type('#contact input[type="email"]', 'visitor@example.com')
    await page.type('#contact textarea', 'Automated browser regression test.')
    await page.click('#contact button[type="submit"]')
    return page
  } catch (error) {
    await page.close()
    throw error
  }
}

test('contact form reports success only for an explicit accepted response', async () => {
  const page = await submitContactForm()
  try {
    await page.waitForFunction(() => document.body.innerText.includes('Transmission Dispatched!'))
  } finally {
    await page.close()
  }
})

test('contact form shows the email fallback when the service rejects the message', async () => {
  const page = await submitContactForm({ responseBody: '{"success":"false"}' })
  try {
    await page.waitForFunction(() => document.body.innerText.includes('Unable to dispatch automatically'))
    assert.ok(await page.$('#contact a[href^="mailto:"]'))
    assert.equal(await page.$eval('#contact input[type="text"]', (input) => input.value), 'Test Visitor')
  } finally {
    await page.close()
  }
})

test('contact form reports network failures without clearing the message', async () => {
  const page = await submitContactForm({ networkError: true })
  try {
    await page.waitForFunction(() => document.body.innerText.includes('Unable to dispatch automatically'))
    assert.ok(await page.$('#contact a[href^="mailto:"]'))
    assert.equal(await page.$eval('#contact textarea', (textarea) => textarea.value), 'Automated browser regression test.')
  } finally {
    await page.close()
  }
})

test('contact form rejects malformed success payloads', async () => {
  const page = await submitContactForm({ responseBody: 'not-json' })
  try {
    await page.waitForFunction(() => document.body.innerText.includes('Unable to dispatch automatically'))
    assert.ok(await page.$('#contact a[href^="mailto:"]'))
    assert.equal(await page.$eval('#contact input[type="text"]', (input) => input.value), 'Test Visitor')
  } finally {
    await page.close()
  }
})

test('contact form fields have programmatic labels', async () => {
  const page = await createPage()
  try {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
    for (const fieldId of ['contact-name', 'contact-email', 'contact-message']) {
      const label = await page.$(`label[for="${fieldId}"]`)
      const field = await page.$(`#${fieldId}`)
      assert.ok(label, `Missing accessible label for ${fieldId}`)
      assert.ok(field, `Missing field ${fieldId}`)
      assert.equal(
        await field.evaluate((element) => element.getAttribute('aria-label') || element.getAttribute('id')),
        fieldId,
      )
    }
  } finally {
    await page.close()
  }
})

test('image preview traps keyboard focus and restores focus to its trigger', async () => {
  const page = await createPage()
  try {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
    const trigger = await page.$('nav button[aria-label="Open portfolio illustration preview"]')
    assert.ok(trigger)
    await trigger.focus()
    await page.keyboard.press('Enter')
    await page.waitForSelector('[role="dialog"][aria-modal="true"]')
    await page.waitForFunction(() => document.activeElement?.getAttribute('aria-label') === 'Close image preview')

    await page.keyboard.press('Tab')
    assert.equal(
      await page.evaluate(() => document.activeElement?.getAttribute('aria-label')),
      'Open full-size image in a new tab',
    )

    await page.keyboard.down('Shift')
    await page.keyboard.press('Tab')
    await page.keyboard.up('Shift')
    assert.equal(
      await page.evaluate(() => document.activeElement?.getAttribute('aria-label')),
      'Close image preview',
    )

    await page.keyboard.press('Escape')
    await page.waitForFunction(() => !document.querySelector('[role="dialog"]'))
    assert.equal(
      await page.evaluate(() => document.activeElement?.getAttribute('aria-label')),
      'Open portfolio illustration preview',
    )
  } finally {
    await page.close()
  }
})


test('hero presents a clear identity, focus areas, and project action without overlapping widgets', async () => {
  const page = await createPage()
  try {
    await page.setViewport({ width: 1440, height: 960 })
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })

    await page.waitForSelector('#home h1')
    const heading = await page.$eval('#home h1', (element) => (element.textContent ?? '').replace(/\\s+/g, ''))
    assert.match(heading, /LAKSHITHREDDY\\./)
    assert.ok(await page.$('#home a[href="#projects"]'))
    assert.ok(await page.$('#home a[href="https://github.com/MokuLakshithReddy"]'))
    assert.ok(await page.$('#home [aria-label="Areas of focus"]'))
    assert.equal(await page.$('#home input[aria-label="Portfolio terminal command"]'), null)
  } finally {
    await page.close()
  }
})

test('command palette filters and opens a project using keyboard navigation', async () => {
  const page = await createPage()
  try {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
    await page.keyboard.down('Alt')
    await page.keyboard.press('k')
    await page.keyboard.up('Alt')
    await page.waitForSelector('[role="dialog"][aria-label="Portfolio command palette"]')

    const search = await page.$('input[aria-label="Search portfolio commands"]')
    assert.ok(search)
    await search.type('secret leak detector')
    const result = await page.waitForSelector('button[data-command-id="project-secret-leak-detector"]')
    assert.ok(result)
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')

    await page.waitForFunction(() =>
      document.querySelector('main h1')?.textContent?.includes('Secret Leak Detector'),
    )
  } finally {
    await page.close()
  }
})
