// Clase persona con metodos constructores dentro
class Persona {
  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`); // para que funcione el this. hay que poner comilla al reves
    // con el simbolo ${this.} se puede acceder a los atributos del objeto
  }
}
// como crear un objeto desde la clase persona con los metodos constructores y los parametros
const nueva_persona = new Persona("Gabriel", 20, true); // el new es para crear un objeto desde la clase persona
console.log(nueva_persona);
nueva_persona.saludar(); // llama al metodo saludar

let numero = 55; //inicializar una variable
let persona_2 = new Persona("Maria", 34, false); // Instanciar un objeto de la clase persona

// operador instanceof --> para saber si un objeto es de una clase
console.log(persona_2 instanceof Persona); // true
console.log(numero instanceof Number); // false
