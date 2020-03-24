import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Menu extends Component {
  
  render() {
    return (
      <div>
        <Link to='/'>Wyszukaj prezent</Link>
        <Link to='/about'>Dodaj prezent</Link>
        <Link to='/contact'>Dashboard</Link>
        <Link to='/post'>Ulubione</Link>   
      </div>
    )
  }
}


export default Menu;
