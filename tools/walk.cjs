const {chromium}=require('playwright');const http=require('http'),fs=require('fs');
const IDS=process.argv[2].split(',');
(async()=>{const srv=http.createServer((q,s)=>{s.setHeader('content-type','text/html');s.end(fs.readFileSync(require('path').join(__dirname,'..','index.html')))}).listen(8790);
const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:1440,height:1000}});
await ctx.route('**/@liveblocks/**',r=>r.fulfill({status:200,contentType:'application/javascript',body:'export function createClient(){return{enterRoom(){return{room:{getSelf:()=>null,getPresence:()=>({}),updatePresence(){},subscribe(){},broadcastEvent(){}}}}}}'}));
await ctx.route('**/api/**',r=>r.fulfill({status:200,contentType:'application/json',body:'[]'}));
const p=await ctx.newPage();await p.goto('http://localhost:8790/');await p.waitForTimeout(800);
await p.addStyleTag({content:'*{transition:none!important;animation:none!important}'});
for(const id of IDS){await p.evaluate(id=>{Object.assign(S,{ov:null,free:false,joined:false});const par={m04l:['m01'],m10:['m08'],m11:['m08'],m13:['m12'],m14:['m12'],m14b:['m12'],m16:['m15'],m16c:['m15','m16'],m17:['m15'],m18:['m15'],m19:['m15'],m05:['m01'],m05b:['m01','m05'],m06:['m01'],m07:['m01'],m09:['m08'],m05v:['m13'],m20p:['m20'],m21:['m20'],g1:[],srch:['m01']}[id]||[];S.stack=par.concat(id);if(id==='m10'||id==='m13')S.joined=true;render(null)},id);
 await p.waitForTimeout(350);await p.evaluate(()=>document.querySelectorAll('.toast').forEach(t=>t.remove()));await p.locator('#phone').screenshot({path:require('path').join(__dirname,'out','w_'+id+'.png')})}
srv.close();await b.close()})();
