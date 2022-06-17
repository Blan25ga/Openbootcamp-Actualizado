//factorial de 10 con bucle for.

let factorial = 1;
for (let i = 10; i > 0; i--) {
  // i-- decrementa i en 1 cada iteracion. i>0 para que no se salte el bucle.
  factorial *= i; // factorial es igual a factorial * i.
  console.log(factorial);
}
