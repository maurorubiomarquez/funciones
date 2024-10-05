// assets/js/key_events.js
let color;

// Función que cambia el color del div "key"
function cambiarColorTecla(event) {
    const keyDiv = document.getElementById('key');
    switch (event.key) {
        case 'a':
            color = 'pink';
            keyDiv.style.backgroundColor = color;
            break;
        case 's':
            color = 'orange';
            keyDiv.style.backgroundColor = color;
            break;
        case 'd':
            color = 'skyblue';
            keyDiv.style.backgroundColor = color;
            break;
    }
}

// Función que crea nuevos divs
function crearDiv(event) {
    let nuevoDiv;
    const contenedor = document.getElementById('contenedorKey');

    switch (event.key) {
        case 'q':
            nuevoDiv = document.createElement('div');
            nuevoDiv.className = 'color-box morado';
            contenedor.appendChild(nuevoDiv);
            break;
        case 'w':
            nuevoDiv = document.createElement('div');
            nuevoDiv.className = 'color-box gris';
            contenedor.appendChild(nuevoDiv);
            break;
        case 'e':
            nuevoDiv = document.createElement('div');
            nuevoDiv.className = 'color-box cafe';
            contenedor.appendChild(nuevoDiv);
            break;
    }
}

// Event listener para teclas
document.addEventListener('keydown', function (event) {
    cambiarColorTecla(event);
    crearDiv(event);
});
