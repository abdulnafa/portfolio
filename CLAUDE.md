# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Project Summary

Static, multi-page personal portfolio website for **Abdul Nafa** (web designer/developer).
No package manager, bundler, or backend — pages are plain HTML served directly. Shared
header/footer use **Jekyll includes**, so the site is built and hosted by **GitHub Pages**.

- Live hosting: GitHub Pages (free tier), from the `main` branch.
- Remote: `https://github.com/abdulnafa/portfolio.git`

## Commands

There is no build step for local editing — open the HTML files in a browser. However, the
Jekyll `{% include %}` tags and `{{ page.* }}` front matter only render when built by Jekyll.

```bash
# Preview with rendered includes (requires Ruby + Jekyll installed):
bundle exec jekyll serve        # then open http://localhost:4000
# or:
jekyll serve

# Quick static preview (includes will NOT render — shows raw {% %} tags):
# just open index.html in a browser
```

To publish: commit to `main` and push. GitHub Pages rebuilds automatically.

## Architecture

```
index.html              # Home page (lives at repo root → site root)
pages/                  # about.html, services.html, portfolio.html, contact.html
_includes/              # header.html, footer.html (shared, via {% include %})
_config.yml             # Jekyll/GitHub Pages site config
assets/
  css/
    file.css            # Base + desktop styles (source of truth)
    file912px.css       # Responsive overrides at <= 912px
    file768px.css       # Responsive overrides at <= 768px
    file600px.css       # Responsive overrides at <= 600px
    file460px.css       # Responsive overrides at <= 460px
    owl.carousel.min.css# Third-party (do not edit)
  js/
    file.js             # All custom jQuery behavior
    owl.carousel.min.js # Third-party (do not edit)
  images/               # Project screenshots, branding, hero imagery
docs/                   # Working docs + task tracking (see docs/README.md)
```

**Page contract:** every page starts with Jekyll front matter setting `title` and `active`
(the nav highlight key: `home` / `about` / `services` / `portfolio` / `contact`). The header
include reads `page.active` to mark the current link.

**Path note:** `index.html` is at the root and links assets as `assets/...`. Pages in
`pages/` link assets as `../assets/...`. Nav links inside includes use Jekyll's
`{{ '...' | relative_url }}` so they resolve correctly from any depth.

## Conventions

- Keep the site **static** — do not introduce a framework or build tooling unless asked.
- Preserve the existing file organization and class names; project cards and layout depend on
  matching HTML classes and CSS background-image selectors.
- Base styles go in `assets/css/file.css`; put breakpoint-specific rules in the matching
  responsive file, not inline.
- Custom behavior goes in `assets/js/file.js`. jQuery must load before it.
- Do not edit the `owl.carousel.min.*` files (vendored dependency).
- Shared header/footer live only in `_includes/` — never duplicate that markup into a page.

## Interactive Behavior (`assets/js/file.js`)

Back-to-top button, services + testimonials Owl carousels, project hover overlays,
"See More" project pagination, mobile menu open/close, and the Typed.js hero animation.

## Dependencies (loaded via CDN)

jQuery 3.6.1 → must load before Owl Carousel and `file.js`. Owl Carousel, Typed.js,
Font Awesome. Google Fonts: Hubballi + Poppins. (SMTPJS and SweetAlert were removed when
the contact form moved to `mailto:`.)

## Contact Form

The contact form uses a `mailto:` link to `developerabdulnafa@gmail.com` (no server, no
secrets). Do **not** reintroduce SMTPJS or any client-side secret token.

## Task Tracking

Before non-trivial changes, record intent in `docs/TASKS.md` (see the template there).
Long-form planning notes go in `docs/NEXT_CHANGES.md`.

## Verification Checklist

- Open `index.html` and each file in `pages/` (via Jekyll for correct includes).
- Desktop nav links open the right pages; active link is highlighted.
- Mobile menu opens, closes, and restores page scroll.
- Services and testimonials carousels work.
- Portfolio cards reveal content on hover; "See More" reveals more cards.
- Contact `mailto:` opens the mail client.
- Responsive layout holds at 912 / 768 / 600 / 460 px.
