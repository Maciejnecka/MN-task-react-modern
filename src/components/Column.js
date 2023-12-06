/* eslint-disable react/prop-types */
import React from 'react';
import Task from './Task';
import { useAppContext } from './App';

function Column({ column }) {
    const { tasks } = useAppContext();
    const tasksInColumn = tasks.filter((task) => task.idColumn === column.id);

    return (
        <div className="column">
            <h2>{column.name}</h2>
            {tasksInColumn.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
}

export default Column;
