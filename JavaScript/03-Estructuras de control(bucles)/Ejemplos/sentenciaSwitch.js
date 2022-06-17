// sentencias SWITCH

//La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

let nota = 6;
switch (nota) {
  case 6:
    console.log("Muy bien, aprobaste");
    break;
  case 5:
    console.log("Bien, pero podrias estar mejor");
    break;
  case 4:
    console.log("No fue mucho pero alcanzo");
    break;
  case 3:
    console.log("te falto un poco para aprobar");
    break;
  case 2:
    console.log("Para la proxima estudia");
    break;
  case 1:
    console.log("No entiendo para que viniste el dia de hoy");
    break;
  default:
    console.log("Error");
    break;
}
