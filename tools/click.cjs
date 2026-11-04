// usage: node tools/click.js name "step;step;..."  steps: t:Text (click by text) | s (screenshot) | f:sel=val (fill) | c:css (click css) | w:ms
const {chromium}=require('playwright');const http=require('http'),fs=require('fs');
const [name,stepsS]=process.argv.slice(2);const steps=stepsS.split(';;');
(async()=>{const srv=http.createServer((q,s)=>{s.setHeader('content-type','text/html');s.end(fs.readFileSync(require('path').join(__dirname,'..','index.html')))}).listen(8791);
const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:1440,height:1000}});
await ctx.route('**/@liveblocks/**',r=>r.fulfill({status:200,contentType:'application/javascript',body:'export function createClient(){return{enterRoom(){return{room:{getSelf:()=>null,getPresence:()=>({}),updatePresence(){},subscribe(){},broadcastEvent(){}}}}}}'}));
await ctx.route('**/api/**',r=>r.fulfill({status:200,contentType:'application/json',body:'[]'}));
await ctx.route('**/fonts.googleapis.com/**',r=>r.abort());
const p=await ctx.newPage();p.on('pageerror',e=>console.log('ERR',e.message));await p.goto('http://localhost:8791/');await p.waitForTimeout(800);
await p.evaluate(()=>{S.stack=['m01'];S.ov=null;render(null)});await p.waitForTimeout(300);
let n=0;for(const st of steps){const [k,...r]=st.split(':');const v=r.join(':');
 try{if(k==='e'){await p.locator('#phone').getByText(v,{exact:true}).last().click({timeout:2000});await p.waitForTimeout(500);console.log('✓',v)}
 else if(k==='t'){await p.locator('#phone').getByText(v,{exact:false}).first().click({timeout:2000});await p.waitForTimeout(500);console.log('✓',v)}
 else if(k==='c'){await p.locator('#phone '+v).first().click({timeout:2000});await p.waitForTimeout(500);console.log('✓',v)}
 else if(k==='f'){const [sel,val]=v.split('=');await p.locator('#phone '+sel).first().fill(val);await p.waitForTimeout(400)}
 else if(k==='w'){await p.waitForTimeout(+v)}
 else if(k==='s'){n++;await p.locator('#phone').screenshot({path:require('path').join(__dirname,'out',name+'_'+n+'.png')});console.log('shot',n, 'screen=',await p.evaluate(()=>S.stack.at(-1)+' ov='+S.ov))}
 else if(k==='x'){console.log(await p.evaluate(v))}
 }catch(e){console.log('✗',st,e.message.split('\n')[0])}}
srv.close();await b.close()})();
