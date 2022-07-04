const f = document.getElementById("formulario")
console.log(f)
f.addEventListener("submit", function(e) {
    console.log(e)
    e.preventDefault() // evita que el formulario se envie, comportamiento por defecto.
}   // fin de la función
);




