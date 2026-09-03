# AGENTS.md - Portfolio Project

## Project Overview
Personal portfolio website for Mustafa Şenoğlu, built with React + Vite + Tailwind CSS v4. Deployed to GitHub Pages at https://mmustafasenoglu.github.io

## Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS v4 + inline styles
- **Routing:** React Router v6 (HashRouter for GitHub Pages)
- **Deployment:** GitHub Pages via GitHub Actions

## Commands
- `npm run dev` - Start dev server on port 3000
- `npm run build` - Production build to dist/
- `npm run preview` - Preview production build

## Project Structure
```
├── App.jsx              # Main app: routing, navigation, dark mode, layout
├── IntroScreen.jsx      # Intro animation (multilingual greetings)
├── HomePage.jsx         # Landing: hero, photo, featured projects, about preview, current role, contact CTA
├── AboutPage.jsx        # Journey, focus areas, hobbies
├── ExperiencePage.jsx   # Timeline with expandable cards
├── WorkPage.jsx         # Projects showcase with category filter & horizontal slider
├── SkillsPage.jsx       # Skills grid by category with proficiency levels
├── ContactPage.jsx      # Terminal-style contact form
├── Footer.jsx           # Animated footer with nav, connect links, dark mode toggle, road scene
├── main.jsx             # Entry point
├── index.html           # HTML template
├── index.css            # Tailwind imports + base reset
├── tailwind.config.js   # Tailwind config
├── postcss.config.js    # PostCSS config
├── vite.config.js       # Vite config (base: "/")
├── medias/              # Photos and media assets
└── .github/workflows/   # GitHub Actions deploy workflow
```

## Architecture Notes
- **Dark mode:** Global state in App.jsx, persisted in localStorage, passed as `dark`/`onToggleDark` props to all pages
- **Navigation:** Persistent navbar in MainLayout, uses `useLocation()` for active state
- **Routing:** HashRouter (not BrowserRouter) for GitHub Pages compatibility
- **Mobile:** Hamburger menu at <768px via `window.innerWidth` check
- **Intro:** Shows once per session, controlled by `showIntro` state in App.jsx

## Key Patterns
- All pages accept `dark`, `onToggleDark`, `onNavigate` props
- Color variables defined at top of each component (bg, text, subText, border, cardBg)
- Responsive grids use CSS classes with `@media` breakpoints in `<style>` tags
- No external CSS files beyond Tailwind — all styling is inline or in `<style>` blocks

## Deployment
- Push to `main` branch triggers GitHub Actions workflow
- Workflow runs `npm run build` and deploys `dist/` to GitHub Pages
- Base path is `/` (root, not a subdirectory)

## Media
- `medias/` folder contains photos and assets
- Photo imported as ES module: `import photo from "./medias/filename.jpeg"`
