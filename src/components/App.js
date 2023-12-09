/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import useStorage from './useStorage';

const initialColumns = [
    { id: 1, name: 'To do', limit: 5 },
    { id: 2, name: 'Doing', limit: 2 },
    { id: 3, name: 'Done', limit: 10 },
];

const initialTasks = [
    { id: 1, name: 'Task1', idColumn: 1, user: 'Anna' },
    { id: 2, name: 'Task2', idColumn: 1, user: 'Basia' },
    { id: 3, name: 'Task3', idColumn: 1, user: 'Tomek' },
    { id: 4, name: 'Task4', idColumn: 1, user: 'Bartek' },
    { id: 5, name: 'Task5', idColumn: 1, user: 'Alicja' },
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
