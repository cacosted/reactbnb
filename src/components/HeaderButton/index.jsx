import React from 'react'
import { StyledHeaderButton } from './styles'
export const HeaderButton = ({ children, filter }) => {
  return (
    <StyledHeaderButton>
      {children}
    </StyledHeaderButton>
  )
}
