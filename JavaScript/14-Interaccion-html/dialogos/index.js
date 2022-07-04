//llamar al boton con id btn-dialog y le asignamos un evento click.
const boton = document.querySelector('#btn');
console.log(boton);

// addEventListener sirve para agregar un evento a un elemento html.//



//pasar informacion por pantalla al hacer click en el boton realizando un alerta.
boton.addEventListener('click', function(){   //funcion anonima para que se ejecute cuando se haga click en el boton.
    //alert("Se ha realizo click") ;  //alerta que se muestra cuando se hace click en el boton.
    //confirm("Se ha realizo click ??") && console.log("ok") 

    //TERNARIOS (condicion ? true : false) //si la condicion es verdadera se ejecuta el true, sino se ejecuta el false.//
    confirm("Se ha realizo click ??")
    ? console.log("ok")  //si se confirma la alerta se ejecuta el codigo.
    : console.log("No!!"); //si no se confirma la alerta se ejecuta el codigo.
});

//crar llamada al boton con id info y preguntar cual es tu nombre, y mostrarlo en un alert.

const info = document.querySelector('#info');
info.addEventListener('click', function(){
    const nombre = prompt("Cual es tu nombre?"); //prompt sirve para pedir informacion por pantalla.
    if (nombre) {
        console.log("Tu nombre es " + nombre); // se puede poner alert para que salte un alerta por pantalla, en vez de que pase por consola.
    } else {
        console.log("No ingresaste nombre"); // console.log sirve para mostrar informacion por pantalla.
    }
});  // se concateno texto con variables.


const lista = [{
    nombre: "Juan",
    edad: 20
}, {
    nombre: "Pedro",
    edad: 30
}, {
    nombre: "Maria",
    edad: 40
}];

console.table(lista); //console.table sirve para mostrar informacion por pantalla en formato tabla.



