// Trabajando con fechas//

// inicializar fechas
var fecha = new Date(186, 0, 1); // 1 de enero de 1986, los meses comienzan de 0.
console.log(fecha);

var fecha2 = new Date(2022, 5, 1); // 1 de junio de 2022
console.log(fecha2); // 2022-06-01 T00:00:00.000Z
fecha2.getFullYear(); // 2022 (año)

// Definir fecha con un strings
var fecha3 = new Date("Junio 21, 2022"); // junio 21 de 2022
console.log(fecha3); // 2022-06-21T00:00:00.000Z

// como comparar fechas
var fecha4 = new Date("Junio 21, 2022"); // junio 21 de 2022
var fecha5 = new Date("Junio 21, 2022"); // junio 21 de 2022
console.log(fecha4.getTime() === fecha5.getTime()); // lanza un booleno

///////////   Obtener el dia, el mes y el año    ////////

// Obtencion del dia :   .getDate()
//ejemplo: .getDate()
var fecha6 = new Date("Junio 21, 2022"); // junio 21 de 2022
console.log(fecha6.getDate()); // 21

// Obtencion de mes :   .getMonth()
//ejemplo: .getMonth()
var fecha7 = new Date("Junio 21, 2022"); // junio 21 de 2022
console.log(fecha7.getMonth()); // 5 (junio)

// Obtencion de año :   .getFullYear()
//ejemplo: .getFullYear()
var fecha8 = new Date("Junio 21, 2022"); // junio 21 de 2022
console.log(fecha8.getFullYear()); // 2022

// Obtencion de hora :   .getHours()
//ejemplo: .getHours()
var fecha9 = new Date("Junio 21, 2022, 5, 25 , 00"); //
console.log(fecha9.getHours()); // 5   (horas)

// Obtencion de minutos :   .getMinutes()
//ejemplo: .getMinutes()
var fecha10 = new Date("Junio 21, 2022, 5, 25 , 00"); //
console.log(fecha10.getMinutes()); // 25  (minutos)

// Obtencion de segundos :   .getSeconds()
//ejemplo: .getSeconds()
var fecha11 = new Date("Junio 21, 2022, 5, 25 , 00"); //
console.log(fecha11.getSeconds()); // 0  (segundos)

// Obtencion de milisegundos :   .getMilliseconds()
//ejemplo: .getMilliseconds()
var fecha12 = new Date("Junio 21, 2022, 5, 25 , 00"); //
console.log(fecha12.getMilliseconds()); // 0  (milisegundos)
