const BOM = '﻿';

const decode = (s: string) =>
  s.replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&');

const textOf = (html: string) =>
  decode(
    html
      .replace(/<small[^>]*>/g, ' — ')
      .replace(/<\/p>\s*<p[^>]*>/g, ' — ')
      .replace(/<\/p>\s*<(div|dl)[^>]*>/g, ': ')
      .replace(/<\/strong>/g, ':</strong>')
      .replace(/<\/span>\s*<span[^>]*>/g, '; ')
      .replace(/<\/dd>\s*<\/div>\s*<div[^>]*>/g, '; ')
      .replace(/<\/dt>\s*<dd[^>]*>/g, ': ')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .replace(/\s+([:;,.])/g, '$1')
    .trim();

function figureToMarkdown(html: string) {
  const caption = html.match(/<figcaption>([\s\S]*?)<\/figcaption>/)?.[1] ?? '';
  const body = html.replace(/<figcaption>[\s\S]*?<\/figcaption>/, '');
  const label = body.match(/aria-label="([^"]+)"/)?.[1];
  let grouped = false;
  const lines = label
    ? [`- ${decode(label)}`]
    : body
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l && !/^<\/?(figure|div|ol|dl)\b[^>]*>$/.test(l) && !l.includes('aria-hidden="true"'))
        .map((l) => {
          const t = textOf(l);
          if (/^<p class="[^"]*-h"/.test(l)) {
            grouped = true;
            return `- **${t}**`;
          }
          return grouped && l.startsWith('<li') ? `  - ${t}` : `- ${t}`;
        })
        .filter((l) => l.replace(/[-*\s]/g, ''));
  const [no, ...rest] = textOf(caption).split(/(?<=^Hình \d+)\s/);
  return `**${no}.** ${rest.join(' ')}\n\n${lines.join('\n')}`;
}

export function toMarkdown(body: string, site: URL) {
  const abs = (path: string) => new URL(path, site).href;
  return body
    .replace(/<figure[\s\S]*?<\/figure>/g, figureToMarkdown)
    .replace(/\]\((\/[^)\s]*)\)/g, (_, path) => `](${abs(path)})`)
    .replace(/(src|href)="(\/[^"]*)"/g, (_, attr, path) => `${attr}="${abs(path)}"`);
}

export const withBom = (text: string) => BOM + text;
