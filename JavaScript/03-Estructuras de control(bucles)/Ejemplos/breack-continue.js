// Utilizacion del los Breack y Continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < lista.length; i++) {
  if (lista[i] === 5) {
    continue; // salta al siguiente ciclo y continua con el siguiente
  } // llega a 5 y viuelve a empezar el ciclo.

  console.log(lista[i]); // imprime los valores de la lista

  if (lista[i] > 5) {
    // si el valor de la lista es mayor a 5 se sale del ciclo.
    break;
  }
}

//Ambito de variables
// Scope es el alcance de las variables.
// con 'let' nos aseguramos que la variable solo exista en el alcance de la funcion.
// con 'var' podemos crear variables globales.
// con 'const' nos aseguramos que la variable no puede cambiar su valor.
