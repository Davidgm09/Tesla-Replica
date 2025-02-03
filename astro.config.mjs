// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({ 
  site: 'https://davidgm09.github.io',
  base: 'Tesla-Replica',
  vite: {
    plugins: [tailwindcss()]
  }
});