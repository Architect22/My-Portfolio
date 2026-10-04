# Portfolio

React + Vite + Tailwind CSS portfolio. The home page scrolls left to right with a pinned strip of project tiles along the bottom. Each project also has its own page at `/projects/<id>`.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

Needs Node 18 or newer.

## Project layout

```
index.html                  page shell, fonts, meta
tailwind.config.js          Tailwind theme (colors read the CSS variables)
public/_redirects           Netlify: send every path to index.html (see Deploying)
src/
  main.jsx                  entry point, wraps the app in the router
  App.jsx                   routes: "/" and "/projects/:id"
  pages/
    Home.jsx                horizontal-scrolling home page
    ProjectPage.jsx         detailed case study page (scaffold, design comes next)
  data/
    projects.js             the projects: strip, hero backdrop, panels, project pages
    profile.js              intro text, About facts, email, CV link
  constants/
    panels.js               panel indexes used for navigation on the home page
  hooks/
    useHorizontalScroll.js  wheel -> horizontal scroll, keyboard, parallax, remembers position
  components/
    Art.jsx                 generated placeholder artwork
    ProjectImage.jsx        real image if project.image is set, else <Art/>
    layout/                 Nav (menu on phones), PageNav, ProgressBar, ProjectStrip
    sections/               Hero, About, CasesIntro, CaseStudy, CV, Contact
    project/                Section, NextProject (used by ProjectPage)
  styles/
    index.css               imports everything below + Tailwind layers
    tokens.css              colors, nav/strip heights, page gutter
    base.css  motion.css  scroller.css  nav.css  hero.css  strip.css  case.css  page.css
```

## Common edits

- **Add or change a project:** edit `src/data/projects.js`. Home panels, strip tiles and the project page all update from it. Each project has `summary`, `challenge`, `approach` (list of steps), `outcome`, and an optional `liveUrl` for a "View live project" button.
- **Use real screenshots:** put images in `public/projects/` and add `image: '/projects/name.jpg'` to the project.
- **Profile picture:** replace the inner `div` of `Avatar` in `components/sections/Hero.jsx` with an `<img>`.
- **CV:** drop a PDF in `public/` and set `cvHref` in `src/data/profile.js`.
- **Add a home panel:** create a component with `data-panel` on its `<section>`, render it in `pages/Home.jsx`, and add its index to `constants/panels.js`.

## How the home page behaves

- Vertical wheel/trackpad scroll moves the page sideways. Touch swipes, arrow keys, the nav and the tiles all work too.
- The project strip shows each project once. If they don't fit, it scrolls sideways, and it follows the page by sliding the current project's tile into view.
- Tapping a tile jumps to that project's panel. "Go to project" (or the panel image) opens the project page.
- Coming back from a project page returns to the panel you left (stored in `sessionStorage`).
- On phones the nav collapses to a Menu button.

## Animating on scroll

`useHorizontalScroll` writes two CSS variables while you scroll:

- `--o` on every `[data-panel]`: how far that panel is from the viewport, in screens (`0` in view, `1` one screen right, `-1` one screen left).
- `--p` on `<html>`: overall progress from 0 to 1.

Anything inside a panel can use `calc(var(--o) * 100px)` in a transform, opacity or clip-path. See `.px-a`, `.px-b` and `.px-img` in `src/styles/scroller.css`.

## Deploying

The site uses real URLs (`/projects/featherborn`), so the host must serve `index.html` for unknown paths.

- **Netlify:** works as is (`public/_redirects`).
- **Vercel:** add a `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`.
- **GitHub Pages:** the Actions workflow builds the site, publishes `dist/`, and copies the built `index.html` to `404.html` so project URLs work when opened directly. The router uses Vite's base path for the `/My-Portfolio/` repository site.

## Gotcha

Tailwind utilities are generated after the custom CSS, so a utility like `grid` beats a plain custom rule that sets `display`. Use `!important` there (see `.case-meta` in `case.css`) or put the rule in a Tailwind layer. Don't name custom classes after Tailwind utilities (`ring`, `container`, `shadow`, ...).
