// Operador .valueOf() - retorna valor numerico a partie de literales
let a = 2;
let b = new Number(3); // crea un objeto de tipo Number.

console.log(a); // 2
console.log(b); // imprime Numbre 3 {}
console.log(a + b); // 5
console.log(a.valueOf() + b.valueOf()); // 5

console.log(b.valueOf()); // 3

let str = new String("Hola, soy un string"); // crea un objeto de tipo String.
console.log(str); // imprime String de forma iterator {0:'H', 1:'o', 2:'l', 3:'a', 4:',', 5:' ', ....}
console.log(str.valueOf()); // imprime String "Hola, soy un string" {}

// NaN - Not a Number
let n = new Number("Hola");
console.log(n); // imprime Number NaN {}

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor); // imprime Number Infinity {}, todo numero dividido por cero o null es infinito

// Convertir string a valores numericos con Number, paseInt(), parseFloat()
let str_numero = "10.59";
console.log(Number(str_numero)); // imprime 10 numbre combierte el string en numero.
console.log(parseInt(str_numero)); // imprime 10 (elimina el decimal)
console.log(parseFloat(str_numero)); // imprime 10.59 , conviertiendo el string en numero.

// Numeros hexadecimales (base 16) son 2 bits por numero.
let numHex = "0x3a5b7"; //los Hexadacimales siempre aparecen con '0x'.
console.log(parseInt(numHex, 16)); // imprime: 239031 // cambiando el num despues de la coma le cambiamos la base.

// Obtencion de valor maximo y minimo en JavaScript
let min_precision = Number.EPSILON; // imprime: 2.220446049250313e-16 (e= por 10, elevado por 16 (e-16))
let min_valor_JS = Number.MIN_VALUE; // imprime: 5e-324
let max_valor_JS = Number.MAX_VALUE; // imprime: 1.7976931348623157e+308
