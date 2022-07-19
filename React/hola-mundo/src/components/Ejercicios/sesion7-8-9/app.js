import React, { useState, useEffect } from 'react';
import listComponent from './components/listComponent';
import listContact from './components/listContact';
import './App.css';


const App = () => {
    const defaultContact = [
        { nombre: 'Gabriel', email: 'Blanco', conectado: true },
        { nombre: 'Tmara', email: 'Mendez', conectado: true },
    ];

    const [nuevoContacto, setNuevoContacto] = useState(defaultContact);

    function changeState(contacto) {
        const index = nuevoContacto.indexOf(contacto);
        const tempContact = [...nuevoContacto];

        tempContact[index].estado = !tempContact[index].estado;
        setNuevoContacto(tempContact);
    }

    function remove(contacto) {
        const index = nuevoContacto.indexOf(contacto);
        const tempContact = [...nuevoContacto];
        tempContact.splice(index, 1);
        setNuevoContacto(tempContact);
    }

    function addContact(contacto) {
        const tempContact = [...nuevoContacto];
        tempContact.push(contacto);
        setNuevoContacto(tempContact);
    }

    return (
        <div className="App">
            <h1>Contactos</h1>

            <div className="card-container">
                {nuevoContacto.map((contacto, index) => {
                    return (
                        <listComponent key={index} contacto={contacto} changeState={changeState} remove={remove} />
                    );
                })}
            </div>

            <listContact onAddContact={addContact}></listContact>
        </div>
    );
};

export default App;