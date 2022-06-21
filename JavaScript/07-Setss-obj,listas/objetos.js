const persona = {
  nombre: "Gabriel",
  apellido: "Blanco",
  edad: 35,
  altura: 1.75,
  eresDesarrollador: true,
};

const edad = persona.edad;
console.log(edad); // 35 // obtengo la edad del objeto
const list = [
  {
    ...datos,
  },
];

const lista = [
  {
    ...persona, // copia del objeto persona en un nuevo objeto
  },
  {
    nombre: "Alejandro",
    apellido: "Scheider",
    edad: 34,
    altura: 1.7,
    eresDesarrollador: false,
  },
  {
    nombre: "Hugo",
    apellido: "Acevedo",
    edad: 32,
    altura: 1.72,
    eresDesarrollador: false,
  },
];

lista.sort((a, b) => a.edad - b.edad); // ordeno la lista por edad de mayor a menor

console.log(lista);
// [ { nombre: 'Alejandro', apellido: 'Scheider', edad: 34, altura: 1.70, eresDesarrollador: false }, { nombre: 'Hugo', apellido: 'Acevedo', edad: 32, altura: 1.72, eresDesarrollador: false } ]
