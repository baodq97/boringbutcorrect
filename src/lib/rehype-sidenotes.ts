const STATUS: Record<string, { key: string; label: string }> = {
  verified: { key: 'verified', label: 'Đã kiểm chứng' },
  'có tranh luận': { key: 'disputed', label: 'Có tranh luận' },
  open: { key: 'open', label: 'OPEN' },
};
const STATUS_PREFIX = /^\s*(Verified|Có tranh luận|OPEN)\s*·\s*/i;

type Node = { type: string; tagName?: string; value?: string; properties?: Record<string, any>; children?: Node[] };

const el = (tagName: string, properties: Record<string, any>, children: Node[] = []): Node => ({ type: 'element', tagName, properties, children });
const text = (value: string): Node => ({ type: 'text', value });
const clone = (n: Node): Node => structuredClone(n);

function walk(node: Node, visit: (node: Node, parent?: Node) => void, parent?: Node) {
  visit(node, parent);
  node.children?.forEach((child) => walk(child, visit, node));
}

function parseNote(li: Node) {
  const p = li.children?.find((c) => c.tagName === 'p');
  const content = (p?.children ?? []).filter((c) => !(c.properties && 'dataFootnoteBackref' in c.properties)).map(clone);
  const first = content[0];
  let status;
  if (first?.type === 'text' && first.value) {
    const match = first.value.match(STATUS_PREFIX);
    if (match) {
      status = STATUS[match[1].toLowerCase()];
      first.value = first.value.slice(match[0].length);
    }
  }
  const last = content.at(-1);
  if (last?.type === 'text' && last.value) last.value = last.value.trimEnd();
  return { status, content };
}

const mark = () => el('span', { className: ['mark'], ariaHidden: 'true' });

export function rehypeSidenotes() {
  return (tree: Node) => {
    let section: Node | undefined;
    const notes = new Map<string, ReturnType<typeof parseNote>>();
    const refs: { sup: Node; parent: Node; id: string; n: string }[] = [];

    walk(tree, (node, parent) => {
      if (node.tagName === 'section' && node.properties && 'dataFootnotes' in node.properties) section = node;
      if (node.tagName === 'li' && String(node.properties?.id ?? '').startsWith('user-content-fn-')) {
        notes.set(String(node.properties!.id), parseNote(node));
      }
      if (node.tagName === 'sup' && parent) {
        const a = node.children?.find((c) => c.properties && 'dataFootnoteRef' in c.properties);
        if (a) refs.push({ sup: node, parent, id: String(a.properties!.href).slice(1), n: String(a.children?.[0]?.value ?? '') });
      }
    });
    if (!section) return;

    const placed = new Set<string>();
    for (const { sup, parent, id, n } of refs) {
      const note = notes.get(id);
      if (!note) continue;
      const a = sup.children!.find((c) => c.properties && 'dataFootnoteRef' in c.properties)!;
      a.properties!.href = `#nguon-${n}`;
      a.properties!.ariaLabel = `Nguồn ${n}${note.status ? `, ${note.status.label}` : ''}`;
      sup.properties = { ...sup.properties, className: ['ref'], dataStatus: note.status?.key };
      a.children = [mark(), text(n)];
      const at = parent.children!.indexOf(sup);
      const before = parent.children![at - 1];
      const word = before?.type === 'text' ? before.value!.match(/\S+$/) : null;
      let anchor = sup;
      if (word && before) {
        before.value = before.value!.slice(0, -word[0].length);
        anchor = el('span', { className: ['nw'] }, [text(word[0]), sup]);
        parent.children!.splice(at, 1, anchor);
      }
      if (placed.has(id)) continue;
      placed.add(id);
      const side = el('span', { className: ['sn'], id: `nguon-${n}`, dataStatus: note.status?.key }, [
        el('span', { className: ['sn-head'] }, [
          el('a', { className: ['sn-n'], href: `#bang-nguon-${n}`, ariaLabel: `Nguồn ${n} trong bảng nguồn` }, [text(n)]),
          mark(),
          ...(note.status ? [el('span', { className: ['sn-status'] }, [text(note.status.label)])] : []),
        ]),
        el('span', { className: ['sn-body'] }, note.content.map(clone)),
      ]);
      parent.children!.splice(parent.children!.indexOf(anchor) + 1, 0, side);
    }

    const rows = [...notes.entries()].map(([id, note], i) =>
      el('tr', { id: `bang-nguon-${i + 1}`, dataStatus: note.status?.key }, [
        el('td', { className: ['num'] }, [text(String(i + 1))]),
        el('td', { className: ['status'] }, [mark(), text(note.status?.label ?? '')]),
        el('td', {}, note.content),
        el('td', { className: ['back'] }, [el('a', { href: `#${id.replace('user-content-fn-', 'user-content-fnref-')}` }, [text('Về đoạn')])]),
      ]),
    );
    const table = el('table', { className: ['sources'] }, [
      el('thead', {}, [el('tr', {}, ['#', 'Trạng thái', 'Nguồn', ''].map((h) => el('th', { scope: 'col' }, h ? [text(h)] : [el('span', { className: ['sr-only'] }, [text('Liên kết')])])))]),
      el('tbody', {}, rows),
    ]);
    const legend = el(
      'p',
      { className: ['legend'] },
      [
        ...Object.values(STATUS).map((st) => el('span', { dataStatus: st.key }, [mark(), text(st.label)])),
        el('a', { href: '/cach-kiem-chung' }, [text('Cách blog kiểm chứng')]),
      ],
    );
    section.children = section.children!.flatMap((c) => (c.tagName === 'ol' ? [legend, table] : [c]));
  };
}
