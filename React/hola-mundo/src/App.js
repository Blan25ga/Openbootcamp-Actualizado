import logo from './logo.svg'; // se importa el logo.svg 
import './App.css';   // se importa el css. a App.css  //se importa primero en en el index.js
import Greeting from './components/pure/Greeting'; // se importa el componente saludo creadao en el archivo pure/saludo.jsx/
import Greetingf from './components/pure/GreetingF';  // se crea la funcion App, es obligatiro que tenga un return y una etiqueta div.
import TaskListComponent from './components/container/task_list'; // se importa el componente TaskListComponent, para q tome los cambios de "task_list.jsx"
//llamada al componenteA, para q tome los cambios de "componenteA.jsx"
//import ComponenteA from './components/container/componenteA';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';
import GreetingStyles from './components/pure/greetingStyles'; //!se importa el componente GreetingStyles, para q tome los cambios de "greetingStyles.jsx"
import Clock from './components/Ejercicios/sesion4-5-6/clock'; // se importa el componente Clock, para q tome los cambios de "clock.jsx"
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';



function App() { // se crea la funcion App, es obligatiro que tenga un return y una etiqueta div.

    return (
        <div className="App"> {/*se crea la etiqueta div con la clase App */}
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* componente propio saludo.jsx */}
            {/*Componente de ejemplo funcional*/}
            {/*<Greeting name="Gabriel"></Greeting>*/} {/* crear el componente Saludo, para q tome los cambios de la class "index.jsx"*/}
            {/*<Greetingf name="Gabriel"></Greetingf> */}{/*llamada a el componente SaludoF, para q tome los cambios de "Greetingf.jsx" */}
            {/*Componente de listado de tareas*/}
            {/*<TaskListComponent></TaskListComponent> {/* llamada al componente TaskListComponent, para q tome los cambios de "task_list.jsx" */}
            {/*<ComponenteA contacto={contactoPrueva} /> {/* llamada al componente ComponenteA, para q tome los cambios de "componenteA.jsx" */}
            {/* Ejemplo de uso de HOOKS */}
            {/*<Ejemplo1></Ejemplo1> {/* llamada al componente Ejemplo1, para q tome los cambios de "ejemplo1.jsx" */}
            {/*<Ejemplo2></Ejemplo2> {/* llamada al componente Ejemplo2, para q tome los cambios de "ejemplo2.jsx" */}
            {/*<MiComponenteConContexto></MiComponenteConContexto> {/* llamada al componente MiComponenteConContexto, para q tome los cambios de "ejemplo3.jsx" */}
            {/*<Ejemplo4 nombre="Gabriel">*/}
            {/* Todo lo que hay aca a dentro es trada como props.children en cualquier componente
                    <h3>Contenido del props.children</h3>
                </Ejemplo4>*/}
            {/*<GreetingStyles name="Gabriel"></GreetingStyles>*/}
            {/*<Clock></Clock>
            </header> */}
            {/*<TaskListComponent></TaskListComponent>*/}

            {/*Ejemplo de renderizado condicional*/}
            <OptionalRender></OptionalRender>


            {/* Gestion de Eventos 
            <Father></Father>*/}
        </div>
    );
}

export default App;

//qel metodo set 





