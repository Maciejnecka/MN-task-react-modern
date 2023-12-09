/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useAppContext, todoLimit } from '../app/App';
import FormRender from './FormRender';
import FormValidate from '../column/FormValidate';

function Form() {
    const { setTasks, tasks } = useAppContext();
    const [taskName, setTaskName] = useState('');
    const [user, setUser] = useState('');
    const [taskNameError, setTaskNameError] = useState('');
    const [userError, setUserError] = useState('');

    const handleAddTask = () => {
        const isValid = FormValidate(taskName, user, setTaskNameError, setUserError, tasks, setTasks, todoLimit);

        if (!isValid) {
            return;
        }

        setTaskName('');
        setUser('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTask();
    };

    const handleTaskNameChange = (value) => {
        setTaskName(value);
        setTaskNameError('');
    };

    const handleUserChange = (value) => {
        setUser(value);
        setUserError('');
    };

    return (
        <FormRender
            taskName={taskName}
            user={user}
            taskNameError={taskNameError}
            userError={userError}
            handleSubmit={handleSubmit}
            handleTaskNameChange={handleTaskNameChange}
            handleUserChange={handleUserChange}
        />
    );
}

export default Form;
