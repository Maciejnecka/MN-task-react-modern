/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useAppContext } from '../app/App';
import TaskRender from './TaskRender';

function Task({ task }) {
    const { setTasks, tasks, columns } = useAppContext();

    const columnIndex = columns.findIndex((col) => col.id === task.idColumn);
    const currentColumn = columns[columnIndex];

    function updateTaskColumn(updatedTasks) {
        setTasks(updatedTasks);
    }

    function isColumnLimitNotExceeded(newColumnIndex) {
        const targetColumn = columns[newColumnIndex];
        return targetColumn.limit > tasks.filter((t) => t.idColumn === targetColumn.id).length;
    }

    const handleMoveTask = (direction) => {
        const newColumnIndex = columnIndex + direction;

        if (columns[newColumnIndex] && isColumnLimitNotExceeded(newColumnIndex)) {
            const updatedTasks = tasks.map((t) =>
                t.id === task.id ? { ...t, idColumn: columns[newColumnIndex].id } : t,
            );
            updateTaskColumn(updatedTasks);
        } else {
            const targetColumn = columns[newColumnIndex];
            // eslint-disable-next-line
            alert(`${targetColumn.name} column is full. Cannot move the task.`);
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
        <TaskRender
            task={task}
            handleMoveTask={handleMoveTask}
            handleRemoveTask={handleRemoveTask}
            currentColumn={currentColumn}
        />
    );
}

export default Task;
