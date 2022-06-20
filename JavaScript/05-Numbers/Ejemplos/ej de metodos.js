// variable que contenga tu altura en centímetros

let altura = 170;

// variable que contenga tu altura en metros (número de coma flotante)
let altura_metros = altura / 100;
console.log(altura_metros); // 1.7
// variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 70;
let peso_kilogramos = peso / 100;
console.log(peso_kilogramos); // 0.7

// variable que contenga tu altura en metros redondeada hacia arriba
let altura_metros_redondeada = Math.ceil(altura_metros); //el metodo ceil redondea hacia arriba
console.log(altura_metros_redondeada); // 2

// variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_kilogramos_redondeado = Math.floor(peso_kilogramos); //el metodo floor redondea hacia abajo

//variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max_valor = Number.MAX_VALUE;
let max_valor_siguiente = max_valor + 1;
console.log(max_valor_siguiente); // Infinity
