import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'


const TaskComponent = ({ task, complete, remove }) => { //aca se pone el props que se le pasa al componente por el componente padre

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        }
    }, [task]);

    /**
     * Function that returns a Badge
     * depending on the level of the task
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>)
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>)
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>)
            default:
                break;
        }
    }

    /**
     * Function that returns icon depending on completion of the task
     */
    function taskCompletedIcon() {
        if (task.completed) {
            return (<i onClick={() => complete(task)} className='bi-toggle-on  task-action' style={{ color: 'green' }}></i>)
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off  task-action' style={{ color: 'grey' }}></i>)
        }
    }

    const taskCompleted = {
        color: 'grey',
        fontWeight: 'bold',
        textDecoration: 'line - through',
    }

    const taskPending = {
        color: 'tomato',
        fontWeight: 'bold',
    }


    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* TODO: Sustituir por un badge */}
                <span>{task.level}</span>
                {/* Execution of function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* TODO: SUSTITUIR por Iconos */}
                <span>{task.completed}</span>
                {/* Execution of function to return icon depending on completion */}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' style={{ color: 'tomato' }} onClick={() => remove(task)}></i>
            </td>
        </tr>

        // <div>
        //     <h2 className='task-name'>
        //         Nombre: { task.name }
        //     </h2>
        //     <h3>
        //         Descripción: { task.description }
        //     </h3>
        //     <h4>
        //         Level: { task.level }
        //     </h4>
        //     <h5>
        //         This task is: { task.completed ? 'COMPLETED':'PENDING' }
        //     </h5>

        // </div>
    );
};


TaskComponent.propTypes = { //aca se pone el props que se le pasa al componente por el componente padre
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,  // isRequired es una propiedad que indica que el componente es obligatorio
    remove: PropTypes.func.isRequired,
};


export default TaskComponent;
