// funcion sin parametros que devuelva siempre true //

function funcionSinParametros() {
  return true;
}
console.log(funcionSinParametros()); // Imprime: true

// función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function saludarAsync() {
  return new Promise((resolve, reject) => {
    // se crea una promesa
    setTimeout(() => {
      // se crea un setTimeout
      console.log("Hola soy una promesa"); // se imprime en consola
      resolve(); // se ejecuta la promesa
    }, 5000); // se pasa el tiempo de ejecucion
  });
}
saludarAsync().then(() => console.log("Se ha ejecutado correctamente")); // se ejecuta la promesa

//Una función generadora de índices pares automáticos

function* generaIndicesPares() {
  // se crea una funcion generadora
  let i = 0;
  while (true) {
    // se crea un ciclo infinito
    i++; // se incrementa el indice
    if (i % 2 === 0) {
      // se comprueba si el indice es par o impar
      yield i; // se devuelve el indice
    }
  }
}
const gen = generaIndicesPares(); // se crea una variable para guardar la funcion generadora
console.log(gen.next().value); // 2
console.log(gen.next().value); // 4
console.log(gen.next().value); // 6
