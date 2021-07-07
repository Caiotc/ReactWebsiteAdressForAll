import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import QuemSomos from '../pages/QuemSomos';
import Dados from '../pages/Dados'
import Contato from '../pages/Contato'
import CRP from '../pages/CRP';
import Preservacao from '../pages/Preservacao';
import OSM from '../pages/OSM';


const Routes = () =>(
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/quemsomos" exact component={QuemSomos}/> 
        <Route path='/dados' exact component={Dados}/>  
        <Route path='/contato' exact component={Contato}/>
        <Route path='/crp' exact component = {CRP}/>
        <Route path='/preservacao'exact component ={Preservacao}/>
        <Route path='/osm' exact component ={OSM}/>   
    </Switch>
)

export default Routes;
