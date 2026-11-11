// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Served at the root of https://nishantroy.github.io. For a custom domain,
// change `site` only (and add public/CNAME); nothing else is host-specific.
export default defineConfig({
  site: 'https://nishantroy.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
