const lista = ["Leche", "Huevos", "Pan", "Carne", "Arina", "Galletitas"];

lista.push("Aceite de Girasol");
console.log(lista); // imprime: ['Leche', 'Huevos', 'Pan', 'Carne', 'Arina', 'Galletitas', 'Aceite de Girasol']

lista.pop();
console.log(lista); // imprime: [Leche, Huevos, Pan, Carne, Arina, Galletitas]

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

const peliculas_2 = peliculas.filter(function (elemento) {
  return elemento.fecha > "2010";
});
console.log(peliculas_2); // imprime: [{ titulo: "Top Gun", director: "Joseph Kosinski", fecha: "2022" }]

const directores = peliculas.map(function (elemento) {
  return elemento.director;
});
console.log(directores); // imprime: ["Francis Ford Coppola", "Joseph Kosinski", "Sylvester Stallone"]

const titulos = peliculas.map(function (elemento) {
  return elemento.titulo;
});
console.log(titulos); // imprime: ["El Padrino", "Top Gun", "Rocky 4"]

const lista_3 = directores.concat(titulos); // concatena directores y titulos
console.log(lista_3); // imprime: ["Francis Ford Coppola", "Joseph Kosinski", "Sylvester Stallone", "El Padrino", "Top Gun", "Rocky 4"]

const lista_4 = [...directores, ...titulos]; // concatena directores y titulos
console.log(lista_4); // imprime: ["Francis Ford Coppola", "Joseph Kosinski", "Sylvester Stallone", "El Padrino", "Top Gun", "Rocky 4"]
