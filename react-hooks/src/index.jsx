import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppContext } from './contexts/AppContext';
import App from './templates/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContext>
        <App />
    </AppContext>,
);
