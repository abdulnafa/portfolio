# Task Board

Single source of truth for work on this portfolio. Add tasks here before starting, move
them between sections as they progress, and check items off as they complete.

**Status legend:** `[ ]` todo · `[~]` in progress · `[x]` done · `[!]` blocked

Each task follows the template in [TASK_TEMPLATE.md](TASK_TEMPLATE.md).

---

## In Progress

_None._

---

## To Do

### T-006 · Add real project screenshots to portfolio cards
- **Priority:** Medium
- **Why:** Several portfolio cards rely on CSS background images; confirm each has a matching, optimized image with `alt` context.
- **Files:** `pages/portfolio.html`, `assets/css/file.css`, `assets/images/`
- **Done when:** every project card shows an image and links to the live site.

### T-007 · Populate empty `file460px.css`
- **Priority:** Low
- **Why:** The 460px breakpoint file is empty; small-phone layout may fall back to 600px rules.
- **Files:** `assets/css/file460px.css`
- **Done when:** layout is verified clean at 460px width.

### T-008 · Custom domain (optional)
- **Priority:** Low
- **Why:** Move from `abdulnafa.github.io/portfolio` to a branded domain.
- **Files:** `CNAME`, `_config.yml`, DNS.
- **Done when:** custom domain serves the site over HTTPS.

### T-009 · Design/UX modernization pass
- **Priority:** Medium
- **Why:** Fine-tune spacing, typography scale, hover states, and dark-mode-friendly contrast.
- **Files:** `assets/css/*.css`
- **Done when:** visual review approved across breakpoints.

---

## Done

### T-001 · Add CLAUDE.md project guide
- Created `CLAUDE.md` with architecture, conventions, and verification checklist.

### T-002 · Establish structured task tracking in docs/
- Added `TASKS.md` (this file) and `TASK_TEMPLATE.md`.

### T-003 · Rewrite corrupted README.md
- Replaced BOM-corrupted README with proper project documentation.

### T-004 · Add `_config.yml` for GitHub Pages
- Added Jekyll site config so includes and front matter render on GitHub Pages.

### T-005 · Security + modernization pass
- Replaced exposed SMTPJS token with a `mailto:` contact link.
- Added SEO meta tags (description, Open Graph, Twitter) and favicon to all pages.
- Fixed text-encoding artifacts and added accessibility attributes.
