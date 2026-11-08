# Jahir Ali Khan — Professional Personal Portfolio

**Live Identity:** JAHIR.DEV  
**Professional Headline:** AI Training Contributor | Aspiring Developer | Science Educator  
**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, Motion, Lucide React

---

## Overview

This is the production-ready personal professional portfolio of **Jahir Ali Khan**. It is tailored for AI evaluation teams, recruiters, engineering peers, and science education networks.

Key highlights:
- **Authentic Representation:** Strictly truthful representation of background in customer service, AI training workflows (Outlier / Project Aether), science communication (*Science With Jahir*), and educational projects.
- **Central Typed Configuration:** All content, projects, experience, and credentials are maintained in `src/data/portfolio.ts`.
- **Zero Paid Services:** Standalone client-side architecture without expensive backends, databases, or third-party APIs.
- **Production Performance & SEO:** Semantic HTML5, Schema.org Person JSON-LD, OpenGraph & Twitter cards, dynamic sitemap, and robots.txt.

---

## Project Structure

```text
public/
  images/
    profile-placeholder.svg
    project-placeholders/
      inboxpilot.svg
      quantum-clash.svg
      examvault.svg
      physics-intuition.svg
  favicon.svg
  robots.txt
  sitemap.xml

src/
  components/
    Navbar.tsx             # Sticky translucent navigation with active spy
    Hero.tsx               # Hero banner with orbital composition & typography
    About.tsx              # Biography & 4 professional focus areas
    Experience.tsx         # Vertical career timeline
    Skills.tsx             # 4 categorized skill groups + languages
    Projects.tsx           # 4 featured projects with modal detail views
    ProjectModal.tsx       # Accessible dialog for deeper project insights
    Certifications.tsx     # Google AI Professional Certificate
    Education.tsx          # Class XII, Vocational DTP, and BCA study note
    ScienceCreator.tsx     # Science With Jahir educational initiative
    SocialMedia.tsx        # Find Me Across the Web with 5 social cards
    Contact.tsx            # Mailto, copy-to-clipboard, GitHub & compact social row
    Footer.tsx             # Copyright, links, and back-to-top action
    ScrollProgress.tsx     # Top scroll progress bar
  data/
    portfolio.ts           # Central typed content configuration
  App.tsx
  main.tsx
  index.css

index.html
package.json
tsconfig.json
vite.config.ts
README.md
```

---

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Verify TypeScript & build:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## Deployment to Vercel

This repository is optimized for one-click deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub.
2. In the Vercel dashboard, click **"Add New Project"** and import this repository.
3. Vercel will automatically detect **Vite**:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**. No environment variables are required.

---

## Customizing Content

To customize or update any text, links, or projects, simply edit `src/data/portfolio.ts`.
To replace project screenshots or the profile photo:
- Place your photo at `public/images/profile-placeholder.svg` (or add a `.jpg`/`.png` and update `profileImage` in `src/data/portfolio.ts`).
- Update `resumeUrl` with your uploaded PDF path (e.g. `/resume.pdf`).
