const whatsappNumber = "258840305824";

function enviarWhatsApp(produto) {
    const msg = encodeURIComponent(`Olá! Gostaria de encomendar o produto: ${produto}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
}

function startSlideshow(id) {
    const container = document.getElementById(id);
    const slides = container.querySelectorAll('.slide');
    let i = 0;
    if (slides.length > 1) {
        setInterval(() => {
            slides[i].classList.remove('active');
            i = (i + 1) % slides.length;
            slides[i].classList.add('active');
        }, 3000);
    }
}

let slides = document.querySelectorAll(".slide");
let current = 0;

function showNextSlide() {
    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
}

setInterval(showNextSlide, 3000);
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', () => {
        const val = star.getAttribute('data-value');
        stars.forEach(s => {
            s.classList.toggle('selected', s.getAttribute('data-value') <= val);
        });
    });
});

window.onload = () => {
    startSlideshow('slideshow-bones');
    startSlideshow('slideshow-camisetas');
};
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    // Remove classe ativa do atual
    slides[currentSlide].classList.remove('active');

    // Próximo índice (volta ao zero se for o último)
    currentSlide = (currentSlide + 1) % slides.length;

    // Adiciona classe ativa no novo
    slides[currentSlide].classList.add('active');
}

// Troca de slide a cada 6 segundos
setInterval(nextSlide, 6000);