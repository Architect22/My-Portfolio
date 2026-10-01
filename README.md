# Portfolio

React + Vite + Tailwind CSS portfolio that scrolls left to right, with a pinned strip of project tiles along the bottom.

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
src/
  main.jsx                  entry point
  App.jsx                   assembles the panels in order
  data/
    projects.js             the projects (strip, hero backdrop, case studies)
    profile.js              intro text, About facts, email, CV link
  constants/
    panels.js               panel indexes used for navigation
  hooks/
    useHorizontalScroll.js  wheel -> horizontal scroll, keyboard, parallax values
  components/
    Art.jsx                 generated placeholder artwork
    ProjectImage.jsx        real image if project.image is set, else <Art/>
    layout/                 Nav, ProgressBar, ProjectStrip
    sections/               Hero, About, CasesIntro, CaseStudy, CV, Contact
  styles/
    index.css               imports everything below + Tailwind layers
    tokens.css              colors, strip height
    base.css                html/body/focus resets
    motion.css              keyframes, line-reveal, reduced-motion
    scroller.css            horizontal track, panels, parallax classes
    nav.css  hero.css  strip.css  case.css
```

## Common edits

- **Add or change a project:** edit `src/data/projects.js`. Panels, strip tiles and nav indexes update automatically.
- **Use real screenshots:** put images in `public/projects/` and add `image: '/projects/name.jpg'` to the project.
- **Profile picture:** replace the inner `div` of `Avatar` in `components/sections/Hero.jsx` with an `<img>`.
- **CV:** drop a PDF in `public/` and set `cvHref` in `src/data/profile.js`.
- **Add a panel:** create a component with `data-panel` on its `<section>`, render it in `App.jsx`, and add its index to `constants/panels.js`.

## Animating on scroll

`useHorizontalScroll` writes two CSS variables while you scroll:

- `--o` on every `[data-panel]`: how far that panel is from the viewport, in screens (`0` in view, `1` one screen right, `-1` one screen left).
- `--p` on `<html>`: overall progress from 0 to 1.

Anything inside a panel can use `calc(var(--o) * 100px)` in a transform, opacity or clip-path. See `.px-a`, `.px-b` and `.px-img` in `src/styles/scroller.css`.
