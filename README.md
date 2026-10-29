# web-logic — Portfolio

Portfolio and studio site for **web-logic**.

The site covers full stack web development plus Linux, Docker, Kubernetes, cloud and AIOps — with live client work, services, experience and a working contact form.

---

## Live projects

| Project | Link | Stack |
| --- | --- | --- |
| Shoe Store E-Commerce | [weblogic-shoe-store-frontend.vercel.app](https://weblogic-shoe-store-frontend.vercel.app/) | Next.js, React, Tailwind, Vercel |
| AIOps Learning Hub | [aiopslearnhub.netlify.app](https://aiopslearnhub.netlify.app/) | React, Vite, Supabase, PostgreSQL |
| Restaurant Online Menu | [on-linemenu.netlify.app](https://on-linemenu.netlify.app/) | JavaScript, HTML5, CSS3, Netlify |
| Solar EPC Website | [masolarpowersolutions.com](https://masolarpowersolutions.com/) | WordPress, Elementor, Nginx, Cloudflare |

---

## Tech stack

| Area | Tools |
| --- | --- |
| Front-end | React 19, Vite 6, Tailwind CSS 4, motion |
| 3D / visuals | React Three Fiber, drei, cobe |
| Icons / assets | Custom SVG artwork, Simple Icons, Devicon |
| Forms | FormSubmit (AJAX, no API keys) |
| Tooling | ESLint 9, Vite build |

---

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173`).

```bash
npm run build     # production build into dist/
npm run preview   # preview the production build
npm run lint      # eslint
```

---

## Where to edit content

| What | File |
| --- | --- |
| Hero headline, flip words, CTAs | `src/components/HeroText.jsx` |
| About cards, time zone, tech stack copy | `src/sections/About.jsx` |
| Services offered | `src/sections/Services.jsx` |
| Projects, tags, live links | `src/constants/index.js` (`myProjects`) |
| Work experience | `src/constants/index.js` (`experiences`) |
| Client testimonials | `src/constants/index.js` (`reviews`) |
| Social links | `src/constants/index.js` (`mySocials`) |
| Brand name in navbar / footer / SEO | `src/sections/Navbar.jsx`, `src/sections/Footer.jsx`, `index.html` |
| Logo files | `public/assets/web-logic-logo.png`, `public/assets/web-logic-mark.png`, `public/favicon.png` |
| Thank-you page | `src/sections/ThankYou.jsx` |

Project artwork lives in `public/assets/projects/` and tech logos in `public/assets/logos/`.

The four client projects carry a `Live` badge and a *View Project* link, both driven by their `href`. The three infrastructure builds have no `href` and open the contact section instead.

> **Logo:** the full lockup is used in the footer, the cube mark in the navbar, and `favicon.png` in the browser tab. Replace all three if the branding changes.

> **Social links:** the LinkedIn and GitHub entries in `mySocials` currently point to the platform homepages. Replace them with the real profile URLs before going live.

---

## Contact form

Submissions are posted to [FormSubmit](https://formsubmit.co) and delivered to **logicweb48@gmail.com**. On success the visitor is redirected to `/thank-you`.

1. Fill the form once from a **deployed** copy of the site (FormSubmit does not send activation mail to `localhost` reliably).
2. FormSubmit emails **logicweb48@gmail.com** with an activation link. Click it once.
3. Every submission after that arrives in the inbox with the visitor's name, email, selected service and message.

To use a different provider (EmailJS, Web3Forms, your own API), set `VITE_CONTACT_ENDPOINT` in a `.env` file to any endpoint that accepts a JSON `POST`:

```bash
VITE_CONTACT_ENDPOINT=https://your-endpoint.example.com/contact
```

The payload is `{ name, email, service, message, _subject, _template, _captcha }`. The redirect happens client-side after a successful (`2xx`) response.

### `/thank-you` routing

`src/main.jsx` renders the thank-you page when the path ends with `/thank-you`. Static hosts need SPA fallback configured — this repo already includes:

- `public/_redirects` for Netlify
- `vercel.json` for Vercel

For GitHub Pages or another host, add an equivalent rewrite to `index.html`.

---

## Deploying

The build output is a static site in `dist/`. Drag it into Netlify, connect the repo to Vercel, or copy it to any Linux VPS behind Nginx.

If you host it yourself, point the site root at `dist/` and add `try_files $uri /index.html;` so the thank-you route resolves.

---

## Contributors

- **Lakshya** — [@Lakshya407](https://github.com/Lakshya407) · design, development and deployment

---

## Copyright

© 2026 Lakshya · web-logic. All rights reserved.

The name, logo, copy, project artwork and screenshots in this repository are the property of the author and may not be reused without permission.
