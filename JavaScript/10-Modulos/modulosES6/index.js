import { suma, elevar } from "./modulos/matematicas.js";

import getAutor from "./modulos/literatura.js";

const sum = suma(5, 10);
console.log(sum);

const potencia = elevar(2, 10);
console.log(potencia);

console.log(getAutor()); // Juan Fernandez
