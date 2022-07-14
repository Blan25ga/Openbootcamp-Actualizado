/**
 * Ejemplo de uso del metodo
 * de ciclo de vida en componente y el Hook de ciclo de vida 
 * en componente funcional
 */

import React, { Component, useEffect } from 'react';


export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento antesde que el componente sea añadido al DOM(renderice)');
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antesde que el componente sea añadido al DOM(renderice)');
    }, []); /** los corchetes vacios son para que cada vez que se renderise pasara por useEfect*/

    return (
        <div>
            <h1>DidMountHook</h1>
        </div>
    );

};


