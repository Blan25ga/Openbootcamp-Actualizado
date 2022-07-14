/**
 * Ejemplo de suos de metodo componentDidUpdate en componente clase
 * y uso de HOOK en componente funcional.
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado');
    }

    render() {
        return (
            <div>DidUpdate</div>
        )
    }
}


export const DidUpdateHook = () => {


    useEffect(() => { //el useEffect es un metodo que se ejecuta despues de que el componente se renderice
        console.log()
    }); // cuando no le ponemos corchetes, es para que cada vez que alla un cambio se ejecute, asi, se ejecuta todas la veces.


    return (
        <div>DidUpdateHook</div>
    )
}

