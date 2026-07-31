
const ids=['market','usd','buy','margin','diff'],e={};ids.forEach((id,i)=>{let x=document.getElementById(id);e[id]=x;x.value=localStorage.getItem(id)||'';x.onfocus=()=>setTimeout(()=>x.select(),0);x.oninput=()=>{localStorage.setItem(id,x.value);calc()};x.onkeydown=a=>{if(a.key==='Enter'){a.preventDefault();i<ids.length-1?e[ids[i+1]].focus():x.blur();}}});
const d=document.getElementById('disc');
function n(v){return parseFloat(v)||0}
function calc(){let m=n(e.market.value),u=n(e.usd.value),b=n(e.buy.value),mg=n(e.margin.value),df=n(e.diff.value);
e.margin.className=mg<25?'green':mg>25?'red':'';
e.diff.className=df>=1&&df<=5?'green':df>5?'red':'';
let r=u?Math.round(m-((746.48/u)*(b+mg))-df):0;d.textContent=r;d.className=r>=15?'green':'red';}
document.getElementById('clear').onclick=()=>{ids.forEach(id=>{e[id].value='';localStorage.removeItem(id)});calc();e.market.focus();}
if(window.visualViewport){const vv=window.visualViewport;const form=document.getElementById('form');function adj(){form.style.height=(vv.height-150)+'px';}vv.addEventListener('resize',adj);adj();}
if('serviceWorker' in navigator)navigator.serviceWorker.register('service-worker.js');
window.onload=()=>{calc();e.market.focus();}

if(window.visualViewport){const vv=window.visualViewport;function moveDisc(){const kb=Math.max(0,innerHeight-vv.height);const d=document.getElementById('discPanel');if(d)d.style.bottom=(kb+12)+'px';}vv.addEventListener('resize',moveDisc);vv.addEventListener('scroll',moveDisc);moveDisc();}