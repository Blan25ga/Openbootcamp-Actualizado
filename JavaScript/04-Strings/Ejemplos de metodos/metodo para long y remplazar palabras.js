// metodo para sacar la longitud de un string

let str = "Hola a todos, esto es importante";
console.log(str.length);

// Ejemplo de como Obtener partes de cadena de caracteres con substring() y slice()
let slice_str = str.slice(0, 20); // obtenemos la cadena desde el indice 0 hasta el 20
console.log(slice_str);

// substring() y slice() se comportan de la misma manera

/// Reemplazar parte de la dena de caracteres con replace()
let replace_str = str.replace("Hola", "Adios"); // reemplazamos la palabra Hola por Adios
console.log(replace_str);

let palabra = "Gabrie, sos el puto mitico";
let replace_palabra = palabra.replace("puto", "unico");
console.log(replace_palabra);

/// Como reemplazar mas de una palabra igual en un texto con replace()
console.log(palabra.replace(/puto/g, "unico")); // g indica que se reemplazara todas las palabras que coincidan con la expresion regular
