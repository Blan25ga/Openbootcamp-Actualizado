// como iterar a una lista con for, forma no tan eficiente
let lista = ["Gabriel", "Hernan", "Blanco"];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

// forEach()  // itera una lista con forEach()
// como iterar a una lista con forEach(), {(forma eficiente. ES6)}
let suma = 0;
let lista_2 = [1, 2, 3, 4, 5];
lista_2.forEach(function (elemento) {
  suma += elemento;
}); // imprime 15
console.log(suma); // imprime 15

// busqueda de un valor dentro de una lista con .find()
let lista_3 = [1, 2, 3, 4, 5];
let busqueda = lista_3.find(function (elemento) {
  return elemento == 3;
}); // imprime 3
console.log(busqueda); // imprime 3

// retornar valor dentro de un lista de OBJETOS con .find()
let listaObjetos = [
  {
    nombre: "Gabriel",
    edad: 23,
  },
  {
    nombre: "Hernan",
    edad: 24,
  },
  {
    nombre: "Blanco",
    edad: 25,
  },
];
let busquedaObjeto = listaObjetos.find(function (elemento) {
  // busca el objeto con la propiedad nombre igual a "Gabriel"
  return elemento.nombre === "Gabriel";
});
console.log(busquedaObjeto); // imprime { nombre: "Gabriel", edad: 23 }
