export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const wantsMarkdown = /\btext\/markdown\b/i.test(request.headers.get('Accept') ?? '');
    if (wantsMarkdown) {
      const md = await env.ASSETS.fetch(new URL(url.pathname === '/' ? '/llms.txt' : `${url.pathname}.md`, url));
      if (md.ok) {
        return new Response(md.body, {
          headers: { 'Content-Type': 'text/markdown; charset=utf-8', Vary: 'Accept', 'Content-Signal': CONTENT_SIGNAL },
        });
      }
    }
    const res = await env.ASSETS.fetch(request);
    const out = new Response(res.body, res);
    out.headers.append('Vary', 'Accept');
    return out;
  },
};

const CONTENT_SIGNAL = 'ai-train=no, search=yes, ai-input=yes';
