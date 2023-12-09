/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useAppContext } from './App';

function Task({ task }) {
    const { setTasks, tasks, columns } = useAppContext();

    const columnIndex = columns.findIndex((col) => col.id === task.idColumn);
    const currentColumn = columns[columnIndex];

    const handleMoveTask = (direction) => {
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

    const handleRemoveTask = () => {
        // eslint-disable-next-line
        const isConfirmed = window.confirm('Are you sure you want to remove task?');
        if (isConfirmed) {
            const updatedTasks = tasks.filter((t) => t.id !== task.id);
            setTasks(updatedTasks);
        }
    };

    return (
        <div className="task">
            <p className="task__name">{task.name}</p>
            {currentColumn.name === 'To do' && (
                <button className="task__move-btn" type="button" onClick={() => handleMoveTask(1)}>
                    Begin task
                </button>
            )}
            {currentColumn.id === 2 && (
                <>
                    <button className="task__move-btn btn--abandon" type="button" onClick={() => handleMoveTask(-1)}>
                        Abandon the task
                    </button>
                    <button className="task__move-btn btn--finish" type="button" onClick={() => handleMoveTask(1)}>
                        Finish task
                    </button>
                </>
            )}
            {currentColumn.name === 'Done' && (
                <button className="task__move-btn btn--remove" type="button" onClick={handleRemoveTask}>
                    Remove task
                </button>
            )}
        </div>
    );
}

export default Task;
