// Crear un array
let frutas = ["Manzana", "Banana", "Cereza"];

// Obtener la longitud del array
console.log("Longitud del array:", frutas.length); // Output: 3

// Añadir un elemento al final del array (push)
frutas.push("Durazno");
console.log("Después de push:", frutas); // Output: ["Manzana", "Banana", "Cereza", "Durazno"]

// Eliminar el último elemento del array (pop)
let ultimaFruta = frutas.pop();
console.log("Después de pop:", frutas); // Output: ["Manzana", "Banana", "Cereza"]
console.log("Última fruta:", ultimaFruta); // Output: "Durazno"

// Eliminar el primer elemento del array (shift)
let primeraFruta = frutas.shift();
console.log("Después de shift:", frutas); // Output: ["Banana", "Cereza"]
console.log("Primera fruta:", primeraFruta); // Output: "Manzana"

// Añadir un elemento al principio del array (unshift)
frutas.unshift("Fresa");
console.log("Después de unshift:", frutas); // Output: ["Fresa", "Banana", "Cereza"]

// Revertir el orden del array (reverse)
frutas.reverse();
console.log("Después de reverse:", frutas); // Output: ["Cereza", "Banana", "Fresa"]
