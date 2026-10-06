import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist/client');
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
const errors=[];
for(const url of urls){
 const pathname=new URL(url).pathname;
 const file=path.join(root,pathname,'index.html');
 if(!fs.existsSync(file)){errors.push('Missing '+pathname);continue;}
 const html=fs.readFileSync(file,'utf8');
 for(const [label,re] of [['page title',/<title>[^<]+CJ Abarca<\/title>/],['description',/<meta name="description" content="[^"]+"/],['canonical',/<link rel="canonical" href="[^"]+"/],['main heading',/<h1[ >]/],['Open Graph title',/<meta property="og:title"/]])if(!re.test(html))errors.push(pathname+': missing '+label);
 for(const m of html.matchAll(/(?:src|ngsrc)="(\/images\/[^"?]+)"/gi)){if(!fs.existsSync(path.join(root,decodeURI(m[1]))))errors.push(pathname+': missing asset '+m[1]);}
}
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log(`Verified ${urls.length} prerendered pages: titles, descriptions, canonical URLs, Open Graph metadata, main headings, and local images.`);
