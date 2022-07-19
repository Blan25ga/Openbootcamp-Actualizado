import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const Taskform = ({ add }) => {

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



    return (
        <form onSubmit={addTask} className='d-flex justify-content-center aling-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} type='text' className='form-control fprm-form-control-lg' id='inputName' required autoFocus placeholder='Task Name' />
                <input ref={descriptionRef} type='text' className='form-control fprm-form-control-lg' id='inpuDescription' required placeholder='Description' />
                <label htmlFor='selectLevel' className='sr-only'>Priority</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'></select>
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
            <button type='submit' className='btn btn-primary btn-lg ms-2'>Add</button>
        </form>
    )
}
Taskform.propTypes = {
    add: PropTypes.func.isRequired

}

export default Taskform;
