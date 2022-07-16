import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contacto.class'; //se importa la clase Contacto para poder usarla en el componenteA

function ComponenteB(estado) { //se crea la funcion componenteB, que recibe una propiedad estado que es un boolean
    const [conectado, setConectado] = useState(estado); //se crea una variable conectado y se le asigna el valor de la propiedad estado
    return (
        <div>
            <h2>
                {conectado === false ? 'Contacto no dispoble' : 'Contacto En Linea'}
            </h2>
            <button onClick={() => setConectado(!conectado)}> {/* se crea un boton que cambia el estado de conectado a true o false */}
                {conectado === false ? 'Conectar' : 'Desconectar'}
            </button>
        </div>
    )
}

ComponenteB.propTypes = {
    estado: PropTypes.bool
};

export default ComponenteB
