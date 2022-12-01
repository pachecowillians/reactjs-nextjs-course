import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './Templates/Home/Home';
import Users from './Templates/Users/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/users" component={Users} exact />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
);
