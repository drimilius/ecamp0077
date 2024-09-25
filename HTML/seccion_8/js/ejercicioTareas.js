// Clase Tarea
class Tarea {
    constructor(titulo) {
        this.titulo = titulo;
        this.completada = false; // Por defecto, la tarea no está completada
    }

    // Método para marcar la tarea como completada
    marcarComoCompletada() {
        this.completada = true;
    }

    // Método para mostrar la información de la tarea
    mostrarInfo() {
        // return ${this.titulo} - ${this.completada ? 'Completada' : 'Pendiente'}`;
        console.log(this.titulo + ': ' + this.completada);
    }
} 

// Clase ListaDeTareas
class ListaDeTareas {
    constructor() {
        this.tareas = []; // Lista de tareas
    }

    // Método para añadir una tarea a la lista
    añadirTarea(tarea) {
        this.tareas.push(tarea);
        console.log(`La tarea "${tarea.titulo}" ha sido añadida.`);
    }

    // Método para mostrar todas las tareas en la lista
    mostrarTareas() {
        console.log('Lista de Tareas:');
     this.tareas.forEach(tarea => console.log(tarea.mostrarInfo()));
      
    }
}

// Ejemplo de uso

// Crear algunas tareas
let tarea1 = new Tarea('Comprar comida');
let tarea2 = new Tarea('Estudiar JavaScript');
let tarea3 = new Tarea('Hacer ejercicio');

// Crear una lista de tareas
let miLista = new ListaDeTareas();

// Añadir tareas a la lista
miLista.añadirTarea(tarea1);
miLista.añadirTarea(tarea2);
miLista.añadirTarea(tarea3);

// Marcar una tarea como completada
tarea2.marcarComoCompletada();

// Mostrar todas las tareas
miLista.mostrarTareas();
