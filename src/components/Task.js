/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useAppContext } from './App';

function Task({ task }) {
    const { setTasks, tasks, columns, setColumns } = useAppContext();

    const handleMoveTask = (direction) => {
        const columnIndex = columns.findIndex((col) => col.id === task.idColumn);
        const newColumnIndex = columnIndex + direction;

        if (
            columns[newColumnIndex] &&
            columns[newColumnIndex].limit > tasks.filter((t) => t.idColumn === columns[newColumnIndex].id).length
        ) {
            const updatedTasks = tasks.map((t) =>
                t.id === task.id ? { ...t, idColumn: columns[newColumnIndex].id } : t,
            );

            setTasks(updatedTasks);
        }
    };

    return (
        <div className="task">
            <p>{task.name}</p>
            <button type="button" onClick={() => handleMoveTask(-1)}>
                Move Left
            </button>
            <button type="button" onClick={() => handleMoveTask(1)}>
                Move Right
            </button>
        </div>
    );
}

export default Task;
