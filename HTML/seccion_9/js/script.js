// Obtener elementos del DOM
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const botonCambiar = document.getElementById('botonCambiar');

// Modificar el contenido del elemento <h1>
titulo.textContent = 'Bienvenido a la Manipulación del DOM';

// Cambiar el estilo del párrafo
descripcion.style.color = 'green';
descripcion.style.fontSize = '18px';

// Añadir una clase CSS al párrafo
titulo.classList.add('cambio-color');

// Añadir un evento al botón
botonCambiar.addEventListener('click', () => {
    // Cambiar el contenido del párrafo al hacer clic en el botón
    descripcion.textContent = '¡El contenido ha sido cambiado!';
    // Quitar la clase CSS del párrafo
    descripcion.classList.remove('cambio-color');
});
