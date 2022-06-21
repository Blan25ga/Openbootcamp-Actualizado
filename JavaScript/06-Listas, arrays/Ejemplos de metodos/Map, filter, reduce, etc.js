//////  Trabajamos con Metodos  avanzados ///////

// .map() - Metodo para transformar un array en otro array
// .filter() - Metodo para filtrar un array
// .reduce() - Metodo para reducir un array a un solo valor
// .find() - Metodo para encontrar un valor en un array
// .findIndex() - Metodo para encontrar un valor en un array y obtener su posicion
// .some() - Metodo para verificar si algun valor del array cumple con una condicion
// .every() - Metodo para verificar si todos los valores del array cumplen con una condicion
// .slice() - Metodo para obtener una parte de un array
/////////////////////////////////////////////////////

// Ejemplo de metodo .map()
let array = [1, 2, 3, 4, 5];
let array_2 = array.map(function (valor) {
  return valor * 2; // devuelve un array con los valores multiplicados por 2
});
console.log(array_2); // imprime: [2, 4, 6, 8, 10]

// Enumerar los elementos de un array  de paises con .map()
let paises = ["España", "Francia", "Alemania", "Inglaterra", "Portugal"];
let array_3 = paises.map(function (valor, indice) {
  return indice + 1 + " - " + valor;
});
console.log(array_3); // imprime:  [1 - España, 2 - Francia, 3 - Alemania, 4 - Inglaterra, 5 - Portugal]

///////    Metodo filter() ///////////

// Ejemplo de metodo .filter(), filtra los valores deseados de un array
let numeros = [1, 2, 3, 4, 5];
let array_5 = numeros.filter(function (valor) {
  return valor > 2;
}); // devuelve un array con los valores mayores a 2
console.log(array_5); // imprime: [3, 4, 5]

//ejemplo 2 de metodo .filter()

let listaObjetos = [
  { nombre: "Gabriel", edad: 23 },
  { nombre: "Hernan", edad: 24 },
  { nombre: "Macarena", edad: 32 },
  { nombre: "Edueardo", edad: 41 },
];
//const mayores = listaObjetos.filter(obj => {
//   if (obj.edad > 30) {
//      return true
//   }  else {
//      return false;
//   }  // devuelve un array con los valores mayores a 30
//}
//);
//console.log(mayores); // imprime: [{ nombre: "Macarena", edad: 32 }, { nombre: "Edueardo", edad: 41 }]

///////  reduccion de codigo al ejemplo anterior .filter() //////
const mayores = listaObjetos.filter((obj) => obj.edad > 30);
console.log(mayores); // imprime: [{ nombre: "Macarena", edad: 32 }, { nombre: "Edueardo", edad: 41 }]

const nuevaLista = listaObjetos.filter((obj) => obj.nombre !== "Gabriel");
console.log(nuevaLista); // imprime: [{ nombre: "Hernan", edad: 24 }, { nombre: "Macarena", edad: 32 }, { nombre: "Edueardo", edad: 41 }]

///////    Metodo .reduce()  ///////////

// Ejemplo de metodo .reduce(), reduce un array a un solo valor
let numeros_2 = [1, 2, 3, 4, 5];
let newNumeros = numeros_2.reduce(function (valor_anterior, valor_actual) {
  return valor_anterior + valor_actual;
}); // devuelve un valor con la suma de todos los valores del array
console.log(newNumeros); // imprime: 15

//////    Metodo .find()  ///////////

// Ejemplo de metodo .find(), encuentra el valor deseado en un array
let numeros_3 = [1, 2, 3, 4, 5];
let newNumeros_2 = numeros_3.find(function (valor) {
  return valor > 3;
}); // devuelve el valor mayor a 3
console.log(newNumeros_2); // imprime: 4  (el 4 es el valor mayor a 3)

//////    Metodo .findIndex()  ///////////

// Ejemplo de metodo .findIndex()
let numeros_4 = [1, 2, 3, 4, 5];
let newNumeros_3 = numeros_4.findIndex(function (valor) {
  return valor > 3; // devuelve la posicion del valor mayor a 3
});
console.log(newNumeros_3); // imprime: 3  (el 3 es la posicion del valor mayor a 3)

//////   Metodo .some()  ///////////

// Ejemplo de metodo .some(), verifica si algun valor del array y si cumple, lanza una condicion booleana
let numeros_5 = [1, 2, 3, 4, 5];
let newNumeros_4 = numeros_5.some(function (valor) {
  return valor > 3; // devuelve true o false
});
console.log(newNumeros_4); // imprime: true

const existeJuan = numeros_5.sone((persona) => persona.nombre === "Juan"); // la flecha es una funcion anonima que no tiene nombre y no se puede usar la palabra reservada function
console.log(existeJuan); // imprime: false

//////   Metodo .every()  ///////////

// Ejemplo de metodo .every(), verifica 'SI' todos los valores del array cumplen con una condicion
let numeros_6 = [1, 2, 3, 4, 5];
let newNumeros_5 = numeros_6.every(function (valor) {
  // devuelve true o false
  return valor > 6; // SI TODOS CUMPLEN LA CONDICION DE SER MAYOR A 6, devuelve 'TRUE'
});
console.log(newNumeros_5); // imprime: false

//////   Metodo .slice()  ///////////

// Ejemplo de metodo .slice(), obtiene una parte de un array
let numeros_7 = [1, 2, 3, 4, 5];
let newNumeros_6 = numeros_7.slice(2, 4); // devuelve un array con los valores de la posicion 2 a la 4 (sin incluir la 4)
console.log(newNumeros_6); // imprime: [3, 4]

// realizar funcion para comparar 2 arrays y verificar si son iguales
let lista1 = [1, 2, 3, 4, 5];
let lista2 = [1, 2, 3, 4, 10];
let resultado = lista1.every((valor, indice) => {
  return valor === lista2[indice]; // comparar si los valores de cada posicion son iguales
});
console.log(resultado); // imprime: false
