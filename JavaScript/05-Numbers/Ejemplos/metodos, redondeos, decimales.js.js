let a = 5;
let b = 10;
console.log(a + b);

// Precision de decimales
let c = 0.1;
let d = 0.2;
console.log(c + d); // imprime 0.30000000000000004

// como hacer que no figuren los 'ceros periodicos'
// el Math.round para redondear a un numero de decimales y obtener valores reales.
console.log(Math.round((c + d) * 100) / 100); // imprime: 0.3

let e = 3.5;
let f = 4.8;
// suma(+)
console.log(e + f); // imprime: 8.3
// resta(-)
console.log(e - f); // imprime: -1.2999999999
// multiplicacion(*)
console.log(e * f); // imprime: 16.8
// division(/)
console.log(e / f); // imprime: 0.72916666666667
// modulo(%) (resto de la division)
console.log(e % f); // imprime: 3.5

/// Reprecentacion de los numero en cadenas de texto
console.log(typeof e); // imprime: "number" (tipo de dato)
let e_s = e.toString(); // convierte a cadena de texto

console.log(e_s); // imprime: "3.5"
console.log(typeof e_s); // imprime: "string" (tipo de dato)

// Rednondeo de deciales
let g = 366658.3223598;
let h = g * 3;
console.log(h); // imprime: 9.89999999999
//.toFixed(x) :para indicar el numero de decimales despues de la coma, 'x' es el numero de decimales.
console.log(h.toFixed(2)); // imprime: 9.90
console.log(typeof h.toFixed(2)); // imprime: "string"

// .toPrecision(x) : Limita el numero de cifras significativas
console.log(g.toPrecision(2)); // imprime:3.7e+5 significa que e+5 multiplicado por 10 elevado a 5 )
// tanto en toFixed como en toPrecision la devolucion del tipo es string

// potencia(**) (elevar a una potencia)
console.log(e ** f);

// metodo Math.floor() : redondea a la parte entera mas cercana
// metodo Math.ceil() : redondea a la parte entera hacia arriba
// metodo Math.round() : redondea a la parte entera hacia arriba

// raiz cubica(Math.cbrt)
console.log(Math.cbrt(e));
// raiz cuadrada de un numero(Math.sqrt)
console.log(Math.sqrt(e));
// raiz cubica de un numero(Math.cbrt)
console.log(Math.cbrt(e));
// logaritmo natural(Math.log)
console.log(Math.log(e));
// logaritmo base 10(Math.log10)  (logaritmo de base 10)
console.log(Math.log10(e));
// logaritmo base 2(Math.log2)  (logaritmo de base 2)
console.log(Math.log2(e));
// seno(Math.sin) (seno)
console.log(Math.sin(e));
// coseno(Math.cos) (coseno)
console.log(Math.cos(e));
// tangente(Math.tan) (tangente)
console.log(Math.tan(e));
