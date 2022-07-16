/**
 * Formulario de registro a contener en el componente RegisterForm
 */
import React, { useState } from 'react';

const RegisterForm = () => {

    const initialData = [   // estado inicial de los datos de autenticacion
        {
            user: '',
            name: '',
            email: '',
            password: ''
        }
    ];

    const [data, setData] = useState(initialData);   // estado del componente

    return (
        <div>

        </div>
    );
}

export default RegisterForm;
