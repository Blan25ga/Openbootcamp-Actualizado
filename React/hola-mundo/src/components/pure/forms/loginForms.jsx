/**
 * Componente que va a contener un forlulario
 * para autenticacion de usarios.
 */


import React, { useState, useEffect } from 'react';


const LoginForm = () => {   //componente que va a contener el formulario de autenticacion


    const initialCredentials = [   // estado inicial de los datos de autenticacion
        {
            user: '',
            password: ''
        }
    ];

    const [credentials, setCredentials] = useState(initialCredentials);   // estado del componente

    return (   // renderizacion del componente
        <div>
            <h1>Login</h1>
        </div>
    );


}