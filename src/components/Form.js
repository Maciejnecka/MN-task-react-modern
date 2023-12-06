/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useAppContext } from './App';

function Form() {
    const { setTasks, tasks, columns, setColumns } = useAppContext();
    const [taskName, setTaskName] = useState('');

    //   const handleAddTask = () => {
    //       // Implement logic to add a new task
    //   };

    return (
        <div className="form">
            <input
                type="text"
                placeholder="Enter task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            {/* <button onClick={handleAddTask}>Add Task</button> */}
        </div>
    );
}

export default Form;
