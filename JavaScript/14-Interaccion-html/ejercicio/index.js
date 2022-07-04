// Lanzamiento de alerta al apretar boton.
const boton= document.querySelector('#btn');
boton.addEventListener('click', () => {
    alert("Click en el boton");
});


// utilizacion de jQuery y lanzar por consola el mensaje"

$('#btn').click(function(){
    console.log("Hola, estoy utilizando jQuery");
});





