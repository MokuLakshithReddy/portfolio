# Lakshith Reddy - Developer Portfolio

[![XERJ Corpus Hub Contributor](https://hub.xerj.org/contributors/MokuLakshithReddy/badge.svg)](https://hub.xerj.org/contributors/MokuLakshithReddy)

An illustrated, creative developer portfolio homepage for **Lakshith Reddy** (AI & ML Student · Software Developer). Built with React, TypeScript, Tailwind CSS v4, and Vite, featuring an anime/notebook hand-drawn aesthetic, interactive navigation, and responsive design across desktop and mobile devices.

---

## 🎨 Features & Highlights

- **Aesthetic**: Hand-drawn notebook / creative developer portfolio with warm paper background texture, custom doodles, and electric-blue accents.
- **Illustrated Character & Doodles**: Anime-style developer illustration with integrated floating browser, crown, stars, and handwritten annotations.
- **Top macOS Status Bar**: Decorative status bar with traffic light controls, system time, Wi-Fi, and battery indicators.
- **Interactive Quick Look**: Clicking the folder brand icon opens a macOS Quick Look style image preview modal.
- **Portfolio Sections**:
  - Hero with calibrated typography and project statistics
  - Featured Projects with tech stacks and live/GitHub links
  - Experience & Leadership timeline
  - Technical Skills matrix (AI/ML, Systems, Web, Tools)
  - Technical Blog / Articles
  - Contact Section with direct message form and social links
- **Responsive**: Calibrated across viewports from ultra-wide 1650px desktop to laptops and mobile devices.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React + Custom Inline SVGs
- **Typography**: Anton, Space Mono, IBM Plex Mono, Caveat, Inter

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (Vite 8 supported versions)
- npm or yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/MokuLakshithReddy/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🧪 Testing

The project uses Node.js's built-in test runner and the existing `puppeteer-core` dependency. No production credentials or real contact submissions are required.

After installing dependencies, run:

```bash
# Type-check and build the production site
npm run build

# Run unit and browser regression tests
npm test
```

The browser tests launch the built site with Vite Preview and require a Chrome/Chromium executable. Set `CHROME_PATH` when Chrome is not available on the system PATH.

**PowerShell (Windows):**

```powershell
$env:CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
npm test
```

**Linux:**

```bash
CHROME_PATH=/usr/bin/google-chrome npm test
```

CI installs stable Chrome automatically and runs lint, production build, unit tests, and browser tests on every pull request targeting `main`.

---

## 📄 License

Copyright © 2026 Lakshith Reddy. All rights reserved. No license is granted to copy, modify, redistribute, or use this work without prior written permission. See [LICENSE](LICENSE) for the terms.
