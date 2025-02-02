// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: "https://github.com/Davidgm09/ReplicaTesla.git", 
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  }
});