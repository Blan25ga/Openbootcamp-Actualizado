//Ejemplo de metodo match() busca la cantidad de veces que aparece una palabra en un string.

var texto = "Hola mundo, mundo, mundo";
var resultado = texto.match(/mundo/g); //Devuelve un array con los resultados.
console.log(resultado);

// Existe la palabra "hola" dentro del texto con el metodo includes().
var texto = "Hola mundo, mundo, mundo";
var resultado = texto.includes("Hola"); //Devuelve un boolean.
console.log(resultado);

//como sabes si el texto comienza con la palabra mundo, metodo startsWith().
var texto = "Hola mundo, mundo, mundo";
var resultado = texto.startsWith("mundo"); //Devuelve un boolean
console.log(resultado);

//saber si un texto termina con otra palabra, metodo endsWith().
var texto = "Hola mundo, mundo, mundo";
var resultado = texto.endsWith("mundo"); //Devuelve un boolean
console.log(resultado);
