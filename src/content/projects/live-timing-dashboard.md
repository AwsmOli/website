---
title: Live Timing Dashboard
description: >-
  A live timing broadcast overlay for the Nürburgring Langstrecken-Serie
  (NLS) — done, live on GitHub Pages.
featured: true
status: released
date: 2026-04-18
updated: 2026-05-16
hero: ../../assets/projects/live-timing-dashboard.svg
tags:
  - webapp
  - sim-racing
  - motorsport
technologies:
  - Vue 3
  - TypeScript
  - Tailwind CSS
  - Vite
  - PWA
github: https://github.com/awsmoli/Live-Timing-Dashboard
demo: https://awsmoli.github.io/Live-Timing-Dashboard/?mock
license: All rights reserved
---

Built as "NLS Live Timing" — a browser-based overlay for displaying live
timing data (lap times, sector splits, standings) from Nürburgring
Langstrecken-Serie races, meant to sit on top of a stream or broadcast.

Parses live timing exports (track, sector lengths, best times per class)
and renders them as a clean on-screen overlay. Built with Vue 3, TypeScript,
Tailwind CSS, and Vite, packaged as an installable PWA, and deployed to
GitHub Pages.

## Demo

- **[Live demo (mock data)](https://awsmoli.github.io/Live-Timing-Dashboard/?mock)** — synthetic race data, always works.
- **[Real data](https://awsmoli.github.io/Live-Timing-Dashboard/)** — pulls live timing from an actual NLS race. Only shows anything while a race is actually running; otherwise it'll just sit empty.

Unlike the rest of the sim racing projects on here, this one's actually
done and in use.
