let altura = 170;

let altura_metros = altura / 100;
console.log(altura_metros); // 1.7

let peso = 70;
let peso_kilogramos = peso / 100;
console.log(peso_kilogramos); // 0.7

let altura_metros_redondeada = Math.ceil(altura_metros); //el metodo ceil redondea hacia arriba
console.log(altura_metros_redondeada); // 2

let peso_kilogramos_redondeado = Math.floor(peso_kilogramos); //el metodo floor redondea hacia abajo

let max_valor = Number.MAX_VALUE;
let max_valor_siguiente = max_valor + 1;
console.log(max_valor_siguiente); // Infinity
