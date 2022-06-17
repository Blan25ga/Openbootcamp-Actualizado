//factorial-break

let factorial = 1; // Iniciacion de factorial
let num = 10; // Iniciacion de numero
while (true) {
  factorial *= num; // Operacion de multiplicacion de factorial por numero
  num--; // Decremento de numero en 1
  if (num === 1) break; // cuando numero llegue al valor de 1, se sale del ciclo.
}
console.log(factorial);
