# blkPixel Website — Progress & TODOs

Kept up to date as work happens. Two sections: the full roadmap (so it's
obvious how much is done), and everything currently placeholder/deferred.

## Roadmap

### Phase 1 — Foundation ✅
- [x] Initialize Astro project
- [x] Configure Tailwind CSS (v4, `@tailwindcss/vite`)
- [x] Configure MDX
- [x] Configure Content Collections (`projects`, `pages`)
- [x] Set up global layout (`BaseLayout`)
- [x] Add navigation and footer
- [x] Configure SEO, sitemap, RSS, and favicon
- [x] Create a reusable design system (buttons, cards, badges)

### Phase 2 — Core Pages ✅
- [x] Home
- [x] CV
- [x] About
- [x] Contact
- [x] Projects index
- [ ] ~~Blog index~~ — blog removed, see note below

### Phase 3 — Content System (partial)
- [x] Define schema for projects
- [x] Implement dynamic routes (`projects/[slug]` — basic version, no Phase 4 components yet)
- [x] Create reusable layouts (`ProjectLayout`)
- [x] Add syntax highlighting (Shiki, dual light/dark theme configured)
- [ ] Table of contents

### Phase 4 — Project Components
- [ ] `<ProjectHero />` — still just `ProjectLayout`'s built-in header
- [x] Feature cards component (`FeatureCard.astro`) — built for OpenTag, generic enough to reuse
- [x] Image gallery (`ProjectGallery.astro`) — placeholder-box version (no real images yet)
- [x] Roadmap/phases component (`ProjectTimeline.astro`) — built for OpenTag
- [ ] Bill of Materials as a reusable component — OpenTag's BOM table is hand-rolled inline in its `.mdx`, not extracted into a `<BillOfMaterials />` component yet; `ProjectLayout` does auto-show a "BOM" button linking to `#bom` when `bom[]` is non-empty
- [ ] Downloads (`<ProjectDownloads />`) — schema already supports `downloads[]`
- [ ] Video embed (`<YouTube />` / `<VideoPlayer />`)
- [ ] Step-by-step guide component — OpenTag has a "Build Guide" anchor section with a honest "not written yet" placeholder
- [ ] Callout/Info/Warning blocks (MDX)

### Phase 5 — Polish
- [ ] Search (projects, tags, technologies)
- [x] Dark mode (class-based toggle in `ThemeToggle.astro`, persisted to `localStorage`, no-FOUC inline script in `BaseLayout`)
- [ ] ~~RSS feed~~ — removed along with blog, could come back as a per-project feed later
- [ ] Related content (schema already supports `relatedProjects`)
- [ ] ~~Reading time~~ — was blog-only, removed
- [x] Image optimization (via `astro:assets`)
- [ ] Lighthouse pass (100/100/100/100 target)
- [ ] Project filters
- [ ] Copy code button
- [ ] Image zoom
- [ ] Anchor links
- [ ] Mermaid diagrams / math support

### Future Integrations
- [ ] GitHub API (latest releases, stars, commit history)
- [ ] Docker image / NPM package badges
- [ ] YouTube video embeds
- [ ] CI build-status badges

## Placeholders & Open Items

