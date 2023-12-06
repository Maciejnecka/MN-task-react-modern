/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import useStorage from './useStorage';

const initialColumns = [
    { id: 1, name: 'Pending', limit: 4 },
    { id: 2, name: 'Analysis - Doing', limit: 3 },
    { id: 3, name: 'Analysis - Done', limit: 2 },
];

const initialTasks = [
    { id: 1, name: 'Task1', idColumn: 1, user: 'Anna' },
    { id: 2, name: 'Task2', idColumn: 1, user: 'Bartek' },
    { id: 3, name: 'Task3', idColumn: 1, user: 'Grzesiek' },
];

const AppContext = createContext();

function AppProvider({ children }) {
    const [columns, setColumns] = useStorage('kanban-columns', initialColumns);
    const [tasks, setTasks] = useStorage('kanban-tasks', initialTasks);

    return <AppContext.Provider value={{ columns, setColumns, tasks, setTasks }}>{children}</AppContext.Provider>;
}

const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export { AppProvider, useAppContext };
