import type { APIRoute } from 'astro';
import { getPosts, postUrl } from '../lib/posts';
import { withBom } from '../lib/markdown';

export const GET: APIRoute = async ({ site }) => {
  const list = async (lang: 'vi' | 'en') =>
    (await getPosts(lang)).toReversed().map((p) => `- [${p.data.title}](${new URL(`${postUrl(p)}.md`, site)}): ${p.data.description}`).join('\n');
  const vi = await list('vi');
  const en = await list('en');
  const english = en
    ? `\n\n## Posts in English\n\nTranslations of the Vietnamese posts, with the same claims, sources and verification status.\n\n${en}\n\n- [How we verify](${new URL('/en/how-we-verify', site)}): source marks, the three statuses and the verification date.`
    : '';
  const text = `# Boring But Correct\n\n> Business technology, explained plainly. Mọi con số và phát biểu đều có nguồn kiểm được.\n\n## Bài\n\n${vi}\n\n## Trang\n\n- [Cách blog kiểm chứng](${new URL('/cach-kiem-chung', site)}): ký hiệu nguồn, ba trạng thái và ngày kiểm chứng.${english}\n`;
  return new Response(withBom(text), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
