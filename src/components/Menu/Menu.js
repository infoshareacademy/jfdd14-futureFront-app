import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Menu extends Component {
  
  render() {
    return (
      <div>
        <Link to='/gifts'>Wyszukaj prezent</Link>
        <Link to='/addgift'>Dodaj prezent</Link>
        <Link to='/charts'>Dashboard</Link>
        <Link to='/favorites'>Ulubione</Link>
        
      </div>
    )
  }
}


export default Menu;
