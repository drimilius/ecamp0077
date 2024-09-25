class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    //metodo
    mostrarInfo(){
        console.log("Nombre: " + this.nombre);
        console.log("edad:" + this.edad);
    }
}

let persona1 = new Persona ("Juan Perez", 30);
persona1.mostrarInfo();