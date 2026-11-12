import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const schema = z.object({
  title: z.string(),
  seoTitle: z.string().max(60).optional(),
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
});

const posts = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/posts' }), schema });

const postsEn = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts/en' }),
  schema: schema.extend({ translationOf: z.string() }),
});

export const collections = { posts, postsEn };
