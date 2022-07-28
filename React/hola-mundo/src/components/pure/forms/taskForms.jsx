import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Models
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const Taskform = ({ add, length }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold',

    }


    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold',

    }

    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold',

    }



    return (
        <form onSubmit={addTask} className='d-flex justify-content-center aling-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputname' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name'></input>
                <input ref={descriptionRef} type='text' className='form-control fprm-form-control-lg' id='inpuDescription' required placeholder='Description'></input>
                <select style={normalStyle} className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL}></select>
                <option value={LEVELS.NORMAL}>
                    Normal
                </option>
                <option value={LEVELS.URGENT}>
                    Urgent
                </option>
                <option value={LEVELS.BLOCKING}>
                    Blocking
                </option>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>
                {length ? 'Add New Task' : 'Create your first task'}
            </button>
        </form>
    )
}


Taskform.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,

}

export default Taskform;
