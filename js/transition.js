const t=document.getElementById("page-transition");
document.querySelectorAll("a[href]").forEach(a=>{
if(!a.href.includes("#")){
a.onclick=e=>{
e.preventDefault();
t.classList.add("active");
setTimeout(()=>location.href=a.href,500);
};
}
});
