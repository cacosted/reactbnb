import React from 'react'
import { StyledHeader } from './styles'
export const Header = ({ children }) => {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  )
}
