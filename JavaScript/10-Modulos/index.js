// la funcion factorial multiplica el numero dado por el anterior, y el resultado de este por el que sigue, etc...
// hasta que el numero sea 0, que es el caso base.
// la funcion factorial de 5 es: 5 * 4 * 3 * 2 * 1 = 120

// funcion factorial de 5
//const fact = organizador.factorial(5);
//console.log(fact); // 120

//const sum = suma(90, 10);
//console.log(sum); // 100

// Formas de importar/exportar modulos
// 1.CommonJS - require()
// 2.ES6 - import

// como importar las funciones desde el archivo.js/ que fue donde guardamos la exportacion de funciones.

// forma de importar con CammonJS- require()
//-- const organizador = require("./organizador/archivo.js");--

// forma de de acerlo con ES6
const { factorial, suma } = require("./organizador/archivo.js"); // importar las funciones

const sum = suma(5, 10);
console.log(sum); // 15

const fact = factorial(5);
console.log(fact); // 120
