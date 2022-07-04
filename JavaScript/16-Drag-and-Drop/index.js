// obtener parrafos que son arrastrables
const parrafos = document.querySelectorAll(".parrafo"); // obtener todos los parrafos
const secciones = document.querySelectorAll(".seccion"); // obtener todos los elementos de la calse seccion.

// agregar eventos para cada parrafo arrastrar y soltar
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", (e) => { // agregar evento dragstart para cada parrafo arrastrar
        //console.log("arrastrando");
        parrafo.classList.add("dragging"); // agregar clase dragging al parrafo arrastrado para que se vea el efecto de arrastrar
        e.dataTransfer.setData("id", parrafo.id); // agregar datos al evento dragstart para que se pueda saber que parrafo es arrastrado
    
    })

    parrafo.addEventListener("dragend", () => { // agregar evento dragend para cada parrafo arrastrar 
        //console.log("soltando");
        parrafo.classList.remove("dragging"); // remover clase dragging al parrafo arrastrado para que se vea el efecto de soltar
    })  // fin de dragend
});

// dragging : clase que se agrega directamente en archivo js, para darle efecto al movimiento mediente css.
//dragStart  es un evento que se ejecuta cuando se inicia el arrastre
// dragEnd es un evento que se ejecuta cuando se termina el arrastre

//aplicar dragover a las clases secciones
secciones.forEach(seccion => {
    seccion.addEventListener("dragover", (e) => { // agregar evento dragover para cada seccion 
        //console.log("drag over");
        e.preventDefault(); // evitar que se muestre el efecto de arrastrar
        
    } // fin de dragover
    ) 

    seccion.addEventListener("drop", (e) => { // agregar evento drop para cada seccion 
        console.log("drop"); 
        const id_parrafo = e.dataTransfer.getData("id"); // obtener datos del evento dragstart
        //console.log("id_parrafo", id_parrafo); // mostrar id del parrafo arrastrado
        const parrafo = document.getElementById(id_parrafo); // obtener parrafo arrastrado por id 
        seccion.appendChild(parrafo); // agregar parrafo arrastrado a la seccion
    }) 
}); // fin de seccione

const papelera = document.querySelector(".papelera") // obtener elemento papelera

papelera.addEventListener("dragover", (e) => {  // agregar evento dragover para la papelera 
    e.preventDefault()
    e.dataTransfer.dropEffect = "copy" // definir efecto de soltar en papelera
})

papelera.addEventListener("drop", (e) => {
    const id_parrafo = e.dataTransfer.getData("id") // obtener datos del evento dragstart 
    document.getElementById(id_parrafo).remove() // remover parrafo arrastrado de la seccion y agregarlo a la papelera
})





