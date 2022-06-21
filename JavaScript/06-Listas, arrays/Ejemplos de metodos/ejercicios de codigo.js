// variable que contenga la lista de la compra (mínimo 5 elementos)
const lista = ["Leche", "Huevos", "Pan", "Carne", "Arina", "Galletitas"];

//Modifica la lista de la compra y añádele "Aceite de Girasol"
lista.push("Aceite de Girasol");
console.log(lista); // imprime: ['Leche', 'Huevos', 'Pan', 'Carne', 'Arina', 'Galletitas', 'Aceite de Girasol']

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista.pop();
console.log(lista); // imprime: [Leche, Huevos, Pan, Carne, Arina, Galletitas]

// lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
  {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    fecha: "1972",
  },
  {
    titulo: "Top Gun",
    director: "Joseph Kosinski",
    fecha: "2022",
  },
  {
    titulo: "Rocky 4",
    director: "Sylvester Stallone",
    fecha: "1985",
  },
];

// nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculas_2 = peliculas.filter(function (elemento) {
  return elemento.fecha > "2010";
});
console.log(peliculas_2); // imprime: [{ titulo: "Top Gun", director: "Joseph Kosinski", fecha: "2022" }]

//  nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(function (elemento) {
  return elemento.director;
});
console.log(directores); // imprime: ["Francis Ford Coppola", "Joseph Kosinski", "Sylvester Stallone"]

// nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(function (elemento) {
  return elemento.titulo;
});
console.log(titulos); // imprime: ["El Padrino", "Top Gun", "Rocky 4"]

// nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const lista_3 = directores.concat(titulos); // concatena directores y titulos
console.log(lista_3); // imprime: ["Francis Ford Coppola", "Joseph Kosinski", "Sylvester Stallone", "El Padrino", "Top Gun", "Rocky 4"]

// nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const lista_4 = [...directores, ...titulos]; // concatena directores y titulos
console.log(lista_4); // imprime: ["Francis Ford Coppola", "Joseph Kosinski", "Sylvester Stallone", "El Padrino", "Top Gun", "Rocky 4"]
