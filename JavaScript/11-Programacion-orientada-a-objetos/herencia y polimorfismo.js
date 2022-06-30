// Herencias - Inheritance
class Persona {
  _nombre;
  _edad;
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }
  saludar() {
    console.log(`Hola, me llamo ${this._nombre} tengo ${this._edad} años`);
  }
}

class Desarrollador extends Persona {
  // Herencia de una clase padre a una hija - Inheritance
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad); // 'super' este llama a la calse superior, q es la calse padre y le pasa los parametros
    this.lenguaje = lenguaje; // 'this' es una referencia a la clase hija
  }
  saludar() {
    // Sobreescribir un metodo de la clase padre - Override
    super.saludar(); // 'super' llama al metodo de la clase padre - Se crea Polimorfismo
    console.log(`Y soy desarroaldor de Java script`);
  }
}

const desarrollador = new Desarrollador("Gabriel", 34, "JavaScript");
console.log(desarrollador);
desarrollador.saludar();

// ( Tambien se puede poner parametros protegidos, los guion bajo(_), podemos acceder de la misma forma desde la clase padre))
