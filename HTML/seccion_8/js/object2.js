// Definición de una función constructora para un objeto "Mochila"
function Mochila(color, volumen, numeroDeBolsillos, numeroDeCorreas) {
    // Propiedades
    this.color = color;
    this.volumen = volumen;
    this.numeroDeBolsillos = numeroDeBolsillos;
    this.numeroDeCorreas = numeroDeCorreas;

    // Métodos
    this.abrirTapa = function() {
        console.log('La tapa de la mochila está abierta.');
    };
    this.ajustarCorreas = function(longitud) {
        console.log(`Las correas de la mochila se han ajustado a ${longitud} cm.`);
    };
}

// Creando instancias del objeto "Mochila"
let mochila1 = new Mochila('gris', 30, 15, 7);
let mochila2 = new Mochila('azul', 25, 10, 5);

// Accediendo a las propiedades y métodos de las instancias
console.log(mochila1.color); // Output: gris
console.log(mochila2.color); // Output: azul

mochila1.abrirTapa(); // Output: La tapa de la mochila está abierta.
mochila2.ajustarCorreas(40); // Output: Las correas de la mochila se han ajustado a 40 cm.
