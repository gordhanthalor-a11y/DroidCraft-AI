# DroidCraft-AI — Personal Portfolio

Ek dark, premium single-page portfolio — Next.js 16 (App Router) + Tailwind CSS 4 + TypeScript.

## Chalane ka tarika

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # production server
```

## Content change karna (sirf ek file!)

Saara text **`lib/content.ts`** mein hai. Design files ko chhune ki zarurat nahi:

| Kya change karna hai | `lib/content.ts` mein |
| --- | --- |
| Naam, role, tagline, email, social links | `site` |
| Stats (4+ saal, 30+ projects etc.) | `site.stats` |
| About paragraphs + 3 highlights | `about` |
| Skills categories | `skills` |
| Projects (title, blurb, tags, link, color) | `projects` |
| Experience timeline | `experience` |
| Testimonials / client quotes | `testimonials` |
| Nav menu items | `nav` |

> Tip: `projects` array ka pehla item automatically "Featured" bada card ban jata hai — order badalne se featured project badal jaata hai.

## Structure

```
app/
  layout.tsx     # metadata, fonts, <html>
  page.tsx       # section order
  globals.css    # theme tokens, animations, card styles
  not-found.tsx  # 404 page
components/
  Nav.tsx        # sticky nav + mobile menu
  Hero.tsx       # headline, CTA, stats, terminal card
  Marquee.tsx    # scrolling tech strip
  About.tsx      # bio + tech stack
  Work.tsx       # featured + grid projects
  Experience.tsx # timeline + testimonials
  Contact.tsx    # email copy button + socials
  Footer.tsx
  Reveal.tsx     # scroll-in animation wrapper
lib/
  content.ts     # <-- ALL site text
```

## Design notes

- Dark `#05060a` base, violet → cyan accents, aurora blobs + fine grain texture.
- Scroll reveal via `IntersectionObserver` (`components/Reveal.tsx`), `prefers-reduced-motion` respected.
- Fonts self-hosted through `@fontsource-variable` (no network fetch at build time).
- Fully responsive: 1 column mobile → 2 column desktop, mobile slide-down menu.
- No runtime external dependencies — deploy karte hi kaam karega (Vercel/Netlify ready).
