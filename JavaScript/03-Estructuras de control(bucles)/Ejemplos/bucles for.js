//Bucle for

//for (inicializacion; condicion; incremento o decreciente) {
// } Bucle for, formato de codigo.

//ejemplo

for (let i = 0; i < 10; i++) {
  //  (ejemplo de bucle for) suma de 0 a 9
}

let lista = ["Manzana", "Pera", "Naranja", "Sandia", "Melon", 1500];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
} //recorrido de lista

//Estructura for..of
for (let elemento of lista) {
  //recorre un array   y lo imprime en
  console.log(elemento); //consola   (ejemplo de bucle for..of)
}

//Estructura forEach
lista.forEach((elemento) => {
  console.log(elemento); //recorre un array   y lo imprime en
}); //consola   (ejemplo de bucle forEach)

// Estructura for...in
let persona = {
  nombre: "Juan", //propiedad
  apellido: "Perez", //propiedad
  edad: 30, //propiedad
  peso: 75, //propiedad
  altura: 1.75, //propiedad
  sexo: "masculino", //propiedad
  estadoCivil: "casado", //propiedad
  hobbies: ["cine", "futbol", "juegos"], //propiedad
};

let prop = "nombre";
console.log(persona[prop]); //recorre un objeto, toma la propiedad nombre y lo imprime en consola

for (let propiedad in persona) {
  console.log(propiedad); //recorre un objeto y lo imprime en consola
  console.log(persona[propiedad]); //recorre un objeto y obtiene la propiedad de cada una, lo imprime en consola
}
