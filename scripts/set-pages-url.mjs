import { readFileSync, writeFileSync } from 'node:fs';

const raw = process.env.SITE_URL;
if (!raw) throw new Error('GitHub Pages did not provide a website URL.');
const url = new URL(raw);
if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) {
  throw new Error('Expected a clean HTTPS website URL.');
}
const base = url.href.replace(/\/+$/, '') + '/';
const file = new URL('../site/index.html', import.meta.url);
let html = readFileSync(file, 'utf8');
function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}
for (const [property, content] of [
  ['og:url', base],
  ['og:image', new URL('assets/rouge.webp', base).href],
]) {
  const tag = `<meta property="${property}" content="${escapeAttribute(content)}">`;
  const pattern = new RegExp(`<meta\\s+property="${property}"[^>]*>`);
  if (pattern.test(html)) html = html.replace(pattern, tag);
  else html = html.replace('</head>', `  ${tag}\n</head>`);
}
writeFileSync(file, html);
console.log('Configured website metadata for ' + base);
