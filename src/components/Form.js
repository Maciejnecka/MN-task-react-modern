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
        const newTaskId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;

        const newTask = {
            id: newTaskId,
            name: taskName,
            idColumn: 1,
            user,
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);

        setTaskName('');
        setUser('');
    };
    return (
        <div className="form">
            <input
                type="text"
                placeholder="Enter task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <input type="text" placeholder="Enter user" value={user} onChange={(e) => setUser(e.target.value)} />
            <button type="button" onClick={handleAddTask}>
                Add Task
            </button>
        </div>
    );
}

export default Form;
