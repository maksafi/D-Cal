
const ids=["market","usd","buy","margin","diff"],e={};
ids.forEach((id,i)=>{
 e[id]=document.getElementById(id);
 e[id].value=localStorage.getItem(id)||"";
 e[id].addEventListener("focus",()=>setTimeout(()=>e[id].select(),0));
 e[id].addEventListener("input",()=>{localStorage.setItem(id,e[id].value);calc();});
 e[id].addEventListener("keydown",ev=>{if(ev.key==="Enter"){ev.preventDefault();i<ids.length-1?e[ids[i+1]].focus():e[id].blur();}});
});
const disc=document.getElementById("disc");
function num(x){return parseFloat(x)||0;}
function calc(){
 const m=num(e.market.value),u=num(e.usd.value),b=num(e.buy.value),mg=num(e.margin.value),df=num(e.diff.value);
 e.margin.className="";
 if(mg<25)e.margin.classList.add("green"); else if(mg>25)e.margin.classList.add("red");
 e.diff.className="";
 if(df>=1&&df<=5)e.diff.classList.add("green"); else if(df>5)e.diff.classList.add("red");
 let r=0;
 if(u!==0) r=Math.round(m-((746.48/u)*(b+mg))-df);
 disc.textContent=r;
 disc.className="";
 if(r>=15)disc.classList.add("green"); else disc.classList.add("red");
}
document.getElementById("clear").onclick=()=>{ids.forEach(id=>{e[id].value="";localStorage.removeItem(id)});calc();e.market.focus();}
if("serviceWorker" in navigator){navigator.serviceWorker.register("service-worker.js")}
window.onload=()=>{e.market.focus();calc();}
