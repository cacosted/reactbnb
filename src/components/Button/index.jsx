import React from 'react'

export const Button = ({ children, filter, bordered }) => {
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
