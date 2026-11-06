import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    station: z.number().int().min(1).max(6),
    published: z.coerce.date(),
    verified: z.coerce.date(),
    image: z.string().optional(),
    video: z
      .object({
        id: z.string(),
        duration: z.string().regex(/^\d+:\d{2}$/),
        episode: z.number().int().min(0).optional(),
      })
      .optional(),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { posts };
