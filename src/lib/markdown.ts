import { ui, type Lang } from './i18n';
import { langOfPost, postUrl, type Post } from './posts';
import { isoDate } from './stations';

const BOM = '﻿';
let L: (typeof ui)[Lang]['md'] = ui.vi.md;

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

type El = { cls: string[]; html: string; attrs: string };

const elementsOf = (html: string): El[] =>
  [...html.matchAll(/<(p|span|div)\b([^>]*)>([\s\S]*?)<\/\1>/g)].map((m) => ({
    cls: m[2].match(/class="([^"]*)"/)?.[1].split(/\s+/) ?? [],
    html: m[3],
    attrs: m[2],
  }));

// Everything between the grid's opening tag and its closing tag, so its children can be read in order.
const gridOf = (body: string, name: string) => {
  const open = body.match(new RegExp('<div class="' + name + '[^"]*">'));
  if (!open) return '';
  const start = open.index! + open[0].length;
  return body.slice(start, body.lastIndexOf('</div>'));
};

const tableRow = (cells: string[]) => '| ' + cells.map((c) => c.replace(/\|/g, '\\|')).join(' | ') + ' |';
const table = (rows: string[][]) =>
  [tableRow(rows[0]), tableRow(rows[0].map(() => '---')), ...rows.slice(1).map(tableRow)].join('\n');
const red = (text: string) => '**' + text + '** ' + L.red;

// Columns line up with the stages above them, which is the point of these maps, so they stay a table.
function vmapTable(body: string) {
  const cols = /<div class="vmap vmap-two/.test(body) ? 2 : /<div class="vmap vmap-three/.test(body) ? 3 : 4;
  const rows: { label: string; cells: string[]; stages: boolean }[] = [];
  for (const el of elementsOf(gridOf(body, 'vmap'))) {
    const has = (c: string) => el.cls.includes(c);
    if (has('vmap-l') || has('vmap-lgap')) {
      rows.push({ label: has('vmap-l') ? textOf(el.html) : '', cells: [], stages: false });
      continue;
    }
    const row = rows[rows.length - 1];
    if (has('vmap-steps')) {
      const steps = elementsOf(el.html);
      row.cells.push(L.wholeRow + steps.map((s) => textOf(s.html) + (s.cls.includes('wait') ? L.dashed : '')).join(' → '));
    } else if (has('gov-link')) {
      const [down, up] = elementsOf(el.html);
      row.cells.push(L.wholeRow + '↓ ' + textOf(down.html) + '; ↑ ' + textOf(up.html));
    } else {
      const text = has('hit') ? red(textOf(el.html)) : textOf(el.html);
      if (has('vmap-w')) row.cells.push(L.wholeRow + text);
      else if (has('vmap-2')) row.cells.push(text, text);
      else row.cells.push(text);
      if (has('vmap-s') && row.cells.length === 1) row.stages = true;
    }
  }
  const out = rows.map((r) => [r.label, ...r.cells, ...Array(Math.max(0, cols - r.cells.length)).fill('')]);
  const head = rows[0].stages ? [] : [[L.layer, ...Array.from({ length: cols }, (_, i) => L.column + ' ' + (i + 1))]];
  if (rows[0].stages && !out[0][0]) out[0][0] = L.layer;
  return table([...head, ...out]);
}

const CANVAS_GROUP: Record<string, 'serve' | 'value' | 'market' | 'money'> = {
  kp: 'serve', ka: 'serve', kr: 'serve', vp: 'value', cr: 'market', ch: 'market', cs: 'market', co: 'money', re: 'money',
};

function cellParts(el: El) {
  const parts = elementsOf(el.html);
  return [textOf(parts.find((p) => p.cls.includes('canvas-n'))?.html ?? ''), textOf(parts.find((p) => p.cls.includes('canvas-d'))?.html ?? '')];
}

function canvasTable(body: string) {
  const cells = elementsOf(gridOf(body, 'canvas')).filter((el) => el.cls.includes('canvas-cell'));
  return table([
    [L.group, L.cell, L.content],
    ...cells.map((el) => {
      const [name, content] = cellParts(el);
      const area = el.attrs.match(/grid-area:\s*(\w+)/)?.[1] ?? '';
      return [CANVAS_GROUP[area] ? L.canvas[CANVAS_GROUP[area]] : '', el.cls.includes('hit') ? red(name) : name, content];
    }),
  ]);
}

function porterTable(body: string) {
  let group = '';
  const rows: string[][] = [[L.group, L.activity, L.example]];
  for (const el of elementsOf(gridOf(body, 'porter'))) {
    if (el.cls.includes('porter-h')) group = textOf(el.html);
    else if (el.cls.includes('canvas-cell')) rows.push([group, ...cellParts(el)]);
    else if (el.cls.includes('porter-m')) rows.push([L.result, textOf(el.html), '']);
  }
  return table(rows);
}