- [ ] Replace placeholder project hero/gallery SVGs (`src/assets/projects/*.svg`) with real photos
- [ ] Review/edit the AI-drafted About page bio (`src/content/pages/about.md`)
- [x] Add a real GitHub profile link (Contact page, Footer) — https://github.com/awsmoli
- [ ] Decide deployment target (Cloudflare Pages / GitHub Pages / Netlify) and wire up the adapter — currently static output with no adapter
- [ ] Confirm `blkpixel.com` is the final domain (`astro.config.mjs` `site`)
- [ ] Produce an actual publishable CV PDF export and add a "Download PDF" button on `/cv` (the source `CV.pdf` was only used to transcribe content into `cv.md`, it isn't published)
- [ ] Wire up a real contact form (e.g. Formspree) — `/contact` is currently static info only
- [x] Replaced the 2 fabricated placeholder projects (trading dashboard, sim wheel) with the real project list from Oliver's Obsidian vault (`Projects/` folder, skipping `Bikes/` and the meta `Website.md` planning note): Laser Tag, RC Timing, Eldritch Farming, Space Game, Button Box, Sim Racing Overlays, Vantage Wheel, Daily Grind, Rich Eventually, Risk Trader. Most of those notes are just a title with no real content yet, so those pages are honestly minimal (`idea` stage, no invented tech stack/specs) rather than padded out — flesh them out in the vault and the site content should follow
- [x] Button Box and Vantage Wheel got rewritten (outside this session) with real content: both are `implementation` stage now, each with real GitHub repos, firmware (PlatformIO/C++), pin configs, Onshape CAD links, and "what's built / not built yet" sections — no longer bare "idea" stubs. Space Game is still one
- [x] Rewrote **Risk Trader** from the real spec + codebase at `/Users/awli/code/blkPixel/risk-trader/IDEAS.MD` — this turned out to be a much bigger, distinct project from Rich Eventually (which is the actual EVE Online tool): a full "trading operating system" with risk-based position sizing, a rule enforcement engine, trading journal, behavioral analytics, and zero-knowledge WebAuthn-PRF-based API key encryption. Checked the real code (no git history available, but ~10.7k lines of frontend Vue/TS across 6 views + a 10-component terminal, ~660 backend lines with Fastify/Supabase routes for rules/journal/credentials/passkeys, and a shared `ExchangeAdapter` interface) — bumped `idea` → `implementation` and set `featured: true` since there's substantial real work here, though no concrete exchange adapter (Binance/Bybit) is wired up yet so it's not usable end-to-end. Not on GitHub/GitLab publicly (uses GitLab CI privately) — no `github`/`demo` links yet
- [x] Rewrote **RC Timing** as **Hybrid Vision + UWB RC Race Telemetry** (its real concept name, from Oliver's detailed brief) — a full `.mdx` page with 3 `FeatureCard`s for the camera/UWB/auto-calibration subsystems, a 12-item planned-features badge row, and real `technologies`. Kept the `rc-timing` slug for URL stability even though the display title changed. Bumped `idea` → `concept` (real technical design exists, no hardware/code yet) — still not `featured` since nothing's built
- [x] Expanded **Rich Eventually** with real screenshots (Station Trading, Hauling, P&L Dashboard, Trade Log — copied into `src/assets/projects/rich-eventually-*.png`, hero swapped to the Station Trading screenshot). Turned out to be more feature-complete than the source-only read suggested: added expanded Station Trading and Hauling/Arbitrage sections (filters, live undercut/outbid order tracking, route ranking), an Analytics & Trade Log section, and honestly noted the Manufacturing tab exists in the nav but isn't built yet, plus what Assets/Journal are (standard EVE ESI concepts: owned-items view and wallet transaction ledger). Given how complete this looks in the screenshots, worth reconsidering whether it's still `alpha` or closer to `beta` — left as `alpha` since that's Oliver's own call, not something to infer from screenshots alone
- [x] Scraped real detail for Daily Grind and Rich Eventually from GitHub (`github.com/awsmoli`) and bumped both to `alpha` per Oliver: Daily Grind is a Vue 3 + Firebase team task/chore PWA (deployed via Firebase Hosting + GitHub Actions, **not** GitHub Pages — `has_pages` is false on that repo, worth checking if that was intentional); Rich Eventually is an EVE Online market-arbitrage scanner (Vue 3 + TS + the EVE ESI API), live at https://awsmoli.github.io/rich-eventually/
- [x] Expanded **Daily Grind** from the real spec (`/Users/awli/code/blkPixel/daily-grind/IDEA.MD`) and the actual live app (confirmed live at both `daily-grind-7d926.web.app` and `.firebaseapp.com` via the real Firebase project ID in `.firebaserc`) — added `demo:` link, 7 `FeatureCard`s matching the real implemented views (Welcome/Login/CreateTeam/JoinTeam/TeamHome/Balance/AdminSettings — verified against `src/views/`), and a "What's Built" section calling out what's still pending (production Firestore rules, notification preferences, server-authoritative point mutations via Cloud Functions). Corrected `technologies` to match actual deps (Pinia, jsQR for the QR join flow) — IDEA.MD mentioned Tailwind CSS but it's not actually a dependency, so left it out
- [x] Added **Live Timing Dashboard** as a new, separate project — a Vue 3 + TypeScript live-timing broadcast overlay for the Nürburgring Langstrecken-Serie (repo `Live-Timing-Dashboard`, working title "NLS Live Timing"), `released` and live at https://awsmoli.github.io/Live-Timing-Dashboard/. Now featured alongside Laser Tag.
- [ ] Neither Daily Grind nor Rich Eventually nor Live Timing Dashboard have a `LICENSE` file on GitHub, so they're marked `license: All rights reserved` here — add a real license on GitHub if you want that to say something else
- [ ] Decide which projects should be `featured` on the homepage (currently OpenTag + Live Timing Dashboard)
- [x] Renamed "Laser Tag" → **OpenTag** (its real project name) and rewrote it as a full `.mdx` page from Oliver's detailed brief: feature cards, open-hardware/BOM section, planned hardware ecosystem cards, game mode badges, Android app plans, and a 4-phase roadmap. No GitHub repo exists yet for it (checked `github.com/awsmoli/OpenTag` and `opentag`, both 404), so the "View on GitHub" and "Follow Development" CTAs from the brief were left out rather than pointing at nothing — add `github:` to the frontmatter once the repo exists and the GitHub button will appear automatically
- [x] Added OpenTag's real design artifacts (Onshape CAD render, EasyEDA PCB layout, wiring schematic — all provided by Oliver, copied into `src/assets/projects/open-tag-*.png`): CAD render is now the page hero, PCB + schematic are real gallery images (remaining gallery placeholders trimmed to just 3D printed parts / assembly / gameplay / Android screenshots), added a "Design Files" section linking the CAD and PCB documents, added the 18650 3.7V 1800mAh battery to the BOM (visible in the schematic), and bumped `status` from `concept` to `implementation` since a rev 1.0 PCB and a detailed CAD model are real work toward the concept, not just planning
- [x] Oliver published the OpenTag PCB publicly on OSHWLab (https://oshwlab.com/oliver39/project_ascqfjji, confirmed 200) — swapped the private EasyEDA editor link for this public one and dropped the "not confirmed public" caveat
- [ ] "Nerf Gun" was mentioned once in `Website.md` as a DIY project idea but has no dedicated vault note — add it if/when it gets one
- [x] Removed the standalone Blog section (nav link, `/blog` pages, `blog` collection, RSS feed, `BlogLayout`/`BlogCard`) — Oliver doesn't plan to write project-unrelated posts. Project updates/dev-log content should live inside each project's own Markdown body instead; if that grows unwieldy later, consider a per-project "updates" list in the `projects` schema rather than reviving a separate blog
- [x] Replaced the `status` enum with a real project-maturity scale (`src/content.config.ts`): `idea` (headline only, no details) → `concept` (some detail thinking, nothing built) → `implementation` (work started, not usable yet) → `alpha` (usable, not done) → `beta` (feature-complete, not well tested) → `released` (done and tested), plus `discontinued` (no longer available) as a terminal state outside that progression. Only `released` gets the accent-colored badge (`src/lib/project-status.ts`); re-tagged all 3 placeholder projects to the new scale
- [x] Extracted the Skills heading + badge markup into a shared `SkillsList.astro` component (`src/components/project/SkillsList.astro`) so Home and `/cv` can't drift out of sync — both just render `<SkillsList />`. Initially had it auto-merge CV skills with every project's `technologies[]`, but that pulled in noise like `Android (planned)` (a future-plan annotation, not a real skill) and near-duplicates (`ESP32-S3 (Seeed XIAO)` next to plain `ESP32`) — reverted that per Oliver's call and instead hand-curated the real new skills straight into `cv.data.skills` (`src/content/pages/cv.md`): C++, ESP32, PCB Design, 3D Printing, OpenCV, Ultra-Wideband (UWB), Kalman Filtering, Fastify, Supabase, WebAuthn, Pinia, Tailwind CSS, Vite, PWA, EVE ESI API. The component is now just a thin, shared wrapper around `cv.data.skills` — no cross-collection merging
- [x] Live Timing Dashboard's demo link only showed anything during an actual NLS race. Found the app supports a `?mock` query param (`useMockData` composable in `nls-overlay/src/App.vue`) that renders synthetic race data — swapped the primary `demo:`/"Live Demo" button to the `?mock` URL (always works) and added a "Demo" section in the body with both links, clearly flagging that the real-data one only shows anything while a race is actually running
- [ ] **Added `/impressum` and `/datenschutz` pages, linked from the footer, per Austrian legal requirements (§5 ECG, §14 UGB) for blkPixel FlexCo.** The privacy policy is complete and accurate (site is static, no forms/cookies/analytics, only a `localStorage` theme preference). **The Impressum is NOT yet legally complete** — it's missing the Firmenbuchnummer and Firmenbuchgericht (guessed "Handelsgericht Wien" but marked as needing confirmation, not asserted as fact), and the address used (Taborstraße 111/292, 1020 Vienna — from Oliver's CV) needs confirming as the FlexCo's actual registered seat, not just his personal address. The page has a visible on-page notice flagging this — don't remove that notice until the real numbers are filled in. No UID/VAT line included since Oliver confirmed the FlexCo doesn't have one; per §5 ECG that's only required "if applicable," so omitting it is correct as long as that's still accurate
