import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { after, before, test as browserTest } from 'node:test'
import puppeteer from 'puppeteer-core'
import { resolve } from 'node:path'

const baseUrl = 'http://127.0.0.1:4174'
let previewProcess
let browser

before(async () => {
  const chromePath = process.env.CHROME_PATH
  if (!chromePath) throw new Error('CHROME_PATH is required.')

  previewProcess = spawn(
    process.execPath,
    [resolve(process.cwd(), 'node_modules/vite/bin/vite.js'), 'preview', '--host', '127.0.0.1', '--port', '4174', '--strictPort'],
    { stdio: 'ignore' },
  )

  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (previewProcess.exitCode !== null) throw new Error('Vite preview exited before becoming ready.')
    try {
      const response = await fetch(baseUrl)
      if (response.ok) break
    } catch {
      // Wait for the preview server.
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 250))
  }

  browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
})

after(async () => {
  await browser?.close()
  if (previewProcess && previewProcess.exitCode === null) previewProcess.kill('SIGTERM')
})

browserTest('soundtrack is opt-in and exposes playback and volume controls', async () => {
  const page = await browser.newPage()
  try {
    await page.evaluateOnNewDocument(() => {
      HTMLMediaElement.prototype.play = function () {
        this.dispatchEvent(new Event('play'))
        return Promise.resolve()
      }
      HTMLMediaElement.prototype.pause = function () {
        this.dispatchEvent(new Event('pause'))
      }
    })

    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
    const audio = await page.$('audio')
    assert.ok(audio, 'The soundtrack audio element should be mounted')
    assert.equal(await audio.evaluate((element) => element.paused), true, 'Audio must not autoplay')

    const playButton = await page.$('button[aria-label="Play portfolio soundtrack"]')
    assert.ok(playButton, 'A visitor-controlled play button should be visible')
    await playButton.click()
    await page.waitForSelector('button[aria-label="Pause portfolio soundtrack"]')

    const volume = await page.$('input[aria-label="Soundtrack volume"]')
    assert.ok(volume, 'The volume slider should be available')
    await volume.evaluate((element) => {
      element.value = '0.5'
      element.dispatchEvent(new Event('input', { bubbles: true }))
    })
    assert.equal(await volume.evaluate((element) => element.value), '0.5')

    await page.click('button[aria-label="Pause portfolio soundtrack"]')
    await page.waitForSelector('button[aria-label="Play portfolio soundtrack"]')
  } finally {
    await page.close()
  }
})
