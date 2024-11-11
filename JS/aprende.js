let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Asegurarse de que el índice esté dentro del rango
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Mover las slides
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Iniciar el slider en la primera slide
showSlide(currentSlide);

let posicionAnterior = window.scrollY;

window.addEventListener("scroll", function() {
    // Obtén la posición de scroll actual
    const posicionActual = window.scrollY;
    
    // Selecciona la barra de navegación
    const navbar = document.querySelector(".navbar");

    // Aplica la sombra solo si se hace scroll hacia abajo
    if (posicionActual > 0 && posicionActual > posicionAnterior) {
        navbar.classList.add("sombra");
    } else if (posicionActual == 0 ){
        navbar.classList.remove("sombra");
    }
    posicionAnterior = posicionActual;
});
