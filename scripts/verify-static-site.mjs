import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { PAGE_TO_PATH } from '../lib/routes.js';
import { PAGE_SEO, SITE_URL, HOME_TITLE, DEFAULT_DESCRIPTION } from '../lib/seo.js';

const root = new URL('../dist/', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');
const escape = (s) => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const routes = Object.entries(PAGE_TO_PATH);
assert.equal(routes.length, 23, 'Keep all 23 published URLs');
const homeLinks = new Set();

for (const [page, path] of routes) {
  const html = await read(path === '/' ? 'index.html' : `${path.slice(1)}/index.html`);
  assert.ok(!html.includes('\u0000') && !html.includes('\uFFFD'), `${path}: intact UTF-8 content`);
  const seo = PAGE_SEO[page];
  const title = seo.title ? `${seo.title} | Germán Montenegro Fisioterapia Deportiva` : HOME_TITLE;
  assert.ok(html.includes(`<title>${escape(title)}</title>`), `${path}: original title`);
  assert.ok(html.includes(`name="description" content="${escape(seo.description || DEFAULT_DESCRIPTION)}"`), `${path}: description`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${path}: one canonical`);
  const canonical = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`), `${path}: correct canonical`);
  assert.ok(html.includes('name="robots" content="index, follow"'), `${path}: indexable`);
  assert.ok(html.includes('lang="es"'), `${path}: language`);
  assert.ok(html.includes('xyptqAjEss_aO6dTu81bKRRgfubvYQDeBGPj0cSrLM4'), `${path}: Search Console verification`);
  assert.ok(html.includes('G-E0CL52FNCX'), `${path}: analytics`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: one H1 in static HTML`);
  const body = html.split('<body>')[1].replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, '').replace(/<[^>]*>/g, ' ');
  assert.ok(body.split(/\s+/).filter(Boolean).length > 150, `${path}: substantive content without JavaScript`);
  assert.ok(!html.includes('/_next/') && !html.includes('__next_f'), `${path}: no Next runtime`);
  assert.ok(!html.includes('client="only"'), `${path}: must prerender content`);
  for (const match of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    assert.ok(Object.values(PAGE_TO_PATH).includes(match[1]), `${path}: broken internal route ${match[1]}`);
    if (page === 'home') homeLinks.add(match[1]);
  }
  for (const match of html.matchAll(/(?:src|href)="(\/_astro\/[^"?#]+)"/g)) {
    await access(new URL(match[1].slice(1), root));
  }
}

for (const [, path] of routes) assert.ok(homeLinks.has(path), `Home links to ${path} without JavaScript`);
const expectedUrls = routes.map(([, path]) => `${SITE_URL}${path}`);
const sitemap = await read('sitemap.xml');
assert.ok(sitemap.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'));
assert.deepEqual([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]), expectedUrls);
assert.equal(await read('sitemap-1.xml'), sitemap, 'Keep the submitted sitemap alias');
assert.deepEqual((await read('sitemap.txt')).trim().split('\n'), expectedUrls);
const robots = await read('robots.txt');
assert.ok(robots.includes('User-agent: *\nAllow: /'));
assert.ok(robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`));
assert.ok((await read('404.html')).includes('name="robots" content="noindex, follow"'));
await access(new URL('c8ef2bc0d1248ba8bb499175c8225f83.txt', root));
console.log('Verified: 23 static HTML pages, metadata, content, crawlable links, assets, sitemaps, robots and 404.');
