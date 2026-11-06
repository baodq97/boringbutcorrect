import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPosts } from '../lib/posts';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts();
  return rss({
    title: 'Boring But Correct',
    description: 'Business technology, explained plainly. Mọi phát biểu đều có nguồn kiểm được.',
    site: site!,
    items: posts.toReversed().map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.published,
      link: `/${p.id}`,
    })),
    customData: '<language>vi</language>',
    trailingSlash: false,
  });
};
