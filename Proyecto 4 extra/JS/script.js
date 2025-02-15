document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("principal__inicio__boton").addEventListener("click", añadir);

    function añadir() {
        let principal__inicio__texto = document.getElementById("principal__inicio__texto");
        let principal__inicio__lista = document.getElementById("principal__inicio__lista");

        if (principal__inicio__texto.value != "") {
            let nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = principal__inicio__texto.value;

            let deletebutton = document.createElement("button");
            deletebutton.textContent = "X";
            deletebutton.classList.add("borrar_btn");
            deletebutton.addEventListener("click", function() {
                nuevoElemento.remove();
            });

            nuevoElemento.appendChild(deletebutton);
            Lista.appendChild(nuevoElemento);

            principal__inicio__texto.value = "";
        } else {
            alert("No se pueden añadir tareas vacías.");
        }
    }
});