function matrixTable(body: string) {
  const els = elementsOf(gridOf(body, 'dmx'));
  const rows = [[L.decision, ...els.filter((e) => e.cls.includes('dmx-h')).map((e) => textOf(e.html))]];
  const cols = rows[0].length - 1;
  for (const el of els) {
    if (el.cls.includes('dmx-n')) rows.push([textOf(el.html)]);
    else if (el.cls.includes('dmx-c')) rows[rows.length - 1].push(el.cls.includes('on') ? '●' : '');
    else if (el.cls.includes('dmx-r')) rows[rows.length - 1].push(L.wholeRow + red(textOf(el.html)), ...Array(cols - 1).fill(''));
  }
  return table(rows);
}

// Boxes inside boxes read as a nested list, one indent per box.
function nestList(body: string) {
  let depth = 0;
  const lines: string[] = [];
  for (const line of body.split('\n').map((l) => l.trim())) {
    if (line.startsWith('<div class="nest">')) depth++;
    else if (line.startsWith('</div>')) depth--;
    else if (line.startsWith('<p class="nest-t"')) lines.push('  '.repeat(Math.max(0, depth - 1)) + '- ' + textOf(line));
    else if (line.startsWith('<p class="vmap-c')) lines.push('  '.repeat(depth) + '- ' + textOf(line));
  }
  return lines.join('\n');
}

function plainLines(body: string) {
  let grouped = false;
  return body
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !/^<\/?(figure|div|ol|dl)\b[^>]*>$/.test(l) && !l.startsWith('<figure') && !l.includes('aria-hidden="true"'))
    .map((l) => {
      const t = /^<[a-z]+ class="[^"]*\bhit\b/.test(l) ? textOf(l) + ' ' + L.red : textOf(l);
      if (/^<p class="[^"]*-h"/.test(l)) {
        grouped = true;
        return '- **' + t + '**';
      }
      return grouped && l.startsWith('<li') ? '  - ' + t : '- ' + t;
    })
    .filter((l) => l.replace(/[-*\s]/g, ''))
    .join('\n');
}

function figureBody(body: string) {
  if (/<div class="porter"/.test(body)) return porterTable(body);
  if (/<div class="canvas"/.test(body)) return canvasTable(body);
  if (/<div class="dmx"/.test(body)) return matrixTable(body);
  if (/<div class="vmap/.test(body)) return vmapTable(body);
  if (/<div class="nest"/.test(body)) return nestList(body);
  const label = body.match(/aria-label="([^"]+)"/)?.[1];
  const lines = plainLines(body);
  return [label && L.describe + ': ' + decode(label), lines].filter(Boolean).join('\n\n');
}

function figureToMarkdown(html: string) {
  const caption = html.match(/<figcaption>([\s\S]*?)<\/figcaption>/)?.[1] ?? '';
  const body = html.replace(/<figcaption>[\s\S]*?<\/figcaption>/, '');
  const [no, ...rest] = textOf(caption).split(new RegExp(`(?<=^${L.figure} \\d+)\\s`));
  return '**' + no + '.** ' + rest.join(' ') + '\n\n' + figureBody(body);
}

export function toMarkdown(body: string, site: URL, lang: Lang = 'vi') {
  L = ui[lang].md;
  const abs = (path: string) => new URL(path, site).href;
  return body
    .replace(/<figure[\s\S]*?<\/figure>/g, figureToMarkdown)
    .replace(/\]\((\/[^)\s]*)\)/g, (_, path) => `](${abs(path)})`)
    .replace(/(src|href)="(\/[^"]*)"/g, (_, attr, path) => `${attr}="${abs(path)}"`);
}

export const withBom = (text: string) => BOM + text;

export function markdownTwin(post: Post, site: URL) {
  const { data, body = '' } = post;
  const lang = langOfPost(post);
  const t = ui[lang].md;
  const abs = (path: string) => new URL(path, site).href;
  const meta = [
    `URL: ${abs(postUrl(post))}`,
    `${t.published}: ${isoDate(data.published)} · ${t.verified}: ${isoDate(data.verified)}`,
    ...(data.image ? [`${t.image}: ${abs(data.image)}`] : []),
    ...(data.video ? [`${t.video} (${data.video.duration}): https://www.youtube.com/watch?v=${data.video.id}`] : []),
  ];
  const list = data.sources.map((s) => `- [${s.title}](${s.url})`).join('\n');
  const sources = list ? `\n\n## ${ui[lang].refs}\n\n${list}` : '';
  const text = `# ${data.title}\n\n> ${data.description}\n\n${meta.join('\n')}\n\n${toMarkdown(body, site, lang)}${sources}\n`;
  return new Response(withBom(text), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
