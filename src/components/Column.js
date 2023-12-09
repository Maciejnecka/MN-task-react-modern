/* eslint-disable react/prop-types */
import React from 'react';
import { useAppContext } from './App';
import ColumnRender from './ColumnRender';

function Column({ column }) {
    const { tasks } = useAppContext();
    const tasksInColumn = tasks.filter((task) => task.idColumn === column.id);

    const tasksCount = tasksInColumn.length;
    const maxLimit = column.limit;

    return <ColumnRender column={column} tasksCount={tasksCount} maxLimit={maxLimit} tasksInColumn={tasksInColumn} />;
}

export default Column;
