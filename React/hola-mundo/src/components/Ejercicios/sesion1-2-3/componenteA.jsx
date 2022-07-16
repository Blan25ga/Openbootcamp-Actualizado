import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../hola-mundo/src/models/contacto.class'; //se importa la clase Contacto para poder usarla en el componenteA
import ComponenteB from './componenteB'; //se importa y se renderiza el componenteB desde el A




function componenteA({ contacto }) {    // se crea la funcion componenteA, que recibe una propiedad contacto
    return (
        <div>
            <h1>Hola: {contacto.nombre}</h1>
            <h2>Apellido: {contacto.apellido}</h2>
            <h3>Email: {contacto.email}</h3>
            <ComponenteB estado={true} />
        </div>
    )
}


componenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)

};

export default componenteA //* exportamos el componenteA para poder importarlo en App.js 
