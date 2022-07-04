// document.getElementById("....") -> obtiene el elemento por su id y lo devuelve como un objeto

const hTexto = document.getElementById("h-texto"); // Obtenemos el elemento con id h-texto
console.log(hTexto);

// addEventListener -> agrega un evento a un elemento (hTexto) y le asigna una funcion que se ejecuta cuando se produce el evento
hTexto.addEventListener("cambioTexto", evento => { // Agregamos un evento "cambioTexto" al elemento h-texto
    console.log(evento);
    hTexto.innerText= evento.detail.texto; // Cambiamos el texto del elemento h-texto
    hTexto.style.color = evento.detail.color; // Cambiamos el color del elemento h-texto
}
);

// Se crea un evento "cambiarTexto" al elemento h-texto, funcion que cambia el texto y color, 
function cambiarTexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto", { // Creamos un evento "cambioTexto"
        detail: { // Le asignamos un objeto con los datos que queremos pasar
            texto: nuevoTexto, // Le asignamos un valor al atributo "texto"
            color: color // Le asignamos un valor al atributo "color"
        }
    
    })
    hTexto.dispatchEvent(evento); // Lanzamos el evento
}



