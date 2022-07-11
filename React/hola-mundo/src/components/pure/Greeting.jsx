import React, { Component } from 'react'; // Importamos React y Component
import PropTypes from 'prop-types'; // Importamos PropTypes, para validar los datos que se le pasan a los componentes


//Se crea la clase Saludo, que extiende en forma de Component al archivo App.js para que lo renderise //

class Greeting extends Component {


    constructor(props) { // Se crea el constructor de la clase Saludo y se le pasa como parametro props el objeto que se le pasa al componente
        super(props); // Se llama al constructor de la clase padre (Component)  
        this.state = {  // Se crea el estado de la clase Saludo y se le pasa como parametro el objeto que se le pasa al componente
            age: 34
        }
    }


    render() {
        return (
            <div>
                <h1>
                    Hola, {this.props.name} ! {/* Se crea el componente h1 y se le pasa como parametro el nombre que se le pasa al componente  */}
                </h1>
                <h2>
                    Tu edad es: {this.state.age} años {/* Se crea el componente h2 y se le pasa como parametro la edad que se le pasa al componente */}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumpleaños
                    </button>
                </div>
            </div>
        );
    }



    birthday = () => {   /* Se crea la funcion cumpleaños, que se le pasa como parametro el objeto que se le pasa al componente */
        this.setState((prevState) => (/* setState es un metodo que se encarga de actualizar el estado del componente, prevState */
            {
                age: prevState.age + 1 /* Se le pasa como parametro el prevState a la edad y se le suma 1 */
            }
        ));
    }

}
//prevState es la prevision del estado del componente, es decir, el estado anterior del componente

//* se crea el propTypes para validar los datos que se le pasan a los componentes, si name, no es string este no sera validado.

Greeting.propTypes = { // Se crea la propiedad propTypes para que se pueda usar el this.props
    name: PropTypes.string, // Se crea la propiedad name, que es un string y se le pasa como parametro el nombre que se le pasa al componente 
};


export default Greeting;

