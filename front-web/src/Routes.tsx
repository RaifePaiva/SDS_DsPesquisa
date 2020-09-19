import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Records from './components/Records';
import Charts from './components/Charts';

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
            <Route path="/charts" >
                <Charts/>
            </Route>
        </Switch>
    </BrowserRouter>

);

export default Routes;