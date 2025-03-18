import React from 'react'
import './styles/style.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-container'>
      <h1>Book Management System</h1>
      <ul className='header-list'>
        <Link className='header-link' to={'/'}><li>Home</li></Link>
        <Link className='header-link' to={'/about'}><li>About</li></Link>
        <Link className='header-link' to={'/contact'}><li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Header