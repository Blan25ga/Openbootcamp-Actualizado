// Carga y sobre carga de funciones

//ejemplo

function saludar() {
  hola(); // Imprime: "Hola"
}

function hola() {
  console.log("Hola! Soy la funcion hola()"); // Imprime: "Hola! Soy la funcion hola()"
}

saludar();

/// 1. global()
/// 2. saludar() global()
/// 3. hola() saludar() global()
/// 4. salduar()  global()
/// 5. global()

// function recursiva
//function recursivo() {
//   recurcivo();
//}
//recursivo();
/// funcion mal declarda.
