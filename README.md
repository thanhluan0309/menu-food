# Bếp Lửa Hồng — Digital Menu

Interactive digital menu for a Vietnamese BBQ restaurant, built with Next.js. Features a 3D page-flip book animation that mimics a real physical menu.

## Features

- **Page-flip animation** — 3D page curl powered by `react-pageflip`, with a queue system for smooth rapid-click navigation
- **Editorial dark design** — Yakiniku-inspired layout: hero food photos, gold typography, ember/orange accents
- **Responsive**
  - Desktop / Tablet: dual-page spread (landscape)
  - Mobile `< 640px`: single-page portrait mode, larger touch-friendly nav buttons
- **Mouse drag** — drag the page corner to flip manually
- **Spam-click protection** — transparent overlay blocks mouse during flip animation; up to 6 flips can be queued
- **Border radius** — left pages round left corners, right pages round right corners, covers round all four corners

## Pages

| Pages | Content |
|-------|---------|
| 1 | Cover |
| 2–3 | Our Story / Quality Commitment |
| 4–5 | Appetizers / Beef BBQ |
| 6–7 | Wagyu & Special Beef / Pork & Chicken |
| 8–9 | More Pork & Chicken / Set Combos |
| 10–11 | Drinks / Desserts |
| 12–13 | Cocktails & Fruit Tea / Fresh Juice & Soft Drinks |
| 14 | Back Cover |

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **react-pageflip** — HTMLFlipBook with portrait mode support
- **Framer Motion** — entrance animation
- **Tailwind CSS v4**
- **Unsplash** — food & drink photography via `next/image`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Entry point
│   └── globals.css               # CSS vars, paper textures, gold divider
├── components/
│   ├── MenuBook/
│   │   ├── index.tsx             # FlipBook core: queue system, responsive sizing
│   │   ├── NavBar.tsx            # Fixed bottom nav (Back / page counter / Next)
│   │   └── ClientLoader.tsx      # "use client" wrapper for dynamic import (ssr: false)
│   └── pages/
│       ├── CoverPage.tsx
│       ├── IntroPage.tsx         # IntroLeftPage + IntroRightPage
│       ├── MenuPage.tsx          # HeroCard + GridCard editorial layout
│       ├── DrinkSpreadPages.tsx  # DrinkLeftPage + DrinkRightPage
│       └── BackCoverPage.tsx
└── data/
    └── menuData.ts               # All menu items with Unsplash image URLs
```

## Navigation

| Action | Result |
|--------|--------|
| Click **Next** / **Back** | Flip one page; rapid clicks are queued (max 6) |
| Drag page corner | Manual page curl (mouse only) |
| Resize / rotate device | Responsive breakpoints remount the book automatically |
