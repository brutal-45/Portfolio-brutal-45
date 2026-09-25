# Viraj Jadhav · Bento Portfolio

A clean bento-grid personal profile page for Viraj Jadhav, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and locally bundled Phosphor icons through Iconify.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

The `start` script binds to `0.0.0.0` and automatically uses Render's `PORT` environment variable. It falls back to port `3000` locally.

## Deploy to Render

This repository includes a `render.yaml` Blueprint configuration.

### Option 1: Blueprint deploy

1. Push the repository to GitHub.
2. In Render, choose **New +** and then **Blueprint**.
3. Select the GitHub repository.
4. Render will read `render.yaml` and use:
   - Build command: `npm ci && npm run build`
   - Start command: `npm start`
   - Node.js: `20`
5. Click **Apply** and wait for the first deploy to finish.

### Option 2: Manual Web Service

Use these settings:

- **Runtime:** Node
- **Build command:** `npm ci && npm run build`
- **Start command:** `npm start`
- **Node version:** `20`
- **Environment:** no secrets are required for the current static portfolio

Render will provide the public URL after the service becomes healthy.

## Structure

- `app/page.tsx` contains the interactive mixed-span bento grid:
  - profile anchor card
  - generated workspace photo tile
  - now-playing card with CSS equalizer
  - follower statistic card
  - featured project card
  - inline SVG map tile
  - newsletter card
  - toolbox chips
  - contact CTA
- `app/globals.css` contains the paper-grey dotted canvas, restrained teal and apricot palette, tile hover lift, responsive rules, typography, shadows, and micro-interactions.
- `app/layout.tsx` contains the App Router metadata and global stylesheet import.
- `tailwind.config.ts` maps the canvas, ink, teal, apricot, font, and shadow tokens.
- `public/desk.jpg` is the local workspace image used by the photo tile.

## Personalization

Update the profile copy, project title, links, numbers, and contact address in `app/page.tsx`. The primary contact email is `creatorsports81@gmail.com`.
