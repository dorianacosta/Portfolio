# Dorian Acosta — Portfolio

React + TypeScript + Tailwind CSS + shadcn/ui portfolio, deployable to GitHub Pages.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Before You Deploy

1. **Update your real links** in [src/data/cv.ts](src/data/cv.ts):
   - `linkedin` — your actual LinkedIn URL
   - `github` — your actual GitHub URL

2. **Add Umami Analytics** in [index.html](index.html):
   - Replace `YOUR_UMAMI_WEBSITE_ID` with your site ID from Umami Cloud
   - Replace `YOUR_GITHUB_PAGES_DOMAIN` with e.g. `yourusername.github.io`

3. **For a project-site deploy** (repo named `portfolio`, not `username.github.io`), add a `base` to `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: "/portfolio/",
     ...
   });
   ```

## GitHub Pages Deploy

### Option A — Automated (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

Then in your repo: **Settings → Pages → Source → GitHub Actions**

### Option B — Manual

```bash
npm run build
# Push the dist/ folder contents to the gh-pages branch
```

## Project Structure

```
src/
  data/cv.ts          ← All CV content lives here (name, experience, projects, etc.)
  components/
    ui/               ← shadcn/ui primitives (Badge, Button, Card, Separator)
    Nav.tsx           ← Sticky navigation bar
    Hero.tsx          ← Hero section with CTA
    About.tsx         ← About + interests
    Experience.tsx    ← Work history timeline
    Projects.tsx      ← Project cards
    Skills.tsx        ← Skills by category
    Education.tsx     ← Education history
    Contact.tsx       ← Contact links + CTA box
    Footer.tsx        ← Site footer
    SectionHeader.tsx ← Reusable section heading
  App.tsx             ← Root layout
  index.css           ← Tailwind + CSS variables (dark theme)
```
