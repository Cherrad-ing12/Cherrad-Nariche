// Fade-in au chargement
window.addEventListener('DOMContentLoaded', ()=>{
    document.body.style.opacity='0';
    setTimeout(()=>{document.body.style.opacity='1';},50);
});

// Fade-out avant quitter la page
document.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click', e=>{
        const href=link.getAttribute('href');
        if(!href.startsWith('#')){
            e.preventDefault();
            document.body.style.transition='opacity 0.6s ease';
            document.body.style.opacity='0';
            setTimeout(()=>{window.location.href=href;},600);
        }
    });
});

// Reveal sections
const reveals=document.querySelectorAll('.reveal');
function revealOnScroll(){
    const trigger=window.innerHeight*0.85;
    reveals.forEach(section=>{
        const top=section.getBoundingClientRect().top;
        if(top<trigger) section.classList.add('active');
    });
}
window.addEventListener('scroll',revealOnScroll);
revealOnScroll();

// Scroll vers ancre
window.addEventListener('load',()=>{
    if(window.location.hash){
        const target=document.querySelector(window.location.hash);
        if(target) setTimeout(()=>{target.scrollIntoView({behavior:'smooth',block:'start'});},50);
    }
});
