import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {PAGE_TO_PATH} from '../lib/routes.js';
const data=JSON.parse(await readFile(new URL('../lib/experience-content.json',import.meta.url),'utf8'));
const text=s=>String(s).replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
for(const [page,path] of Object.entries(PAGE_TO_PATH)){
 const html=await readFile(new URL('../dist/'+(path==='/'?'index':path.slice(1))+'.html',import.meta.url),'utf8');
 assert.ok(html.includes(page==='metodologia'?'class="mx-page"':'class="rx-page"'),path+': complete page template');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(ids.length,new Set(ids).size,path+': unique IDs');
 for(const m of html.matchAll(/(?:aria-controls|aria-labelledby)="([^"]+)"/g))for(const id of m[1].split(' '))assert.ok(ids.includes(id),path+': control references '+id);
 for(const m of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(m[1]),path+': section '+m[1]);
 const visible=text(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,''));
 assert.ok(!/[—–]/.test(visible),path+': no long dashes in public copy');
 const d=data.injury[page]||data.services[page]||data.sports[page];
 if(d){for(const f of d.faqs)assert.ok(visible.includes(text(f.q)),path+': FAQ '+f.q);for(const r of d.redFlags||[])assert.ok(visible.includes(text(r)),path+': clinical alert');for(const c of d.contra||[])assert.ok(visible.includes(text(c)),path+': contraindication');for(const p of d.phases||[])assert.ok(visible.includes(text(p.title)),path+': treatment phase');}
}
console.log('Verified 23 experience templates, section anchors, accessible references, FAQ coverage and clinical alerts.');
