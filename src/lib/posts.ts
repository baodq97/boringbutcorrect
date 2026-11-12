import { getCollection, type CollectionEntry } from 'astro:content';
import { root, type Lang } from './i18n';
import { pad } from './stations';

export type Post = CollectionEntry<'posts'> | CollectionEntry<'postsEn'>;
export type Numbered = { post: Post; no: string };

export const langOfPost = (p: Post): Lang => (p.collection === 'postsEn' ? 'en' : 'vi');
export const postUrl = (p: Post) => `${root(langOfPost(p))}/${p.id}`;

async function viPosts() {
  const all = await getCollection('posts');
  const episode = (p: Post) => p.data.video?.episode ?? Infinity;
  return all.sort((a, b) => a.data.published.getTime() - b.data.published.getTime() || episode(a) - episode(b) || a.id.localeCompare(b.id));
}

export async function getNumbered(lang: Lang = 'vi'): Promise<Numbered[]> {
  const vi = await viPosts();
  if (lang === 'vi') return vi.map((post, i) => ({ post, no: pad(i) }));
  const at = new Map(vi.map((p, i) => [p.id, i]));
  const en = await getCollection('postsEn');
  for (const p of en) if (!at.has(p.data.translationOf)) throw new Error(`en/${p.id}: translationOf "${p.data.translationOf}" is not a Vietnamese post`);
  return en
    .map((post) => ({ post, i: at.get(post.data.translationOf)! }))
    .sort((a, b) => a.i - b.i)
    .map(({ post, i }) => ({ post, no: pad(i) }));
}

export async function getPosts(lang: Lang = 'vi') {
  return (await getNumbered(lang)).map((n) => n.post);
}

export async function getTranslation(post: Post): Promise<Post | undefined> {
  if (post.collection === 'postsEn') return (await getCollection('posts')).find((p) => p.id === post.data.translationOf);
  return (await getCollection('postsEn')).find((p) => p.data.translationOf === post.id);
}

export const readingMinutes = (body = '') => Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200));

export async function postPaths(lang: Lang) {
  const list = await getNumbered(lang);
  return Promise.all(
    list.map(async ({ post, no }, i) => ({
      params: { slug: post.id },
      props: {
        post,
        no,
        prev: list[i - 1],
        next: list[i + 1],
        related: list.filter((n) => n.post.data.station === post.data.station && n.post.id !== post.id).toReversed().slice(0, 3).map((n) => n.post),
        translation: await getTranslation(post),
      },
    })),
  );
}
