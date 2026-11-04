const {chromium}=require('playwright');const http=require('http'),fs=require('fs');
(async()=>{const srv=http.createServer((q,s)=>{s.setHeader('content-type','text/html');s.end(fs.readFileSync(require('path').join(__dirname,'..','index.html')))}).listen(8771);
const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:1440,height:900}});
await ctx.route('**/@liveblocks/**',r=>r.fulfill({status:200,contentType:'application/javascript',body:fs.readFileSync(require('path').join(__dirname,'lbmock.js'),'utf8')}));
await ctx.route('**/api/**',r=>r.fulfill({status:200,contentType:'application/json',body:'[]'}));
const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://localhost:8771/');await p.waitForTimeout(1000);
const manual={'x':0,'Say hi in the plan chat':'#phone [data-go="m13"]','Tap phones to add Ren':'#phone #badge','Open the plan you joined':'#phone [data-go="m10"]','Ren sends one back…':null};
const n=await p.evaluate(()=>STORIES.length);
for(let k=0;k<n;k++){await p.evaluate(k=>{S.notifAsked=1;tourStart(k)},k);await p.waitForTimeout(700);
 const steps=await p.evaluate(k=>STORIES[k].steps.map(s=>[s[0],s[2]]),k);const log=[];
 for(let i=0;i<steps.length;i++){const [name,sel]=steps[i];await p.waitForTimeout(600);
  const ti=await p.evaluate(()=>TI);if(ti>i){log.push(`✓ ${name} (auto)`);continue}
  let how='';
  if(sel){let ok=false;for(let t=0;t<6;t++){if(await p.evaluate(()=>TI)>i)break;const c=await p.evaluate(()=>{const e=document.querySelector('#phone .tour-hi');if(!e)return false;e.click();return true});ok=ok||c;if(!c)break;await p.waitForTimeout(700)}how=ok?'hi':'NO HIGHLIGHT';
   if(!ok){await p.evaluate(sel=>{const e=[...document.querySelectorAll('#phone '+sel.split(',').join(',#phone '))].find(x=>x.offsetParent!==null);if(e)e.click()},sel)}}
  else if(manual[name]){await p.evaluate(sel=>{const e=document.querySelector(sel);if(e)e.click()},manual[name]);how='manual'}
  else {await p.waitForTimeout(2500);how='wait'}
  await p.waitForTimeout(900);
  // join drawer: if joinnote opened, click join
  if(await p.evaluate(()=>S.ov==="joinnote"))await p.evaluate(()=>{const e=document.querySelector('#phone [data-act="join"]');e&&e.click()}),await p.waitForTimeout(900);
  const nti=await p.evaluate(()=>TI);log.push(`${nti>i?'✓':'✗'} ${name} [${how}] -> ${await p.evaluate(()=>(S.ov||'')+' '+cur())}`)}
 console.log(`\nStory ${k+1}:`,(await p.evaluate(k=>STORIES[k].t,k)));console.log(log.join('\n'))}
console.log('errs',errs);srv.close();await b.close();})();
