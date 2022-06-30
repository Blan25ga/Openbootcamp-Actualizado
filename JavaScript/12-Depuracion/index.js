// funcion doblar edad con con objeto persona
function doblarEdad(persona) {
  return persona.edad * 2;
}
var persona = {
  nombre: "Juan",
  edad: 20,
};
console.log(doblarEdad(persona));

function obtenerArray(edad) {
  let arrayNums = [];
  for (var i = 0; i < 10; i++) {
    const numeros = edad + i;
    console.log(numeros);
    arrayNums = [...arrayNums, doblarEdad(persona)]; // los tres puntos son spread operator para agregar un nuevo elemento al array
  }
  return arrayNums;
}
const array = obtenerArray(persona.edad);
console.log(array);
