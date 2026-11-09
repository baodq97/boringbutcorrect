import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeSidenotes } from './src/lib/rehype-sidenotes';

const postsDir = new URL('./src/content/posts/', import.meta.url);
const modified = Object.fromEntries(
  readdirSync(postsDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const text = readFileSync(new URL(f, postsDir), 'utf8');
      const dates = ['published', 'verified'].map((k) => text.match(new RegExp(`^${k}:\\s*(\\S+)`, 'm'))?.[1]);
      return [f.slice(0, -3), dates.filter(Boolean).sort().at(-1)];
    }),
);
const lastmod = (url) => {
  const path = new URL(url).pathname;
  return path === '/' ? Object.values(modified).filter(Boolean).sort().at(-1) : modified[path.slice(1)];
};

export default defineConfig({
  site: 'https://boringbutcorrect.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ serialize: (item) => ({ ...item, lastmod: lastmod(item.url) }) })],
  markdown: {
    remarkRehype: {
      footnoteLabel: 'Nguồn trong bài',
      footnoteLabelProperties: {},
      footnoteBackLabel: 'Về đoạn',
    },
    rehypePlugins: [rehypeSidenotes],
  },
});
