// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import aws from "astro-sst";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.johnmanko.com',
  output: "server",
  build: {
    server: './',
    serverEntry: 'index.mjs',
  },
  adapter: aws({
    deploymentStrategy: "regional",
  }),
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});