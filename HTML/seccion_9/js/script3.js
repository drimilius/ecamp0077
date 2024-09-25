// Obtener elementos del DOM
const area = document.getElementById('area');
const text2 = document.getElementById('text2');

// Función para ocultar el elemento text2
function ocultarTexto() {
    text2.style.display = 'none';
}

// Función para mostrar el elemento text2 (opcional, si se quiere volver a mostrar el texto cuando el mouse vuelva a la zona)
function mostrarTexto() {
    text2.style.display = 'block';
}

// Asignar eventos onmouseout y onmouseover a #area
area.onmouseout = ocultarTexto;
area.onmouseover = mostrarTexto; // Solo si deseas volver a mostrar el texto cuando el ratón vuelva a la zona
