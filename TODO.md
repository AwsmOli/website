- [ ] Table of contents on project pages
- [ ] <ProjectHero /> component
  Still just ProjectLayout's built-in header.

- [ ] Bill of Materials reusable component
  OpenTag's BOM table is hand-rolled inline in its .mdx; ProjectLayout already shows a "BOM" button linking to #bom when bom[] is non-empty.

- [ ] Downloads component (<ProjectDownloads />)
  Schema already supports downloads[].

- [ ] Video embed component (YouTube / VideoPlayer)
- [ ] Step-by-step guide component
  OpenTag has a "Build Guide" anchor section with an honest "not written yet" placeholder.

- [ ] Callout/Info/Warning blocks (MDX)
- [ ] Search (projects, tags, technologies)
- [ ] Related content
  Schema already supports relatedProjects.

- [ ] Lighthouse pass (100/100/100/100 target)
  Three rounds of fixes already landed (Nav, Button, Badge, ProjectCard, global.css) — target score not confirmed, worth a fresh audit before closing this out.

- [ ] Project filters
- [ ] Copy code button
- [ ] Image zoom
- [ ] Anchor links
- [ ] GitHub API integration (latest releases, stars, commit history)
- [ ] Docker image / NPM package badges
- [ ] CI build-status badges
- [ ] Replace placeholder project hero/gallery SVGs with real photos
  OpenTag (CAD/PCB/schematic) and Rich Eventually (4 screenshots) done. Still placeholder SVGs: Button Box, Daily Grind, Eldritch Farming, Live Timing Dashboard, Market Maker Bot, Overlays, RC Timing, Risk Trader, Space Game, Vantage Wheel.

- [ ] Review/edit the AI-drafted About page bio
- [ ] Produce a real publishable CV PDF and add a Download PDF button on /cv
- [ ] Add LICENSE files on GitHub for Daily Grind, Rich Eventually, Live Timing Dashboard
- [x] Decide which projects should be featured on the homepage
  Now OpenTag, Live Timing Dashboard, Rich Eventually, and Risk Trader are featured:true.

- [ ] Add OpenTag GitHub link to frontmatter once the repo exists
- [ ] Add a Nerf Gun project page if/when it gets a vault note
- [ ] Confirm Cloudflare dashboard build command is npm run build
  Was manually mistyped as yarn run build early during setup, worth a quick check it's still correct.

- [ ] Wire up Cloudflare Web Analytics
  Needs a beacon token from the Cloudflare dashboard (Analytics & Logs), then update /datenschutz to disclose it.

