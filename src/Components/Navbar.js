import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiEyeTarget } from "react-icons/gi";
import { FaHeart} from "react-icons/fa";
import '../Styles/Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/' className='home-link'>
        <button className='title'>GameSeek<GiEyeTarget /></button>
      </NavLink>
      <NavLink to='/favorites' className='favorites-link'>
        <button className='favorites-view-btn'>Favorites <FaHeart style={{'color': 'red'}}/></button>
      </NavLink>
    </nav>
  )
}

export default Navbar