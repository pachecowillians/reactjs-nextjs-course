import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from './Components/Menu';
import './index.css';
import { Home } from './Templates/Home';
import { NotFound } from './Templates/NotFound';
import { Users } from './Templates/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Menu />
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/users/:id?" component={Users} exact />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>,
);
