class Persona{
    //constructor
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    // metodo
    mostrarInfo(){
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + this.edad);
    }


}

let persona1 = new Persona('Juan Pérez', 30);
persona1.mostrarInfo();
