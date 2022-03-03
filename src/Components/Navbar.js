import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <h1>GameSeek</h1>
      <Link to='/'>
        <button>Go home!</button>
      </Link>
      <Link to='/favorites'>
        <button>favorites</button>
      </Link>
    </nav>
  )
}

export default Navbar
