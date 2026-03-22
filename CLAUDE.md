# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DIGGING is a curated fashion shopping site directory — a static multi-page website built with vanilla HTML/CSS/JS. No build tools, bundlers, or package managers are used. Deployment is direct to GitHub Pages via `git push`.

Live URL: `https://swesket.github.io/vibe_coding/`

## Development

No build step. Open any HTML file in a browser or use a local server:
```bash
python -m http.server 8000
```

There are no tests, linters, or CI pipelines. Changes go live on push to `main`.

## Architecture

### Multi-Page Structure
- 10 HTML pages share `shared.css` and `shared.js`
- Each page sets `<body data-page="...">` to identify itself
- Page-specific logic is embedded in `<script>` blocks within each HTML file
- Data lives in separate JS files: `data.js` (30 sites), `brands.js` (40+ brands)

### Three Independent Axes on `<html>`
| Attribute | Values | Storage Key |
|-----------|--------|-------------|
| `data-theme` | `dark` (default), `light` | `digging-theme` |
| `data-vision` | `normal` (default), `protanopia`, `achromatopsia` | `digging-vision` |
| `lang` | `ko` (default), `en`, `zh`, `ja` | `digging-lang` |

All combinations are valid and independent. CSS variables (`--accent`, `--bg`, etc.) drive theming; vision mode overrides `--accent` and `--accent-soft`.

### i18n Pattern
- `shared.js` contains a single `i18n` object with all 4 languages (ko, en, zh, ja)
- `applySharedLang(lang)` updates shared elements (nav, footer, vision labels)
- A `langchange` custom event is dispatched so each page can re-render its own content
- Site data in `data.js` has per-language `desc` and `tags` objects; fallback is Korean

### State Flow
```
localStorage → DOMContentLoaded → apply{Theme,Vision,SharedLang}()
                                      ↓
                              dispatch 'langchange' event
                                      ↓
                          page-specific render functions
```

### Header UI Order (in `.header-right`)
`theme-btn` → `vision-selector` → `search-box` → `lang-selector`

All 10 HTML files must keep this structure identical.

### Pages
| File | `data-page` | Purpose |
|------|-------------|---------|
| `index.html` | `home` | Landing page with hero, stats, category cards |
| `sites.html` | `sites` | Main directory with category filter and search |
| `guide.html` | `guide` | Shopping guide articles by category |
| `brands.html` | `brands` | Brand → site lookup |
| `blog.html` | `blog` | Editorial articles (content in i18n) |
| `about.html` | `about` | About page with values, criteria, story |
| `submit.html` | `submit` | Site submission form (Formspree) |
| `community.html` | `community` | Disqus comments |
| `privacy.html` | `privacy` | Privacy policy |
| `terms.html` | `terms` | Terms of service |

## Key Files

| File | Role |
|------|------|
| `shared.css` | All styles, CSS variables for theme/vision, responsive breakpoint at 768px |
| `shared.js` | i18n dictionary, theme/vision/lang state management, shared DOM init |
| `data.js` | Site catalog array — each entry has multilingual `desc`/`tags` |
| `brands.js` | Brand-to-site mapping array |

## Conventions

- All new UI text must be added to all 4 languages in the `i18n` object (ko, en, zh, ja)
- Site entries in `data.js` require `desc` and `tags` for all 4 languages (fallback: `ko`)
- Strings in `shared.js` containing CJK text must escape inner double quotes (`\"`) since the file uses double-quoted JS strings
- Dropdowns use the `.open` class on the container to toggle visibility
- Cards use staggered `animation-delay: ${i * 0.04}s` for fade-in
- Grid layouts use `minmax(280px, 1fr)` for responsive columns
- Blog article content is stored as HTML strings inside the `i18n` object (not separate files)

## Third-Party Services
- **Google AdSense** (ca-pub-4004698288665198): ad slots on index, sites, guide, brands
- **Google Analytics** (G-Y7PCS90ZRL): all pages
- **MS Clarity** (vks9106g6o): all pages
- **Formspree** (xreayzej): submit.html form handler
- **Disqus**: community.html comments
