import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { after, before, test as browserTest } from 'node:test'
import puppeteer from 'puppeteer-core'
import { resolve } from 'node:path'

const baseUrl = 'http://127.0.0.1:4175'
let previewProcess
let browser

before(async () => {
  const chromePath = process.env.CHROME_PATH
  if (!chromePath) throw new Error('CHROME_PATH is required.')

  previewProcess = spawn(
    process.execPath,
    [resolve(process.cwd(), 'node_modules/vite/bin/vite.js'), 'preview', '--host', '127.0.0.1', '--port', '4175', '--strictPort'],
    { stdio: 'ignore' },
  )

  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (previewProcess.exitCode !== null) throw new Error('Vite preview exited before becoming ready.')
    try {
      const response = await fetch(baseUrl)
      if (response.ok) break
    } catch {
      // Wait for Vite preview to start.
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

browserTest('the editorial hero character loads with real transparency', async () => {
  const page = await browser.newPage()
  try {
    await page.setViewport({ width: 1440, height: 900 })
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
    const character = await page.$('img[alt="Illustrated full-body character portrait of Lakshith Reddy"]')
    assert.ok(character, 'The character artwork should be present in the hero')

    const result = await character.evaluate(async (img) => {
      await img.decode()
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const context = canvas.getContext('2d')
      if (!context) throw new Error('Canvas 2D context unavailable')
      context.drawImage(img, 0, 0)
      const cornerAlpha = context.getImageData(0, 0, 1, 1).data[3]
      return {
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        cornerAlpha,
        sourcePrefix: img.currentSrc.slice(0, 23),
      }
    })

    assert.ok(result.naturalWidth >= 230, 'The hero character should use the higher-resolution artwork')
    assert.ok(result.naturalHeight > result.naturalWidth, 'The character cutout should retain its portrait proportions')
    assert.equal(result.cornerAlpha, 0, 'The checkerboard background must be transparent')
    assert.equal(result.sourcePrefix, 'data:image/webp;base64,')
  } finally {
    await page.close()
  }
})
