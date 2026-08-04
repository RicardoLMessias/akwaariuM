let menuLinks = document.querySelectorAll('.menu-1 a');
let menuLinks2 = document.querySelectorAll('.botoes a');

function removeActiveClass() {
    menuLinks.forEach(link => link.classList.remove('active'));
    menuLinks2.forEach(link => link.classList.remove('active'));
}

// Configuração do Intersection Observer
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            removeActiveClass();

            let activeLink = document.querySelector(`.menu a[href="#${entry.target.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
                console.log(activeLink);
            }
        }
    });
}, {
    threshold: 0.6
});

// Observa todas as seções
document.querySelectorAll('section').forEach(section => observer.observe(section));

// Adicionando a rolagem suave ao clicar no menu
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let targetId = link.getAttribute('href').substring(1);
        let targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
menuLinks2.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let targetId = link.getAttribute('href').substring(1);
        let targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// consumindo a API do canal
fetch('https://twitchtracker.com/api/channels/summary/akwaarium')
    .then(response => response.json())
    .then(data => {
        document.getElementById('followers').textContent = data.followers_total;
        document.getElementById('follows').textContent = data.followers;
        document.getElementById('media').textContent = data.avg_viewers;
        document.getElementById('views').textContent = data.max_viewers;
        document.getElementById('horas').textContent = data.hours_watched;
        const horasStreamed = Math.floor(data.minutes_streamed / 60);
        document.getElementById('minutos').textContent = horasStreamed;
    });

// loader + animação de entrada do site
let progress = 0;
const bar = document.getElementById("progress-bar");
const loader = document.getElementById("loader");
const content = document.getElementById("content");
const welcomeText = document.getElementById("welcome-text");

const interval = setInterval(() => {
    progress += Math.random() * 10;

    if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        // mostra o BEM VINDO
        welcomeText.classList.add("show");

        // espera um pouco antes de sair
        setTimeout(() => {
            loader.classList.add("fade-out");

            setTimeout(() => {
                loader.style.display = "none";
                content.classList.add("show");
            }, 500);

        }, 1500); // tempo que o "BEM VINDO" fica na tela
    }

    bar.style.width = progress + "%";
}, 200);

const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});

document.getElementById("formContato").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        email: e.target._replyto.value,
        message: e.target.message.value
    };

    const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });

    const data = await res.json();
    alert(data.message);
});

if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray("body > section");

    sections.forEach((section) => {
        const internalItems = section.querySelectorAll(
            ":scope > div, .texto > *, .live > *, .part-titulo > *, .partners > *, .mediakit-content > *, .contato-content > *, .contato-footer > *"
        );

        if (internalItems.length) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    markers: false,
                    scrub: 3,
                    end: "center center",
                    toggleActions: "play none none reverse",
                    invalidateOnRefresh: true
                }
            }).fromTo(internalItems,
                { y: 64,
                    opacity: 0
                 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    stagger: 0.02
                }
            );
        }
    });
}


const btn = document.querySelector(".content-dev");
const text = document.querySelector(".desenvolvido");
const topLine = document.querySelector(".top");
const bottomLine = document.querySelector(".bottom");

btn.addEventListener("mouseenter", () => {

    gsap.to(btn,{
        duration:.4,
        scale:1.08,
        y:-4,
        boxShadow:"0 0 30px rgba(255,0,170,.35)",
        ease:"power3.out"
    });

    gsap.to(topLine,{
        scaleX:1,
        duration:.35,
        ease:"power2.out"
    });

    gsap.to(bottomLine,{
        scaleX:1,
        duration:.35,
        ease:"power2.out"
    });

    gsap.to(text,{
        duration:.35,
        textShadow:"0 0 8px #ff00aa, 0 0 20px #8a2be2",
        ease:"power2.out"
    });

});

btn.addEventListener("mouseleave", () => {

    gsap.to(btn,{
        duration:.35,
        scale:1,
        y:0,
        boxShadow:"0 0 0 rgba(0,0,0,0)",
        ease:"power3.out"
    });

    gsap.to(topLine,{
        scaleX:0,
        duration:.3
    });

    gsap.to(bottomLine,{
        scaleX:0,
        duration:.3
    });

    gsap.to(text,{
        duration:.3,
        textShadow:"0 0 0 transparent"
    });

});

btn.addEventListener("mousemove",(e)=>{

    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    gsap.to(btn,{
        x:x*0.12,
        y:y*0.12,
        duration:.4,
        ease:"power2.out"
    });

});

btn.addEventListener("mouseleave",()=>{

    gsap.to(btn,{
        x:0,
        y:0,
        duration:.7,
        ease:"elastic.out(1,0.45)"
    });

});