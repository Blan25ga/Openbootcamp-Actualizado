/**
 * Ejemplo HOOKS
 * - useState(): //?crea un estado, que se actualiza automaticamente, cuando se le pasa un valor.
 * - useContext(): //?crea un contexto, que se actualiza automaticamente, cuando se le pasa un valor.
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente1()
 * dispone de un contesxto que va a tener un valor
 * que recibe desde el padre
 */


const miContexto = React.createContext(null);
const Componente1 = () => {

    const state = useContext(miContexto);

    // se inicializa null, que se rellena con los datos del pafre (Componente2)


    return (
        <div>
            <h1>
                El Token es : {state.token}
            </h1>
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                La sesion es : {state.sesion}
            </h2>


        </div>
    );
}


export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '12345678',
        sesion: 1
    }

    //*creamos el estado del componente 
    const [sessionData, setSessionData] = useState(estadoInicial);




    function actualizarSession() {
        setSessionData({
            token: 'JNH12345678',
            sesion: sessionData.sesion + 1,
        });

    }


    return (
        <miContexto.Provider value={sessionData}>
            <h1>
                **Ejemplo de useState y useContext**
            </h1>
            <Componente1></Componente1>
            <button onClick={actualizarSession}>Actualizar</button>
        </miContexto.Provider>

    )
}


