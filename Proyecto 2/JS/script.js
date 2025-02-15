

document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("boton");
    const caja = document.getElementById("cuadrado");

    boton.addEventListener("click", function() {
        if (caja.style.display === "none") {
            caja.style.display = "block"; 
        } else {
            caja.style.display = "none"; 
        }
    });
});