import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export async function getPosts() {
  const all = await getCollection('posts');
  const episode = (p: Post) => p.data.video?.episode ?? Infinity;
  return all.sort((a, b) => a.data.published.getTime() - b.data.published.getTime() || episode(a) - episode(b) || a.id.localeCompare(b.id));
}

export const readingMinutes = (body = '') => Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200));
