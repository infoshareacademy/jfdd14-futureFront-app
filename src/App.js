import React from 'react';
import './App.css';
import Addgift from './pages/AddGift/Addgift'
import Gifts from './pages/Gifts/Gifts'
import Charts from './pages/Charts/Charts'
import Favorites from './pages/Favorites/Favorites'
import Home from './pages/Home/Home'
import Menu from './components/Menu/Menu_Material'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  const addItem = (b) => {
    console.log(b)
  }
  return (
      
      <BrowserRouter>
        <Menu>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/addgift' 
          render={(props) => <Addgift {...props} addItem={addItem}/>}/>
          <Route path='/gifts' component={Gifts} />
          <Route path='/charts' component={Charts} />
          <Route path='/favorites' component={Favorites} />
        </Switch>
        </Menu>
      </BrowserRouter>

  );
}

export default App;
