import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Addgift from './pages/AddGift/Addgift'
import Gifts from './pages/Gifts/Gifts'
import Charts from  './pages/Charts/Charts'
import Favorites from './pages/Favorites/Favorites'
// import Menu from './components/Menu/Menu'
import Menu from './components/Menu/Menu_Material'

render(<App />, document.getElementById('root'));

// <BrowserRouter>

// <Switch>
// <Menu/>
//     <Route exact path='/' component={App}/>
//     <Route path='/addgift' component = {Addgift}/>
//     <Route path='/gifts' component ={Gifts}/>
//     <Route path='/charts' component ={Charts}/>
//     <Route path='/favorites' component ={Favorites}/>
// </Switch>
// </BrowserRouter>