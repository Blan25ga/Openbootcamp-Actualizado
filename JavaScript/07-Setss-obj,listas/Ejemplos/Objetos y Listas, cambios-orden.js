/// Trabajando con objetos.
const obj = {
  id: 2,
  nombre: "Juan",
  apellido: "Perez",
  isDeveloper: true,
  libros_leidos: ["El señor de los anillos", "El señor de los anillos 2"],
  "4-juegos": [1, 2, 3, 4, 5],
};

console.log(obj.id); // 2
console.log(obj["4-juegos"]); // [1, 2, 3, 4, 5]
console.log(obj["4-juegos"][1]); // 2

const prop = "isDeveloper";
console.log(obj[prop]); // true

const obj2 = obj; // copia del objeto
console.log(obj2); // { id: 2, nombre: 'Juan', apellido: 'Perez', isDeveloper: true, libros_leidos: [ 'El señor de los anillos', 'El señor de los anillos 2' ], '4-juegos': [ 1, 2, 3, 4, 5 ] }

obj2.nombre = "Carlitos";
console.log(obj2.nombre); // 'Carlitos'

console.log(obj.nombre); // 'Carlitos' // no se modifico el objeto original, pero si se modifica en la memoria.( esto pasa en los objetos) //

// ejemplo de cambio de valores en datos primitivos
let val1 = 5;
let val2 = val1;
val2 = 10;
console.log(val1); // 5 // no se modifico el valor original porque es un valor primitivo
console.log(val2); // 10 // se modifico el valor original porque es un valor primitivo  porque es una copia de la variable

// para modificar un objeto
const obj3 = { ...obj }; // codigo de como declarar el objeto para cambiar el nombre del objeto
console.log(obj.nombre); // 'Carlitos'
console.log(obj3.nombre); // 'Carlitos'

obj3.nombre = "Gabriel";
console.log(obj.nombre); // 'Carlitos'
console.log(obj3.nombre); // 'Gabriel' // se modifico el objeto original

////////////////////////////////////////////////////////////////

// Como ordenar listas de objetos en funcion de una propiedad
const listaPeliculas = [
  { Titulo: "Lo que el viento se llevo", año: 1939 },
  { Titulo: "Titanic", año: 1997 },
  { Titulo: "Moana", año: 2016 },
  { Titulo: "El señor de los anillos", año: 2001 },
  { Titulo: "Ted", año: 2012 },
];
console.log(listaPeliculas); // [ { Titulo: 'Lo que el viento se llevo', año: 1939 }, { Titulo: 'Titanic', año: 1997 }, { Titulo: 'Moana', año: 2016 }, { Titulo: 'El señor de los anillos', año: 2001 }, { Titulo: 'Ted', año: 2012 } ]

// .sort() --> muta el valor original de la lista

listaPeliculas.sort((a, b) => a.año - b.año); // ordena la lista de menor a mayor
console.log(listaPeliculas); // [ { Titulo: 'El señor de los anillos', año: 2001 }, { Titulo: 'Moana', año: 2016 }, { Titulo: 'Ted', año: 2012 }, { Titulo: 'Titanic', año: 1997 }, { Titulo: 'Lo que el viento se llevo', año: 1939 } ]
