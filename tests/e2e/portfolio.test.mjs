import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { after, before, test } from 'node:test'
import puppeteer from 'puppeteer-core'

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
      // The preview server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 250))
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
      'node_modules/vite/bin/vite.js',
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
    const heading = await page.$eval('#home h1', (element) => (element.textContent ?? '').replace(/\s+/g, '').toUpperCase())
    assert.match(heading, /LAKSHITHREDDY/)
  } finally {
    await page.close()
  }
})

test('case-study routes load directly for every featured project', async () => {
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

test('unknown project routes display the not-found page', async () => {
  const page = await createPage()
  try {
    await page.goto(`${baseUrl}/projects/not-a-real-project`, { waitUntil: 'domcontentloaded' })
    await page.waitForFunction(() => document.body.innerText.includes('Case Study Not Found'))
    assert.match(await page.evaluate(() => document.body.textContent ?? ''), /Case Study Not Found/i)
  } finally {
    await page.close()
  }
})

test('homepage does not introduce document-level horizontal scrolling on phone widths', async () => {
  const page = await createPage()
  try {
    for (const width of [320, 360, 375, 390, 430]) {
      await page.setViewport({ width, height: 844 })
      await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
      const dimensions = await page.evaluate(() => {
        const viewport = window.innerWidth
        const overflowing = [...document.querySelectorAll('body *')]
          .map((element) => {
            const rect = element.getBoundingClientRect()
            return { tag: element.tagName, className: typeof element.className === 'string' ? element.className : '', left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) }
          })
          .filter((element) => element.right > viewport + 1 || element.left < -1)
          .sort((a, b) => b.right - a.right)
          .slice(0, 8)
        return {
          viewport,
          document: document.documentElement.scrollWidth,
          body: document.body.scrollWidth,
          overflowing,
        }
      })
      assert.ok(
        dimensions.document <= dimensions.viewport && dimensions.body <= dimensions.viewport,
        `Horizontal page overflow at ${width}px: ${JSON.stringify(dimensions)}`,
      )
    }
  } finally {
    await page.close()
  }
})


test('status bar shows a compact clock on phones and a full date on desktop', async () => {
  const page = await createPage()
  try {
    await page.setViewport({ width: 320, height: 844 })
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
    const mobileClock = await page.evaluate(() => {
      const clocks = [...document.querySelectorAll('header span')]
        .filter((element) => /\\d{1,2}:\\d{2}\\s[AP]M/.test(element.textContent ?? ''))
      return clocks.filter((element) => element.getBoundingClientRect().width > 0)
        .map((element) => element.textContent?.trim() ?? '')
    })
    assert.equal(mobileClock.length, 1)
    assert.match(mobileClock[0], /^\d{1,2}:\d{2}\s[AP]M$/)

    await page.setViewport({ width: 1280, height: 900 })
    await page.reload({ waitUntil: 'domcontentloaded' })
    const desktopClock = await page.evaluate(() => {
      const clocks = [...document.querySelectorAll('header span')]
        .filter((element) => /\\d{1,2}:\\d{2}\\s[AP]M/.test(element.textContent ?? ''))
      return clocks.filter((element) => element.getBoundingClientRect().width > 0)
        .map((element) => element.textContent?.trim() ?? '')
    })
    assert.equal(desktopClock.length, 1)
    assert.match(desktopClock[0], /,\s[A-Z][a-z]{2}\s\d{1,2},\s\d{4}/)
  } finally {
    await page.close()
  }
})

test('portfolio image preview can be dismissed with Escape', async () => {
  const page = await createPage()
  try {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
    const trigger = await page.$('nav button[title="Click to open portfolio image preview"]')
    assert.ok(trigger, 'Expected the image preview trigger in the primary navigation')
    await trigger.click()
    await page.waitForSelector('.max-w-4xl img')
    await page.keyboard.press('Escape')
    await page.waitForFunction(() => !document.querySelector('.max-w-4xl img'))
  } finally {
    await page.close()
  }
})

async function submitContactForm(responseBody, responseStatus = 200) {
  const page = await createPage()
  try {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
    await page.waitForSelector('#contact input[type="text"]')
    await page.evaluate(({ body, status }) => {
      const nativeFetch = window.fetch.bind(window)
      window.fetch = async (input, init) => {
        const requestUrl = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
        if (requestUrl.startsWith('https://formsubmit.co/ajax/')) {
          return new Response(body, {
            status,
            headers: { 'Content-Type': 'application/json' },
          })
        }
        return nativeFetch(input, init)
      }
    }, { body: responseBody, status: responseStatus })

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

test('contact form reports success when the service explicitly accepts a message', async () => {
  const page = await submitContactForm('{"success":"true","message":"Accepted"}')
  try {
    await page.waitForFunction(() => document.body.innerText.includes('Transmission Dispatched!'))
  } finally {
    await page.close()
  }
})

test('contact form reports failure when the service rejects a message', async () => {
  const page = await submitContactForm('{"success":"false","message":"Rejected"}')
  try {
    await page.waitForFunction(() => document.body.innerText.includes('Unable to dispatch automatically'))
    assert.ok(await page.$('#contact a[href^="mailto:"]'))
  } finally {
    await page.close()
  }
})

test('contact form rejects malformed confirmation payloads', async () => {
  const page = await submitContactForm('not-json')
  try {
    await page.waitForFunction(() => document.body.innerText.includes('Unable to dispatch automatically'))
    assert.ok(await page.$('#contact a[href^="mailto:"]'))
  } finally {
    await page.close()
  }
})

test('image preview traps keyboard focus and restores it to its trigger', { todo: 'Requires the dialog accessibility changes from PR #17 to be merged into the integration base.' }, async () => {
  // This test is kept visible as a pending acceptance check until the a11y fix is part of the base branch.
})
