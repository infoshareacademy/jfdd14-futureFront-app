import React, { useState } from 'react';
import './App.css';
import Addgift from './pages/AddGift/Addgift'
import Giftslist from './pages/Giftslist/Giftslist'
import Charts from './pages/Charts/Charts'
import Favorites from './pages/Favorites/Favorites'
import Home from './pages/Home/Home'
import Menu from './components/Menu/Menu_Material'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  const [gifts, setGift] = useState([{ name: 'bb', category: 'cc', photo: 'dd', price: 'ee', description: 'ff', isFavorite: false, id: '666' }])
  const [favorites, setFavorites] = useState([])


  const addGift = (gift) => {
    setGift([...gifts, gift])
    console.log(gifts, gift, 'GIIFTS AfTER ADD')
  }

  // const updateIsFavorite = (idCheck, favoriteCheck) => {
  //   let arr = gifts.map(el => el.id === idCheck ? el.isFavorite = favoriteCheck : el.isFavorite = el.isFavorite);
  //   console.log(arr, gifts,  "ARR");
  // }

  const toggleFavorite = (giftId) => {
    setFavorites(favorites => favorites.includes(giftId) ? favorites.filter(id => id !== giftId) : [...favorites, giftId])
  }

    const giftsWithFavs = gifts.map(gift => ({ ...gift, isFavorite: favorites.includes(gift.id)}))

  // const addFavorite = (idCheck) => {
  //   let favoritesArr = gifts.filter(el => el.id === idCheck)
  //   setFavorites(favoritesArr);
  //   console.log(favorites, "FAVORITES IN APP")
  // }


  return (

    <BrowserRouter>
      <Menu>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/addgift'><Addgift addGift={addGift} /></Route>
          <Route path='/gifts'><Giftslist gifts={giftsWithFavs} toggleFavorite={toggleFavorite} /></Route>
          <Route path='/charts' component={Charts} />
          <Route path='/favorites'><Favorites gifts={giftsWithFavs} toggleFavorite={toggleFavorite}/></Route>
        </Switch>
      </Menu>
    </BrowserRouter>

  );
}

export default App;
