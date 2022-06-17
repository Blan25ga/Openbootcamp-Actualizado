// Bucle While
// //while (condicion) {  //bucle while, SE VA A "ejecutar" CADA VEZ QUE LA 'CONDICION' SE CUMPLA.

let i = 0;
let max = 10;
while (i < max) {
  console.log(i); //imprime en consola el valor de i
  i++; //incrementa el valor de i, siempre verificar el valor de la condicion ya que se puede efectuar un bucle infinito.
  //poner el console.log dentro del while para que se ejecute solo una vez. (ejemplo de bucle while)
}

i = 5;
// Do.. while (este bucle siempre se ejecua una vez)
do {
  i++; //siempre ejecuta la primera accion, descupes, pasa a la condicion, si esta se cumple, se sigue ejecutando.
  console.log(i); //imprime en consola el valor de i
} while (i < max); //ejemplo de bucle do..while
//condicion
