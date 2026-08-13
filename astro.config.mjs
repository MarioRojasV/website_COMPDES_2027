// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://compdes.example.com', // TODO: replace with the real domain
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false, // Spanish stays at the root, English at /en/
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
