# Codex Project Guide

## Project Summary

This repository is a static multi-page portfolio website. It does not use a package
manager, bundler, backend framework, or build pipeline. The pages are served directly as
HTML files.

## Core Structure

```text
.
|-- index.html
|-- README.md
|-- CODEX.md
|-- assets/
|   |-- css/
|   |   |-- file.css
|   |   |-- file912px.css
|   |   |-- file768px.css
|   |   |-- file600px.css
|   |   |-- file460px.css
|   |   `-- owl.carousel.min.css
|   |-- js/
|   |   |-- file.js
|   |   `-- owl.carousel.min.js
|   `-- images/
|       |-- Project Images/
|       `-- Website Images/
|-- pages/
|   |-- about.html
|   |-- services.html
|   |-- portfolio.html
|   `-- contact.html
`-- docs/
    |-- README.md
    |-- TASKS.md
    `-- NEXT_CHANGES.md
```

## Editing Guidance

- Keep the site static unless the user asks for a framework or build setup.
- Preserve the existing file organization for small changes.
- Keep main navigation links pointed to page files, not old single-page anchor links.
- Header and footer markup are written directly in each page so the site works from `file://`.
- Put base styles in `assets/css/file.css`.
- Put breakpoint-specific overrides in the matching responsive CSS file.
- Put custom behavior in `assets/js/file.js`.
- Keep third-party minified files unchanged unless explicitly upgrading that dependency.
- Add future planning notes to `docs/NEXT_CHANGES.md`.

## Interactive Behavior

`assets/js/file.js` currently controls:

- Back-to-top button visibility and click behavior
- Services Owl Carousel on pages that include it
- Testimonials Owl Carousel on pages that include it
- Contact form validation and mailto fallback
- Project hover overlays and portfolio filters
- Project show-more behavior
- Mobile menu open, close, and link click behavior
- Typed.js hero text animation

## Important Dependencies

Runtime dependencies are loaded directly in the HTML pages:

- jQuery must load before `assets/js/owl.carousel.min.js` and `assets/js/file.js`.
- Owl Carousel CSS must load before carousel layout is expected.
- Typed.js must load before the `.animatedtext` initialization in `assets/js/file.js`.

## Risk Notes

- The contact form uses the visitor's email client. Treat email/contact changes carefully.
- The old about video section has been removed. Do not reintroduce it unless requested.
- Project cards depend on matching HTML classes, image paths, and CSS hover states.
- WebP assets live in folders with spaces, so keep `%20` encoded paths in HTML/CSS.

## Manual Verification Checklist

- Open `index.html`, `pages/about.html`, `pages/services.html`, `pages/portfolio.html`, and `pages/contact.html` in a browser.
- Check desktop navigation links open the correct pages.
- Check mobile menu opens, closes, and restores page scrolling.
- Check services and testimonials carousels.
- Check portfolio cards reveal images clearly on hover.
- Check portfolio filters and `See More` behavior.
- Check contact form empty-state validation.
- Check responsive layout around 912px, 768px, 600px, and 460px widths.
