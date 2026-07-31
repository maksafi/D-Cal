
const ids=["market","usd","buy","margin","diff"],e={};
ids.forEach((id,i)=>{
 const el=document.getElementById(id);e[id]=el;
 el.value=localStorage.getItem(id)||"";
 el.onfocus=()=>setTimeout(()=>el.select(),0);
 el.oninput=()=>{localStorage.setItem(id,el.value);calc();}
 el.onkeydown=x=>{if(x.key==="Enter"){x.preventDefault();i<ids.length-1?e[ids[i+1]].focus():el.blur();}}
});
function n(v){return parseFloat(v)||0}
const disc=document.getElementById("disc");
function calc(){
 let m=n(e.market.value),u=n(e.usd.value),b=n(e.buy.value),mg=n(e.margin.value),df=n(e.diff.value);
 e.margin.className=mg<25?"green":mg>25?"red":"";
 e.diff.className=(df>=1&&df<=5)?"green":df>5?"red":"";
 let r=u?Math.round(m-((746.48/u)*(b+mg))-df):0;
 disc.textContent=r;
 disc.className=r>=15?"green":"red";
}
document.getElementById("clear").onclick=()=>{ids.forEach(i=>{e[i].value="";localStorage.removeItem(i)});calc();e.market.focus();}
if(window.visualViewport){
 const vv=window.visualViewport;
 const adjust=()=>{document.getElementById("content").style.height=(vv.height-135)+"px";}
 vv.addEventListener("resize",adjust);adjust();
}
window.onload=()=>{calc();e.market.focus();}
if("serviceWorker" in navigator)navigator.serviceWorker.register("service-worker.js");
