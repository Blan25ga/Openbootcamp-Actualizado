// simbolo $ para jQuery es una función que se ejecuta al cargar la página y que devuelve un objeto jQuery
// el .hide  es una función que oculta un elemento del DOM 
// el .show es una función que muestra un elemento del DOM

//$(selector).accion(), asi funcionaria el codigo

//$("li").hide(); // Oculta todos los elementos de la lista 
//$("li").show(); // Muestra todos los elementos de la lista

//$(document).ready(function(){ , o tambien 

$(() => { // Función que se ejecuta al cargar la página
    // selectores:
    // id="el-1"     => #el-1
    //class= "el-1"  => .el-1

    //$("#el-1").hide(); // Oculta el elemento con el id el-1
    $(".btn-hide").click(function(){ // Cuando se hace click en el botón con la clase btn-hide se ejecuta la función
        console.log("ocultando...") // Se imprime en la consola que se está ocultando
        $("h1").hide(); // Oculta el elemento h1 al oprimir el botón hide
    });
    $(".btn-show").click(function(){ // Cuando se hace click en el botón con la clase btn-show se ejecuta la función
        console.log("mostrando...") // Se imprime en la consola que se está mostrando
        $("h1").show(); // Muestra el elemento h1 al oprimir el botón show
    }
    );
    $("li").click(() => { // Cuando se hace click en un elemento de la lista se ejecuta la función
        $("h1").css({color :"red"}); // Cambia el color del elemento h1 al oprimir un elemento de la lista
    })
    $(".new-element").click(() => { // Cuando se hace click en el botón con la clase new-element se ejecuta la función
        $("ul").append("<li>Nuevo elemento</li>"); // Añade un nuevo elemento al final de la lista al oprimir el botón new-element
        // .prepend() => Añade un nuevo elemento al principio.
    });

    //cambio de color cuando pasamos por encima del elemento
    $("li").mouseenter((elem) => { // Cuando se pasa el ratón por encima de un elemento de la lista se ejecuta la función;
        elem.target.style.color = "blue"; // Cambia el color del elemento al pasar el ratón por encima
    });

    //cambio de color cuando salimos del elemento
    $("li").mouseleave((elem) => { // Cuando se sale del ratón de un elemento de la lista se ejecuta la función;
        elem.target.style.color = "black"; // Cambia el color del elemento al salir del ratón
    }
    );
});


// tambien se puede usar el .fadeOut() y .fadeIn() para ocultar y mostrar elementos, este efecto se puede usar en cualquier elemento del DOM.
//$("h1").fadeOut(); // Oculta el elemento h1 con un efecto de fade
//$("h1").fadeIn(); // Muestra el elemento h1 con un efecto de fade





