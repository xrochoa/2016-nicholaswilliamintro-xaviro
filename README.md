# Nicholas William

> A small ecommerce concept site for a fictional apparel label.
> **Year:** 2016

An intro page with an animated SVG signature-logo, and a shop page with a
grid of graphic t-shirts and a lightbox-style product modal.

## Preview

- `/` &mdash; animated intro (black banner, hand-drawn logo stroke animation, social icons)
- `/shop/` &mdash; 8-product grid; click any shirt to open a detail modal

## Purpose & features

- Static landing + shop front for a one-person apparel brand
- SVG `stroke-dashoffset` draw-in animation for the logo
- Staggered social-icon reveal
- jQuery-powered product modal (open / close / ESC-to-close)
- Mobile-responsive grid (4 &rarr; 2 &rarr; 1 columns)

## Tech stack

- **HTML5 / CSS3 (Sass)** &mdash; partials split into `normalize`, `utils`, `colors`, `fonts`, `main`, `responsive`, and a dedicated `shop/` bundle
- **jQuery 2.x** &mdash; DOM animation and modal interactions
- **Dart Sass CLI** &mdash; compiles the SCSS to compressed CSS
- **Node.js build script** &mdash; copies static assets into `dist/`
- **http-server** &mdash; local static server
- **Netlify** &mdash; deploy target

## What this project demonstrates (career context)

Built in 2016, this project sits early in a web-development trajectory:

- Hand-authored Sass with a deliberate partial structure
- SVG + CSS animation rather than a heavy animation library
- A front-end build pipeline (originally Gulp + Browserify + usemin, refactored
  here to a minimal Node/Sass-CLI pipeline to keep the site buildable on
  modern Node without changing the design or scope)
- Separation between authored sources (`src/`) and build output (`dist/`)
- jQuery-era DOM thinking &mdash; event delegation, class-based state (`.animate`,
  `.open`), no framework overhead

It reflects a developer comfortable with manual build tooling, CSS animation,
and small-scale interactive UI &mdash; the stage just before moving toward
component-based frameworks.

## Project structure

```
src/
  index.html            # intro page (animated logo)
  shop/index.html       # shop grid + product modal
  assets/
    app/                # authored JS (copied to dist/assets/js)
    scss/               # authored Sass (compiled to dist/assets/css)
    img/                # backgrounds, icons, shirt photos
    lib/                # vendor (jQuery)
scripts/
  build.js              # static asset copy step
netlify.toml            # Netlify build config
```

## Run locally

Requires **Node.js 18+** (tested on Node 20).

```bash
npm install
npm run build      # compile SCSS + copy assets to dist/
npm start          # serve dist/ on http://localhost:4000
```

Or the one-shot dev command (builds then opens a browser):

```bash
npm run dev
```

While iterating on styles, run in a second terminal:

```bash
npm run watch:css
```

## Deploy to Netlify

The repository ships with a `netlify.toml`:

```toml
[build]
  command  = "npm run build"
  publish  = "dist"
[build.environment]
  NODE_VERSION = "20"
```

### Option A &mdash; Git-based deploy (recommended)

1. Push this repo to GitHub / GitLab / Bitbucket.
2. In Netlify: **Add new site &rarr; Import an existing project**, pick the repo.
3. Netlify auto-detects the config; just click **Deploy site**.

### Option B &mdash; One-off CLI deploy

```bash
npm install -g netlify-cli
npm run build
netlify deploy --dir=dist --prod
```

## License

MIT &copy; 2016 Xavier Reyes Ochoa
