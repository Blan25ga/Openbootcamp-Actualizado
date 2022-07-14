/**
 * Ejemplo de uso del metodo WILLUNMOUNT para componente clase
 *  y el Hook WILLUNMOUNT en componente funcional
 * (cuandoel componente va a desaparecer)
 */


import React, { Component, useEffect } from 'react';


export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antesde que el componente desaparece');
    }

    render() {
        return (
            <div>
                <h1>willUnMount</h1>
            </div>
        );
    }
}


export const WillUnMountHook = () => {

    useEffect(() => {
        // aca no s epone nada
        return () => {
            console.log('Comportamiento antesde de que el componente desaparezca');
        }
    }, []); /** los corchetes vacios son para que cada vez que se renderise pasara por useEfect*/

    return (
        <div>
            <h1>WillUnMountHook</h1>
        </div>
    );

}



