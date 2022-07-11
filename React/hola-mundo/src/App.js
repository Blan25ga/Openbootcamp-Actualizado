import logo from './logo.svg'; // se importa el logo.svg 
import './App.css';   // se importa el css. a App.css  //se importa primero en en el index.js
import Greeting from './components/pure/Greeting'; // se importa el componente saludo creadao en el archivo pure/saludo.jsx/
import Greetingf from './components/pure/GreetingF';  // se crea la funcion App, es obligatiro que tenga un return y una etiqueta div.
import TaskListComponent from './components/container/task_list'; // se importa el componente TaskListComponent, para q tome los cambios de "task_list.jsx"
//llamada al componenteA, para q tome los cambios de "componenteA.jsx"
import ComponenteA from './components/container/componenteA';



function App() { // se crea la funcion App, es obligatiro que tenga un return y una etiqueta div.
    const contactoPrueva = {
        nombre: 'Juan',
        apellido: 'Perez',
        email: 'juancitoperez@gmail.com',
        conectado: false,
    };

    return (
        <div className="App"> {/*se crea la etiqueta div con la clase App */}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* componente propio saludo.jsx */}
                {/*Componente de ejemplo funcional*/}
                {/*<Greeting name="Gabriel"></Greeting>*/} {/* crear el componente Saludo, para q tome los cambios de la class "index.jsx"*/}
                {/*<Greetingf name="Gabriel"></Greetingf> */}{/*llamada a el componente SaludoF, para q tome los cambios de "Greetingf.jsx" */}
                {/*Componente de listado de tareas*/}
                {/*<TaskListComponent></TaskListComponent>*/} {/* llamada al componente TaskListComponent, para q tome los cambios de "task_list.jsx" */}
                <ComponenteA contacto={contactoPrueva} /> {/* llamada al componente ComponenteA, para q tome los cambios de "componenteA.jsx" */}
            </header>
        </div>

    );
}

export default App;
