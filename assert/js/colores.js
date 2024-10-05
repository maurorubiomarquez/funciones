// assets/js/colores.js

// Función para cambiar el color a negro
function cambiarColor(event) {
    // Cambia el color del div que fue clickeado a negro
    event.target.style.backgroundColor = 'black';
}

// Agregar los eventos a cada div usando addEventListener
document.getElementById("divAzul").addEventListener("click", cambiarColor);
document.getElementById("divRojo").addEventListener("click", cambiarColor);
document.getElementById("divVerde").addEventListener("click", cambiarColor);
document.getElementById("divAmarillo").addEventListener("click", cambiarColor);
