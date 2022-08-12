import React from 'react'
import { StyledCounter } from './style'

export const Counter = ({ children }) => {
  return (
    <StyledCounter>
      {children}
    </StyledCounter>
  )
}
