# App Roadmap

A modern interactive roadmap dashboard built with Next.js, TypeScript, GSAP, and Three.js.

The app helps users explore software career paths through a dashboard of professions and detailed roadmap pages inspired by roadmap.sh.

## Features

- Profession dashboard with roadmap cards
- Detailed interactive roadmap pages
- Frontend roadmap page with structured learning steps
- Dynamic roadmap routes for multiple software careers
- Animated welcome intro
- Static export support for GitHub Pages

## Tech Stack

- Next.js 16
- TypeScript
- React 19
- Tailwind CSS 4
- GSAP
- Three.js
- React Three Fiber

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run build
```

Creates a production build.

```bash
npm run build:pages
```

Creates the static export used for GitHub Pages. The output is generated in the `out` folder.

## Project Structure

```txt
app/
  components/
    RoadmapDetailPage.tsx
    WelcomeIntro.tsx
  frontend-roadmap/
    page.tsx
  roadmaps/
    [slug]/
      page.tsx
    data.ts
  page.tsx
assets/
  icons/
    svg.ts
public/
  roadmap-icons/
```

## Main Routes

```txt
/
/frontend-roadmap
/roadmaps/frontend
/roadmaps/backend
/roadmaps/full-stack
/roadmaps/devops
/roadmaps/mobile
/roadmaps/ai-engineer
/roadmaps/data-engineer
/roadmaps/cyber-security
/roadmaps/qa
```

## GitHub Pages Deployment

This project is configured for GitHub Pages using static export.

In GitHub:

1. Go to `Settings` -> `Pages`.
2. Set `Source` to `GitHub Actions`.
3. Go to `Settings` -> `Secrets and variables` -> `Actions` -> `Variables`.
4. Add this repository variable:

```txt
Name: NEXT_PUBLIC_BASE_PATH
Value: /app-roadmap-nextjs-gasp
```

Then push to the `main` branch. The workflow in `.github/workflows/deploy-pages.yml` will build and deploy the `out` folder.

## Notes

- GitHub Pages must be enabled manually once in repository settings.
- The `NEXT_PUBLIC_BASE_PATH` value must match the repository name when deploying to a project page.
- Build output folders such as `.next/`, `out/`, and `node_modules/` are ignored by git.
