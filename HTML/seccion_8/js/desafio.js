function Tarea(tituloTarea, status){
    this.tituloTarea = tituloTarea;
    this.status = status;
    
    this.cambiarstatus = function(){
        this.status = "completado"
        console.log("status cambiado")
    }
    this.mostrartareas = function(){
        console.log(this.tituloTarea);
    }
}
let tarea1 = new Tarea("completar sesion7: ", "incompleta");
let tarea2 = new Tarea("repasar ciclos:", "incompleta");
console.log(tarea1);
tarea1.cambiarstatus()
console.log(tarea1);

