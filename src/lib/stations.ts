export const stations = [
  { n: 1, name: 'Business' },
  { n: 2, name: 'Domain' },
  { n: 3, name: 'Architecture' },
  { n: 4, name: 'Data' },
  { n: 5, name: 'Reporting' },
  { n: 6, name: 'Automation' },
];

export const pad = (n: number) => String(n).padStart(2, '0');

export const formatDate = (d: Date) =>
  `${pad(d.getUTCDate())}/${pad(d.getUTCMonth() + 1)}/${d.getUTCFullYear()}`;

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
