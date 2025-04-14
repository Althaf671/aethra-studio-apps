import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavbar } from '../context/useNavbarContext'
import getImage from '../assets/misc/assetsLoader'

const NavbarLayout = () => {

    // To control nav
    const { isNavbarVisible } = useNavbar();
    if (!isNavbarVisible) return null;

  return (
    <div className='nav-bg sticky top-0 z-50 flex justify-between items-center py-2 px-2 w-screen text-white text-lg'>

        <img src={getImage('misc/whiteMenu.png')} />

        <ul className='flex gap-5'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/service'>Service</NavLink>
            <NavLink to='/about'>About</NavLink>
        </ul>

        <Link to="/cart">
            <img src={getImage('misc/whiteCart.png')} />
        </Link>
    </div>
  )
}

export default NavbarLayout