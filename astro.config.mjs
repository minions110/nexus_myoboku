// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lightsteelblue-crow-139650.hostingersite.com',

  output: 'static',

  integrations: [
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});