import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {PAGE_TO_PATH} from '../lib/routes.js';
const root=new URL('../dist/',import.meta.url),base='https://germanmontenegro.fit';
const pages=new Map();for(const path of Object.values(PAGE_TO_PATH)){const html=await readFile(new URL((path==='/'?'index':path.slice(1))+'.html',root),'utf8');pages.set(path,{html,ids:new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]))});}
let links=0;
for(const [path,{html}] of pages){for(const [,raw] of html.matchAll(/\bhref="([^"]+)"/g)){const url=new URL(raw.replace(/&amp;/g,'&'),base+path);if(!['germanmontenegro.fit','www.germanmontenegro.fit'].includes(url.hostname))continue;links++;let target=url.pathname;if(target!=='/')target=target.replace(/\/$/,'');if(pages.has(target)){if(url.hash)assert.ok(pages.get(target).ids.has(decodeURIComponent(url.hash.slice(1))),`${path}: missing anchor ${raw}`);}else await access(new URL(url.pathname.slice(1),root)).catch(()=>assert.fail(`${path}: missing internal target ${raw}`));}}
const xml=await readFile(new URL('sitemap.xml',root),'utf8');const urls=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);assert.equal(urls.length,new Set(urls).size,'No duplicate sitemap URLs');for(const url of urls){assert.equal(new URL(url).origin,base);assert.ok(pages.has(new URL(url).pathname));}console.log(`Passed: ${links} internal link occurrences, all cross-page anchors and ${urls.length} unique canonical sitemap URLs.`);
