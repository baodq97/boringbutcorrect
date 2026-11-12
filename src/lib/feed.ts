import rss from '@astrojs/rss';
import { getPosts, postUrl } from './posts';
import { ui, type Lang } from './i18n';

export async function feed(lang: Lang, site: URL) {
  const posts = await getPosts(lang);
  return rss({
    title: 'Boring But Correct',
    description: ui[lang].feedDescription,
    site,
    items: posts.toReversed().map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.published,
      link: postUrl(p),
    })),
    customData: `<language>${ui[lang].htmlLang}</language>`,
    trailingSlash: false,
  });
}
