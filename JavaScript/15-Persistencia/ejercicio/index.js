let nombre = "Gabriel"
let apellido = "Blanco"

const datos = {
    nombre,
    apellido
}

// sessionStorage.setItem("datos", JSON.stringify(datos))
// localStorage.setItem("datos", JSON.stringify(datos))

// cookie que caduca en 2 minutos con los datos del objeto.
document.cookie = "datos=" + JSON.stringify(datos) + ";expires=" + new Date(Date.now() + 2 * 60 * 1000).toUTCString() 

