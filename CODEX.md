# Codex Project Guide

## Project Summary

This repository is a static portfolio website. It does not use a package manager, bundler, backend framework, or build pipeline. The site is served directly from `index.html`.

## Core Structure

```text
.
|-- index.html
|-- README.md
|-- CODEX.md
|-- css/
|   |-- file.css
|   |-- file912px.css
|   |-- file768px.css
|   |-- file600px.css
|   |-- file460px.css
|   `-- owl.carousel.min.css
|-- js/
|   |-- file.js
|   `-- owl.carousel.min.js
|-- images/
`-- docs/
    |-- README.md
    `-- NEXT_CHANGES.md
```

## Editing Guidance

- Keep the site static unless the user asks for a framework or build setup.
- Preserve the existing file organization for small changes.
- Put base styles in `css/file.css`.
- Put breakpoint-specific overrides in the matching responsive CSS file.
- Put custom behavior in `js/file.js`.
- Keep third-party minified files unchanged unless explicitly upgrading that dependency.
- Add future planning notes to `docs/NEXT_CHANGES.md`.

## Interactive Behavior

`js/file.js` currently controls:

- Back-to-top button visibility and click behavior
- Services Owl Carousel
- Testimonials Owl Carousel
- About video overlay play button
- Contact form validation and SMTPJS send
- Project hover overlays
- Project show-more behavior
- Mobile menu open, close, and link click behavior
- Typed.js hero text animation

## Important Dependencies

Runtime dependencies are loaded directly in `index.html`:

- jQuery must load before `js/owl.carousel.min.js` and `js/file.js`.
- Owl Carousel CSS must load before carousel layout is expected.
- Typed.js must load before the `.animatedtext` initialization in `js/file.js`.
- SMTPJS and SweetAlert must load before the contact form send flow.

## Risk Notes

- The contact form exposes frontend email configuration. Treat email/contact changes carefully.
- Some HTML has malformed anchor/list syntax in navigation links. Fixing it is likely safe but should be verified on desktop and mobile menus.
- Some copied text appears to have encoding artifacts. Preserve intended words when cleaning copy.
- Project cards depend on matching HTML classes and CSS background-image selectors.

## Manual Verification Checklist

- Open `index.html` in a browser.
- Check desktop navigation links scroll to the correct sections.
- Check mobile menu opens, closes, and restores page scrolling.
- Check services and testimonials carousels.
- Check about video play overlay.
- Check portfolio cards reveal content on hover.
- Check `See More` reveals additional project cards.
- Check contact form empty-state validation.
- Check responsive layout around 912px, 768px, 600px, and 460px widths.

