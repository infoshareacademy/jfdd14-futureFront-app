import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Addgift from './pages/AddGift/Addgift'
import Gifts from './pages/Gifts/Gifts'
import Charts from  './pages/Charts/Charts'
import Favorities from './pages/Favorites/Favorities'
import Menu from './components/Menu/Menu'
ReactDOM.render(
    
    <BrowserRouter>
    <Menu/>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/addgift' component = {Addgift}/>
        <Route path='/gifts' component ={Gifts}/>
        <Route path='/charts' component ={Charts}/>
        <Route path='/favorites' component={Favorities}/>

    </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)
