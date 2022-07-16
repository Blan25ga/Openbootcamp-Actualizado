import React, { useState, useEffect } from 'react'; //se importa React y useState y useEffect 

const Clock = () => { //se crea la funcion clock, que no recibe ninguna propiedad
    const defaultState = { //se crea un objeto con un estado inicial
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José',
    };

    const [user, setUser] = useState(defaultState); //se crea una variable user y se le asigna el valor de defaultState que es un objeto

    useEffect(() => { //se crea una funcion useEffect que se ejecuta al cargar el componente
        const intervalAge = setInterval(() => { //se crea una variable intervalAge que se ejecuta cada segundo
            actualiceUser(); //se llama a la funcion actualiceUser
        }, 1000); //se le asigna un valor de 1000 a la variable intervalAge
        return () => {
            clearInterval(intervalAge); //se crea una funcion que se ejecuta al cerrar el componente
        };
    });

    const actualiceUser = () => { //se crea una funcion actualiceUser que se ejecuta cada segundo y actualiza el estado de user
        return setUser({ //se le asigna el valor de user a un objeto con los valores actualizados 
            fecha: user.fecha,
            edad: user.edad + 1,
            nombre: user.nombre,
            apellidos: user.apellidos,
        });
    };
    return ( //se crea una funcion que retorna un div con un h2 y un h3
        <div>
            <h2>
                Hora Actual:
                {user.fecha.toLocaleTimeString()} {/*se le asigna el valor de la fecha actual a un h2 y se le asigna el valor de la funcion toLocaleTimeString*/}
            </h2>
            <h3>
                {user.nombre} {user.apellidos} {/*se le asigna el valor de nombre y apellidos a un h3*/}
            </h3>
            <h1>Edad: {user.edad}</h1> {/*se le asigna el valor de edad a un h1*/}
        </div>
    );
};

export default Clock; //se exporta la funcion clock( este ese importa en App.js, para que se muestre por pagina)