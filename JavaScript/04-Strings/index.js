let nombre = "Gabriel";
let apellido = "Blanco";

let student = `${nombre} ${apellido}`;
console.log(student);

let estudiante = "gabriel hernan blanco";
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudiante_2 = "GABRIEL HERNAN BLANCO";
let estudianteMinus = estudiante_2.toLowerCase();
console.log(estudianteMinus);

let palabra = " estudiante ";
let resultado = palabra.length;
console.log(resultado);

let nombre2 = "Gabriel";
let resultado_2 = nombre2.charAt(0);
console.log(resultado_2);

let apellido2 = "Blanco";
let resultado_3 = apellido2.charAt(apellido2.length - 1);
console.log(resultado_3);

let palabra2 = " estudiante ";
let resultado2 = palabra2.trim();
console.log(resultado2);

let nombre_2 = "Gabriel";
let resultado_4 = estudiante.includes(nombre_2);
console.log(resultado_4);
