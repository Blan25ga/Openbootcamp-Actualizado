import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';



const TaskListComponent = () => {

    const defaultTasks = new Task("Example", " Default description", false, LEVELS.NORMAL);


    return (
        <div>
            <div>
                <h1>Your tasks:</h1>
            </div>
            {/* TODO: aplicar un for/map para renderizacion de una lista */}
            <TaskComponent task={defaultTasks}></TaskComponent> {/* se le pasa una tarea por defecto para que el componente pueda mostrarla*/}
        </div>
    );
};


export default TaskListComponent;  //* exportamos el componente TaskListComponent para que pueda ser usado en otro componente


