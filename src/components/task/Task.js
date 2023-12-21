/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useAppContext } from '../app/App';
import TaskRender from './TaskRender';

function Task({ task }) {
    const { setTasks, tasks, columns } = useAppContext();
    const [infoMessage, setInfoMessage] = useState(null);
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

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
            setInfoMessage(`${targetColumn.name} column is full. Cannot move the task.`);

            setTimeout(() => {
                setInfoMessage(null);
            }, 3000);
        }
    };

    const handleConfirmRemove = () => {
        const updatedTasks = tasks.filter((t) => t.id !== task.id);
        setTasks(updatedTasks);
        setIsConfirmationVisible(false);
    };

    const handleRemoveTask = () => {
        setIsConfirmationVisible(true);
    };

    const handleCancelRemove = () => {
        setIsConfirmationVisible(false);
    };

    return (
        <>
            {infoMessage && <div className="info-message">{infoMessage}</div>}
            <TaskRender
                task={task}
                handleMoveTask={handleMoveTask}
                handleRemoveTask={handleRemoveTask}
                currentColumn={currentColumn}
            />
            {isConfirmationVisible && (
                <div className="confirmation-modal">
                    <p className="confirmation-modal__message">Are you sure you want to remove the task?</p>
                    <button
                        className="confirmation-modal__button confirmation-modal__button--confirm"
                        type="button"
                        onClick={handleConfirmRemove}
                    >
                        Yes
                    </button>
                    <button
                        className="confirmation-modal__button confirmation-modal__button--cancel"
                        type="button"
                        onClick={handleCancelRemove}
                    >
                        No
                    </button>
                </div>
            )}
        </>
    );
}

export default Task;
