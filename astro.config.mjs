// @ts-check
import { defineConfig } from 'astro/config'

import robotsTxt from "astro-robots-txt"

// Tailwind ya no va como integracion de Astro: @astrojs/tailwind solo soporta
// Astro 3/4/5 y hacia fallar `npm install` en Netlify con Astro 7.
// Ahora se procesa con PostCSS (postcss.config.mjs) + src/styles/global.css.

// https://astro.build/config
export default defineConfig({
  // Dominio real del sitio: de aqui salen canonical, og:url y el Sitemap de robots.txt.
  site: 'https://huancho.dev',
  integrations: [
    robotsTxt({
      // El sitemap se mantiene a mano en public/sitemap.xml (sin dependencias extra).
      sitemap: ['https://huancho.dev/sitemap.xml'],
      policy: [{ userAgent: '*', allow: '/', disallow: ['/components'] }],
    }),
  ],
});