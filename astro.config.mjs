import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeSidenotes } from './src/lib/rehype-sidenotes';

const postsDir = new URL('./src/content/posts/', import.meta.url);
const verified = Object.fromEntries(
  readdirSync(postsDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => [f.slice(0, -3), readFileSync(new URL(f, postsDir), 'utf8').match(/^verified:\s*(\S+)/m)?.[1]]),
);
const lastmod = (url) => {
  const path = new URL(url).pathname;
  return path === '/' ? Object.values(verified).filter(Boolean).sort().at(-1) : verified[path.slice(1)];
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
