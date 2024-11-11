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
