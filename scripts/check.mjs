import assert from 'node:assert/strict';
import {readdir,readFile,stat} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {resolve} from 'node:path';
import {practices,regions} from '../site/shared/data.js';

for (const file of await readdir('site',{recursive:true})) {
  if (!file.endsWith('.js')) continue;
  const check = spawnSync(process.execPath,['--check',resolve('site',file)],{encoding:'utf8'});
  assert.equal(check.status,0,check.stderr ?? file);
}
const names = ['index.html','app.js','home.js','shared/style.css','shared/tokens.css','government/index.js','experience/index.js'];
for (let i=1;i<=7;i++) names.push(`assets/vision-${i}.webp`);
names.push('assets/underwater.webp','assets/demo-1.mp4','assets/demo-2.mp4');
for (const file of names) assert.ok((await stat(resolve('site',file))).size>0,file);
for (const field of ['title','place','confidence','evidence','action']) {
  for (const item of practices) assert.ok(item[field].ar && item[field].en,item.id + ' ' + field);
}
assert.equal(new Set(practices.map(item=>item.id)).size,3);
assert.equal(regions.length,3);
const index = await readFile('site/index.html','utf8');
assert.match(index,/<html lang="ar" dir="rtl">/);
assert.match(index,/src="app.js"/);
const demo = await import('../site/experience/index.js');
assert.deepEqual(Object.keys(demo).sort(),['artisan','visitor','youth']);
console.log('RAMSA source, shared data, entry points and media checks passed.');

