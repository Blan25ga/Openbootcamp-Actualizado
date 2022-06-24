// funcion con throw que muestra un mensaje de error
function* generaId() {
  // funcion generadora de id que muestra un mensaje de error
  let id = 0;
  while (true) {
    id++;
    if (id === 10) {
      //   si el id es 10, se resetea a 0
      return id;
    }
    yield id; // devuelve el id y pausa la ejecucion hasta que se vuelva a llamar
  }
} // fin de la funcion generadora
const gen = generaId(); // crea el objeto generador gen y lo guarda en la variable gen
console.log(gen.next().value); // 1 y pausa la ejecucion
console.log(gen.next().value); // 2 y pausa la ejecucion
console.log(gen.next().value); // 3 y pausa la ejecucion
console.log(gen.next().value); // 4 y pausa la ejecucion
console.log(gen.next().value); // 5 y pausa la ejecucion
console.log(gen.next().value); // 6 y pausa la ejecucion
console.log(gen.next().value); // 7 y pausa la ejecucion
console.log(gen.next().value); // 8 y pausa la ejecucion
console.log(gen.next().value); // 9 y pausa la ejecucion
console.log(gen.next().value); // 10
console.log(gen.next().value); // 0 y pausa la ejecucion
