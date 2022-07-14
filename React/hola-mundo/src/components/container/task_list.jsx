import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';



const TaskListComponent = () => {

    const defaultTasks = new Task("Example", " Default description", false, LEVELS.NORMAL);
    // estado del componente
    const [tasks, setTasks] = useState([defaultTasks]);

    // control del siclo de vida del componete
    useEffect(() => {
        console.log("Task State has been modified"); // muestra este mensaje cuando el estado del componente cambia
        return () => {
            // limpiar el estado del componente
            console.log("TaskList component is goin to unmount"); // muestra este mensaje cuando el componente se va a desmontar
        }
    }, []);


    const changCompleted = (Id) => {
        console.log('Todo : Cambiar estado de una tarea');
    }

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


