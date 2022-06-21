//Sets o conjuntos ( en castellano)
//  Sets es una colección de elementos que no pueden tener duplicados
//  y no se pueden ordenar, yampoco nos deja almacenar o agrgar valores que ya existen dentro de el
// la diferencia entre array y sets, es que en sets, nos asegura que no va a haber valores repetidos.

// ejemplos de Sets
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const set = new Set(array);

console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(set); // Set { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

//   .add() agregar un elemento al set
set.add("Hola");
console.log(set); // Set { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Hola' }

//   .delete() eliminar un elemento al set
set.delete("Hola");
console.log(set); // Set { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

//   .clear() eliminar todos los elementos del set
//set.clear();
//console.log(set); // Set {}  ( vacio )

//   .has() verificar si un elemento existe en el set
console.log(set.has(40)); // false

//     .size() verificar si un elemento existe en el set
console.log(set.size);

set.forEach((valor) => {
  console.log(valor); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Hola'
});

// convertir set en array con metodo de propagacion
const ar_set = [...set];
console.log(ar_set(5)); // [1, 2, 3, 4, 5]
