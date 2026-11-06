import type { APIRoute } from 'astro';
import { getPosts } from '../lib/posts';
import { isoDate } from '../lib/stations';
import { toMarkdown, withBom } from '../lib/markdown';

export async function getStaticPaths() {
  const posts = await getPosts();
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export const GET: APIRoute = ({ props, site }) => {
  const { id, data, body = '' } = props.post;
  const abs = (path: string) => new URL(path, site).href;
  const meta = [
    `URL: ${abs(`/${id}`)}`,
    `Đăng: ${isoDate(data.published)} · Kiểm chứng lần cuối: ${isoDate(data.verified)}`,
    ...(data.image ? [`Ảnh: ${abs(data.image)}`] : []),
    ...(data.video ? [`Video đi kèm (${data.video.duration}): https://www.youtube.com/watch?v=${data.video.id}`] : []),
  ];
  const list = data.sources.map((s) => `- [${s.title}](${s.url})`).join('\n');
  const sources = list ? `\n\n## Tài liệu tham khảo\n\n${list}` : '';
  const text = `# ${data.title}\n\n> ${data.description}\n\n${meta.join('\n')}\n\n${toMarkdown(body, site!)}${sources}\n`;
  return new Response(withBom(text), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
