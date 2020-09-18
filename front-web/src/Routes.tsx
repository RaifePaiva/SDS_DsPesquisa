import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Records from './components/Records';

const Routes = () =>(

    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/records" >
                <Records/>
            </Route>
        </Switch>
    </BrowserRouter>

);

export default Routes;