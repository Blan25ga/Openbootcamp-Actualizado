// funcion sumar
function suma(a, b) {
  return a + b;
}

// funcion restar
function resta(a, b) {
  return a - b;
}

// funcion multiplicar
function multiplicar(a, b) {
  return a * b;
}

// funcion elevar
function elevar(a, b) {
  return a ** b;
}

// funcion factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1); // recursividad
}

module.exports = {
  // exportar las siguientes funciones, de esta manera se hacen publicas, y las podemos usar desde otro archivo.

  suma,
  resta,
  multiplicar,
  elevar,
  factorial,
};
