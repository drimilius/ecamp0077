class Persona {
    // Constructor de la clase
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para mostrar la información de la persona
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }

    // Método para actualizar la edad
    actualizarEdad(nuevaEdad) {
        this.edad = nuevaEdad;
        console.log(`La edad de ${this.nombre} ha sido actualizada a ${this.edad}`);
    }
}

// Creando una instancia de la clase Persona
let persona1 = new Persona('Juan Pérez', 30);

// Usando los métodos de la instancia
persona1.mostrarInfo(); // Output: Nombre: Juan Pérez, Edad: 30
persona1.actualizarEdad(31); // Output: La edad de Juan Pérez ha sido actualizada a 31
persona1.mostrarInfo(); // Output: Nombre: Juan Pérez, Edad: 31
