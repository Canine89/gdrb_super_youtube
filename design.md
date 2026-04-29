# Airtable-Inspired Design System

## Overview

The site follows an Airtable-like editorial marketing surface: white canvas, dark ink type, generous whitespace, and a near-black primary CTA. The hero stays calm and undecorated. Brand energy appears in full-card signature surfaces rather than gradients or small accents.

## Tokens

### Colors

- `{colors.primary}` `#181d26`: near-black CTA, display type, dark surface.
- `{colors.primary-active}` `#0d1218`: pressed primary CTA.
- `{colors.canvas}` `#ffffff`: default page surface.
- `{colors.surface-soft}` `#f8fafc`: tabbed/search card surface.
- `{colors.surface-strong}` `#e0e2e6`: footer CTA banner.
- `{colors.surface-dark}` `#181d26`: dark CTA band.
- `{colors.hairline}` `#dddddd`: borders and dividers.
- `{colors.ink}` `#181d26`: strongest text.
- `{colors.body}` `#333840`: body copy.
- `{colors.muted}` `#41454d`: captions and secondary links.
- `{colors.signature-coral}` `#aa2d00`: full-card coral signature surface.
- `{colors.signature-forest}` `#0a2e0e`: full-card forest signature surface.
- `{colors.signature-cream}` `#f5e9d4`: cream callout card.
- `{colors.signature-peach}` `#fcab79`, `{colors.signature-mint}` `#a8d8c4`, `{colors.signature-yellow}` `#f4d35e`, `{colors.signature-mustard}` `#d9a441`: demo-card surfaces.
- `{colors.link}` `#1b61c9`: inline links only, not primary buttons.

### Typography

- Fallback stack: Inter, system-ui, Segoe UI, Roboto, Helvetica Neue, sans-serif.
- Display: 40-48px, weight 400 or 500, tight but calm line height.
- Section headings: 32px, weight 400.
- Body: 14px, weight 400.
- Buttons: 16px, weight 500.

### Layout

- Max content width: 1280px.
- Major section vertical rhythm: 96px.
- Signature card padding: 48px on desktop.
- Card grid gap: 24px.
- Mobile collapses to one column; tablet uses two-column cards.

### Radius

- `{rounded.sm}` 6px: inputs.
- `{rounded.md}` 10px: content cards.
- `{rounded.lg}` 12px: primary CTAs, signature cards.
- `{rounded.pill}` 9999px: reserved for pricing surfaces only.

## Components

- `top-nav`: 64px white nav with wordmark, simple links, near-black CTA.
- `button-primary`: `{colors.primary}` background, white text, `{rounded.lg}`, sparse usage.
- `button-secondary`: white button, ink text, hairline border, `{rounded.lg}`.
- `hero-band`: white canvas only, no gradient or decorative background.
- `signature-coral-card`: full-card coral surface with white text.
- `signature-forest-card`: full-card forest surface with white text.
- `hero-card-dark`: dark navy CTA band using `{colors.surface-dark}`.
- `cream-callout-card`: beige callout with dark type.
- `demo-grid-card`: pastel or canvas card holding product-like UI fragments.
- `text-input`: white surface, hairline border, 6px radius, 44px touch target.
- `footer`: white footer with a light gray CTA banner before link groups.

## Do's

- Keep the primary CTA near-black, not link blue.
- Let whitespace carry the hero atmosphere.
- Use signature surface cards every few screens to create rhythm.
- Use larger type or stronger surface contrast before increasing font weight.
- Keep body copy at 14px/400 and display type modestly weighted.

## Don'ts

- Do not add hero gradients, mesh, or glow backdrops.
- Do not use `{colors.link}` for primary buttons.
- Do not over-bold display headings.
- Do not use pill buttons outside pricing-like surfaces.
- Do not stack identical surface modes without a rhythm reset.
