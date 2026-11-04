import { defineConfig } from 'vite';

export default defineConfig({
  appType: 'mpa',
  base: './',
  build: {
    outDir: 'docs',
  },
});