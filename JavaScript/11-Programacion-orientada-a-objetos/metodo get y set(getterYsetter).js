// Getter and setters

// Getter : metodo para obtener el valor de un atributo/ metodos privados o protegidos.
// Setter : metodo que nos permite cambiar el valor de alguno de los atributos privados o protegidos.

//ejemplo de getter y setter
class Persona {
  #nombre;
  #edad;
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nombre) {
    this.#nombre = nombre;
  }
  get edad() {
    return this.#edad;
  }
  set edad(edad) {
    this.#edad = edad;
  }
}
const persona = new Persona("Gabriel", 45);
console.log(persona.nombre); // Gabriel
persona.nombre = "Juan";
console.log(persona.nombre); // Juan
console.log(persona.edad); // 45
persona.edad = 50;
console.log(persona.edad); // 50
