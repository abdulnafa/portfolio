# Project Documentation

This folder is the working home for future project notes, change plans, and implementation
decisions.

## Current Project

This is a static multi-page personal portfolio site for Abdul Nafa. The site is built
with plain HTML, CSS, JavaScript, jQuery, Owl Carousel, Typed.js, and Font Awesome. The
contact form opens the visitor's email client via a `mailto:` link.

## Main Files

- `index.html` contains the home page.
- `pages/about.html` contains the about page.
- `pages/services.html` contains the services page.
- `pages/portfolio.html` contains the portfolio/project page.
- `pages/contact.html` contains the contact form and testimonials page.
- Header and footer markup are written separately inside each page so local file preview works.
- `assets/css/file.css` contains the base desktop styling.
- `assets/css/file912px.css`, `assets/css/file768px.css`, `assets/css/file600px.css`, and `assets/css/file460px.css` contain responsive overrides.
- `assets/js/file.js` contains all custom interactive behavior.
- `assets/images/` contains project images, branding images, review placeholder image, and hero imagery.

## Page Sections

- Mobile menu overlay
- Header navigation
- Hero section
- Services carousel
- About page content
- Portfolio/project grid
- Why choose us counters
- Contact form and client testimonials carousel
- Footer and social links
- Back-to-top button

## External Dependencies

The page loads these dependencies from CDNs:

- Google Fonts: Hubballi and Poppins
- Font Awesome
- jQuery 3.6.1
- Typed.js

The project also keeps local Owl Carousel assets:

- `assets/css/owl.carousel.min.css`
- `assets/js/owl.carousel.min.js`

## How To Run Locally

Open `index.html` directly in a browser, or serve the folder with any simple static
server. GitHub Pages can publish the same files without a build step.
