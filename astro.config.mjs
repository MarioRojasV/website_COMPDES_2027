// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.compdes.org',
  base: '/compdes2027',
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
