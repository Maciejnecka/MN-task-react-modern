/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import useStorage from '../providers/useStorage';

const AppContext = createContext();

const initialColumns = [
    { id: 1, name: 'To do', limit: 10 },
    { id: 2, name: 'Doing', limit: 2 },
    { id: 3, name: 'Done', limit: 10 },
];

export const todoLimit = initialColumns[0].limit;

function AppProvider({ children }) {
    const initialTasks = [
        { id: 1, name: 'Task1', idColumn: 1, user: 'Anna', createdAt: new Date() },
        { id: 2, name: 'Task2', idColumn: 1, user: 'Basia', createdAt: new Date() },
        { id: 3, name: 'Task3', idColumn: 1, user: 'Tomek', createdAt: new Date() },
    ];

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
