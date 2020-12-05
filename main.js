let fila = document.getElementById("peliculas-populares") 
let flechaDerecha = document.getElementById("next-button")
let flechaIzquierda = document.getElementById("left-button")

flechaDerecha.addEventListener("click", () => {
    fila.scrollLeft += fila.offsetWidth;
});

flechaIzquierda.addEventListener("click", () => {
    fila.scrollLeft -= fila.offsetWidth;
});
