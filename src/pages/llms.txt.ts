import type { APIRoute } from 'astro';
import { getPosts } from '../lib/posts';
import { withBom } from '../lib/markdown';

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getPosts()).toReversed();
  const lines = posts.map((p) => `- [${p.data.title}](${new URL(`/${p.id}.md`, site)}): ${p.data.description}`);
  const text = `# Boring But Correct\n\n> Business technology, explained plainly. Mọi con số và phát biểu đều có nguồn kiểm được.\n\n## Bài\n\n${lines.join('\n')}\n\n## Trang\n\n- [Cách blog kiểm chứng](${new URL('/cach-kiem-chung', site)}): ký hiệu nguồn, ba trạng thái và ngày kiểm chứng.\n`;
  return new Response(withBom(text), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
