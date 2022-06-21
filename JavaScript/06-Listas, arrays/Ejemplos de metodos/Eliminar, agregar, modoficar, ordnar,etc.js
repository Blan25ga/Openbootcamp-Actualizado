//                             //                        //
///////////////////////        ///////////////////

// push() - agrega un nuevo valor al final del array
// pop() - elimina el ultimo valor del array
// shift()  - elimina el primer valor del array
// unshift()  - agrega un nuevo valor al principio del array
// splice() - elimina, modica, o añade un valor del array
// sort() - ordena los valores del array
// reverse() - invierte el orden del array
// join() - convierte un array en un string
// split() - convierte un string en un array
// slice() - extrae una parte del array , este metodo, NO MODIFICA el valor del array original.

// ejemplo de .push()  este cambia el valor del array.
let array = [1, 2, 3, 4, 5];
console.log(array); // imprime: [1, 2, 3, 4, 5]
array.push("final"); // agrega un nuevo valor al final del array
console.log(array); // imprime: [1, 2, 3, 4, 5, 'final']

// ejemplo de .pop()
let array_2 = [1, 2, 3, 4, 5];
console.log(array_2); // imprime: [1, 2, 3, 4, 5]
array_2.pop(); // elimina el ultimo valor del array
console.log(array_2); // imprime: [1, 2, 3, 4]

// ejemplo de .shift()
let array_3 = [1, 2, 3, 4, 5];
console.log(array_3); // imprime: [1, 2, 3, 4, 5]
array_3.shift(); // elimina el primer valor del array
console.log(array_3); // imprime: [2, 3, 4, 5]

// ejemplo de .unshift()
let array_4 = [1, 2, 3, 4, 5];
console.log(array_4); // imprime: [1, 2, 3, 4, 5]
array_4.unshift("inicio"); // agrega un nuevo valor al principio del array
console.log(array_4); // imprime: ['inicio', 1, 2, 3, 4, 5]

///  METODO SPLICE   ///

// ejemplo de .splice()
let array_5 = [1, 2, 3, 4, 5];
console.log(array_5); // imprime: [1, 2, 3, 4, 5]
array_5.splice(3, 2); // el primer valor es el indice y el segundo es la cantidad de caracteres que elimina luego de ese indice.
console.log(array_5); // imprime: [1, 2, 3]

//añadir valores con .splice();
array_5.splice(3, 0, "nuevo");
console.log(array_5); // imprime: [1, 2, 3, 'nuevo'] // el segundo valor es la cantidad de caracteres que se añaden luego de ese indice.

// modificar valores con .splice()
array_5.splice(2, 1, "hola");
console.log(array_5); // imprime: [1, 2, 'hola', 'nuevo']

///  METODO SORT()   /////

// ejempla de .sort(), este CAMBIA de valor el ARRAY original
let array_6 = [3, 1, 5, 4, 2];
console.log(array_6); // imprime: [3, 1, 5, 4, 2]
array_6.sort(); // ordena los valores del array
console.log(array_6); // imprime: [1, 2, 3, 4, 5]

///// METODO REVERSE() /////
// ejemplo de .reverse()
let array_7 = [1, 2, 3, 4, 5];
console.log(array_7); // imprime: [1, 2, 3, 4, 5]
array_7.reverse(); // invierte el orden del array
console.log(array_7); // imprime: [5, 4, 3, 2, 1]

///// METODO JOIN() /////
// ejemplo de .join()
let array_8 = [1, 2, 3, 4, 5];
console.log(array_8); // imprime: [1, 2, 3, 4, 5]
let join_array = array_8.join(); // convierte un array en un string
console.log(join_array); // imprime: "1,2,3,4,5"

///// METODO SPLIT() /////
// ejemplo de .split()
let split_array = "1,2,3,4,5";
console.log(split_array); // imprime: "1,2,3,4,5"
let array_9 = split_array.split(","); // convierte un string en un array
console.log(array_9); // imprime: [1, 2, 3, 4, 5]

///// METODO SLICE() /////
// ejemplo de .slice() ; extrae una parte del array
let array_10 = ["hola", 1, 2, 3, 4, 5, null];
console.log(array_10); // imprime: [1, 2, 3, 4, 5]
let slice_array = array_10.slice(1, 4); // mostrara los valores desde el indice 1 al 4; si se le agrga un numero negativo, eliminara de atras para delante
console.log(slice_array); // imprime [1, 2, 3]
