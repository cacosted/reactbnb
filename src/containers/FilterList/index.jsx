import React from 'react'
import { StyledList } from './styles'

export const FilterList = ({ children, filter, activeTab }) => {
  const isActive = filter === activeTab
  return (
    <StyledList isActive={isActive}>
      {children}
    </StyledList>
  )
}
