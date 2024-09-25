// Obtener elementos del DOM
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const botonAgregar = document.getElementById('botonAgregar');
const botonCambiar = document.getElementById('botonCambiar');

// Función para agregar un nuevo elemento
function agregarElemento() {
    // Crear un nuevo elemento <p>
    const nuevoParrafo = document.createElement('p');
    // Añadir texto al nuevo elemento
    nuevoParrafo.textContent = 'Este es un nuevo párrafo agregado dinámicamente.';
    // Añadir una clase al nuevo elemento
    nuevoParrafo.classList.add('nuevo-elemento');
    // Insertar el nuevo elemento al final del body
    document.body.appendChild(nuevoParrafo);
}

// Función para cambiar el valor del párrafo
function cambiarValor() {
    // Cambiar el contenido del párrafo existente
    descripcion.textContent = '¡El contenido del párrafo ha sido modificado!';
    // Añadir una clase al párrafo existente
    descripcion.classList.add('resaltado');
}

// Añadir eventos a los botones
botonAgregar.addEventListener('click', agregarElemento);
botonCambiar.addEventListener('click', cambiarValor);
