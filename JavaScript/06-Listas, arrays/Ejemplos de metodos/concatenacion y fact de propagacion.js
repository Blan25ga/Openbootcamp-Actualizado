// METODO concat() - Concatena 2 strings

// como unir dos arrays con el metodo concat()
let array_1 = ["Hola", "Mundo"];
let array_2 = ["Adios", "Mundo"];
let array_3 = array_1.concat(array_2);
console.log(array_3); // imprime: ["Hola", "Mundo", "Adios", "Mundo"]

// Propagacion de un array - el factor de propagacion es el numero de veces que se repite un valor en un array.
// Como unir dos listas con factor de propagacion
let array_4 = ["Hola", "Mundo"];
let array_5 = ["Adios", "Mundo"];
let array_6 = array_4.concat(array_5, "Adios");
console.log(array_6); // imprime: ["Hola", "Mundo", "Adios", "Mundo", "Adios"]

//ejemplo 2 ( unir 2 listas con factor de propagacion )
console.log(...array_4);
const lista1 = [...array_4, ...array_5]; // spread operator para unir dos arrays
console.log(lista1); // imprime: ["Hola", "Mundo", "Adios", "Mundo", "Adios"]

// ERROR DE CODIGO //

const lista2 = [array_4, array_5];
console.log(lista2); // imprime: [["Hola", "Mundo"], ["Adios", "Mundo"]]   // ERROR DE CODIGO

// ERROR DE CODIGO, NO SE HACE ASI.//
