/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useAppContext } from './App';

function Form() {
    const { setTasks, tasks } = useAppContext();
    const [taskName, setTaskName] = useState('');
    const [user, setUser] = useState('');

    const handleAddTask = () => {
        if (taskName.trim() === '' || user.trim() === '') {
            // eslint-disable-next-line
            alert('Task name and user are required.');
            return;
        }
        const todoLimit = 5;
        const todoTasks = tasks.filter((task) => task.idColumn === 1);

        if (todoTasks.length >= todoLimit) {
            // eslint-disable-next-line
            alert('To do column limit reached. Cannot add more tasks.');
            setTaskName('');
            setUser('');
            return;
        }
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
                onChange={(e) => setTaskName(e.target.value)}
                className="form__input form__input--task"
            />
            <input
                type="text"
                placeholder="Enter user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="form__input form__input--user"
            />
            <button type="submit" className="form__button">
                Add Task
            </button>
        </form>
    );
}

export default Form;
