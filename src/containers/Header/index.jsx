import React from 'react'
import logo from '../../assets/logo.svg'
import { FaSearch } from 'react-icons/fa'

const NavBar = ({ children }) => {
  return (
    <nav className='Header-navbar'>
      {children}
    </nav>
  )
}

const Logo = () => <img className='Header-img' src={logo} alt='reactbnb' />

const Button = ({ children, filter, bordered }) => {
  const isBordered = bordered ? 'Header-btn--bordered' : ''
  return (
    <button
      onClick={() => console.log(filter)}
      className={`Header-btn ${isBordered}`}
    >
      {children}
    </button>
  )
}

export const Header = () => {
  return (
    <NavBar>
      <Logo />
      <div className='Header-search'>
        <Button filter='location'>
          Helsinki, Finland
        </Button>
        <Button filter='guest' bordered>
          <span>Add Guest</span>
        </Button>
        <Button filter='guest'>
          <FaSearch color='#eb5757' />
        </Button>
      </div>

    </NavBar>
  )
}
