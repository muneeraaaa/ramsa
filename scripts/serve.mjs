import {createServer} from 'node:http';
import {createReadStream} from 'node:fs';
import {stat} from 'node:fs/promises';
import {extname,resolve,sep} from 'node:path';

const root = resolve('site');
const host = '127.0.0.1';
const port = Number(process.env.PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.webp':'image/webp','.mp4':'video/mp4'};

createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://' + host).pathname);
    const file = resolve(root,'.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + sep)) throw new Error('Outside site root');
    const info = await stat(file);
    if (!info.isFile()) throw new Error('Missing file');
    const headers = {'Content-Type':types[extname(file)] || 'application/octet-stream','Accept-Ranges':'bytes'};
    let start = 0;
    let end = info.size - 1;
    if (req.headers.range) {
      const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      if (range?.[1]) {
        start = Number(range[1]);
        if (range[2]) end = Math.min(end,Number(range[2]));
      } else if (range?.[2]) {
        start = Math.max(0,info.size - Number(range[2]));
      } else {
        start = info.size;
      }
      if (start > end) {
        res.writeHead(416,{'Content-Range':`bytes */${info.size}`}).end();
        return;
      }
      headers['Content-Range'] = `bytes ${start}-${end}/${info.size}`;
    }
    headers['Content-Length'] = end - start + 1;
    res.writeHead(req.headers.range ? 206 : 200,headers);
    if (req.method === 'HEAD') res.end();
    else createReadStream(file,{start,end}).on('error',()=>res.destroy()).pipe(res);
  } catch {
    res.writeHead(404).end('Not found');
  }
}).listen(port,host,()=>console.log(`RAMSA at http://${host}:${port}`));

