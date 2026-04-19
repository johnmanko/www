import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const resume = defineCollection({
  loader: glob({
    base: './src/content/resume',
    pattern: '**/*.{md,mdx}',
  }),
});

export const collections = { resume };