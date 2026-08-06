import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://queerpathways.org';
const postsPath = join(__dirname, '../src/data/posts-data.json');
const outPath = join(__dirname, '../public/feed.xml');

const posts = JSON.parse(readFileSync(postsPath, 'utf-8'));
const sorted = posts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

const escXml = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const toRfc2822 = iso => new Date(iso).toUTCString();

const items = sorted.map(p => `
  <item>
    <title>${escXml(p.title)}</title>
    <link>${escXml(p.url)}</link>
    <description>${escXml(p.description)}</description>
    <pubDate>${toRfc2822(p.pubDate)}</pubDate>
    <guid isPermaLink="true">${escXml(p.url)}</guid>
    <category>${escXml(p.pillar)}</category>
  </item>`).join('');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Queer Pathways Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Pathways to Presence — clinical writing for the Double-Outsider.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, xml, 'utf-8');
console.log(`✓ feed.xml generated with ${sorted.length} posts`);
