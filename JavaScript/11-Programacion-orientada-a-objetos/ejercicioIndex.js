class Estudiante {
  //calse con variables y sus parametros.
  nombre = "Gabriel";
  asignaturas = ["HTML", "CSS", "JavaScript"];

  obtenDatos() {
    // Metodo de obten datos
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}

const estudiante = new Estudiante(); // Se crea una instancia de la clase Estudiante( un nuevo estudiante)
console.log(estudiante.obtenDatos());
console.log(estudiante);
console.log(estudiante.asignaturas);
