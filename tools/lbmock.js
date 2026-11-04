export function createClient(){return{enterRoom(id,{initialPresence}){
 const ch=new BroadcastChannel('lb');const myId=Math.floor(Math.random()*1000);let pres={...initialPresence};const others=new Map();const subs={others:[],event:[],"my-presence":[]};
 const emit=()=>subs.others.forEach(f=>f([...others.values()]));
 ch.onmessage=m=>{const d=m.data;if(d.t==='p'){others.set(d.id,{connectionId:d.id,presence:d.p});emit();if(d.hello)ch.postMessage({t:'p',id:myId,p:pres})}else if(d.t==='e')subs.event.forEach(f=>f({event:d.e,connectionId:d.id}))};
 ch.postMessage({t:'p',id:myId,p:pres,hello:1});
 const room={getSelf:()=>({connectionId:myId}),getPresence:()=>pres,updatePresence(p){pres={...pres,...p};ch.postMessage({t:'p',id:myId,p:pres})},subscribe(k,f){subs[k].push(f)},broadcastEvent(e){ch.postMessage({t:'e',id:myId,e})}};
 return{room,leave(){}}}}}
