import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import QuemSomos from '../pages/QuemSomos';


const Routes = () =>(
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/quemsomos" exact component={QuemSomos}/>     
    </Switch>
)

export default Routes;
