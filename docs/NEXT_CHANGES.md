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

- Added `_config.yml` so the shared footer include and front matter render on GitHub Pages.
- Removed SMTPJS + its exposed secure token; contact form now uses a `mailto:` link.
- Added SEO meta (description, Open Graph, Twitter) and an SVG favicon to every page.
- Fixed text-encoding artifact in the Italian testimonial ("qualità").
- Added `aria-label`s to icon-only social links and contact inputs; added `rel="noopener"`.
- Rewrote the BOM-corrupted `README.md`.

## Known Follow-Up Items

- Verify all pages on the published GitHub Pages URL (includes render only when built by Jekyll).
- Populate the empty `assets/css/file460px.css` breakpoint file (see T-007).
- Confirm every portfolio card has an optimized image (see T-006).

## Verification Notes

- Static edits complete; pending live verification on GitHub Pages after deploy.
