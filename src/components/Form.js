/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useAppContext, todoLimit } from './App';

function Form() {
    const { setTasks, tasks } = useAppContext();
    const [taskName, setTaskName] = useState('');
    const [user, setUser] = useState('');
    const [taskNameError, setTaskNameError] = useState('');
    const [userError, setUserError] = useState('');

    const handleAddTask = () => {
        if (taskName.trim() === '' || user.trim() === '') {
            setTaskNameError('Field is required!');
            setUserError('Field is required!');
            return;
        }
        const todoTasks = tasks.filter((task) => task.idColumn === 1);
        if (todoTasks.length >= todoLimit) {
            // eslint-disable-next-line
            alert('To do column limit reached. Cannot add more tasks.');
            setTaskName('');
            setUser('');
            return;
        }
        setTaskNameError('');
        setUserError('');

        const newTaskId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;

        const newTask = {
            id: newTaskId,
            name: taskName,
            idColumn: 1,
            user,
            createdAt: new Date(),
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
        setTaskName('');
        setUser('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTask();
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter task name"
                value={taskName}
                onChange={(e) => {
                    setTaskName(e.target.value);
                    setTaskNameError('');
                }}
                className="form__input form__input--task"
            />
            {taskNameError && <div className="form__input--error">{taskNameError}</div>}

            <input
                type="text"
                placeholder="Enter user"
                value={user}
                onChange={(e) => {
                    setUser(e.target.value);
                    setUserError('');
                }}
                className="form__input form__input--user"
            />
            {userError && <div className="form__input--error">{userError}</div>}

            <button type="submit" className="form__button">
                Add Task
            </button>
        </form>
    );
}

export default Form;
