<p align="center">
  <br />
  <img width="120" src="https://img.shields.io/badge/V_A_T_0-000000?style=for-the-badge&labelColor=000&color=000" alt="VAT0" />
  <br /><br />
  <strong>VAulTzer0 — Enterprise Zero Trust Architecture</strong>
  <br />
  <sub>Verify. Authorize. Track. Zero implicit trust.</sub>
</p>

<p align="center">
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Next.js-16.1.6-000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square" alt="License" /></a>
</p>

<br />

---

<br />

## 🏛️ About

**VAT0** (pronounced _Vault Zero_) is a high-fidelity, award-quality static marketing website for a cybersecurity and zero-trust infrastructure consultancy. Every section is meticulously engineered with scroll-driven animations, glassmorphism, cinematic textures, and interactive micro-interactions to deliver a visceral, premium digital experience that commands authority.

The site embodies a dark brutalist editorial aesthetic — the kind you'd associate with the world's most forward-thinking security firms and AI research labs. There are no stock templates here. Every pixel serves a purpose.

> _"We architect resilient digital infrastructure that is secure by default. Verify. Authorize. Track. Zero implicit trust."_

<br />

---

<br />

## 🎨 Design Philosophy

This is not a conventional website. It's an experience engineered to evoke trust, authority, and precision. The design language draws from three worlds:

### Dark Brutalism

Pure `#000000` backgrounds. Massive serif headlines. Monospaced technical labels. Generous whitespace that lets the content breathe. The aesthetic says: _we are serious, precise, and unbothered by trends._

### Glassmorphism

The Navbar and Contact section employ true CSS glassmorphism — `backdrop-blur-md` to `backdrop-blur-3xl`, translucent `bg-white/5` backgrounds, `border-white/10` borders, and layered grain textures. The result is depth without distraction.

### Cinematic Motion

Every animation is scroll-linked via Framer Motion's `useScroll` + `useTransform`, meaning they don't just "play once" — they respond to the user's exact scroll position, playing forward and reversing naturally. Spring physics on mouse-tracking. Cubic-bezier easing on reveals. Nothing generic.

### Color Strategy

| Role                   | Color            | Hex                        | Usage                                                  |
| ---------------------- | ---------------- | -------------------------- | ------------------------------------------------------ |
| **Background**   | Pure Black       | `#000000`                | The canvas. Every section lives on absolute darkness.  |
| **Foreground**   | White            | `#FFFFFF`                | Headlines, primary text, interactive elements.         |
| **Accent**       | Terminal Green   | `#00FF41`                | Indicators, divider lines, hover states, status dots.  |
| **CTA / Danger** | Deep Red         | `#7F1D1D` — `#DC2626` | Contact section — urgency, threat readiness branding. |
| **Muted**        | Neutral 400–600 | `#A3A3A3` — `#525252` | Descriptions, secondary text, inactive states.         |

### Typography

| Family                 | Source                      | Usage                                                         |
| ---------------------- | --------------------------- | ------------------------------------------------------------- |
| **Geist Sans**   | Vercel / Google Fonts       | Body text, descriptions, UI elements, paragraphs              |
| **Geist Mono**   | Vercel / Google Fonts       | Labels, category headers, technical metadata, navigation      |
| **System Serif** | Browser default serif stack | Headlines, hero text, section titles, the massive footer logo |

<br />

---

<br />

## 🛠️ Tech Stack

