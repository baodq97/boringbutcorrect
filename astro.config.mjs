import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeSidenotes } from './src/lib/rehype-sidenotes';

const postsDir = new URL('./src/content/posts/', import.meta.url);
const datesIn = (dir, prefix) =>
  readdirSync(new URL(dir, postsDir))
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const text = readFileSync(new URL(dir + f, postsDir), 'utf8');
      const dates = ['published', 'verified'].map((k) => text.match(new RegExp(`^${k}:\\s*(\\S+)`, 'm'))?.[1]);
      return [prefix + f.slice(0, -3), dates.filter(Boolean).sort().at(-1)];
    });
const modified = Object.fromEntries([...datesIn('./', ''), ...(existsSync(new URL('en/', postsDir)) ? datesIn('en/', 'en/') : [])]);
const lastmod = (url) => {
  const path = new URL(url).pathname;
  const latest = (keys) => keys.map((k) => modified[k]).filter(Boolean).sort().at(-1);
  if (path === '/') return latest(Object.keys(modified).filter((k) => !k.startsWith('en/')));
  if (path === '/en') return latest(Object.keys(modified).filter((k) => k.startsWith('en/')));
  return modified[path.slice(1)];
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
