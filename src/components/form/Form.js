/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useAppContext, todoLimit } from '../app/App';
import FormRender from './FormRender';
import formValidate from '../utilities/formValidate';

function Form() {
    const { setTasks, tasks } = useAppContext();
    const [taskName, setTaskName] = useState('');
    const [user, setUser] = useState('');
    const [taskNameError, setTaskNameError] = useState('');
    const [userError, setUserError] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleAddTask = () => {
        const isValid = formValidate(
            taskName,
            user,
            setTaskNameError,
            setUserError,
            tasks,
            setTasks,
            todoLimit,
            setShowAlert,
        );

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

    const handleAlertClick = () => {
        setShowAlert(false);
    };

    const handleAlertKeyDown = (e) => {
        if (e.key === 'Enter') {
            setShowAlert(false);
        }
    };

    return (
        <>
            {showAlert && (
                <div
                    className="form--alert"
                    onClick={handleAlertClick}
                    onKeyDown={handleAlertKeyDown}
                    tabIndex={0}
                    role="button"
                >
                    To do column limit reached. Cannot add more tasks. Click to close.
                </div>
            )}
            <FormRender
                taskName={taskName}
                user={user}
                taskNameError={taskNameError}
                userError={userError}
                handleSubmit={handleSubmit}
                handleTaskNameChange={handleTaskNameChange}
                handleUserChange={handleUserChange}
            />
        </>
    );
}

export default Form;
