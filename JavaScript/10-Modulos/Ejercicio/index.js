// importacion del funciones desde el modulo controller

import { suma, multiplicar } from "./controller.js";
import chalk from "chalk"; // importacion de chalk desde npmjs.com: cambia el color de la consola(el resultado por console.log)

//console.log(multiplicar(suma(1, 2), suma(4, 5))); ///(1 + 2) * (4 + 5) = 27, devuelve la multiplicacion de las sumas
console.log(chalk.green(multiplicar(suma(1, 2), suma(4, 5))));
