import React from 'react'

export const FilterList = ({ children, filter, activeTab }) => {
  const isActive = filter === activeTab ? '' : 'FilterList--hidden'
  return (
    <ul className={`FilterList ${isActive}`}>
      {children}
    </ul>
  )
}
