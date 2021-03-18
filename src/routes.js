import React from 'react';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';

import Login from './pages/Login';
import List from './pages/List';
import Collaborator from './pages/Collaborator';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/list" component={List} />
                <Route path="/collaborator" component={Collaborator} />
            </Switch>
        </BrowserRouter>
    );
}