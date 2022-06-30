// craer clase de tipo persona
class Persona {
  // privadas= a private (#) por delante; atributos con el simbolo numeral y el nombre del atributo que quiero proteger (#nombre).
  // con esto se pone en privado y solo accedo desde dentro de la clase.
  #nombre;
  #edad;
  #obtenerEdad;

  // protegidas= protected ( se inicializan con un barra baja(_)); // solo se puede acceder desde dentro de la clase y desde las clases que heredan/o descendientes.
  _isDeveloper = true; // atributo protrgido
  constructor(nombre, edad) {
    // metodos publicos, sin almoadilla; estan en elem anterior.
    this.#nombre = nombre;
    this.#edad = edad;
    this._isDeveloper = true;
  }
  saludo() {
    return `Hola, me llamo ${this.nombre}, tengo ${this.edad} años.`;
  }
  obtenerNombre() {
    // metodo para obtener el nombre de la persona desde afuera
    return this.#nombre; // se puede acceder a los atributos privados
  }
  obtenerEdad() {
    return this.#edad;
  }
}

const persona = new Persona("Gabriel", 45);
// console.log(persona); // Persona { nombre: 'Gabriel', edad: 45 }
// console.log(persona.saludo()); // Hola, me llamo Gabriel, tengo 45 años.
// console.log(persona.nombre); // Gabriel // no se puede acceder a los atributos privados
console.log(persona.obtenerNombre()); // Gabriel // se puede acceder a los atributos privados con el metodo obtenerNombre
console.log(persona._isDeveloper); // true // se accede de la siguiente manera
