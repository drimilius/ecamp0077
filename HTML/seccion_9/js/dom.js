// obtener elementos del dom y guardarlo en variables 
const titulo= document.getElementById("titulo");
const descripcion= document.getElementById("descripcion");
const botonAgregar= document.getElementById("botonAgregar");
const botonCambiar= document.getElementById("botonCambiar");

function agregarElemento() {
    //crear un nuevo elemento <p>
    const nuevoParrafo= document.createElement("p");
    //anadir un texto al nuevo elemento
    nuevoParrafo.textContent= "Este es un nuevo párrafo agregado.";
    //añadir una clase al nuevo elemento
    nuevoParrafo.classList.add("nuevo-elemento");
    //insertar un elemento en body
    document.body.appendChild(nuevoParrafo);

}
function cambiarValor() {
    //cambiar el contenido del parrafo
    descripcion.textContent= "Aqui estuvo Roberto";
    descripcion.classList.add("resaltado");

}
botonAgregar.addEventListener("click", agregarElemento);
botonCambiar.addEventListener("click", cambiarValor);
