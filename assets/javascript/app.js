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

        }, 1200); // tempo que o "BEM VINDO" fica na tela
    }

    bar.style.width = progress + "%";
}, 200);