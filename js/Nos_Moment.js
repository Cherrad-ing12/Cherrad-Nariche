window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{document.body.style.opacity='1';},50);
});

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
