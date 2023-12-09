/* eslint-disable react/prop-types */
import React from 'react';
import Task from '../task/Task';

function ColumnRender({ column, tasksCount, maxLimit, tasksInColumn }) {
    return (
        <div className="column">
            <h2 className="column__title">{column.name}</h2>
            <div className="column__info">
                <span className="column__count">
                    {tasksCount}/{maxLimit} slots taken
                </span>
            </div>
            {tasksInColumn.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
}

export default ColumnRender;
