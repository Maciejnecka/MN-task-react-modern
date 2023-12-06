import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.css';
import App from './styles/App';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
