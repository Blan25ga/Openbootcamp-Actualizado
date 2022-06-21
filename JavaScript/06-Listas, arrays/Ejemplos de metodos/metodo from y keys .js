///     METODO .FROM() /////

// Ejemplo de  Array.from()
// Array.from() convierte un array en otro tipo de dato

const array1 = [1, 2, 3, 4, 5, 200];

const str = "Hola";
const arr = Array.from(str); // la funcion Array.from() convierte una cadena de texto en un array
console.log(arr); // ['H', 'o', 'l', 'a']
console.log(typeof arr); // objeto

/// METODO .KEYS() /////
// Ejemplo de  Array.keys()
// Array.keys() devuelve un array con los indices de un objeto, en este caso los indices de un objeto de tipo string

const keys = array1.keys();
console.log(keys); // {[iterator]}

const ar_keys = Array.from(keys);
console.log(ar_keys); // [0, 1, 2, 3, 4, 5] // imprime los indices de un objeto (del 'const array1', en este caso)
