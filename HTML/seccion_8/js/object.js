// Definición de un objeto "mochila"
let mochila = {
    // Propiedades del objeto
    color: 'gris',
    volumen: 30,
    numeroDeBolsillos: 15,
    numeroDeCorreas: 7,

    // Método del objeto
    abrirTapa: function() {
        console.log('La tapa de la mochila está abierta.');
    },
    ajustarCorreas: function(longitud) {
        console.log(`Las correas de la mochila se han ajustado a ${longitud} cm.`);
    }
};

// Accediendo a las propiedades del objeto
console.log(mochila.color); // Output: gris
console.log(mochila.volumen); // Output: 30

// Usando los métodos del objeto
mochila.abrirTapa(); // Output: La tapa de la mochila está abierta.
mochila.ajustarCorreas(50); // Output: Las correas de la mochila se han ajustado a 50 cm.
