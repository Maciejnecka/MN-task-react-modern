/* eslint-disable react/prop-types */
import React from 'react';

function TaskRender({ task, handleMoveTask, handleRemoveTask, currentColumn }) {
    return (
        <div className="task">
            <div className="task__date-container">
                <p className="task__date">
                    {new Date(task.createdAt).toLocaleDateString([], {
                        day: '2-digit',
                        month: '2-digit',
                        year: '2-digit',
                    })}
                </p>
                <p className="task__time">
                    {new Date(task.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
            </div>
            <p className="task__name">Task: {task.name}</p>
            <p className="task__author">User: {task.user}</p>
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
export default TaskRender;
