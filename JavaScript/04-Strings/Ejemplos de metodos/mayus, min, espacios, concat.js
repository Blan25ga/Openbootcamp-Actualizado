// Metodo para transformar todo a mayuscula con toUpperCase()

let str = "Gabriel";
let str_2 = "Blanco";
let str_mayuscula = str.toUpperCase("gabriel"); // transforma todo a mayuscula
console.log(str_mayuscula);

// Metodo toLowerCase() para transformar todo a minuscula
let str_minuscula = str.toLowerCase("gabriel"); // transforma todo a minuscula
console.log(str_minuscula);

// Metodo para pasar una letra mayuscula a minuscula
let str_minuscula_letra = str.charAt(0).toLowerCase(); // transforma la primera letra a minuscula
console.log(str_minuscula_letra);

// Metodo para concatenar 2 strings letra por letra con +=
let str_concatenar = str_2.concat(" " + str); // concatena 2 strings
console.log(str_concatenar); // imprime: "Blanco Gabriel"

// Metodo para eliminar los espacios del principo y final de un string con trim()
let str_espacios = "   Gabriel   ";
//console.log(str_espacios.trim()); // elimina los espacios del principo y final

// Metodo para eliminar los espacios del PRINCIPIO
let str_espacios_inicio = "   Gabriel   ";
console.log(str_espacios_inicio.trimStart()); // elimina los espacios del principo
// Metodo para eliminar los espacios del FINAL
let str_espacios_final = "   Gabriel   ";
console.log(str_espacios_final.trimEnd()); // elimina los espacios del final

// Metodo para obtener el caracter numero 1 de un string con charAt()
let str_caracter = "Gabriel";
console.log(str_caracter.charAt(1)); // imprime: "a"

// Metdo para obtener la posicion de una palabra en un string con indexOf()
let str_posicion = "Gabriel Hernan Blanco";
console.log(str_posicion.indexOf("Hernan")); // imprime "8", la pocion de comienzo de la palabra
