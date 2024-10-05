// assets/js/script.js
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
    pintar(ele, 'yellow');  // Cambia a amarillo al hacer clic
});
