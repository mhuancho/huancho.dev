/**
 * Tailwind via PostCSS, sin la integracion @astrojs/tailwind.
 * Vite (y por tanto Astro) aplica esta configuracion tanto a los .css importados
 * como a los bloques <style> de los .astro, asi que los @apply siguen funcionando.
 */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
