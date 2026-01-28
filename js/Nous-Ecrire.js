window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{document.body.style.opacity='1';},50);
});

const form=document.getElementById('contactForm');
const whatsappBox=document.getElementById('whatsappBox');

form.addEventListener('submit',e=>{
    e.preventDefault();

    const fullname=document.getElementById('fullname').value.trim();
    const birthdate=document.getElementById('birthdate').value;
    const gender=document.getElementById('gender').value;
    const source=document.getElementById('source').value.trim();

    if(!fullname||!birthdate||!gender||!source){
        alert("Merci de remplir tous les champs.");
        return;
    }

    const message=
`✨ Nouveau message depuis le site officiel ✨

👤 Nom & Prénom : ${fullname}
🎂 Date de naissance : ${birthdate}
🚻 Sexe : ${gender}

🌐 Comment la personne a retrouvé le site :
${source}

🙏 Message envoyé depuis la page « Nous écrire »`;

    const encodedMessage=encodeURIComponent(message);

    window.open(`https://wa.me/242065823119?text=${encodedMessage}`,'_blank');
    window.open(`https://wa.me/242066370304?text=${encodedMessage}`,'_blank');

    form.style.display='none';
    whatsappBox.style.display='block';
    whatsappBox.scrollIntoView({behavior:'smooth'});
});

const reveals=document.querySelectorAll('.reveal');
function revealOnScroll(){
    const trigger=window.innerHeight*0.85;
    reveals.forEach(el=>{
        if(el.getBoundingClientRect().top<trigger){
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll',revealOnScroll);
revealOnScroll();
