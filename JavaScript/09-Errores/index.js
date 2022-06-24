// gestion de logs en .node

const logger = require("./logger");
//console.log("Hola, estoy saliendo por pantalla");
//logger.info("Hola, soy un mensaje informativo");
//logger.warn("Hola, soy un mensaje de advertencia");
//logger.error("Hola, soy un mensaje de error");
//logger.debug("Hola, soy un mensaje de depuracion");

// para que aparezca en la terminal, crear un archivo en la carpeta de trabajo con node y pocambiar el test por start y el nombre de la carpeta a trabajar, en este caso fue 'index.js´.
//tambien en la parte de Main, hay que poner el nimbre del archivo a inspeccionar, esto se cambia en .json.

// Funcion de deviuelve un error con mensaje personalizado, y se registra a traves de un try, catch.

function crearHerror() {
  throw new Error("Soy el nuevo error de turno");
}
try {
  crearHerror();
} catch (error) {
  logger.error(error.message);
}
