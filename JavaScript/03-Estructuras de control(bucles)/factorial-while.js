// factorial-while

let factorial = 1; // Iniciacion de factorial
let num = 10; // Iniciacion de numero
while (num > 1) {
  // Condicion de salida del ciclo while (si 'num' es mayor que 1, 1seria el comienzao del factorial) se ejecuta el ciclo
  factorial *= num--; // Operacion de multiplicacion de factorial por numero y decremento de numero en 1.
}
console.log(factorial);
