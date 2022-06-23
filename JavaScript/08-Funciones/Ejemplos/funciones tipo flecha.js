///// Funciones tipo Flecha ////

//ejemplo de funciones tipo flecha
let sumar = (num1, num2) => num1 + num2; // funcion tipo flecha que suma dos numeros y retorna el resultado
console.log(sumar(1, 2)); // Imprime: 3

//ejemplo 2

const array = [1, 2, 3, 4, 5];
const array2 = array.map((valor) => valor * 2); // funcion tipo flecha que multiplica cada valor del array por 2 y retorna el resultado

console.log(array2); // Imprime: [2, 4, 6, 8, 10]

//ejemplo 3

const array3 = [1, 2, 3, 4, 5, 10];
const array4 = array3.filter((valor) => valor > 3); // funcion tipo flecha que filtra los valores del array que son mayores a 3 y retorna el resultado

console.log(array4); // Imprime: [4, 5, 10]
