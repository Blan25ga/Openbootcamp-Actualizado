//// Funciones asincronas

function miAsinc() {
  // Hace una llamada a una base de datos externa
  // Puede darnos algun error
}

const miPromesa = new Promise((resolve, reject) => {
  // Funciones asincronas que devuelven promesas (promise)
  const i = Math.floor(Math.random() * 2); // 0 o 1
  // si esta todo correcto
  if (i !== 0) {
    resolve();
  } else {
    reject();
  }
});
// como ejecutarla
miPromesa
  .then(() => console.log("Se ha ejecutado correctamente")) // .then- es una funcion que se ejecuta cuando la promesa se cumple
  .catch(() => console.log("Ha habido un error")); // .catch -es una funcion que se ejecuta cuando se produce un error
