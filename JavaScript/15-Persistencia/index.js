localStorage.setItem('nombre', 'Juan'); // Guarda el valor en el localStorage con la clave 'nombre' y el valor 'Juan'.

//console.log(localStorage.getItem('nombre')); // Muestra por consola el valor guardado en el localStorage con la clave 'nombre'.

// //localStorage.setItem('persona', JSON.stringify ({ // Guarda el valor en el localStorage con la clave 'persona' y el valor '{nombre: 'Juan', edad: 30}'.
//     nombre: 'Juan',
//     apellido: 'Perez',
//     edad: 30
// }));

// JSON.stringify convierte el objeto en un string.
// JSON.parse convierte el string en un objeto.

localStorage.removeItem('nombre'); // Elimina el valor guardado en el localStorage con la clave 'nombre'.

sessionStorage.setItem('sesion', 'Gabriel'); // Guarda el valor en el sessionStorage con la clave 'sesion' y el valor 'Gabriel'.

/* cookies */
// Son pequeñas porciones de información que se guardan en el navegador.
// Se guardan en el navegador y se eliminan cuando se cierra el navegador.


document.cookie = 'nombre=JuanCookie'; // Guarda el valor en el cookie con la clave 'nombre' y el valor 'Juan'.

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString(); // Guarda el valor en el cookie con la clave 'nombreCaducidad' y el valor 'Nombre' y expira en 2023.

console.log(document.cookie); // Muestra por consola el valor guardado en el cookie.
