import React from 'react'
import logo from '../../assets/logo.svg'
import { HeaderBar } from '../../components/HeaderBar'
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
      <HeaderBar />
    </NavBar>
  )
}
