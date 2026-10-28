import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {formatStat} from '../lib/format-stat.js';
const d=JSON.parse(await readFile(new URL('../lib/experience-content.json',import.meta.url),'utf8'));
assert.equal(formatStat('3','academias'),'3 academias');assert.equal(formatStat('Azul','cinturón'),'Cinturón azul');assert.equal(formatStat('500','+'),'500+');assert.equal(formatStat('4.9','/5'),'4.9/5');
for(const [page,data] of Object.entries(d.sports)){const html=await readFile(new URL('../dist/deportes/'+page+'.html',import.meta.url),'utf8');for(const stat of data.stats){assert.ok(html.includes('>'+formatStat(stat.value,stat.suffix)+'<'),page+': correct statistic spacing');if(stat.suffix&&/^[a-záéíóúñ]/i.test(stat.suffix))assert.ok(!html.includes('>'+stat.value+stat.suffix+'<'),page+': no joined words');}}
const home=await readFile(new URL('../dist/index.html',import.meta.url),'utf8');for(const stat of d.locals.TrustNumbers.numbers)assert.ok(home.includes('>'+formatStat(stat.value,stat.suffix)+'<'),'Home statistic');console.log('Verified statistic wording and spacing across four sports and homepage.');
