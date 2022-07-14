/**
 *  Ejemplo para entder el uso de props.children
 */

import React from 'react'

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1> **Ejemplo de children props** </h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
            {/* props.children pintara por defeceto aquello que se encuentre
            entre las etiquetas de aper y cierre de este componente
            desde el compenente de orden superior */}
            {props.children}
        </div>
    );
}


export default Ejemplo4;



