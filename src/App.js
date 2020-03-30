import React, {useState} from 'react';
import './App.css';
import Addgift from './pages/AddGift/Addgift'
import Giftslist from './pages/Giftslist/Giftslist'
import Charts from './pages/Charts/Charts'
import Favorites from './pages/Favorites/Favorites'
import Home from './pages/Home/Home'
import Menu from './components/Menu/Menu_Material'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Modal from './components/Modal/Modal'

function App() {
  const [gifts, setGift] = useState ([{name:'bb', category:'cc', photo:'dd', price:'ee', description:'ff'}]);
   const [showModal,setModal] = useState(false) 
   const onCloseModalHandle = () => {
    setModal(false)
  } 
  const addGift = (gift) => {
    setGift([...gifts, gift])
    
  }
  const modalHandle = () => {
    setModal(true)
  }
  return (
      
      <BrowserRouter>
        <Menu>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/addgift'><Addgift addGift={addGift} modalHandle={modalHandle}/></Route> 
          <Route path='/gifts'><Giftslist gifts={gifts}/></Route>
          <Route path='/charts' component={Charts} />
          <Route path='/favorites' component={Favorites} />
        </Switch>
        
        </Menu>
        { showModal &&
            <Modal title='contacts' onClose={onCloseModalHandle}>
              <div>bla bla bla</div>
            </Modal>
          }
      </BrowserRouter>

  );
}

export default App;
