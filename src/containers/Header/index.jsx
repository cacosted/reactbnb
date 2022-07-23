import React from 'react'
import logo from '../../assets/logo.svg'
const NavBar = ({ children }) => {
  return (
    <nav>
      {children}
    </nav>
  )
}

const Logo = () => <img src={logo} alt='reactbnb' />

const Button = ({ children }) => <button>{children}</button>

export const Header = () => {
  return (
    <NavBar>
      <Logo />

      <Button>
        Helsinki, Finland
      </Button>

      <Button>
        <span>Add Guest</span>
        <span>Search</span>
      </Button>

    </NavBar>
  )
}
