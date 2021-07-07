import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import QuemSomos from '../pages/QuemSomos';
import Dados from '../pages/Dados'
import Contato from '../pages/Contato'


const Routes = () =>(
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/quemsomos" exact component={QuemSomos}/> 
        <Route path='/dados' exact component={Dados}/>  
        <Route path='/contato' exact component={Contato}/>  
    </Switch>
)

export default Routes;
