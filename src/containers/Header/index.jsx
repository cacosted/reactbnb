import React from 'react'
import logo from '../../assets/logo.svg'
import { SearchBar } from '../../components/SearchBar'
const NavBar = ({ children }) => {
  return (
    <nav className='Header-navbar'>
      {children}
    </nav>
  )
}

const Logo = () => <img className='Header-img' src={logo} alt='reactbnb' />

export const Header = () => {
  return (
    <NavBar>
      <Logo />
      <SearchBar type='header' />
    </NavBar>
  )
}
