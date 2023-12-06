import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.css';
import { AppProvider } from './components/App';
import Board from './components/Board';

const root = createRoot(document.querySelector('#root'));
root.render(
    <AppProvider>
        <Board />
    </AppProvider>,
);
