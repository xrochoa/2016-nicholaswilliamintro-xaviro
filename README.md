# Nicholas William (2016)

A single-page landing site built in 2016 for musician **Nicholas William**.
It renders an animated SVG logo over a full-bleed background with a row of
social icons — a minimalist "coming soon" style splash page.

This repository is preserved as a **portfolio artifact** from 2016. It has
been lightly refactored for stability and modern tooling compatibility while
keeping its original architecture, stack, and visual intent intact.

## Purpose & features

- Full-bleed fixed background with a fade-in black overlay.
- Inline SVG wordmark, animated by priming `stroke-dasharray` /
  `stroke-dashoffset` and transitioning to the final stroke over ~2s.
- Staggered scale-in of the social icon row (Facebook, Twitter, Instagram,
  info).
- Fixed, low-opacity footer with the `© 2016` line.
- Client-side routing through AngularJS with `html5Mode` enabled; server
  (local Express and Netlify) falls back to `index.html` for unknown paths.

## Technologies

- **AngularJS 1.5** + **ngRoute** — SPA routing and controller wiring.
- **SCSS** — structured with `normalize`, `utils`, `colors`, `fonts`,
  `main`, `responsive`.
- **Gulp 4** build pipeline: `gulp-sass` (Dart Sass), `gulp-autoprefixer`,
  `gulp-clean-css`, `gulp-htmlmin`, `gulp-include`, `gulp-ng-annotate`,
  `gulp-uglify`, `gulp-sourcemaps`.
- **BrowserSync** for the dev server and live reload.
- **Express** for the production-style local static server.
- **Netlify** for deployment (build + SPA redirect configured in
  `netlify.toml`).

## What it demonstrates

This project captures an early web-development phase of the author's career
(2016):

- Comfort with building and structuring a **task-based front-end build
  pipeline** (Gulp) from scratch — predating the dominance of webpack, Vite
  and framework CLIs.
- Organising an **AngularJS 1.x** SPA with controllers, routes and
  `ng-annotate`-friendly DI.
- Writing **modular SCSS** with partials, placeholders and a small flex
  grid — before CSS custom properties were mainstream.
- Animating inline SVG with `getTotalLength()` / `stroke-dasharray` — a
  technique that was a hallmark of expressive landing pages of the era.

It reflects a developer transitioning from static site work into
**front-end application engineering**: hand-rolled build tooling, manual
asset optimisation, and SPA routing without a framework CLI.

## Project year

**2016** — preserved in the footer copy (`Nicholas William 2016`) and in
the repository path / archive layout.

## Requirements

- **Node.js 18+** and npm.

## Run locally

```bash
npm install        # install dependencies
npm run build      # compile to ./dist
npm start          # serve ./dist at http://localhost:8000
```

For live-reload development:

```bash
npm run dev        # builds, then serves ./dist via BrowserSync with watchers
```

## Deploy to Netlify

The repository is ready to deploy as-is. Netlify picks up `netlify.toml`,
which configures:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA fallback:** all routes rewrite to `/index.html`
- **Node version:** 18

Steps:

1. Push this repository to GitHub / GitLab / Bitbucket.
2. In Netlify, **Add new site → Import an existing project** and pick the
   repo. The build settings will be read from `netlify.toml`.
3. Click **Deploy**. No additional configuration is needed.

Alternatively, via the Netlify CLI:

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## Project structure

```
.
├── gulpfile.js          # Gulp 4 build pipeline
├── server.js            # Minimal Express static server for ./dist
├── netlify.toml         # Netlify build + SPA redirect config
├── package.json
└── src/
    ├── index.html       # App shell (base href, meta, ng-app)
    ├── views/
    │   └── index.html   # Main route template (SVG logo + social icons)
    └── assets/
        ├── img/         # Background + SVG icons
        ├── js/
        │   ├── app.js           # Entry — concatenates libs + app modules
        │   ├── lib/             # Vendored AngularJS 1.5.6 + ngRoute
        │   └── app/
        │       ├── config.js    # $routeProvider + html5Mode
        │       └── ctrl/main.js # Animation controller
        └── scss/
            ├── style.scss       # Entry
            ├── _normalize.scss
            ├── _utils.scss      # Flex helpers + legacy grid
            ├── _colors.scss
            ├── _fonts.scss      # Inconsolata from Google Fonts
            ├── _main.scss       # Layout + animations
            ├── _responsive.scss
            └── _init.scss
```

## License

MIT © 2016 Xavier Reyes Ochoa
