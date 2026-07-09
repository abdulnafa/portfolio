# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Project Summary

Static, multi-page personal portfolio website for **Abdul Nafa**. There is no package
manager, bundler, backend, or required build step. Pages are plain HTML and can be opened
directly in a browser.

- Live hosting: GitHub Pages from the `main` branch.
- Remote: `https://github.com/abdulnafa/portfolio.git`

## Commands

There is no local build step. For quick testing, open `index.html` in a browser. To publish,
commit to `main` and push; GitHub Pages rebuilds automatically.

```bash
git add -A
git commit -m "Update portfolio"
git push origin main
```

## Architecture

```text
index.html              # Home page
pages/                  # about.html, services.html, portfolio.html, contact.html
_config.yml             # GitHub Pages metadata
assets/
  css/
    file.css            # Base + desktop styles
    file912px.css       # Responsive overrides at <= 912px
    file768px.css       # Responsive overrides at <= 768px
    file600px.css       # Responsive overrides at <= 600px
    file460px.css       # Responsive overrides at <= 460px
    owl.carousel.min.css# Third-party, do not edit
  js/
    file.js             # Custom jQuery behavior
    owl.carousel.min.js # Third-party, do not edit
  images/
    Project Images/     # Portfolio screenshots
    Website Images/     # Branding, hero, favicon, UI imagery
docs/                   # Working docs and task tracking
```

## Path Notes

`index.html` is at the root and links assets as `assets/...`. Pages in `pages/` link assets
as `../assets/...`. The image folders contain spaces, so HTML and CSS paths should keep
`%20` encoding where it is already used.

Header and footer markup are duplicated per page so the site works correctly from `file://`
local preview and GitHub Pages without a template build.

## Conventions

- Keep the site static unless a framework or build setup is explicitly requested.
- Preserve existing class names where possible; layout, carousels, and project cards depend on them.
- Base styles go in `assets/css/file.css`; breakpoint-specific rules go in the matching responsive file.
- Custom behavior goes in `assets/js/file.js`; jQuery must load before it.
- Do not edit `owl.carousel.min.*` unless intentionally upgrading that dependency.
- Do not reintroduce the removed video section unless requested.

## Interactive Behavior

`assets/js/file.js` controls the back-to-top button, services and testimonials carousels,
portfolio filtering, project hover overlays, "See More" behavior, mobile menu behavior,
contact validation, and the Typed.js hero animation.

## Dependencies

Loaded via CDN: jQuery 3.6.1, Typed.js, Font Awesome, and Google Fonts. Owl Carousel CSS and
JS are kept locally in `assets/`.

## Contact Form

The contact form uses a `mailto:` link to `developerabdulnafa@gmail.com`. Do not reintroduce
SMTPJS or any client-side secret token.

## Task Tracking

Before non-trivial changes, record intent in `docs/TASKS.md`. Long-form planning notes go in
`docs/NEXT_CHANGES.md`.

## Verification Checklist

- Open `index.html` and each file in `pages/` directly in a browser.
- Desktop nav and footer links open the right pages.
- Mobile menu opens, closes, and restores page scroll.
- Services and testimonials carousels work.
- Portfolio cards reveal images clearly on hover.
- Portfolio filters and "See More" behavior work.
- Contact `mailto:` opens the mail client.
- Responsive layout holds at 912 / 768 / 600 / 460 px.
