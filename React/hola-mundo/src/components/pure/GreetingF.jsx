import React, { useState } from 'react'; //se crea el propTypes para validar los datos que se le pasan a los componentes, si name, no es string este no sera validado./
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    //*Intro a useState
    // const [variable, metodo de actualizacion] = useState(valor inicial);
    const [age, setAge] = useState(34);

    const birthday = () => {
        //* setState es un metodo que se encarga de actualizar el estado del componente.
        setAge(age + 1);
    }



    return (
        <div>
            <h1>
                HOLA {props.name} desde componente funcional ! {/* Se crea el componente h1 y se le pasa como parametro el nombre que se le pasa al componente  */}
            </h1>
            <h2>
                Tu edad es: {age} años  {/*}Se crea el componente h2 y se le pasa como parametro la edad que se le pasa al componente */}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumpleaños
                </button>
            </div>
        </div>
    );
};



GreetingF.propTypes = {
    name: PropTypes.string,


};


export default GreetingF;
