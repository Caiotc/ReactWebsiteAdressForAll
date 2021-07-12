import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import QuemSomos from '../pages/QuemSomos';
import Dados from '../pages/Dados'
import Contato from '../pages/Contato'
import CRP from '../pages/CRP';
import Preservacao from '../pages/Preservacao';
import OSM from '../pages/OSM';
import GovernoGeoDigital from '../pages/GovernoGeoDigital';
import Estatuto from '../pages/Estatuto';
import TipoDeDados from '../pages/TiposDeDados';
import Contribute from '../pages/Contribute';
import PerguntasFrequentes from '../pages/PerguntasFrequentes';
import APIHub from '../pages/APIHub';
import APIPage from '../pages/APIPage';


const Routes = () =>(
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/quem-somos" exact component={QuemSomos}/> 
        <Route path='/dados' exact component={Dados}/>  
        <Route path='/contato' exact component={Contato}/>
        <Route path='/crp' exact component = {CRP}/>
        <Route path='/preservacao'exact component ={Preservacao}/>
        <Route path='/osm' exact component ={OSM}/>   
        <Route path='/geodigital' exact component ={GovernoGeoDigital}/>
        <Route path='/estatuto' exact component ={Estatuto}/>
        <Route path='/tipos-de-dados' exact component ={TipoDeDados}/>
        <Route path='/perguntas-frequentes' exact component ={PerguntasFrequentes}/>
        <Route path='/contribua' exact component ={Contribute}/>
        <Route path='/api-hub' exact component ={APIHub}/>
        <Route path='/api-page' exact component ={APIPage}/>
    </Switch>
)

export default Routes;
