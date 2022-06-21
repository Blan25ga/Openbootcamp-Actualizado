let fecha = new Date(); // fecha de hoy
console.log(fecha); // 2020-06-21T00:00:00.000Z

let fecha2 = new Date(1986, 11, 17); // fecha de mi nacimiento
console.log(fecha2); // 1986-12-17T00:00:00.000Z

let fechaMayor = fecha.getTime() > fecha2.getTime(); // comparo las fechas
console.log(fechaMayor); // true

let diaNacimiento = fecha2.getDate(); // dia de mi nacimiento
console.log(diaNacimiento); // 17

let mesNacimiento = fecha2.getMonth(); // mes de mi nacimiento
console.log(mesNacimiento); // 11 (diciembre)

let anioNacimiento = fecha2.getFullYear(); // año de mi nacimiento
console.log(anioNacimiento); // 1986
