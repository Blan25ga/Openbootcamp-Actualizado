/**
 * Ejemplo de uso de :
 * -useState() // 
 * -useRef()   //para referenciar elementos dentro de la vista
 * -useEffect() // para controlar los cambios en la vista
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //crear dos contadores distintos, c/u en un estado distinto
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //crear una referencia con userRef para asociar una variable con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setContador2(contador2 + 1);
    }

    /** 
     * Trabajando con UseEffect el cambio de estado de un contador
     */
    /**
     * ? caso 1: Ejecutar SIEMPRE UN SNIPPET DE CODIGO
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('Cambio en el estado del componente');
    //     console.log('Mostrando referencia a el elemento del DOM');
    //     console.log(miRef);
    // }
    // , );

    /**
     * ? caso 2: Ejecutar SOLO CUANDO CAMBIE EL CONTADOR 1
     * Cada vez que haya un cambio en el estado 1, se ejecuta lo que diga el useEffect()
     * en caso de cambie el contador 2, no abra ejecucion.
     */
    // useEffect(() => {
    //     console.log('Cambio en el estado del CONTADOR 1');
    //     console.log('Mostrando referencia a el elemento del DOM');
    //     console.log(miRef);

    // }, [contador1]); // solo se ejecuta cuando cambie el contador 1


    /**
     * ? caso 3: Ejecutar SOLO CUANDO CAMBIE EL CONTADOR 1 O EL CONTADOR 2
     * 
     * Cada vez que haya un cambio en el estado 1 , se ejecuta lo que diga el useEffect()
     * Cada vez que haya un cambio en el estado 2, se ejecuta lo que diga el useEffect()
     *      
     */

    useEffect(() => {
        console.log('Cambio en el estado del CONTADOR 1/ CONTADOR 2');
        console.log('Mostrando referencia a el elemento del DOM');
        console.log(miRef);

    }, [contador1, contador2]); // solo se ejecuta cuando cambie el contador 1 o el contador 2

    return (
        <div>
            <h1>**Ejemplo de useState(), useRef() y useEffect()**</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>

            <h4 ref={miRef}>
                Referencia al elemento del DOM
            </h4>
            {/* Botones para cambiar contador*/}
            <div>
                <button onClick={incrementar1}>Incrementar Contador 1</button>
                <button onClick={incrementar2}>Incrementar Contador 2</button>
            </div>

        </div>
    );
}

export default Ejemplo2;
