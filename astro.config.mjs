import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeSidenotes } from './src/lib/rehype-sidenotes';

export default defineConfig({
  site: 'https://boringbutcorrect.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  markdown: {
    remarkRehype: {
      footnoteLabel: 'Nguồn trong bài',
      footnoteLabelProperties: {},
      footnoteBackLabel: 'Về đoạn',
    },
    rehypePlugins: [rehypeSidenotes],
  },
});
