// funcion sumar
export function suma(a, b) {
  return a + b;
}

// funcion restar
export function resta(a, b) {
  return a - b;
}

// funcion multiplicar
export function multiplicar(a, b) {
  return a * b;
}

// funcion elevar
export function elevar(a, b) {
  return a ** b;
}

// funcion factorial
export function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1); // recursividad
}
