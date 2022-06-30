// Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
function fibonacci(num) {
  let array = [1, 1];
  for (let i = 2; i < num; i++) {
    array = [...array, array[i - 1] + array[i - 2]];
  }
  return array;
}
console.log(fibonacci(8));
