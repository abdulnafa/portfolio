# Codex Project Guide

## Project Summary

This repository is a static multi-page portfolio website. It does not use a package manager, bundler, backend framework, or build pipeline. The pages are served directly as HTML files.

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
|-- pages/
|   |-- about.html
|   |-- services.html
|   |-- portfolio.html
|   `-- contact.html
|-- _includes/
|   |-- header.html
|   `-- footer.html
`-- docs/
    |-- README.md
    `-- NEXT_CHANGES.md
```

## Editing Guidance

- Keep the site static unless the user asks for a framework or build setup.
- Preserve the existing file organization for small changes.
- Keep main navigation links pointed to page files, not old single-page anchor links.
- Shared header markup lives in `_includes/header.html`.
- Shared footer markup lives in `_includes/footer.html`.
- Pages use Jekyll front matter so GitHub Pages can process `{% include ... %}` tags.
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
- Contact form validation and SMTPJS send
- Project hover overlays
- Project show-more behavior
- Mobile menu open, close, and link click behavior
- Typed.js hero text animation

## Important Dependencies

Runtime dependencies are loaded directly in `index.html`:

- jQuery must load before `assets/js/owl.carousel.min.js` and `assets/js/file.js`.
- Owl Carousel CSS must load before carousel layout is expected.
- Typed.js must load before the `.animatedtext` initialization in `assets/js/file.js`.
- SMTPJS and SweetAlert must load before the contact form send flow.

## Risk Notes

- The contact form exposes frontend email configuration. Treat email/contact changes carefully.
- The old about video section has been removed. Do not reintroduce it unless requested.
- Some copied text appears to have encoding artifacts. Preserve intended words when cleaning copy.
- Project cards depend on matching HTML classes and CSS background-image selectors.

## Manual Verification Checklist

- Open `index.html`, `pages/about.html`, `pages/services.html`, `pages/portfolio.html`, and `pages/contact.html` in a browser.
- For final shared-header/shared-footer output, verify on the GitHub Pages URL or with a local Jekyll build.
- Check desktop navigation links open the correct pages.
- Check mobile menu opens, closes, and restores page scrolling.
- Check services and testimonials carousels.
- Check about video play overlay.
- Check portfolio cards reveal content on hover.
- Check `See More` reveals additional project cards.
- Check contact form empty-state validation.
- Check responsive layout around 912px, 768px, 600px, and 460px widths.
