/**
 * Ejemplo de uso del Hook useEffect
 *
 * Craer un componente de tipo función y acceder a su estado
 * privado a traves de un hook y, ademas, poder modificarlo
 */
import React, { useState } from 'react';

const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial = 0;


    //valor inicial para una persona
    const personaInicial = {
        nombre: 'Gabriel',
        email: 'gabriel@gmail.com',
    }
    /**
     * Queremos que el valor inicial y persona inicial
     * sean parte del componente para asi poder gestionar
     * su cambio y este se vea reflajado en la vista del componente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial);
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el valor del contador
     */
    function incrementarContador() {
        setContador(contador + 1); // setContador actualizar el valor del contador con el valor actual + 1 
    }

    /**
     * funcion para actualizar el estado de Persona en el componente
     */
    function actualizarPersona() {
        setPersona({
            nombre: 'Ismael',
            email: 'Ismael@hotmail.com',
        });
    }






    return (
        <div>
            <h1>**Ejemplo de useState()**</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la Persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/* Bloque de botones para la actualizacion de estados*/}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );

}

export default Ejemplo1;
