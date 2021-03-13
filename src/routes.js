import React from 'react';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';

import Login from './pages/Login';
import List from './pages/List';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/list" exact component={List} />
            </Switch>
        </BrowserRouter>
    );
}