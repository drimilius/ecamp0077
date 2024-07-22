// var num_articulos = parseInt(prompt("Numero de articulos que desea comprar"));
// Ciclo For
// for(var inicio=1; inicio<=num_articulos; inicio++){
//     var precio_articulo= parseInt(prompt("Dame precio de articulo" + inicio))
//     var cantidad_articulo= parseInt(prompt("Dame cantidad " + inicio))
// console.log("Precio de articulo "+ precio_articulo);
// console.log("Cantidad  "+ cantidad_articulo);
// console.log("el subtotal es = " + calcular_subtotal(precio_articulo,cantidad_articulo));
// }
// ciclo do while
var numero=  parseInt(prompt("Ingresa un numero"));
var x=1;
do{
    console.log(x);
    x = x +1;
}while( x < numero);
 


function calcular_subtotal(precio,cantidad){
    subtotal= (precio * cantidad) *1.19;
    return subtotal;
}
