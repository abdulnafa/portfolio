# Next Changes Tracker

Use this file to record planned changes before editing the site.

## Suggested Workflow

1. Add the planned change under `Planned Changes`.
2. Note the files expected to change.
3. Implement the change.
4. Add a short verification note.

## Planned Changes

- See the active task board in [TASKS.md](TASKS.md).

## Resolved (2026-07-02 modernization pass)

- Removed SMTPJS and its exposed secure token; contact form now uses a `mailto:` link.
- Added SEO meta descriptions, Open Graph, Twitter metadata, and an SVG favicon to every page.
- Fixed text encoding artifacts in visible copy.
- Added `aria-label`s to icon-only social links and contact inputs; added `rel="noopener"`.
- Rewrote the BOM-corrupted `README.md`.

## Resolved (2026-07-09 static preview pass)

- Removed Jekyll front matter and Liquid includes from HTML pages.
- Inlined footer markup in each page so direct local browser preview works.
- Kept GitHub Pages deployment compatible with the same static files.

## Known Follow-Up Items

- Verify all pages locally by opening the HTML files directly, then verify the published GitHub Pages URL after deploy.
- Populate the empty `assets/css/file460px.css` breakpoint file (see T-007).
- Confirm every portfolio card has an optimized image (see T-006).

## Verification Notes

- Static edits complete; pending live verification on GitHub Pages after deploy.
