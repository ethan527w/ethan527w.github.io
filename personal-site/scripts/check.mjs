import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join, extname } from 'node:path';
const root = resolve('dist');
async function walk(dir) { let result=[]; for(const name of await readdir(dir)){const path=join(dir,name);if((await stat(path)).isDirectory())result.push(...await walk(path));else result.push(path);}return result; }
const files = await walk(root);
const pages = files.filter(x=>x.endsWith('.html'));
const errors=[];
for(const page of pages){
  const html=await readFile(page,'utf8');
  if(!html.includes('<h1>')||!html.includes('<title>'))errors.push(`${page}: missing document heading/title`);
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
  if(new Set(ids).size!==ids.length)errors.push(`${page}: duplicate IDs`);
  for(const [,href] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
    if(!href.startsWith('/')||href.startsWith('//'))continue;
    const cleanPath=href.split(/[?#]/,1)[0];
    const target=join(root,cleanPath.endsWith('/')?cleanPath+'index.html':cleanPath);
    try{await stat(target);}catch{errors.push(`${page}: broken local reference ${href}`);}
  }
  if(/href="#"|href="javascript:|Lorem ipsum|TODO/.test(html))errors.push(`${page}: unfinished link or copy`);
}
const assets=files.filter(x=>['.js','.css','.svg'].includes(extname(x)));
const sizes=await Promise.all(assets.map(async path=>[path,(await stat(path)).size]));
const bytes=sizes.reduce((n,[,size])=>n+size,0);
if(bytes>100000)errors.push(`Runtime assets exceed 100 KB: ${bytes}`);
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log(`Verified ${pages.length} HTML documents: local links, assets, headings, IDs. Runtime assets: ${(bytes/1024).toFixed(1)} KB (excluding optional web fonts).`);
