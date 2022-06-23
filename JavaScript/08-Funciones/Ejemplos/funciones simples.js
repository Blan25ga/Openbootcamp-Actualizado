///Que son las funciones , como se declara y como se utilizan.

// las funciones son una funcion que se ejecuta en una sola linea de codigo y que retorna un valor
// las funciones pueden recibir parametros y retornar valores y retornar un valor especifico
// las funciones pueden ser anonimas
// las funciones pueden ser de tipo flecha

//////// IMPORTANTE ////////////

//// No se puede acceder a variables que se eencuentre fuera de las funciones////

//////// IMPORTANTE ////////////
//funcion saludar persona

let persona = "Gabriel";
function saludar(persona) {
  //se puede declarar una funcion sin parametros o con parametros
  return "Hola " + persona;
}
console.log(saludar(persona)); // Imprime: "Hola Gabriel"
//funcion saludar persona  con parametro

let nombre = { nombre: "Gabriel", apellido: "Perez" };
function saludar2(nombre) {
  return "Hola " + nombre.nombre + " " + nombre.apellido;
} // Imprime: "Hola Gabriel Perez"
console.log(saludar2(nombre)); // Imprime: "Hola Gabriel Perez"

function saludarPersona(objeto) {
  objeto.apellido = "Nuevo apellido"; // se modifica el valor del objeto
  console.log("Hola ${objeto.nombre} ${objeto.apellido}"); // Imprime: "Hola Gabriel Nuevo apellido"
}

/////////

function imprimeNumero(numero = 5) {
  // funcion decalrada con parametro
  console.log(numero);
} // Imprime: 5
imprimeNumero(); // Imprime: 5
imprimeNumero(10); // Imprime: 10

// Declarar funcion sin parametro
function imprimeNumero2() {
  console.log(10);
}
imprimeNumero2(); // Imprime: 10

/////
function suma(...nums) {
  // funcion decalrada con parametro
  console.log(nums.reduce((a, b) => a + b)); // Imprime: 15
}
suma(1, 2, 3, 4, 5); // Imprime: 1,2,3,4,5

//funcion sumar que implemente un return con una suma de dos numeros
function sumar(num1, num2) {
  return num1 + num2;
}
console.log(sumar(1, 2)); // Imprime: 3
