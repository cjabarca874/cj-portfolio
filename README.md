# CJ Abarca — Creative Dashboard

Angular 22.2 standalone portfolio with signals, lazy routes, reactive forms, and prerendered public pages.

## Run

- npm install
- npm start
- npm run build
- npm run verify

Production files: dist/client. All public routes and 17 project details are prerendered.

## Content

Original source: https://cjabarca-portfolio.vercel.app/ (retrieved September 26, 2026). Real project descriptions, imagery, contact details, brand colors, and agency experience were extracted from its public application. Concepts remain labeled. Individual platform claims are only attached where verified. No social profile URLs were available. Skills include the list explicitly supplied in the brief.

Project data: src/app/core/constants/portfolio.ts. Artwork: public/images. Source concept descriptions are retained in concepts.ts.

## Font

Set --font-primary in src/styles.scss when the final font is provided. The current system-font fallback is intentional. The source website uses Raleway and a trial heading font; the trial font has not been redistributed.

## Contact delivery

The form validates and includes loading, success, and error states. It does NOT simulate delivery. Provide CONTACT_ENDPOINT in app.config.ts to connect an HTTPS backend that accepts ContactMessage JSON and returns a successful HTTP status only after accepting the message. Keep email credentials server-side. Until connected, the form shows an honest error and visitors can use the real email/telephone links.

## SEO and deployment

Update SITE_URL in src/app/core/constants/site.ts and public/sitemap.xml if moving to a custom domain. Publish dist/client as static files, with fallback to index.html for unknown client routes. Public routes contain prerendered headings and metadata. This project is local-only as requested. No source has been uploaded. SEO defaults to the original portfolio origin; change it before deploying elsewhere.

## Accessibility

Native dialog supplies modal focus containment, Escape dismissal, and focus restoration; arrow keys navigate artwork. Navigation has active-page states, skip link, visible focus styles, and mobile drawer. Reduced-motion preference is respected.

