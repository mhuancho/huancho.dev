// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  // Dominio real del sitio: de aqui salen canonical, og:url y el Sitemap de robots.txt.
  site: 'https://huancho.dev',
  integrations: [
    tailwind(),
    robotsTxt({
      // El sitemap se mantiene a mano en public/sitemap.xml (sin dependencias extra).
      sitemap: ['https://huancho.dev/sitemap.xml'],
      policy: [{ userAgent: '*', allow: '/', disallow: ['/components'] }],
    }),
  ],
});