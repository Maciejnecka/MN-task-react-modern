/* eslint-disable react/prop-types */
import React from 'react';

function FormRender({
    taskName,
    user,
    taskNameError,
    userError,
    handleSubmit,
    handleTaskNameChange,
    handleUserChange,
}) {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter task name"
                value={taskName}
                onChange={(e) => handleTaskNameChange(e.target.value)}
                className="form__input form__input--task"
            />
            {taskNameError && <div className="form__input--error">{taskNameError}</div>}

            <input
                type="text"
                placeholder="Enter user"
                value={user}
                onChange={(e) => handleUserChange(e.target.value)}
                className="form__input form__input--user"
            />
            {userError && <div className="form__input--error">{userError}</div>}

            <button type="submit" className="form__button">
                Add Task
            </button>
        </form>
    );
}

export default FormRender;
