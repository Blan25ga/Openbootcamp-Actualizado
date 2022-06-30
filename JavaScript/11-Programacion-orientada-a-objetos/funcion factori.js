// crear un objeto persona localmente con funcion saludo
const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 20,
  saludar: function () {
    console.log("Hola");
  },
};
console.log("Hola");

// Funcion factori //

//sirve para crear un objeto sin copiar el codia anterior.
const crearPersona = (nombre, apellido, edad) => {
  // funcion flecha  que recibe 3 parametros y retorna un objeto
  return {
    nombre,
    apellido,
    edad,
    saludo: function () {
      // a esto se lo denomina metodo de un objeto
      console.log("Hola");
    },
  };
};
const nueva_personas = crearPersona("Gabriel", "Perez", 34); // crea un objeto con los parametros que le pasemos en la funcion
console.log(nueva_personas);
