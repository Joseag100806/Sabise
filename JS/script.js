/*Iva*/
document.getElementById('calcularIVA').addEventListener('click', function(e) {
    e.preventDefault(); 

    const monto = parseFloat(document.getElementById('monto').value); 
    if (isNaN(monto) || monto <= 0) {
        document.getElementById('resultados').textContent = 'Por favor, ingrese un monto válido.';
        return; // Salir de la función si el monto no es válido
    }
    const resultElement = document.getElementById("resultados");
    const tasaIVA = 0.19; // Tasa de IVA
    const iva = monto * tasaIVA; // Cálculo del IVA
    const total = monto + iva; // Cálculo del total
    const formattedNumber = new Intl.NumberFormat().format(total);
    const formattedNumber2 = new Intl.NumberFormat().format(iva);
    // Mostrar resultados
    resultElement.innerHTML = ` 
        IVA calculado:  <br>  ${formattedNumber2} COP<br>
        Total con IVA:  <br> ${formattedNumber} COP
    `;
});

/*impuesto*/
document.getElementById('calcularConsumo').addEventListener('click', function(e) {
    e.preventDefault(); 
    const resultElement = document.getElementById("resultados");
    const monto = parseFloat(document.getElementById('monto').value);
    
    
  
    if (isNaN(monto) || monto <= 0) {
        document.getElementById('resultados').textContent = 'Por favor, ingrese un monto válido.';
        return; // Salir de la función si el monto no es válido
    }

    const tasa = 0.08; // Tasa de IVA
    const impuesto = monto * tasa; // Cálculo del IVA
    const total = monto + impuesto; // Cálculo del total
    const formattedNumber = new Intl.NumberFormat().format(total);
    const formattedNumber2 = new Intl.NumberFormat().format(impuesto);
    // Mostrar resultados
   resultElement.innerHTML = `
      
        Impuesto calculado:  <br>  ${formattedNumber2} COP<br>
        Total con Impuesto:   <br> ${formattedNumber} COP
    `;
});

/* interés compuesto */

document.getElementById('calcularInteres').addEventListener('click', function(e) {
    e.preventDefault(); 
    const ttime = document.getElementById("time-select").value;
    const time = document.getElementById("time-i").value;
    const resultElement = document.getElementById("resultados1");
    const monto = parseFloat(document.getElementById('monto1').value);
    let total;
    let interes;
  
    if (isNaN(monto) || monto <= 0) {
        document.getElementById('resultados1').textContent = 'Por favor, ingrese un monto válido.';
        return;
    } else if (isNaN(time) || time <= 0){
        document.getElementById("resultados1").textContent= 'Por favor, ingresa la cantidad de tiempo.';
        return;
    }   else if (ttime == "1rt"){
        document.getElementById("resultados1").textContent= 'Por favor, elige el tipo de tiempo.';
        return;
    } else if (ttime == "meses" & time > 12){
        document.getElementById("resultados1").textContent= 'Por favor, ingrese un tiempo válido';
        return;
    }

    switch(ttime){
        case "meses":
            total = monto * (1 + (0.08/12)) ** (time);
            break;
        
        case "años":
            total = monto * (1 + (0.08)) ** (time);
            break;
    }
    interes = total - monto;
    const formattedNumber = new Intl.NumberFormat().format(total);
    const formattedNumber2 =  new Intl.NumberFormat().format(interes);
    resultElement.innerHTML = `
    Intereses Generados: <br> ${formattedNumber2} COP <br>
    Total: <br> ${formattedNumber} COP <br>
    
`;
});


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


