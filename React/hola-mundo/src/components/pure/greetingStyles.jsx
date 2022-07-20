import React, { useState } from 'react';

//*Definiendo estilos en constantes*//

//? Estilos para el componente cuando esta logueado
const loggedStyle = {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold'
}

// ? Estilo para cuando NO este logueado
const unloggedStyle = {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold' // se utiliza camelCase para definir el estilo en constantes
}


const GreetingStyles = (props) => {

    // Generamos estado para el componente para crontrolar si esta logueado o no
    const [logged, setLogged] = useState(false);



    return (
        <div style={logged ? loggedStyle : unloggedStyle}> {/* se crea la etiqueta div con el estilo definido en constantes */}
            {logged ?  // se verifica si esta logueado
                (<p>Hola, {props.name}</p>) // se muestra el mensaje de saludo si esta logueado
                :
                (<p>Please, login</p>) // se muestra el mensaje de login si no esta logueado
            }


            <button onClick={() => { // funcion para cambiar el estado del componente
                console.log('Boton pulsado')
                setLogged(!logged);
            }}>
                {logged ? 'Logout' : 'Login'} {/*muestra el texto Login o Logout dependiendo del estado del componente*/}
            </button>
        </div>
    );
}

export default GreetingStyles;
