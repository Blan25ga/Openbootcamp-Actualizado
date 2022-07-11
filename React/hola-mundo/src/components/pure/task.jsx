import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';




//Se crea un componente Task que recibe una tarea y una función para eliminarla
const TaskComponent = ({ task }) => {
    return (
        <div>
            <h2>
                Nombre: {task.name}
            </h2>
            <h3>
                Descripción: {task.description}
            </h3>
            <h4>
                Level: {task.level}
            </h4>
            <h5>
                This task is: {task.completed ? 'COMPLETED' : 'PENDING'} {/* realiza una comparación entre el valor de la propiedad completed y el valor de la constante true y si es true muestra el texto COMPLETED, si no muestra PENDING */}
            </h5>

        </div>
    );
};

// instancia de la clase Task para que el componente pueda recibirla como propiedad en el componente TaskList
TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)


};


export default TaskComponent; //* exportamos el componente TaskComponent para que pueda ser usado en otro componente