| Technology                                                         | Version | Role                                                                             |
| ------------------------------------------------------------------ | ------- | -------------------------------------------------------------------------------- |
| [**Next.js**](https://nextjs.org)                               | 16.1.6  | React meta-framework — App Router, static export, Turbopack bundler             |
| [**React**](https://react.dev)                                  | 19.2.3  | Component architecture, hooks, and concurrent rendering                          |
| [**TypeScript**](https://typescriptlang.org)                    | 5.x     | End-to-end static type safety across all components                              |
| [**Tailwind CSS**](https://tailwindcss.com)                     | 4.x     | Utility-first styling with `@theme` inline tokens and PostCSS integration      |
| [**Framer Motion**](https://motion.dev)                         | 12.34.x | Scroll-linked animations,`AnimatePresence`, layout transitions, spring physics |
| [**Lenis**](https://lenis.darkroom.engineering)                 | 1.3.x   | Buttery-smooth 60fps scroll normalization and momentum                           |
| [**Lucide React**](https://lucide.dev)                          | 0.575.x | Minimal, tree-shakeable, consistent SVG icon library                             |
| [**clsx**](https://github.com/lukeed/clsx)                      | 2.1.x   | Conditional className composition                                                |
| [**tailwind-merge**](https://github.com/dcastil/tailwind-merge) | 3.5.x   | Intelligent Tailwind class deduplication (used in `cn()` utility)              |

<br />

---

<br />

## 📁 Project Architecture

```
vat0-static-site/
│
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout — Geist fonts, LenisProvider, dark mode
│   ├── page.tsx                      # Page composition — sequential section assembly
│   ├── globals.css                   # CSS custom properties, Lenis styles, grain utility
│   └── favicon.ico                   # Site favicon
│
├── components/
│   ├── ui/                           # Persistent UI chrome
│   │   ├── Navbar.tsx                # Floating glassmorphic pill navigation
│   │   └── Footer.tsx                # Industrial footer with expanding logo animation
│   │
│   └── sections/                     # Page content sections (rendered top to bottom)
│       ├── Hero.tsx                   # [1] Full-viewport hero with grain & mouse glow
│       ├── BrandStatement.tsx         # [2] Scroll-progressive word reveal
│       ├── ServicesStack.tsx          # [3] Sticky stacking cards with parallax
│       ├── Vat0Framework.tsx          # [4] Horizontal scroll — V, A, T, 0 pillars
│       ├── IntegrationEcosystem.tsx   # [5] Infinite tech partner marquee
│       ├── TheMandate.tsx             # [6] Bidirectional scroll-linked statements
│       ├── ImpactMetrics.tsx          # [7] Cascading stat counters
│       └── Contact.tsx                # [8] Glassmorphic red CTA card
│
├── providers/
│   └── LenisProvider.tsx             # Client-side smooth scroll wrapper
│
├── lib/
│   └── utils.ts                      # cn() — clsx + tailwind-merge utility
│
├── public/
│   └── images/                       # Static assets (hero background, grain textures)
│
├── package.json                      # Dependencies and scripts
├── tsconfig.json                     # TypeScript configuration
├── postcss.config.mjs                # PostCSS with Tailwind CSS v4 plugin
├── eslint.config.mjs                 # ESLint with Next.js recommended rules
├── next.config.ts                    # Next.js configuration
├── LICENSE                           # MIT License
└── README.md                         # This file
```

<br />

---

<br />

## 📖 Section-by-Section Deep Dive

The page is composed of **10 distinct sections**, each with unique animation systems, backgrounds, and interaction patterns. Here's the full breakdown:

<br />

### 1. 🧭 Navbar — `components/ui/Navbar.tsx`

**Type:** Fixed, floating, persistent across the viewport

A **glassmorphic pill** that hovers at the top of the page. Built with:

- `bg-white/5` + `border-white/10` + `backdrop-blur-md` for the frosted glass effect
- Full `max-w-7xl` width matching the Hero section
- The logo defaults to `VAulTzer0` and **vertically transitions** to `VAT0` (in terminal-green italic) on hover using `motion.div` with `opacity` + `y` transforms
- An invisible structural spacer `<span>` prevents layout shift during the logo animation
- **Mobile:** A full-screen overlay (`bg-[#050505]/95 backdrop-blur-xl`) with staggered, sequentially animated link entries

**Navigation Links:** Services (`#services`) and Contact (`#contact`) — both anchor to their respective section `id` attributes.

<br />

### 2. 🎬 Hero — `components/sections/Hero.tsx`

**Type:** Full-viewport (100svh), cinematic, first impression

The Hero is designed to immediately establish authority:

- **Background Image:** `hero-bg-with-grain.png` — a textured abstract composition rendered with a slow 25-second breathing scale animation (`1x` → `1.05x` → `1x` on infinite loop)
- **Overlay Stack:** A `bg-black/50 mix-blend-multiply` layer + a vertical `bg-linear-to-b` gradient ensures text legibility while preserving the texture
- **Interactive Glow:** A terminal-green radial glow (`bg-terminal-green/15`, 150px radius, 100px blur) follows the mouse cursor with spring physics (`stiffness: 40, damping: 20, mass: 0.5`)
- **Typography:** The headline `"Secure by Default. Verifiable at Release."` staggers in word-by-word with 80ms delays and a custom easing curve `[0.215, 0.61, 0.355, 1]`
- **Scroll Indicator:** A pulsing vertical line + "Scroll" label fades in after 1.5 seconds

<br />

### 3. ✍️ Brand Statement — `components/sections/BrandStatement.tsx`

**Type:** 150vh tall scroll-controlled text reveal

A full manifesto sentence revealed **word by word** as the user scrolls:

> _"We architect resilient digital infrastructure that is secure by default. Verify. Authorize. Track. Zero implicit trust."_

- Uses `useScroll` targeting this section's ref with offset `["start 0.7", "center 0.4"]`
- Each word calculates its reveal range based on its position in the array
- Words start at `opacity: 0.15` (ghosted) and transition to `opacity: 1` (full white)
- A subtle dot-grid CSS background (`radial-gradient` at 40px spacing) provides texture
- Gradient masks at top and bottom fade the dot grid into pure black

<br />

### 4. 📦 Services Stack — `components/sections/ServicesStack.tsx`

**Type:** Sticky stacking cards with parallax scale animation

Three service cards that **stack on top of each other** as the user scrolls:

| Card | Service                       | Key Features                                                                                      |
| ---- | ----------------------------- | ------------------------------------------------------------------------------------------------- |
| 01   | Cybersecurity & Zero Trust    | Zero Trust Architecture, Penetration Testing, Vulnerability Management, Identity & Access Control |
| 02   | DevSecOps & Cloud Engineering | CI/CD Pipeline Design, Infrastructure as Code, Container Security, Continuous Deployment          |
| 03   | Quality Engineering (QA)      | Automated Testing, Performance & Load Testing, Security Code Review, Release Validation           |

- Each card is `position: sticky` with a calculated top offset (`12vh + index * 20px`)
- As the user scrolls past a card, it **scales down** via `useTransform` — earlier cards shrink to 0.85x while later cards remain at full scale
- Cards use `backdrop-blur-xl` + semi-transparent backgrounds for depth
- Feature pills are rendered in monospace inside bordered capsules
- A green status dot with a `box-shadow` glow sits in the top-right of each card
- The section also has a `hero-bg-with-grain.png` background at 40% `mix-blend-screen`

<br />

### 5. 🔄 VAT0 Framework — `components/sections/Vat0Framework.tsx`

**Type:** Horizontal scroll within vertical scroll — 400vh tall section

The entire VAT0 methodology — **Verification, Authorization, Tracking, Zero** — presented as full-width horizontal scroll panels:

| Panel | Letter      | Title         | Description                                                              |
| ----- | ----------- | ------------- | ------------------------------------------------------------------------ |
| 1     | **V** | Verification  | All users, services, and requests validated before access is granted     |
| 2     | **A** | Authorization | Granular, contextual, time-bound permissions without standing privileges |
| 3     | **T** | Tracking      | All actions logged, auditable, timestamped, and attributable             |
| 4     | **0** | Zero          | Zero Trust Architecture principles governing all infrastructure          |

- The section is `h-[400vh]` and contains a `sticky top-0 h-screen` inner container
- `useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])` drives the horizontal translation
- Each panel has a **massive background letter** at `50vw` / `40vw` font size at 5% opacity
- A fixed title `"The VAT//0 Framework"` uses `mix-blend-difference` to remain legible across panels
- Terminal-green divider bars separate titles from descriptions

<br />

### 6. 🌐 Integration Ecosystem — `components/sections/IntegrationEcosystem.tsx`

**Type:** Infinite horizontal marquee

A continuous scroll of enterprise technology partners rendered as monospace text logos:

`AWS` · `Google Cloud` · `Microsoft Azure` · `Kubernetes` · `Docker` · `Terraform` · `GitLab` · `GitHub Actions` · `CrowdStrike` · `Datadog` · `Splunk` · `HashiCorp Vault` · `Palo Alto` · `Cloudflare` · `SonarQube`

- The technology array is **duplicated** within the same flex container: `[...technologies, ...technologies]`
- `animate={{ x: ["0%", "-50%"] }}` creates a seamless infinite loop (translating by exactly one copy's width)
- Duration is 35 seconds for a slow, premium scroll speed
- CSS `mask-image` with `linear-gradient(to right, transparent, black 15%, black 85%, transparent)` dissolves both edges
- A dot-grid background provides subtle texture behind the scrolling text

<br />

### 7. 📜 The Mandate — `components/sections/TheMandate.tsx`

**Type:** Bidirectional scroll-linked brutalist typography

Four massive declarations that define the VAT0 security posture:

1. **Zero implicit access.**
2. **Zero standing privileges.**
3. **Zero breach tolerance.**
4. **Zero-day readiness.**

Each row is a separate `MandateRow` component with its own `useScroll` instance:

- `offset: ["start 0.95", "start 0.4"]` — animation triggers when the row enters the bottom of the viewport and completes as it reaches 40% from the top
- **Alternating slide-ins:** Even-indexed rows slide from the left (`-60px`), odd from the right (`+60px`)
- A **terminal-green line indicator** grows from 0% to 100% width in sync with scroll progress
- The animation is **fully bidirectional** — scrolling back up reverses everything
- Text wrapping is handled with `overflow-x-clip overflow-y-visible` to prevent horizontal overflow while allowing multi-line text to render fully
- A subtle terminal-green radial gradient glow rises from the bottom of the section

Below the mandates, a supporting paragraph fades in with the key phrase `"deny-all state"` highlighted in white.

<br />

### 8. 📊 Impact Metrics — `components/sections/ImpactMetrics.tsx`

**Type:** Three-column cascading stat counters

Key numbers that establish credibility:

| Metric              | Value         | Description                                                                             |
| ------------------- | ------------- | --------------------------------------------------------------------------------------- |
| Years of Experience | **06+** | Building secure, scalable deployment pipelines for enterprise platforms                 |
| Projects Secured    | **70+** | Delivering robust IaC, runtime observation, and zero-day threat readiness               |
| Industries Hardened | **18+** | Cross-pollinating security strategies across finance, healthcare, AI, and manufacturing |

- Each metric card uses `whileInView` with `once: true` and a cascading `delay: index * 0.15` for a left-to-right staggered reveal
- A `border-l border-neutral-800` left border gives editorial weight to each column
- Terminal-green divider bars separate the number from the label
- A very subtle `bg-terminal-green/5` radial glow (120px blur) provides ambient depth
- A dot-grid background at 20% opacity + `mix-blend-overlay` adds texture

<br />

### 9. 🔴 Contact — `components/sections/Contact.tsx`

**Type:** Glassmorphic CTA card with cinematic red aesthetic

The conversion section — designed to command action:

- The card container uses `backdrop-blur-3xl` + `bg-white/[0.02]` for a true frosted glass effect
- `border-red-900/40` provides a subtle red border that grounds the glass on the dark background
- A **bright red ambient glow** (`bg-red-600/30`, 150% width/height, 120px blur, `mix-blend-screen`) shines through the glass to create the red atmosphere
- A grain overlay at 30% opacity + `mix-blend-overlay` adds cinematic texture to the glass
- The CTA button (`"Initiate Protocol"`) features a **horizontal light sweep** on hover: `bg-linear-to-r from-red-600/0 via-red-600/30 to-red-600/0` translates from `-100%` to `+100%` over 1 second
- The subheading uses `font-mono text-red-500` uppercase tracking for a military-style label
- The entire card fades in from `y: 50` with a 1-second duration

<br />

### 10. 🏗️ Footer — `components/ui/Footer.tsx`

**Type:** Industrial grid layout with expanding typographic logo

A minimal, authoritative footer with three zones:

**Left Column:**

- Brand name `"VAULT ZERO"` in serif tracking-widest
- A concise brand description in neutral-500

**Right Grid (2–3 columns):**

- **Practice Areas:** VAT0 Secure, VAT0 Ship, VAT0 Verify, Zero Trust
- **Company:** Architecture, Contact, Privacy & Terms
- **Connect:** LinkedIn, Facebook, Instagram, X

**Massive Expanding Logo:**
The centerpiece is `VAT0` rendered at `20vw` font size. On hover:

- `"ul"` expands between `VA` and `T` (revealing `VAulT`)
- `"zer"` expands between `T` and `0` (revealing `VAulTzer0`)
- Uses Framer Motion `layout` on static spans + `AnimatePresence` with `mode="popLayout"` for the expanding segments
- Width animates from `0` to `auto` with a custom easing curve `[0.22, 1, 0.36, 1]` over 600ms
- Touch events (`onTouchStart`/`onTouchEnd`) enable the same interaction on mobile

**Copyright Bar:**
A thin `border-white/10` divider with `VAulTzer0 Security by Codezela Technologies © 2026` on the left and `Built for scale. Secured by default.` on the right.

<br />

---

<br />

## 🚀 Getting Started

### Prerequisites

| Requirement | Minimum Version |
| ----------- | --------------- |
| Node.js     | 18.17+          |
| npm         | 9+              |

### Installation

```bash
# Clone the repository
git clone https://github.com/codezelat/vat0-static-site.git

# Navigate into the project
cd vat0-static-site

# Install all dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Opens at [**http://localhost:3000**](http://localhost:3000) with Turbopack-powered hot module replacement. Changes reflect in milliseconds.

### Production Build

```bash
# Build the optimized production bundle
npm run build

# Start the production server
npm start
```

The build output is fully static — every page is pre-rendered at build time via Next.js App Router's static generation.

### Linting

```bash
npm run lint
```

Runs ESLint with the Next.js recommended configuration.

<br />

---

<br />

## 🎛️ Design Tokens & Theme System

The design system is centralized in `app/globals.css` using CSS custom properties and Tailwind v4's `@theme inline` directive:

```css
:root {
  --background: #000000;
  --foreground: #ffffff;
  --terminal-green: #00ff41;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

### Custom CSS Utilities

| Utility            | Purpose                                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `.bg-noise`      | Applies an SVG-based fractal noise texture via `::before` pseudo-element at 15% opacity with `mix-blend-mode: overlay` |
| `.lenis-smooth`  | Disables native `scroll-behavior` to let Lenis handle all scroll normalization                                           |
| `.lenis-stopped` | Sets `overflow: hidden` when Lenis scroll is programmatically paused                                                     |

<br />

---

<br />

## ⚡ Performance Characteristics

| Aspect                      | Implementation                                                                              |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| **Rendering**         | Static Generation (SSG) — all pages pre-rendered at build time                             |
| **Bundler**           | Turbopack — sub-second hot reloads during development                                      |
| **Images**            | `next/image` with automatic WebP/AVIF format negotiation and lazy loading                 |
| **Scrolling**         | Lenis provides 60fps butter-smooth scroll normalization with configurable lerp and duration |
| **CSS**               | Tailwind v4 purges all unused classes at build time — minimal CSS payload                  |
| **JavaScript**        | Tree-shaking via Turbopack — only used Framer Motion features are bundled                  |
| **External Requests** | Zero runtime API calls — fully self-contained static site                                  |
| **Font Loading**      | `next/font/google` with `display: swap` — no layout shift, no FOUT                     |

<br />

---

<br />

## 🔧 Configuration Files

| File                   | Purpose                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| `next.config.ts`     | Next.js runtime configuration                                         |
| `tsconfig.json`      | TypeScript compiler options with strict mode and `@/` path aliases  |
| `postcss.config.mjs` | PostCSS pipeline with `@tailwindcss/postcss` plugin for Tailwind v4 |
| `eslint.config.mjs`  | ESLint with `eslint-config-next` for Next.js-specific linting rules |
| `package.json`       | Dependency manifest and npm scripts                                   |

<br />

---

<br />

## 📐 Code Standards

- **TypeScript Strict Mode** — All components are fully typed with no `any` escape hatches
- **Framer Motion Best Practices** — Scroll-linked animations use `useScroll` + `useTransform` (not `whileInView` with `once: true`) for bidirectional interactivity
- **Tailwind Class Ordering** — Layout → Spacing → Typography → Color → Effects
- **Mobile-First Responsive** — Base styles target mobile; `sm`, `md`, `lg`, `xl` breakpoints progressively enhance
- **Semantic HTML** — All sections use `<section>` with `id` attributes for anchor navigation
- **Accessible Navigation** — `aria-label` on interactive elements, keyboard-navigable links
- **Component Isolation** — Each section is a self-contained module with its own scroll tracking, refs, and animation logic
- **`cn()` Utility** — All conditional class merging uses `clsx` + `tailwind-merge` to prevent class conflicts

<br />

---

<br />

## 🌍 Browser Support

| Browser       | Support                                     |
| ------------- | ------------------------------------------- |
| Chrome / Edge | ✅ Full support (latest 2 versions)         |
| Firefox       | ✅ Full support (latest 2 versions)         |
| Safari        | ✅ Full support (latest 2 versions)         |
| Mobile Chrome | ✅ Full support — touch events enabled     |
| Mobile Safari | ✅ Full support —`100svh` viewport units |

<br />

---

<br />

## 🤝 Contributing

This project is maintained by the VAulTzer0 engineering team at Codezela Technologies.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<br />

---

<br />

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

<br />

---

<br />

## 🔗 Links

| Resource               | URL                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------- |
| **Live Site**    | Coming Soon                                                                         |
| **Organization** | [Codezela Technologies](https://codezela.com)                                          |
| **Repository**   | [github.com/codezelat/vat0-static-site](https://github.com/codezelat/vat0-static-site) |

<br />

---

<p align="center">
  <br />
  <sub><strong>VAulTzer0 Security</strong> — A Division of Codezela Technologies (Pvt) Ltd.</sub>
  <br />
  <sub>Built for scale. Secured by default.</sub>
  <br /><br />
</p>
