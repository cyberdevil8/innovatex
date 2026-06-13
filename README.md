# InnovateX Website — Complete Project

## 📁 File Structure
```
innovatex/
├── index.html          ← Main website (3D, GSAP, Three.js)
├── thank-you.html      ← Form submission success page
├── logo.png            ← InnovateX logo (favicon)
├── innovatex_logo.png  ← Logo with arrow mark
└── CNAME               ← Custom domain (innovatextechnologies.com)
```

## 🚀 Tech Stack
- **Three.js r128** — 3D WebGL scene, custom GLSL shaders, particle fields, orbital rings, floating geometries
- **GSAP 3.12.5 + ScrollTrigger** — Cinematic camera scroll path, scroll reveals, counters, hero entrance animations
- **Bebas Neue + Outfit + Space Mono** — Google Fonts (loaded via CDN)
- **Formspree** — Contact form backend (zero backend required)
- **Pure HTML/CSS/JS** — No build step, no npm, no bundler

## 📦 Deploy to Cloudflare Pages
1. Push all files to your GitHub repo (e.g. `cyberdevil8/innovatex`)
2. In Cloudflare Pages: Connect repo → Build command: (none) → Output: `/`
3. Add custom domain `innovatextechnologies.com` in Pages settings
4. CNAME file handles the domain automatically on GitHub Pages too

## 🎨 Colour Palette
| Name     | Hex       | Usage                    |
|----------|-----------|--------------------------|
| BG       | `#03020a` | Main background          |
| BG2      | `#060410` | Section alt background   |
| Orange   | `#ff4500` | Primary accent, CTAs     |
| Orange2  | `#ff6b2b` | Hover states             |
| Violet   | `#7c3aed` | Secondary 3D accent      |
| Violet2  | `#a78bfa` | Cursor hover             |
| Text     | `#ede8ff` | Body text                |
| Muted    | `#5c5680` | Subtext, labels          |

## ✨ Features
- **Custom GLSL shader** — Grid-patterned sphere with rim glow + sine-wave vertex displacement
- **Cinematic camera path** — Camera flies through 3D space as user scrolls (GSAP scrub)
- **Loader animation** — Letter-by-letter "INNOVATEX" reveal + progress bar
- **Custom cursor** — Dot + trailing ring, colour-shifts on hover
- **Typewriter** — Hero headline cycles through BUILDERS / ENGINEERS / ARCHITECTS etc.
- **Section counter** — Live "01 / 05" counter updates as you scroll
- **Scroll reveals** — Left/right/up entrance animations via GSAP ScrollTrigger
- **Animated counters** — Stats count up from 0 when scrolled into view
- **Card glow** — Radial light follows cursor inside focus area cards
- **Hero 3D tilt** — Headline perspective-tilts with mouse movement
- **Manifesto canvas** — Animated blob gradient behind the quote block
- **Ticker** — Auto-scrolling technology tag strip (pauses on hover)

## 📝 Customise
- **Contact form**: Replace `xojpgldq` in the Formspree URL with your own form ID from formspree.io
- **Email**: Update `hello@innovatextechnologies.com` in contact links
- **Colours**: Change `--em` (orange) and `--vi` (violet) in `:root` CSS variables
- **Content**: Edit section text directly in the HTML
- **Logo**: Replace `logo.png` and `innovatex_logo.png` with your own files

## 🌐 Live URL
https://innovatextechnologies.com
