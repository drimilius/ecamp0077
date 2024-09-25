let mochila = {
    //propiedades del objeto
    color: "negro",
    tamaño: " 20cm",
    numeroBolsillos: 2,
    numeroCierres: 2,
    //metodos del objeto
    abrir_tapa() {
        console.log("la tapa de la mochila esta abierta");
    },
    cerrarTapa() {
        console.log("la tapa de la mochila esta cerrada");
    }
};
//accediendo a las propiedades del objeto
console.log(mochila.color);
console.log(mochila.tamaño);
//accediendo a los metodos del objeto
mochila.abrir_tapa();
mochila.cerrarTapa();
console.log(mochila);

